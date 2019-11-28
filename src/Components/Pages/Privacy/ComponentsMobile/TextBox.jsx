import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.HeaderText>개인정보 수집 및 이용동의 약관</Styled.HeaderText>
        <Styled.InnerText>
          <Styled.Paragraph>
            주식회사 아스테라 (이하 &quot;회사&quot;라고 합니다)은 고객님의 개인정보를 중요시하며,
            &quot;정보통신망이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다.
          </Styled.Paragraph>
          <Styled.Paragraph>
            회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
            이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
          </Styled.Paragraph>
          <Styled.Paragraph>
            회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할
            것입니다.
          </Styled.Paragraph>
          <Styled.ListItem>ο 본 방침은 : 2019 년 11 월 1 일 부터 시행됩니다.</Styled.ListItem>
          <Styled.ListHeader>■ 수집하는 개인정보 항목</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
          </Styled.Paragraph>
          <Styled.ListItem>ο 필수수집항목 : 이름, 휴대전화번호, 이메일, CI</Styled.ListItem>
          <Styled.ListItem>
            ο 선택수집항목 : 생일, 출생년도, 연령대, 성별 및 기타 이용자가 제공한 정보
          </Styled.ListItem>
          <Styled.ListItem>
            ο 개인정보 수집방법 : 홈페이지 상담신청, 회원가입 항목을 통한 취득 및 이용자의 개별적
            제공에 의한 취득
          </Styled.ListItem>
          <Styled.ListHeader>■ 개인정보의 수집 및 이용목적</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 상담, 서비스 신청 등등을 위해 이용자의 제공이 있을 경우 아래와 같은 개인정보를
            수집하고 있습니다.
          </Styled.Paragraph>
          <Styled.ListItem>
            ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 서비스를 위한 정보 제공 ,
            구매 및 요금 결제
          </Styled.ListItem>
          <Styled.ListItem>
            ο 이용자 관리 서비스 이용에 따른 본인확인 , 개인 식별 , 부정 사용 방지 , 서비스 요청
            의사 확인 , 연령확인 , 불만처리 등 민원처리 , 기타 서비스 제공을 위한 사유
          </Styled.ListItem>
          <Styled.ListItem>
            ο 마케팅에 활용 신규 서비스 제공 및 특화 , 제휴점과 관련한 프로모션 등 마케팅 정보 전달
            , 기타 서비스 이용에 대한 통계 등
          </Styled.ListItem>
          <Styled.ListHeader>■ 개인정보의 보유 및 이용기간</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 조속히 파기합니다.
          </Styled.Paragraph>
          <Styled.ListHeader>■ 개인정보의 파기절차 및 방법</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 조속히
            파기합니다.
          </Styled.Paragraph>
          <Styled.ListItem>
            ο 파기절차 및 파기방법
            <Styled.Paragraph>
              전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
              삭제합니다.
            </Styled.Paragraph>
          </Styled.ListItem>
          <Styled.ListHeader>■ 개인정보 제공</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는
            예외로 합니다.
          </Styled.Paragraph>
          <Styled.ListItem>- 이용자들이 사전에 동의한 경우</Styled.ListItem>
          <Styled.ListItem>- 제휴점의 판매 및 서비스 제공을 위하여 필요한 개인정보</Styled.ListItem>
          <Styled.ListItem>
            - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의
            요구가 있는 경우
          </Styled.ListItem>
          <Styled.ListHeader>■ 수집한 개인정보의 위탁</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 이용자의 정보를 불특정 외부 업체에 위탁하지 않습니다.
          </Styled.Paragraph>
          <Styled.ListHeader>■ 이용자 및 법정대리인의 권리와 그 행사방법</Styled.ListHeader>
          <Styled.Paragraph>
            이용자 및 법정 대리인은 자신 혹은 당해 만 14세 미만 아동의 제공된 개인정보를 조회하거나
            수정할 수 있습니다.
          </Styled.Paragraph>
          <Styled.ListHeader>■ 개인정보에 관한 민원서비스</Styled.ListHeader>
          <Styled.Paragraph>
            회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 문의를 처리하기 위하여 아래와 같이
            개인정보관리책임자를 지정하고 있습니다.
          </Styled.Paragraph>
          <Styled.Paragraph>
            귀하께서는 회사의 서비스를 이용하시며 발생하는 개인정보보호 관련 민원을
            개인정보관리책임자에게 문의하실 수 있습니다.
          </Styled.Paragraph>
          <Styled.FooterTextHeader>ο 개인정보 관리책임자</Styled.FooterTextHeader>
          <Styled.FooterTextInner>이름 : 전세훈</Styled.FooterTextInner>
          <Styled.FooterTextInner>전화 : 02-2135-1670</Styled.FooterTextInner>
          <Styled.FooterTextInner>메일 : sam@eatple.com</Styled.FooterTextInner>
        </Styled.InnerText>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: relative;

  width: 100%;
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};

  margin: 0 auto;
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;

  padding: 5% 3%;

  text-align: center;
`;

Styled.HeaderText = styled.div`
  font-family: 'S-CoreDream-Bold';
  font-size: 6vw;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 21px;
  }

  margin: 8% 0%;
`;

Styled.InnerText = styled.div`
  font-family: 'S-CoreDream';
  font-size: 3.4vw;
  text-align: left;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 12px;
  }
`;

Styled.Paragraph = styled.div`
  margin: 6% 0 4% 0;
`;

Styled.ListHeader = styled.div`
  margin: 6% 0% 4% 0%;
`;

Styled.ListItem = styled.div`
  padding-left: 5%;
  margin-bottom: 4%;
`;

Styled.FooterTextHeader = styled.div`
  margin: 10% 0 2% 0;

  font-family: 'S-CoreDream-Bold';
  font-size: 3.8vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 18px;
  }
`;

Styled.FooterTextInner = styled.div`
  font-family: 'S-CoreDream-Bold';
  font-size: 3.2vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 16px;
  }
`;
