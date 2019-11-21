/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.HeaderText>잇플 위치기반 서비스 이용약관</Styled.HeaderText>
        <Styled.InnerText>
          <Styled.ListHeader>제 1 장 총칙</Styled.ListHeader>
          <Styled.ListItem>
            제 1 조 (목적) 본 약관은 주식회사 아스테라(이하 "회사"라고 합니다)가 제공하는
            위치기반서비스에 대해 회사와 위치기반서비스를 이용하는 개인위치정보주체(이하
            "이용자")간의 권리·의무 및 책임사항, 기타 필요한 사항의 규정을 목적으로 합니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 2 조 (이용약관의 효력 및 변경)</Styled.ListHeader>
          <Styled.ListItem>
            ①본 약관은 이용자가 본 약관에 동의하고 회사가 정한 절차에 따라 위치기반서비스의 이용자로
            등록됨으로써 효력이 발생합니다. ②회사는 법률이나 위치기반서비스의 변경사항을 반영하기
            위한 목적 등으로 약관을 수정할 수 있습니다. ③약관이 변경되는 경우 회사는 변경사항을 7일
            전에 회사의 홈페이지 등 기타 공지사항 페이지를 통해 게시합니다. ④단, 불가피한 사유가
            있을 경우 전항의 기간은 단축될 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 3 조 (약관 외의 규범)</Styled.ListHeader>
          <Styled.ListItem>
            이 약관에 명시되지 않은 사항에 대해서는 위치 정보의 보호 및 이용 등에 관한 법률,
            전기통신사업법, 정보통신망 이용 촉진및 보호 등에 관한 법률 등 관계법령 및 회사가 정한
            지침 등의 규정에 따릅니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 4 조 (서비스의 내용)</Styled.ListHeader>
          <Styled.ListItem>
            회사는 직접 수집하거나 위치정보사업자로부터 수집한 이용자의 현재 위치 또는 현재 위치가
            포함된 지역을 이용하여 아래와 같은 위치기반서비스를 제공합니다. ①위치정보를 활용한
            제휴점의 정보 검색결과 및 기타 정보, 컨텐츠를 제공 ②생활편의를 위한 위치 공유,
            위치/지역에 따른 알림, 경로 안내 ③위치기반의 컨텐츠 분류를 위한 콘텐츠 태깅(Geotagging))
            ④위치기반의 맞춤형 광고
          </Styled.ListItem>

          <Styled.ListHeader>제 5 조 (서비스 이용의 제한·중지))</Styled.ListHeader>
          <Styled.ListItem>
            ①회사는 위치기반서비스사업자의 정책변경 등과 같이 회사의 제반사정 또는 법률상의 이유로
            위치기반서비스를 유지할 수 없는 경우 위치기반서비스의 전부 또는 일부를 제한·변경·중지할
            수 있습니다. ②단, 위 항에 의한 위치기반서비스 중단의 경우 회사는 사전에 회사 홈페이지 등
            기타 공지사항 페이지를 통해 공지하거나 이용자에게 통지합니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 6 조 (개인위치정보주체의 권리)</Styled.ListHeader>
          <Styled.ListItem>
            ①이용자는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의 전부 또는 일부를 유보할 수
            있습니다. ②이용자는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의 전부 또는 일부를
            철회할 수 있습니다. 이 경우 회사는 조속히 철회된 범위의 개인위치정보 및 위치정보
            수집·이용·제공사실 확인자료를 파기합니다. ③이용자는 개인위치정보의 수집·이용·제공의
            일시적인 중지를 요구할 수 있으며, 이 경우 회사는 기술적 제약이 없는 이상 이에 따르도록
            합니다. ④이용자는 회사에 대하여 아래 자료에 대한 열람 또는 고지를 요구할 수 있으며, 해당
            자료에 오류가 있는 경우에는 정정을 요구할 수 있습니다. 이 경우 정당한 사유 없이 요구를
            거절하지 않습니다. 1.이용자에 대한 위치정보 수집·이용·제공사실 확인자료 2.이용자의
            개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법령의 규정에 의하여
            제3자에게 제공된 이유 및 내용 ⑤이용자는 권리행사를 위해 본 약관 제14조의 연락처를
            이용하여 회사에 요청할 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 7 조 (개인위치정보의 이용 또는 제공)</Styled.ListHeader>
          <Styled.ListItem>
            ①이용자는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의 전부 또는 일부를 유보할 수
            있습니다. ②이용자는 언제든지 개인위치정보의 수집·이용·제공에 대한 동의 전부 또는 일부를
            철회할 수 있습니다. 이 경우 회사는 조속히 철회된 범위의 개인위치정보 및 위치정보
            수집·이용·제공사실 확인자료를 파기합니다. ③이용자는 개인위치정보의 수집·이용·제공의
            일시적인 중지를 요구할 수 있으며, 이 경우 회사는 기술적 제약이 없는 이상 이에 따르도록
            합니다. ④이용자는 회사에 대하여 아래 자료에 대한 열람 또는 고지를 요구할 수 있으며, 해당
            자료에 오류가 있는 경우에는 정정을 요구할 수 있습니다. 이 경우 정당한 사유 없이 요구를
            거절하지 않습니다. 1.이용자에 대한 위치정보 수집·이용·제공사실 확인자료 2.이용자의
            개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법령의 규정에 의하여
            제3자에게 제공된 이유 및 내용 ⑤이용자는 권리행사를 위해 본 약관 제14조의 연락처를
            이용하여 회사에 요청할 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 8 조 (법정대리인의 권리)</Styled.ListHeader>
          <Styled.ListItem>
            회사는 14세 미만의 이용자에 대해서는 개인위치정보를 이용한 위치기반서비스 제공 및
            개인위치정보의 제3자 제공에 대한 동의를 이용자 및 이용자의 법정대리인으로부터 동의를
            받아야 합니다. 이 경우 법정대리인은 본 약관 제7조에 의한 이용자의 권리를 모두 가집니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 9 조 (8세 이하의 아동 동의 보호의무자의 권리)</Styled.ListHeader>
          <Styled.ListItem>
            ①회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동 등”)의 위치정보의 보호 및 이용
            등에 관한 법률 제26조2항에 해당하는 자(이하 “보호의무자”)가 8세 이하의 아동 등의 생명
            또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가
            있는 것으로 봅니다. 1.8세 이하의 아동 2.피성년후견인 3.장애인복지법 제2조제2항제2호에
            따른 정신적 장애를 가진 사람으로서 장애인고용촉진 및 직업재활법 제2조제2호에 따른
            중증장애인에 해당하는 사람(장애인복지법 제32조에 따라 장애인 등록을 한 사람만 해당한다)
            ②8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에
            동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여
            회사에 제출하여야 합니다. ③보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는
            제공에 동의하는 경우 본 약관 제7조에 의한 이용자의 권리를 모두 가집니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 9 조 (8세 이하의 아동 동의 보호의무자의 권리)</Styled.ListHeader>
          <Styled.ListItem>
            회사의 위치정보의 보호 및 이용 등에 관한 법률 제15조 및 26조의 규정을 위반한 행위로 인해
            손해를 입은 경우 이용자는 회사의 귀책사유를 입증하여 회사에 손해배상을 청구할 수
            있습니다. 회사는 귀책사유가 있는 경우 이에 따라 책임을 질 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 10 조 (손해배상)</Styled.ListHeader>
          <Styled.ListItem>
            회사의 위치정보의 보호 및 이용 등에 관한 법률 제15조 및 26조의 규정을 위반한 행위로 인해
            손해를 입은 경우 이용자는 회사의 귀책사유를 입증하여 회사에 손해배상을 청구할 수
            있습니다. 회사는 귀책사유가 있는 경우 이에 따라 책임을 질 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 11 조 (면책)</Styled.ListHeader>
          <Styled.ListItem>
            ①회사는 다음 각 호의 경우로 위치기반서비스를 제공할 수 없는 경우 이로 인하여 이용자에게
            발생한 손해에 대해서는 책임을 부담하지 않습니다. 1.천재지변 또는 이에 준하는 불가항력의
            상태가 있는 경우 2.위치기반서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의
            고의적인 서비스 방해가 있는 경우 3.이용자의 귀책사유로 위치기반서비스 이용에 장애가 있는
            경우 4.제1호 내지 제3호의 사유 이외에도 기타 불가피한 사정이 있거나 회사의 고의·과실이
            없는 경우 ②회사는 위치기반서비스 및 위치기반서비스에 게재된 정보, 자료, 사실의 신뢰도,
            정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 이용자의 손해에 대하여는 책임을
            부담하지 않습니다. ③기타 회사는 예상할 수 없거나 불가항력, 외부적 사정, 회사의
            귀책사유가 없는 경우에는 손해배상 등 법적인 책임을 부담하지 않습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 12 조 (분쟁의 조정 및 기타)</Styled.ListHeader>
          <Styled.ListItem>
            ①회사는 위치정보와 관련된 분쟁의 해결을 위해 이용자와 성실히 협의합니다. ②전항의
            협의에서 분쟁이 해결되지 않은 경우, 회사와 이용자는 위치정보의 보호 및 이용 등에 관한
            법률 제28조의 규정에 의해 방송통신위원회에 재정을 신청하거나, 개인정보보호법 제43조의
            규정에 의해 개인정보 분쟁조정위원회에 조정을 신청할 수 있습니다. ③이와 관련하여 법적인
            분쟁이 생길 경우 관할법원은 서울중앙지방법원으로 합니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 13 조 (회사의 주소 및 연락처)</Styled.ListHeader>
          <Styled.ListItem>
            회사의 상호, 주소 및 연락처는 아래와 같습니다. <br />
            <br />
            상호 : 주식회사 아스테라 <br />
            대표자 : 정재호 <br />
            주소 : 서울시 강남구 서초대로398, 6층 <br />
            전화 : 02-2135-1670 <br />
            이메일 : hey@eatple.com
          </Styled.ListItem>

          <Styled.FooterTextHeader>부칙</Styled.FooterTextHeader>
          <Styled.FooterTextInner>
            제 1 조 (시행일) 본 약관은 2019년 11월 1일부터 시행됩니다. <br /> <br />제 2 조
            (위치정보관리책임자 정보) 회사는 개인위치정보를 적절히 관리·보호하고, 이용자의 불만을
            원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를 위치정보관리책임자로
            지정해 운영하도록 노력합니다. 위치정보관리책임자의 성명과 연락처는 아래와 같습니다. 이름
            : 전세훈 전화 : 02-2135-1670 메일 : sam@eatple.com
          </Styled.FooterTextInner>
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

  padding: 5% 0;

  text-align: left;
`;

Styled.HeaderText = styled.div`
  font-family: 'S-CoreDream-Bold';
  font-size: 2vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 32px;
  }

  margin: 5% 10%;
`;

Styled.InnerText = styled.div`
  font-family: 'S-CoreDream';
  font-size: 1.2vw;
  text-align: left;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 15px;
  }

  padding: 0 10%;
`;

Styled.Paragraph = styled.div`
  margin: 1% 0 2% 0;
`;

Styled.ListHeader = styled.div`
  font-family: 'S-CoreDream-Bold';

  margin: 3% 0% 2% 0%;
`;

Styled.ListItem = styled.div`
  padding-left: 3%;
  margin-bottom: 1%;
`;

Styled.ListSubItem = styled.div`
  padding-left: 3%;
  margin: 1% 0;
`;

Styled.FooterTextHeader = styled.div`
  margin-top: 10%;

  font-family: 'S-CoreDream-Bold';
  font-size: 1vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 18px;
  }
`;

Styled.FooterTextInner = styled.div`
  font-family: 'S-CoreDream-Bold';
  font-size: 0.8vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 16px;
  }
`;
