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
    question: '음식 배달도 가능한가요?',
    answer:
      '잇플은 배달 주문 서비스가 아니에요. 고객이 직접 포장된 음식을 음식점에서 테이크아웃 하는 서비스입니다.',
  },
  {
    question: '잇플은 어디서 이용 가능한가요?',
    answer:
      '현재 잇플은 강남과 역삼 지역을 대상으로 베타서비스 중에 있어요. 향후 서울 전 지역으로 차근차근 확장할 계획이에요.',
  },
  {
    question: '환불 규정은 어떻게 되나요?',
    answer:
      '잇플에서 주문한 테이크아웃 음식은 점심의 경우 오전 10시 30분까지, 저녁의 경우 오후 4시 30분까지 환불 가능해요. 멤버십은 환불이 불가해요.',
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
`;

Styled.QnAListWrap = styled.div`
  width: 75%;
  height: 100%;

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

  width: 100%;
  height: 100%;

  overflow: scroll;
`;

Styled.QnAItem = styled.div`
  width: 48%;
  min-height: 30%;

  border-top: solid 4px #fca800;
  background-color: #ffffff;

  padding: 2% 2%;
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
