import styled from 'styled-components';

function SelectSection() {
  return (
    <Section>
      <Title>배경화면을 선택해 주세요.</Title>
      <Content>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Content>
    </Section>
  );
}

const Section = styled.div`
  width: 720px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

const Title = styled.p`
  color: var(--gray900);
  /* Font/24 Bold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;
const Content = styled.p`
  color: var(--grat500);

  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

export default SelectSection;
