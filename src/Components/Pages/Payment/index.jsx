/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';

import styled from 'styled-components';

import { Form, Select, Icon, Input, Switch, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { withUserAgent } from 'react-useragent';
import queryString from 'query-string';

import { PGS, METHODS_FOR_INICIS, QUOTAS_FOR_INICIS_AND_KCP } from './constants';
import { getMethods, getQuotas } from './utils';

import btnPayment from './Images/BtnPayment.png';
import 'antd/dist/antd.css';

function PGPayment({ history, form }) {
  const [methods, setMethods] = useState(METHODS_FOR_INICIS);
  const [quotas, setQuotas] = useState(QUOTAS_FOR_INICIS_AND_KCP);
  const [isQuotaRequired, setIsQuotaRequired] = useState(true);
  const [isGetParamURL, setIsGetParamURL] = useState(true);
  const [isDigitalRequired, setIsDigitalRequired] = useState(false);
  const [isVbankDueRequired, setIsVbankDueRequired] = useState(false);
  const [isBizNumRequired, setisBizNumRequired] = useState(false);
  const { getFieldDecorator, validateFieldsAndScroll, setFieldsValue, getFieldsValue } = form;

  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);
  const { storeName, menuName, menuPrice } = query;

  if (storeName === undefined || menuName === undefined || menuPrice === undefined) {
    history.push(`/payment/result`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validateFieldsAndScroll((error, values) => {
      if (!error) {
        /* 가맹점 식별코드 */
        const userCode = 'imp49220546';
        /* 결제 데이터 */
        const {
          pg,
          pay_method,
          merchant_uid,
          name,
          amount,
          buyer_name,
          buyer_tel,
          buyer_email,
          escrow,
          card_quota,
          biz_num,
          vbank_due,
          digital,
        } = values;

        const data = {
          pg,
          pay_method,
          merchant_uid,
          name,
          amount,
          buyer_name,
          buyer_tel,
          buyer_email,
          escrow,
        };

        if (pay_method === 'vbank') {
          data.vbank_due = vbank_due;
          if (pg === 'danal_tpay') {
            data.biz_num = biz_num;
          }
        }
        if (pay_method === 'card') {
          if (card_quota !== 0) {
            data.digital = { card_quota: card_quota === 1 ? [] : card_quota };
          }
        }
        if (pay_method === 'phone') {
          data.digital = digital;
        }

        /* 웹 환경일때 */
        const { IMP } = window;

        IMP.init(userCode);
        IMP.request_pay(data, callback);
      }
    });
  }

  function callback(response) {
    const query = queryString.stringify(response);

    history.push(`/payment/result?${query}`);
  }

  function onChangePg(value) {
    /* 결제수단 */
    const methods = getMethods(value);
    setMethods(methods);
    setFieldsValue({ pay_method: methods[0].value });

    /* 할부개월수 설정 */
    const { pay_method } = getFieldsValue();
    handleQuotas(value, pay_method);

    /* 사업자번호/입금기한 설정 */
    let isBizNumRequired = false;
    let isVbankDueRequired = false;
    if (pay_method === 'vbank') {
      if (value === 'danal_tpay') {
        isBizNumRequired = true;
      }
      isVbankDueRequired = true;
    }
    setisBizNumRequired(isBizNumRequired);
    setIsVbankDueRequired(isVbankDueRequired);
  }

  function onChangePayMethod(value) {
    const { pg } = getFieldsValue();
    let isQuotaRequired = false;
    let isDigitalRequired = false;
    let isVbankDueRequired = false;
    let isBizNumRequired = false;
    switch (value) {
      case 'card': {
        isQuotaRequired = true;
        break;
      }
      case 'phone': {
        isDigitalRequired = true;
        break;
      }
      case 'vbank': {
        if (pg === 'danal_tpay') {
          isBizNumRequired = true;
        }
        isVbankDueRequired = true;
        break;
      }
      default:
        break;
    }

    setIsGetParamURL(isGetParamURL);
    setIsQuotaRequired(isQuotaRequired);
    setIsDigitalRequired(isDigitalRequired);
    setIsVbankDueRequired(isVbankDueRequired);
    setisBizNumRequired(isBizNumRequired);

    /* 할부개월수 설정 */
    handleQuotas(pg, value);
  }

  function handleQuotas(pg, pay_method) {
    const { isQuotaRequired, quotas } = getQuotas(pg, pay_method);
    setIsQuotaRequired(isQuotaRequired);
    setQuotas(quotas);
    setFieldsValue({ card_quota: quotas[0].value });
  }

  return (
    <Wrapper>
      <FormContainer onSubmit={handleSubmit}>
        <Item label="PG사">
          {getFieldDecorator('pg', {
            initialValue: 'html5_inicis',
          })(
            <Select size="large" onChange={onChangePg} suffixIcon={<Icon type="caret-down" />}>
              {PGS.map(pg => {
                const { value, label } = pg;
                return (
                  <Option value={value} key={value}>
                    {label}
                  </Option>
                );
              })}
            </Select>,
          )}
        </Item>
        <Item label="결제수단">
          {getFieldDecorator('pay_method', {
            initialValue: 'card',
          })(
            <Select
              size="large"
              onChange={onChangePayMethod}
              suffixIcon={<Icon type="caret-down" />}
            >
              {methods.map(method => {
                const { value, label } = method;
                return (
                  <Option value={value} key={value}>
                    {label}
                  </Option>
                );
              })}
            </Select>,
          )}
        </Item>
        {isQuotaRequired && (
          <Item label="할부개월수">
            {getFieldDecorator('card_quota', {
              initialValue: 0,
            })(
              <Select size="large" suffixIcon={<Icon type="caret-down" />}>
                {quotas.map(quota => {
                  const { value, label } = quota;
                  return (
                    <Option value={value} key={value}>
                      {label}
                    </Option>
                  );
                })}
              </Select>,
            )}
          </Item>
        )}
        {isVbankDueRequired && (
          <Item>
            {getFieldDecorator('vbank_due', {
              rules: [{ required: true, message: '입금기한은 필수입력입니다' }],
            })(
              <Input
                size="large"
                type="number"
                addonBefore="입금기한"
                placeholder="YYYYMMDDhhmm"
              />,
            )}
          </Item>
        )}
        {isBizNumRequired && (
          <Item>
            {getFieldDecorator('biz_num', {
              rules: [{ required: true, message: '사업자번호는 필수입력입니다' }],
            })(<Input size="large" type="number" addonBefore="사업자번호" />)}
          </Item>
        )}
        {isDigitalRequired && (
          <Item label="실물여부" className="toggle-container">
            {getFieldDecorator('digital', {
              valuePropName: 'checked',
            })(<Switch />)}
          </Item>
        )}
        <Item label="에스크로" className="toggle-container">
          {getFieldDecorator('escrow', {
            valuePropName: 'checked',
          })(<Switch />)}
        </Item>
        <Item>
          {getFieldDecorator('name', {
            initialValue: `${storeName} - ${menuName}`,
            rules: [{ required: true, message: '주문명은 필수입력입니다' }],
          })(<Input disabled={isGetParamURL} size="large" addonBefore="주문명" />)}
        </Item>
        <Item>
          {getFieldDecorator('amount', {
            initialValue: menuPrice,
            rules: [{ required: true, message: '결제금액은 필수입력입니다' }],
          })(<Input disabled={isGetParamURL} size="large" type="number" addonBefore="결제금액" />)}
        </Item>
        <Item>
          {getFieldDecorator('merchant_uid', {
            initialValue: `eatplus_${new Date().getTime()}`,
            rules: [{ required: true, message: '주문번호는 필수입력입니다' }],
          })(<Input disabled={isGetParamURL} size="large" addonBefore="주문번호" />)}
        </Item>
        <Item>
          {getFieldDecorator('buyer_name', {
            initialValue: '장윤지',
            rules: [{ required: true, message: '구매자 이름은 필수입력입니다' }],
          })(<Input disabled={isGetParamURL} size="large" addonBefore="이름" />)}
        </Item>
        <Item>
          {getFieldDecorator('buyer_tel', {
            initialValue: '01025486135',
            rules: [{ required: true, message: '구매자 전화번호는 필수입력입니다' }],
          })(<Input disabled={isGetParamURL} size="large" type="number" addonBefore="전화번호" />)}
        </Item>
        <Item>
          {getFieldDecorator('buyer_email', {
            initialValue: 'eatplus@gmail.com',
            rules: [{ required: true, message: '구매자 이메일은 필수입력입니다' }],
          })(<Input disabled={isGetParamURL} size="large" addonBefore="이메일" />)}
        </Item>
        <PayButtonBox>
          <Button type="primary" htmlType="submit" size="large">
            <img src={btnPayment} alt="payment btn" draggable="false" />
            <span className="buttonText">결제하기</span>
          </Button>
        </PayButtonBox>
      </FormContainer>
    </Wrapper>
  );
}

const { Item } = styled(Form)``;

const { Option } = styled(Select)`
  font-size: 0em;
  font-weight: bold;
  font-family: 'S-CoreDream';
  color: #666666;
`;

const Wrapper = styled.div`
  padding: 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled(Form)`
  width: 90vw;
  padding: 15px;
  border-radius: 3px;

  .ant-row {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    display: flex;
    align-items: center;
  }

  .ant-switch-checked {
    background-color: #fca800;
  }

  .ant-select-lg .ant-select-selection--single {
    height: 30px;
  }

  .ant-select-lg .ant-select-selection__rendered {
    line-height: 28px;
  }

  .ant-select-selection-selected-value {
    font-size: 0.68em;
    font-weight: bold;
    font-family: 'SCoreDream';
    color: #666666;
  }

  .ant-col.ant-form-item-label {
    padding: 0 11px;
    text-align: left;
    label {
      color: #000000;
      font-size: 1em;
    }
    & + .ant-col.ant-form-item-control-wrapper {
      width: 26rem;
      .ant-form-item-control {
        line-height: inherit;
        height: 20px;
      }
    }
  }
  .ant-col.ant-form-item-label > label::after {
    display: none;
  }
  .ant-row.ant-form-item.toggle-container .ant-form-item-control {
    position: relative;
    padding: 0;
    height: 2.4rem;
    display: flex;
    align-items: center;

    .ant-switch {
      position: relative;
      margin: 0 0 0 9rem;
      right: 0;
    }
  }

  .ant-form-explain {
    margin-top: 0.5rem;
    margin-left: 9rem;
    color: #f5222d;
    font-size: 0.8em;
  }

  .ant-input-lg {
    font-size: 0.8em;
    font-weight: bold;
    font-family: 'S-CoreDream';
    color: #666666;

    height: 30px;
  }

  .ant-input-group-addon:first-child {
    width: 9rem;
    text-align: left;
    color: #000000;
    font-size: 1em;
    border: none;
    background-color: inherit;
  }
  .ant-input-group > .ant-input:last-child {
    border-radius: 4px;
  }

  .ant-col {
    width: 100%;
  }

  button[type='submit'] {
    position: relative;
    width: 180px;
    height: 54px;

    margin: 3em 0;
    padding: 0px;

    background: none;
    border: none;

    box-shadow: none;

    .buttonText {
      position: absolute;

      left: 0;
      width: 100%;
      height: 100%;

      font-size: 18px;
      color: black;
      line-height: 54px;
    }
  }
`;

const PayButtonBox = styled.div`
  text-align: center;
`;

const PaymentForm = Form.create({ name: 'payment' })(PGPayment);

export default withUserAgent(withRouter(PaymentForm));
