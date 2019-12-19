/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';

import styled from 'styled-components';

import queryString from 'query-string';

import RestAPI from 'server/RestAPI';

import { PGS } from './constants';

import 'antd/dist/antd.css';

export default function PGPayment({ history }) {
  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);
  const {
    storeName,
    menuName,
    menuPrice,
    merchant_uid,
    buyer_name,
    buyer_tel,
    buyer_email,
  } = query;

  if (
    storeName === undefined ||
    menuName === undefined ||
    menuPrice === undefined ||
    buyer_name === undefined ||
    buyer_tel === undefined ||
    buyer_email === undefined ||
    merchant_uid === undefined
  ) {
    history.push(`/payment/result`);
  }

  const data = {
    amount: menuPrice,
    buyer_email: `${buyer_email}`,
    buyer_name: `${buyer_name}`,
    buyer_tel: `${buyer_tel}`,
    escrow: undefined,
    merchant_uid: `${merchant_uid}`,
    name: `${storeName} - ${menuName}`,
    pay_method: '카드',
    pg: PGS[0].value,
    request_id: 'req_1576041755685',
    tier_code: undefined,
  };

  function callback(response) {
    const query = queryString.stringify(response);

    history.push(`/payment/result?${query}`);
  }

  RestAPI.get('order_validation', {
    params: {
      buyer_name,
      merchant_uid,
    },
  }).then(response => {
    const resOrder = response.data;

    if (resOrder.error_code === 200) {
      const { IMP } = window;

      const userCode = 'imp49220546';

      IMP.init(userCode);
      IMP.request_pay(data, callback);
    } else {
      const data = {
        success: false,
        imp_success: false,
        imp_uid: resOrder.merchant_uid,
        merchant_uid: resOrder.merchant_uid,
        error_msg: resOrder.error_msg,
        error_code: resOrder.error_code,
      };

      const query = queryString.stringify(data);

      history.push(`/payment/result?${query}`);
    }
  }).catch(response => {
    console.log(response);
  });

  return <Wrapper />;
}

const Wrapper = styled.div`
  padding: 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
