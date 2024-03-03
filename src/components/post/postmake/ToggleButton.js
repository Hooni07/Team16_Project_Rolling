import styled from 'styled-components';

function ToggleButton({
  state,
  handler,
  text1,
  text2,
}) {
  return state ? (
    <SelectToggle onClick={handler}>
      <OnButton>{text1}</OnButton>
      <OffButton>{text2}</OffButton>
    </SelectToggle>
  ) : (
    <SelectToggle onClick={handler}>
      <OffButton>{text1}</OffButton>
      <OnButton>{text2}</OnButton>
    </SelectToggle>
  );
}

const SelectToggle = styled.div`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 24px;
`;

const BtnCommon = styled.button`
  display: flex;
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const OnButton = styled(BtnCommon)`
  border-radius: 6px;
  border: 2px solid var(--purple600);
  background: var(--white, #fff);

  color: var(--purple700);
  text-align: center;
  /* Font/16 Bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const OffButton = styled(BtnCommon)`
  border-radius: 6px;
  background: var(--gray100);

  color: var(--gray900);
  text-align: center;
  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

export default ToggleButton;
