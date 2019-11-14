import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.HeaderText>잇플 서비스 이용약관</Styled.HeaderText>
        <Styled.InnerText>
          <Styled.ListHeader>제 1 조 (목적)</Styled.ListHeader>
          <Styled.ListItem>
            이 약관은 주식회사 아스테라(이하 “회사”라 합니다)가 제공하는 “잇플” 서비스(이하
            “서비스”라 합니다)와 관련하여, 회사와 이용 고객과의 서비스 이용조건 및 절차, 회사와
            회원간의 권리·의무 및 기타 필요한 사항을 규정함을 목적으로 합니다. 본 약관은 인터넷
            웹사이트, 카카오채널, 스마트폰(안드로이드폰, 아이폰 등) 앱 등을 이용하는 전자상거래에
            대해서도 그 성질에 반하는 특별한 사유가 없는 한 준용됩니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 2 조 (용어의 정의)</Styled.ListHeader>
          <Styled.ListItem>
            1. “사이트”란 “제휴점”이 음식, 음료 등 재화와 서비스 상품(이하 “재화 등”이라 합니다)을
            “이용자”에게 판매하기 위하여, “회사”가 컴퓨터 등 정보통신설비를 이용하여 재화 등을
            거래할 수 있도록 설정하여 제공하는 가상의 공간을 말합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회원”이라 함은 “잇플”에 개인정보를 제공하여 회원등록을 한 자로서, “잇플”의 정보를
            지속적으로 제공받으며, “잇플”이 제공하는 서비스를 계속적으로 이용할 수 있는 주체를
            의미하며 “잇플” 제휴 식당은 포함되지 않습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “비회원”이라 함은 “회원”으로 가입하지 않고 “회사”가 제공하는 서비스를 이용하는 자를
            말합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “이용자”라 함은 잇플 서비스를 이용하는 당사자를 의미하며, 회원과 비회원을 모두
            포함합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            5. “비밀번호(Password)”라 함은 회원의 동일성 확인과 회원의 비밀보호를 위하여 회원
            스스로가 설정하여 사이트에 등록한 영문과 숫자 등의 조합을 말합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            6. “게시물”이라 함은 “회원”이 서비스를 이용함에 있어 서비스 상에 게시한
            부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일 등을
            의미합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            7. “제휴점”이란 “회사”와 제휴하여 회사가 제공하는 “서비스”를 통해 “회원”들에게 음식,
            음료 등 “재화 등”을 조리 및 판매를 하는 주체입니다.
          </Styled.ListItem>
          <Styled.ListItem>
            8. “재화 등”이란 “제휴점”이 판매하는 음식, 음료, 기타 서비스 상품 등을 총칭합니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 3 조 (약관의 명시와 개정)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 이 약관의 내용과 상호, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는
            곳의 주소를 포함), 대표자의 성명, 사업자등록번호, 통신판매업 신고번호, 연락처(전화,
            전자우편 주소 등) 등을 “이용자”가 쉽게 알 수 있도록 “사이트”의 초기 서비스 화면에
            게시합니다. 다만, 약관의 내용은 “이용자”가 연결화면을 통하여 보도록 할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 『전자상거래 등에서의 소비자보호에 관한 법률』, 『약관의 규제등에 관한
            법률』, 『전자문서 및 전자거래기본법』, 『전자서명법』, 『정보통신망 이용촉진 등에 관한
            법률』, 『소비자기본법』 등 관련법령을 위배하지 않는 범위에서 이 약관을 개정할 수
            있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “회사”는 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 현행약관과 함께 그
            적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 『전자상거래 등에서의
            소비자보호에 관한 법률』, 『약관의 규제 등에 관한 법률』, 공정거래위원회가 정하는
            『전자상거래 등에서의 소비자보호지침』 및 관계 법령 또는 상관례에 따릅니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 4 조 (서비스의 제공 및 변경)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 다음과 같은 서비스를 제공합니다.
            <Styled.ListSubItem>
              1) “재화 등”에 대한 주문중개 등 통신판매중개서비스
            </Styled.ListSubItem>
            <Styled.ListSubItem>2) “재화 등”에 대한 판매 서비스</Styled.ListSubItem>
            <Styled.ListSubItem>3) 위치기반 서비스</Styled.ListSubItem>
            <Styled.ListSubItem>4) 기타 “회사”가 정하는 서비스</Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 서비스 제공과 관련한 회사 정책의 변경 등 기타 상당한 이유가 있는 경우 등
            운영상, 기술상의 필요에 따라 제공하고 있는 “서비스”의 전부 또는 일부를 변경 또는 중단할
            수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “서비스”의 내용, 이용방법, 이용시간에 대하여 변경 또는 “서비스” 중단이 있는 경우에는
            변경 또는 중단될 “서비스”의 내용에 대해서는 사전에 공지합니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 5 조 (서비스 이용시간 및 중단)</Styled.ListHeader>
          <Styled.ListItem>
            1. “서비스” 이용시간
            <Styled.ListSubItem>
              1) “회사”의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로
              합니다. 다만, 사이트 정기 점검 등의 필요로 “회사”가 정한 날이나 시간은 제외됩니다.
              정기점검시간은 서비스 제공화면에 공지한 바에 따릅니다.
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              2) “회사”는 “서비스”의 원활한 수행을 위하여 필요한 기간을 정하여 사전에 공지하고
              서비스를 중지할 수 있습니다. 단, 불가피하게 긴급한 조치를 필요로 하는 경우 필요한
              조치를 하고 사후에 통지할 수 있습니다.
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              3) “회사”는 컴퓨터 등 정보통신설비의 보수점검•교체 및 고장, 통신의 두절 등 불가피한
              사유가 발생한 경우 “서비스”의 제공을 일시적으로 중단할 수 있습니다.
            </Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListItem>
            2. 다음 사항 및 해당 서비스의 이용시간대는 다음과 같습니다. (본 이용시간대는 제휴점의
            사정 및 기타 서비스 제공 상황에 따라 변경될 수 있습니다. 또한 개별 제휴점의 사정에 따른
            이용시간이 상이할 수 있습니다.)
            <Styled.ListSubItem>
              1) 주문 가능시간
              <Styled.ListSubItem>
                - 점심: 전날 16:30 ~ 당일 10:30까지 - 저녁: 당일 10:30 ~ 16:30
              </Styled.ListSubItem>
            </Styled.ListSubItem>
            <Styled.ListSubItem>2) 주문 취소 / 픽업시간 변경 가능 시간</Styled.ListSubItem>
            <Styled.ListSubItem>
              <Styled.ListSubItem>- 점심: 전날 16:30 ~ 당일 09:30까지 </Styled.ListSubItem>
              <Styled.ListSubItem>- 저녁: 당일 10:30 ~ 15:30</Styled.ListSubItem>
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              3) 픽업 가능 시간
              <Styled.ListSubItem>- 점심: 11:30 ~ 13:30 - 저녁: 17:30 ~ 21:00 </Styled.ListSubItem>
            </Styled.ListSubItem>
          </Styled.ListItem>

          <Styled.ListHeader>제 6 조 (이용계약의 성립)</Styled.ListHeader>
          <Styled.ListItem>
            1. 이용계약은 “회원”이 되고자 하는 자(이하 “가입신청자”)가 약관에 동의를 하고, “회사”가
            정한 가입 양식에 따라 회원정보를 기입하여 가입신청을 하고 “회사”가 이를 승인함으로써
            체결됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 다음 각 호에 해당하는 신청에 대하여는 승인을 하지 않거나, 사후에 이용계약을
            해지할 수 있습니다.
            <Styled.ListSubItem>
              1) 등록내용에 허위의 정보를 기재하거나, 기재누락, 오기가 있는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              2) 이미 가입된 회원과 전화번호나 전자우편주소가 동일한 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              3) 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              4) 실명이 아니거나 타인의 명의를 이용한 경우 및 회사가 실명확인절차를 실시할 경우에
              이용자의 실명가입신청이 아닌 것으로 확인될 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              5) 부정한 용도 또는 영리를 추구할 목적으로 본 서비스를 이용하고자 하는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              6) 본 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우 및 회사의 서비스나
              업무에 지장을 초래하는 등 기타 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우
            </Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListItem>
            3. 제1항에 따른 신청에 있어 “회사”는 “회원”에게 전문기관을 통한 실명확인 및 본인인증을
            요청할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “회사”는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는
            승낙을 유보할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            5. “회원”은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “회사”에
            대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 7 조 (이용계약의 종료)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회원”의 해지
            <Styled.ListSubItem>
              1) “회원”은 언제든지 “회사”에게 해지의사를 통지함으로써 이용계약을 해지할 수 있습니다.
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              2) “회사”는 전항에 따른 “회원”의 해지요청에 대해 특별한 사정이 없는 한 이를 조속히
              처리합니다.
            </Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”의 해지
            <Styled.ListSubItem>
              1) “회사”는 다음과 같은 사유가 있는 경우, 이용계약을 해지할 수 있습니다.
              <Styled.ListSubItem>
                ① 제7조 제2항에서 정하고 있는 사유가 있는 경우
              </Styled.ListSubItem>
              <Styled.ListSubItem>
                ② “회원”이 “회사”에 부당하고 무리한 요구를 하거나, 기타 “회사” 및 다른 회원 기타
                타인의 권리나 명예, 신용 기타 정당한 이익을 침해하는 행위를 한 경우
              </Styled.ListSubItem>
              <Styled.ListSubItem>
                ③ 기타 “회원”이 이 약관 및 “회사”의 정책에 위배되는 행위를 하거나 이 약관에서 정한
                해지사유가 발생한 경우
              </Styled.ListSubItem>
              <Styled.ListSubItem>
                ④ 1년 이상 서비스를 이용한 이력이 없는 경우 휴면계정으로 변경 가능하며, 이후 회사의
                판단에 따라 해지할 수 있습니다.
              </Styled.ListSubItem>
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              2) 이용계약은 “회사”가 해지의사를 “회원”에게 통지하는 순간 효력이 발송합니다. 이 경우
              “회사”는 해지의사를 “회원”이 등록한 전자우편 전송이나 문자메시지를 발송하며 통지할 수
              있습니다.
            </Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListHeader>제 8 조 (회원 및 이용자의 의무)</Styled.ListHeader>
          <Styled.ListItem>
            1. “이용자”는 관계법령 및 이 약관의 규정, “회사”의 정책, 이용안내 등 “회사”가 통지 또는
            공지하는 사항을 준수하여야 하며, 기타 “회사” 업무에 방해되는 행위를 하여서는 안됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “이용자”는 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.
            <Styled.ListSubItem>1) 서비스 신청 또는 변경 시 허위내용의 등록</Styled.ListSubItem>
            <Styled.ListSubItem>2) “회사”에 게시된 정보의 허가 받지 않은 변경</Styled.ListSubItem>
            <Styled.ListSubItem>
              3) “회사”가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              4) “회사” 또는 제3자의 저작권 등 지적 재산권에 대한 침해
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              5) “회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              6) 외설 또는 폭력적인 메시지, 화상, 음성 기타 공공질서 미풍양속에 반하는 정보를
              “서비스”에 공개 또는 게시하는 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              7) 고객센터 및 회사의 임직원에게 욕설, 폭언, 성희롱 및 기타 부적절한 언행
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              8) 적립금 및 기타 포인트를 부정하게 적립하거나 사용하는 등의 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              9) 허위 주문, 허위 리뷰작성 등을 통해 서비스를 부정한 목적으로 이용하는 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              10) 자신의 ID, PW를 제3자에게 양도하거나 대여하는 등의 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              11) 외부의 포털 및 SNS 등에 당사의 영업에 지장을 초래할 수 있는 내용을 기재하는 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              12) 리버스엔지니어링, 디컴파일, 디스어셈블 및 기타 일체의 가공행위를 통하여 서비스를
              복제, 분해 또 모방 기타 변형하는 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              13) 자동 접속 프로그램 등을 사용하는 등 정상적인 용법과 다른 방법으로 서비스를
              이용하여 회사의 서버에 부하를 일으켜 회사의 정상적인 서비스를 방해하는 행위
            </Styled.ListSubItem>
            <Styled.ListSubItem>14) 기타 관계법령에 위반된다고 판단되는 행위</Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListItem>
            3. “이용자”는 이러한 행위를 한 경우 “회사”에 손해배상 책임을 집니다. “회사”는 이용자가
            본 조 제2항의 금지행위를 한 경우 본 약관 제12조에 따라 서비스 이용 제한 조치를 취할 수
            있습니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 9 조 (회원의 게시물)</Styled.ListHeader>
          <Styled.ListItem>
            “회원”이 작성한 게시물에 대한 모든 책임은 이를 게시한 “회원”에게 있습니다. “회사”는
            “회원”이 게시하거나 등록하는 게시물의 내용이 다음 각 호에 해당한다고 판단되는 경우 해당
            게시물을 사전통지 없이 삭제 또는 임시조치(블라인드)할 수 있습니다.
            <Styled.ListSubItem>
              1) 다른 회원 또는 제3자를 비방하거나 명예를 손상시키는 내용인 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              2) 공공질서 및 미풍양속에 위반되거나 범죄 등에 결부된다고 인정되는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              3) 회사로부터 사전 승인 받지 아니한 상업광고, 판촉 내용을 게시하는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>4) 해당 상품과 관련 없는 내용인 경우</Styled.ListSubItem>
            <Styled.ListSubItem>
              5) 정당한 사유 없이 “회사” 또는 “제휴점”의 영업을 방해하는 내용을 기재하는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              6) 자신의 업소를 홍보할 목적으로 직접 또는 제3자(리뷰대행업체 등)을 통하여 위법 부당한
              방법으로 허위 또는 과장된게시글을 게재하는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              7) 허위주문 또는 주문취소 등 위법 부당한 방법으로 리뷰권한을 획득하여 “회원” 또는
              제3자의 계정을 이용하여 게시글을 게시하는 경우
            </Styled.ListSubItem>
            <Styled.ListSubItem>8) 제3자 등으로부터 권리침해신고가 접수된 경우</Styled.ListSubItem>
            <Styled.ListSubItem>9) 관계법령에 위반된다고 판단되는 경우</Styled.ListSubItem>
            <Styled.ListSubItem>
              10) 기타 회사의 서비스 약관, 운영정책 등 위반행위를 할 우려가 있거나 위반행위를 한
              경우
            </Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListHeader>제 10 조 (이용제한 등)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 “이용자”가 이 약관의 의무를 위반하거나 “서비스”의 정상적인 운영을 방해한
            경우, 주의, 경고, 일시정지, 영구이용정지, 계약해지 등의 (삭제)조치를 즉시 취할 수
            있으며, “이용자”는 법적책임을 부담합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 “주민등록법“을 위반한 명의도용 및 결제도용, 전화번호 도용,
            “저작권법“(삭제)을 위반한 불법프로그램의 제공 및 운영방해, “정보통신망 이용촉진 및
            정보보호 등에 관한 법률“을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한
            초과행위, “여신전문금융업법”을 위반한 “이용자”의 신용카드 부정거래 등 이와 유사한 형태의
            부정행위 등과 같이 관련법을 위반한 경우에는 주의, 경고, 일시정지, 영구이용정지, 계약해지
            등의 조치를 즉시 취할 수 있으며, “이용자”는 법적책임을 부담할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은 회사의 이용제한정책에서 정하는
            바에 의합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. 본 조에 따라 서비스 이용을 제한하거나 계약을 해지하는 경우 회사는 전자우편 전송이나
            문자메시지 발송으로 알릴 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            5. “회원”은 본 조에 따른 이용제한 등에 대해 “회사”가 정한 절차에 따라 이의신청을 할 수
            있습니다. 이 때 이의가 정당하다고 회사가 인정하는 경우 “회사”는 조속히 서비스의 이용을
            재개합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            6. 본 조에 따라 이용제한이 되는 경우 서비스 이용을 통해 획득한 혜택 등도 모두 이용중단,
            또는 소멸되며, “회사”는 이에 대해 별도로 보상하지 않습니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 11 조 (권리의 귀속)</Styled.ListHeader>
          <Styled.ListItem>
            1. “서비스”에 대한 저작권 및 지적재산권은 “회사”에 귀속됩니다. 단, “회원”의 “게시물“ 및
            제휴계약에 따라 제공된 저작물 등은 제외합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”가 제공하는 “서비스”의 디자인, “회사”가 만든 텍스트, 스크립트(script), 그래픽,
            “회원” 상호간 전송 기능 등 “회사”가 제공하는 “서비스”에 관련된 모든 상표, 서비스 마크,
            로고 등에 관한 저작권 기타 지적재산권은 대한민국 및 외국의 법령에 기하여 “회사”가
            보유하고 있거나 “회사”에게 소유권 또는 사용권이 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “회원”은 이 이용약관으로 인하여 서비스를 소유하거나 “서비스”에 관한 저작권을 보유하게
            되는 것이 아니라, “회사로부터 서비스의 이용을 허락 받게 되는바, 정보취득 또는
            개인용도로만 “서비스”를 이용할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “회원”은 명시적으로 허락된 내용을 제외하고는 “서비스”를 통해 얻어지는 정보를 영리
            목적으로 사용, 복사, 유통하는 것을 포함하여, “회사”가 만든 텍스트, 스크립트, 그래픽의
            “회원” 상호간 전송기능 등을 복사하거나 유통할 수 없습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            5. “회사”는 서비스와 관련하여 “회원”에게 “회사”가 정한 이용조건에 따라 계정, ID, 콘텐츠
            등을 이용할 수 있는 이용권만을 부여하며, 이용자는 회사를 이용함으로써 얻은 정보를 회사의
            사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 영리 목적으로
            이용하거나 제3자에게 이용, 양도, 판매, 담보목적으로 제공하여서는 안됩니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 12 조 (회원에 대한 통지)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”가 “회원”에 대한 통지를 하는 경우, “회원”이 가입신청 시 “회사”에 제출한
            전자우편 주소나 휴대 전화번호 등으로 할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 불특정다수 “회원”에 대한 통지의 경우, 1주일 이상 사이트에 게시함으로써 개별
            통지에 갈음할 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 13 조 (회사의 의무)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 관련법과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며,
            계속적이고 안정적으로 “서비스”를 제공하기 위하여 최선을 다합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 “회원”이 안전하게 “서비스”를 이용할 수 있도록 개인정보(신용정보 포함)보호를
            위해 개인정보처리방침을 수립하여 공시하고 준수합니다.
          </Styled.ListItem>
          <Styled.ListItem>3. 회사는 관계 법령이 정한 의무사항을 준수합니다.</Styled.ListItem>

          <Styled.ListHeader>제 14 조 (개별 서비스에 대한 약관 및 이용조건)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 개별 서비스와 관련한 별도의 약관 및 이용정책을 둘 수 있으며, 개별서비스에서
            별도로 적용되는 약관에 대한 동의는 “회원”이 개별서비스를 최초로 이용할 경우 별도의
            동의절차를 거치게 됩니다. 이 경우 개별 서비스에 대한 이용약관 등이 본 약관에 우선합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. 전항에도 불구하고 “회사”는 개별 서비스에 대한 이용정책에 대해서는 “서비스”를 통해
            공지할 수 있으며, “이용자”는 이용정책을 숙지하고 준수하여야 합니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 15 조 (개인정보보호)</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 “회원”의 개인정보를 보호하기 위하여 정보통신망법 및 개인정보 보호법 등 관계
            법령에서 정하는 바를 준수합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”는 “회원”의 개인정보를 보호하기 위한 개인정보처리방침을 수립하여 서비스
            초기화면에 게시합니다. 다만, 개인정보처리방침의 구체적 내용은 연결화면을 통하여 볼 수
            있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “회사”는 관련법령 및 개인정보처리방침에 따라 “회원”의 개인정보를 최대한 보호하기
            위하여 노력합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “회사”의 공식 사이트 이외의 링크된 사이트에서는 “회사”의 개인정보처리방침이 적용되지
            않습니다. 링크된 사이트 및 구매 상품이나 서비스를 제공하는 제3자의 개인정보 취급과
            관련하여는 해당 사이트 및 해당 제3자의 개인정보처리방침을 확인할 책임이 “회원”에게
            있으며, “회사”는 이에 대하여 책임을 부담하지 않습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 16 조 (주문 및 결제)</Styled.ListHeader>
          <Styled.ListItem>
            1. “재화 등”에 대한 매매계약은 “회원”이 “제휴점”이 제시한 상품의 판매 조건에 응하여
            청약의 의사표시를 하고 이에 대하여 “제휴점”이 승낙의 의사표시를 함으로써 “회원”과
            “제휴점”간에 체결됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”가 “제휴점” 등 제3자에게 이용자의 개인정보를 제공할 필요가 있는 경우 ①
            개인정보를 제공받는 자, ② 개인정보를 제공받는 자의 개인정보 이용목적, ③ 제공하는
            개인정보의 항목, ④ 개인정보를 제공받는 자의 개인정보 보유 및 이용기간을 구매자에게
            알리고 동의를 받습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “회사”가 제3자에게 구매자의 개인정보를 처리할 수 있도록 업무를 위탁하는 경우에는 ①
            개인정보 처리위탁을 받는 자, ② 개인정보 처리위탁을 하는 업무의 내용을 구매자에게 알리고
            동의를 받습니다. 다만, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에서 정하고
            있는 방법으로 개인정보 처리방침을 통해 알림으로써 동의절차를 갈음할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “회사”는 대금지급방법으로 신용카드 결제, 핸드폰 결제, 포인트, 기타 “회사”가 추가
            지정하는 결제수단 등을 제공할 수 있습니다.
          </Styled.ListItem>

          <Styled.ListHeader>제 16 조 (주문 및 결제)</Styled.ListHeader>
          <Styled.ListItem>
            1. “재화 등”에 대한 매매계약은 “회원”이 “제휴점”이 제시한 상품의 판매 조건에 응하여
            청약의 의사표시를 하고 이에 대하여 “제휴점”이 승낙의 의사표시를 함으로써 “회원”과
            “제휴점”간에 체결됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사”가 “제휴점” 등 제3자에게 이용자의 개인정보를 제공할 필요가 있는 경우 ①
            개인정보를 제공받는 자, ② 개인정보를 제공받는 자의 개인정보 이용목적, ③ 제공하는
            개인정보의 항목, ④ 개인정보를 제공받는 자의 개인정보 보유 및 이용기간을 구매자에게
            알리고 동의를 받습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “회사”가 제3자에게 구매자의 개인정보를 처리할 수 있도록 업무를 위탁하는 경우에는 ①
            개인정보 처리위탁을 받는 자, ② 개인정보 처리위탁을 하는 업무의 내용을 구매자에게 알리고
            동의를 받습니다. 다만, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에서 정하고
            있는 방법으로 개인정보 처리방침을 통해 알림으로써 동의절차를 갈음할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “회사”는 대금지급방법으로 신용카드 결제, 핸드폰 결제, 포인트, 기타 “회사”가 추가
            지정하는 결제수단 등을 제공할 수 있습니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 17 조 (취소・환불)</Styled.ListHeader>
          <Styled.ListItem>
            1. “재화 등”에 대한 취소 및 환불 규정은 전자상거래등에서의 소비자보호에 관한 법률 등
            관련 법령을 준수합니다. 또한, 본 “재화 등” 서비스는 음식물의 조리를 수반하므로 음식
            조리가 시작된 이후에는 “제휴점”에게 큰 손해가 발생합니다. 이에 따라 단순변심에 의한
            청약철회 등은 할 수 없습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. “회사” 및 “제휴점”은 별도의 취소 및 환불 관련 규정을 정할 수 있으며, 이 경우 별도
            계약 및 이용조건상의 취소 및 환불 규정이 우선 적용됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. “회사”는 “회원”이 구매 신청한 상품이 품절 등의 사유로 인도 또는 제공을 할 수 없음을
            인지한 경우 조속히 그 사유를 “회원”에게 통지하고, 결제 내역을 취소하는 등 환급에 필요한
            조치를 취합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. 취소와 환불은 “제휴점”과 확인 후 처리 하게 되며, 신용카드결제 및 핸드폰결제는
            신용카드사 및 이동통신사의 환불기준에 의거하여 처리가 완료되는데 시일이 소요될 수
            있습니다.
          </Styled.ListItem>
          <Styled.ListHeader>제 18 조 면책조항</Styled.ListHeader>
          <Styled.ListItem>
            1. “회사”는 “제휴점”과 “회원” 간의 상품거래를 중개하는 서비스만을 제공할 뿐, “재화 등”을
            판매하는 당사자가 아니며, “재화 등”에 대한 정보의 제공, 판매, 포장, 하자 등에 대한
            책임은 “제휴점”에 있습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            2. 회사는 제휴점이 제공하는 음식, 음료 등 “재화 등”의 제조 및 유통 과정에는 직접적으로
            관여하지 않으며, 회사는 직접 관여하지 않았던 공정에서 발생한 손해 등에 대해 법률상
            책임을 지지 않습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            3. 다만, 회사는 회원이 제휴점의 귀책사유로 인하여 질병을 얻거나 기타의 손해를 입었을 때,
            구제의 필요성이 있을 경우 회원이 권리를 구제받을 수 있도록 가능한 협력을 합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            4. “회사”는 천재지변 등 불가항력으로 인하여 “서비스”를 제공할 수 없는 경우에는 서비스
            제공에 관한 책임이 면제됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            5. “회사”는 “회원”의 귀책사유로 인한 “서비스” 이용의 장애에 대하여는 책임을 지지
            않습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            6. “회사”는 “회원” 및 “제휴점”이 게재한 이용후기 등 게시물에 대해서는 책임을 지지
            않습니다.
          </Styled.ListItem>
          <Styled.ListItem>
            7. “회사”는 제3자가 서비스 내 화면 또는 링크된 웹사이트를 통하여 광고한 제품 또는
            서비스의 내용과 품질에 대하여 감시할 의무 기타 어떠한 책임도 지지 아니합니다.
          </Styled.ListItem>
          <Styled.ListItem>
            8. “회사”는 “회원”간 또는 “회원”과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한
            경우에는 책임이 면제됩니다.
          </Styled.ListItem>
          <Styled.ListItem>
            9. “회사” 및 “회사”의 임직원 그리고 대리인은 고의 또는 중대한 과실이 없는 한 다음과 같은
            사항으로 발생하는 손해에 대해 책임을 지지 아니합니다.
            <Styled.ListSubItem>
              1) 회원 정보의 허위 또는 부정확성에 기인하는 손해
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              2) 서비스에 대한 접속 및 서비스의 이용과정에서 “회원”의 귀책사유로 발생한 손해
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              3) 서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인 이용으로부터 발생하는
              손해 및 제3자의 불법적인 행위를 방지하거나 예방하는 과정에서 발생하는 손해
            </Styled.ListSubItem>
            <Styled.ListSubItem>
              4) 제3자가 서비스를 이용하여 불법적으로 전송, 유포하거나 또는 전송, 유포되도록 한 모든
              바이러스, 스파이웨어 및 기타 악성 프로그램으로 인한 손해
            </Styled.ListSubItem>
          </Styled.ListItem>
          <Styled.ListHeader>제 19 조 (분쟁해결)</Styled.ListHeader>
          <Styled.ListSubItem>
            1. “회사”는 이용자가 제기하는 정당한 의견을 반영하여 서비스 개선을 위해 노력하고자 이를
            담당하는 직원을 둡니다.
          </Styled.ListSubItem>
          <Styled.ListSubItem>
            2. “회사”는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다.
          </Styled.ListSubItem>

          <Styled.ListHeader>제 20 조 (준거법 및 관할법원)</Styled.ListHeader>
          <Styled.ListSubItem>
            1. 본 약관의 해석 및 회사와 회원간의 분쟁에 대하여는 대한민국의 법을 적용합니다.
          </Styled.ListSubItem>
          <Styled.ListSubItem>
            2. 서비스 이용 중 발생한 회원과 회사간의 소송은 서울중앙지방법원을 관할로 합니다.
          </Styled.ListSubItem>

          <Styled.FooterTextHeader>부칙</Styled.FooterTextHeader>
          <Styled.FooterTextInner>
            1. 이 약관은 2019년 11월 1일부터 시행됩니다.
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

  padding: 5% 3%;

  text-align: center;
`;

Styled.HeaderText = styled.div`
  font-family: 'S-CoreDream-5';
  font-size: 6vw;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT}) {
    font-size: 21px;
  }

  margin: 8% 0%;
`;

Styled.InnerText = styled.div`
  font-family: 'S-CoreDream-3';
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
  font-family: 'S-CoreDream-5';

  margin: 6% 0% 4% 0%;
`;

Styled.ListItem = styled.div`
  padding-left: 5%;
  margin-bottom: 4%;
`;

Styled.ListSubItem = styled.div`
  padding-left: 3%;
  margin: 1% 0;
`;

Styled.FooterTextHeader = styled.div`
  margin: 10% 0 2% 0;

  font-family: 'S-CoreDream-5';
  font-size: 3.6vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 18px;
  }
`;

Styled.FooterTextInner = styled.div`
  font-family: 'S-CoreDream-4';
  font-size: 3.2vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 16px;
  }
`;
