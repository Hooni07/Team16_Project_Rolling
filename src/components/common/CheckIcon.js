import styled from 'styled-components';

function CheckIcon({ imgSrc }) {
  return (
    <Icon>
      <img src={imgSrc} alt="선택" />
    </Icon>
  );
}

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 100px;
  background: var(--gray500);
  align-items: center;
  justify-content: center;
`;

export default CheckIcon;
