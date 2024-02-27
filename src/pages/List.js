import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import ListContent from '../components/list/ListContent';

// import Header from '../components/common/Header';

function List() {
  return (
    <>
      {/* <Header /> */}
      <ListContent title="인기 롤링 페이퍼 🔥">Rb</ListContent>
      <ListContent title="최근에 만든 롤링 페이퍼 ⭐️️">Rb</ListContent>
      <ButtonContainer>
        <Link to="/post">나도 만들어보기</Link>
      </ButtonContainer>
    </>
  );
}

export default List;

const ButtonContainer = styled.div`
  width: 280px;
  border-radius: 12px;
  margin: 24px auto;
  padding: 14px 24px;
  font-size: 18px;
  text-align: center;
  color: var(--white);
  background-color: var(--purple600);
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 720px;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: 320px;
  }
`;
