import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

import ImgQuestionIcon from '../Images/Q.svg';

const QnAList = [
  {
    question: '왜 카카오 플러스 친구를 등록해야 하나요?',
    answer:
      '잇플은 불필요한 앱설치를 없애고 사용자가 간편하게 식사를 주문할 수 있도록 카카오 플러스 친구의 챗봇으로 구현되었어요.',
  },
  {
    question: '잇플은 어디서 이용 가능한가요?',
    answer:
      '현재 잇플은 강남과 역삼 지역을 대상으로 베타서비스 중에 있어요. 향후 서울 전 지역으로 차근차근 확장할 계획이에요.',
  },
  {
    question: '배달도 해주시나요?',
    answer:
      '잇플은 보다 합리적인 가격으로 음식을 제공하기 위해 테이크아웃 형태로 서비스를 진행 합니다. 하지만 추후 공유 배달/픽업 서비스를 열심히 준비 중입니다, 조금만 기다려주세요.',
  },
  {
    question: '픽업한 음식을 식당에서 먹을 수 있나요?',
    answer:
      '잇플 음식들은 자체 위생 용기에 제공되기 때문에 식당에서 드실 수 없습니다. 외부에서 맛있게 식사 부탁드려요. =] (자원재활용법 시행규칙 의거).',
  },
  {
    question: '음식에 하자가 있으면 환불받을 수 있나요?',
    answer:
      '제공된 음식에 하자가 있다면 전액 환불해드립니다. 음식 픽업 전 상태 하자 확인 후 식당에 환불/교환을 요청하시는 것이 가장 빠르고 정확합니다. 만약 확인을 못하셨다면 음식 사진을 잇플로 보내주세요, 저희가 번거로운 환불 절차를 대신 처리해드릴게요.',
  },
  {
    question: '주문을 변경하거나 환불받을 수 있나요?',
    answer:
      '잇플에서 주문한 테이크아웃 음식은 매일 오전 10시 30분까지 환불 가능해요. 주문 변경은 환불 후 다시 주문해주시면 됩니다. 멤버십은 환불이 불가해요.',
  },
];

export default function TextBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.QnAListWrap>
          <Styled.QnAList>
            {QnAList.map(entryQnA => {
              return (
                <Styled.QnAItem key={entryQnA.question}>
                  <Styled.Question>
                    <Styled.QuestionIcon src={ImgQuestionIcon} />
                    {entryQnA.question}
                  </Styled.Question>
                  <Styled.Answer>{entryQnA.answer}</Styled.Answer>
                </Styled.QnAItem>
              );
            })}
          </Styled.QnAList>
        </Styled.QnAListWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: relative;

  width: 100%;
  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: scroll;
`;

Styled.QnAListWrap = styled.div`
  width: 75%;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_TABLET_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_TABLET_MAX}) {
    width: 100%;
  }

  margin: 0 auto;
`;

Styled.QnAList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
`;

Styled.QnAItem = styled.div`
  width: 48%;
  height: 30%;

  border-top: solid 4px #fca800;
  background-color: #ffffff;

  padding: 4% 2%;
  margin: 1%;
`;

Styled.Question = styled.div`
  font-family: 'S-CoreDream-Bold';
  font-size: 1.1vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_TABLET_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_TABLET_MAX}) {
    font-size: 2vw;
  }

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 18px;
  }
`;

Styled.Answer = styled.div`
  font-family: 'S-CoreDream-Bold';
  font-size: 1vw;

  padding: 2% 5%;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_TABLET_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_TABLET_MAX}) {
    font-size: 1.8vw;
  }

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 16px;
  }
`;

Styled.QuestionIcon = styled.img`
  padding: 0 2% 2% 0%;

  transform: translate(0, 6%);

  width: 1.8vw;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_TABLET_MIN}) and (max-width: ${mediaConf.MEDIA_WIDTH_TABLET_MAX}) {
    font-size: 2vw;
  }

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    width: 28px;
  }
`;
