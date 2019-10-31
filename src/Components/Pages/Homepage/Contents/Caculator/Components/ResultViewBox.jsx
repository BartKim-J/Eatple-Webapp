import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

export default function ResultViewBox({ pageIndex, progress, pages }) {
  const countInit = 4;
  const menuPrice = 5500;

  const count = countInit + (pageIndex * 10) + (10 * progress);
  const won = count.toFixed(0) * menuPrice;

  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.TextBoxWrap>
          <Styled.TextBox>
            한달에
            <br />
            <Styled.TextHighlight>{count.toFixed(0)}번</Styled.TextHighlight>
            <br />
            잇플로 식사하고
            <br />
            <Styled.TextHighlight>{won.toFixed(2)}원</Styled.TextHighlight>의
            <br />
            더해지는 가치를 경험하세요.
          </Styled.TextBox>
        </Styled.TextBoxWrap>
      </Styled.Container>
    </Styled.Wrap>
  );
}
ResultViewBox.propTypes = {
  pageIndex: PropType.number.isRequired,
  progress: PropType.number.isRequired,
  pages: PropType.array.isRequired,
};

const Styled = {};
const ResultViewBoxWidth = '34vw';

Styled.Wrap = styled.div`
  position: absolute;
  bottom: 12vh;
  left: 0;
`;

Styled.Container = styled.div`
  width: ${ResultViewBoxWidth};
  max-width: 621px;

  height: calc(${ResultViewBoxWidth} * 0.6827);
  max-height: 424px;

  background-color: #1c1c1c;
`;

Styled.TextBoxWrap = styled.div`
  display: table;
  height: calc(${ResultViewBoxWidth} * 0.6827);
  max-height: 424px;

  padding-left: 10%;
`;

Styled.TextBox = styled.div`
  display: table-cell;
  vertical-align: middle;

  font-size: 1.8vw;
  line-height: 1.72;
  color: #ffffff;

  font-family: 'S-CoreDream-5';

  text-align: left;
`;

Styled.TextHighlight = styled.span`
  color: #fca800;
  font-family: 'S-CoreDream-7';
`;
