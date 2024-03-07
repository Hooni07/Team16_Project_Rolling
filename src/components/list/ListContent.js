import styled from 'styled-components';
import RecipientCardList from './RecipientCardList';

function ListContent({ title }) {
  return (
    <Section>
      <SectionContainer>
        <Title>{title}</Title>
        <RecipientCardList />
      </SectionContainer>
    </Section>
  );
}

export default ListContent;

const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 50px;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: calc(100% - 48px);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: calc(100% - 20px);
  }
`;

const SectionContainer = styled.div``;

const Title = styled.h2`
  display: flex;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
`;
