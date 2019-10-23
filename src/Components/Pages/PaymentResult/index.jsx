/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

function PaymentResult({ history }) {
  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);

  const { merchant_uid, error_msg, imp_uid } = query;
  const isSuccessed = getIsSuccessed();

  function getIsSuccessed() {
    const { success, imp_success } = query;
    if (typeof imp_success === 'string') return imp_success === 'true';
    if (typeof imp_success === 'boolean') return imp_success === true;
    if (typeof success === 'string') return success === 'true';
    if (typeof success === 'boolean') return success === true;

    return false;
  }

  const iconType = isSuccessed ? 'check-circle' : 'exclamation-circle';
  const resultType = isSuccessed ? '성공' : '실패';
  const resultMessage = isSuccessed ? '앱으로 돌아가 식권을 확인해주세요.' : '다시 결제해 주세요.';
  const colorType = isSuccessed ? '#52c41a' : '#f5222d';

  /* 웹 환경일때 */
  const { Kakao } = window;
  const apiKey = '2b7052dfc89e89644677cb1be76b7a18';

  Kakao.init(apiKey);

  return (
    <Wrapper>
      <Container colorType={colorType}>
        <Icon type={iconType} theme="filled" />
        <p>{`결제에 ${resultType}하였습니다`}</p>
        <p>{`${resultMessage}`}</p>
        <ul>
          <li>
            <span>주문번호</span>
            <span>{merchant_uid}</span>
          </li>
          {isSuccessed ? (
            <li>
              <span>식별 번호</span>
              <span>{imp_uid}</span>
            </li>
          ) : (
            <li>
              <span>에러 메시지</span>
              <span>{error_msg}</span>
            </li>
          )}
        </ul>
        <Button
          size="large"
        >
          <Icon type="arrow-left" />
          앱으로 돌아가기
        </Button>
      </Container>
    </Wrapper>
  );
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
    font-size: 2rem;
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
