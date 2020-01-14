/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import RestAPI from 'server/RestAPI';
import { Icon, Button } from 'antd';
import queryString from 'query-string';

function PaymentResult({ history }) {
  const [loaded, setLoaded] = useState(false);
  const [response, setResponse] = useState(undefined);

  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);

  const { merchant_uid, buyer_name } = query;

  useEffect(() => {
    async function orderValidation() {
      await setLoaded(false);

      await RestAPI.get('order_validation', {
        params: {
          buyer_name,
          merchant_uid,
        },
      })
        .then(res => {
          setResponse(res);
        })
        .catch(res => {
          console.log(res);
        });

      await setLoaded(true);
    }

    orderValidation();
  }, [setLoaded, buyer_name, merchant_uid]);

  if (loaded) {
    let isSuccessed = false;

    const resOrder = response.data;

    console.log(resOrder);

    let iconType = isSuccessed ? 'check-circle' : 'exclamation-circle';
    let resultType = isSuccessed ? '결제에 성공하였습니다.' : '결제에 실패하였습니다';
    let resultMessage = isSuccessed
      ? '챗봇으로 돌아가 잇플패스를 확인해주세요.'
      : '다시 결제해 주세요.';
    let colorType = isSuccessed ? '#52c41a' : '#f5222d';

    if (parseInt(resOrder.error_code, 10) === 204) {
      iconType = 'check-circle';
      colorType = '#52c41a';
      resultType = '구매처리가 완료된 잇플패스 입니다.';
      resultMessage = '앱으로 돌아가 다시 확인해주세요.';
    } else if (parseInt(resOrder.error_code, 10) === 202) {
      iconType = 'exclamation-circle';
      colorType = '#f5222d';
      resultType = '이미 잇플패스를 발급하셨습니다.';
      resultMessage = '앱으로 돌아가 다시 확인해주세요.';
    } else if (parseInt(resOrder.error_code, 10) === 205) {
      iconType = 'exclamation-circle';
      colorType = '#f5222d';
      resultType = '이미 환불 처리된 주문번호입니다.';
      resultMessage = '앱으로 돌아가 다시 확인해주세요.';
    } else {
      isSuccessed = false;
    }

    return (
      <Wrapper>
        <Container colorType={colorType}>
          <Icon type={iconType} theme="filled" />
          <p>{`${resultType}`}</p>
          <p>{`${resultMessage}`}</p>
          <ul>
            <li />
            {merchant_uid !== undefined ? (
              <li>
                <span>주문번호</span>
                <span>{resOrder.order_id}</span>
              </li>
            ) : (
              <li />
            )}
            <li>
              <span>메시지</span>
              <span>{resOrder.error_msg}</span>
            </li>
          </ul>
          <a href="http://plus.kakao.com/talk/bot/@eatple/로딩중../">
            <Button size="large">
              <Icon type="arrow-left" />
              돌아가기
            </Button>
          </a>
        </Container>
      </Wrapper>
    );
  }

  return <Wrapper />;
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  padding: 2rem;

  > .anticon {
    font-size: 10rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${props => props.colorType};
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;

    li {
      display: flex;
      line-height: 2;
      span:first-child {
        width: 8rem;
        color: #888;
      }
      span:last-child {
        width: calc(100% - 8rem);
        color: #333;
      }
    }
  }

  button,
  button:hover {
    border-color: ${props => props.colorType};
    color: ${props => props.colorType};
  }
  button:hover {
    opacity: 0.7;
  }
`;

export default withRouter(PaymentResult);
