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
  const spinFlag = false;

  useEffect(() => {
    async function orderValidation() {
      await setLoaded(false);

      if (merchant_uid !== undefined) {
        await RestAPI.get('order_validation', {
          params: {
            merchant_uid,
          },
        })
          .then(res => {
            setResponse(res);
          })
          .catch(res => {
            console.log(res);
          });
      }
      await setLoaded(true);
    }

    orderValidation();
  }, [setLoaded, buyer_name, merchant_uid]);

  if (loaded) {
    let iconType = 'exclamation-circle';
    let resultMessage = '앱으로 돌아가 확인해주세요.';
    let colorType = '#f5222d';

    let resOrder = {
      error_msg: '주문번호를 찾을 수 없습니다.',
    };

    if (merchant_uid !== undefined) {
      resOrder = response.data;

      if (parseInt(resOrder.error_code, 10) === 100) {
        iconType = 'check-circle';
        colorType = '#52c41a';
        resultMessage = '앱으로 돌아가 확인해주세요.';
      } else if (parseInt(resOrder.error_code, 10) === 204) {
        iconType = 'check-circle';
        colorType = '#52c41a';
        resultMessage = '앱으로 돌아가 확인해주세요.';
      } else if (parseInt(resOrder.error_code, 10) === 206) {
        iconType = 'meh';
        colorType = '#fac800';
        resultMessage = '앱으로 돌아가 다시 확인해주세요.';
      } else if (parseInt(resOrder.error_code, 10) === 202) {
        iconType = 'tags';
        colorType = '#fac800';
        resultMessage = '앱으로 돌아가 다시 확인해주세요.';
      } else if (parseInt(resOrder.error_code, 10) === 203) {
        iconType = 'exclamation-circle';
        colorType = '#f5222d';
        resultMessage = '앱으로 돌아가 다시 주문해주세요.';
      } else if (parseInt(resOrder.error_code, 10) === 205) {
        iconType = 'frown';
        colorType = '#f5222d';
        resultMessage = '앱으로 돌아가 다시 확인해주세요.';
      }
    }

    return (
      <Wrapper>
        <Container colorType={colorType}>
          <Icon type={iconType} spin={spinFlag} />
          <p>{`${resOrder.error_msg}`}</p>
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
          <a href="https://plus.kakao.com/talk/bot/@eatple">
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
    font-size: 1rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    margin-top: 2rem;
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
  }
  button:hover {
    opacity: 1;
  }
`;

export default withRouter(PaymentResult);
