import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  width: 720px;
  height: 56px;
  margin: 60px auto;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  color: var(--white);
  background-color: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: -0.18px;
`;

function Button({ disabled }) {
  const navigate = useNavigate();

  return (
    <ButtonContainer onClick={() => navigate('/list')} disabled={disabled}>
      <p>생성하기</p>
    </ButtonContainer>
  );
}

export default Button;
