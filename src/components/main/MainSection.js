import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 60px auto 24px;

  @media (max-width: 1248px) {
    margin: 49px 24px;
  }

  @media (max-width: 768px) {
    margin: 42px 24px 37px;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  border-radius: 16px;
  background: #f6f8ff;

  @media (max-width: 1248px) {
    width: 100%;
    flex-direction: column;
    gap: 36px;
  }

  @media (max-width: 768px) {
    gap: 48px;
  }
`;

const FirstSectionContainer = styled(SectionContainer)`
  padding: 60px 0 60px 60px;
  margin-bottom: 30px;

  @media (max-width: 1248px) {
    padding: 0;
  }
`;

const SecondSectionContainer = styled(SectionContainer)`
  padding: 60px 60px 60px 0;
  margin-top: 0;

  @media (max-width: 1248px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;

const ArticleContainer = styled.div`
  height: 158px;
  grid-area: article;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 152px;

  h2 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.24px;
    margin: 0;
  }

  p {
    color: #555;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.18px;
    margin: 0;
  }

  @media (max-width: 1248px) {
    height: 120px;
    margin-bottom: 40px;
    padding: 40px;
    margin-right: 0;

    br {
      display: inline-block;
      content: ' ';
      padding: 0 2px;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const StyledPointBtn = styled.button`
  width: 82px;
  height: 32px;
  padding: 6px 12px;
  border-radius: 50px;
  background: #9935ff;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07px;
  text-align: center;
  color: #fff;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;

  @media (max-width: 1248px) {
    width: 100%;
  }
`;

const StyledBtn = styled(Link)`
  width: 280px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  background: #9935ff;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.18px;
  color: #fff;
  margin: 24px 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  @media (max-width: 1248px) {
    width: 100%;
  }
`;

function MainSection() {
  return (
    <>
      <StyledSection>
        <FirstSectionContainer>
          <ArticleContainer>
            <StyledPointBtn>Point. 01</StyledPointBtn>
            <h2>
              누구나 손쉽게, 온라인 <br />
              롤링 페이퍼를 만들 수 있어요
            </h2>
            <p>로그인 없이 자유롭게 만들어요.</p>
          </ArticleContainer>
          <img src="img/img_01.png" alt="롤링페이퍼 예시 사진" />
        </FirstSectionContainer>
        <SecondSectionContainer>
          <img src="img/img_02.png" alt="이모지 예시 사진" />
          <ArticleContainer>
            <StyledPointBtn>Point. 02</StyledPointBtn>
            <h2>
              서로에게 이모지로 감정을 <br />
              표현해 보세요
            </h2>
            <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
          </ArticleContainer>
        </SecondSectionContainer>
      </StyledSection>
      <BtnContainer>
        <StyledBtn to="/list">구경해보기</StyledBtn>
      </BtnContainer>
    </>
  );
}

export default MainSection;
