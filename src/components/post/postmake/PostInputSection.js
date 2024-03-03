import styled from 'styled-components';

function PostInputSection({
  user,
  handleInput,
  handleBlur,
  inputError,
}) {
  return (
    <InputSection>
      <InputTitle>To.</InputTitle>
      <Input
        placeholder="받는 사람 이름을 입력해 주세요"
        value={user}
        onChange={handleInput}
        onBlur={handleBlur}
        error={inputError}
      />
      {inputError && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </InputSection>
  );
}

const InputSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const InputTitle = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 175% */
  letter-spacing: -0.24px;
`;

const Input = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  border: ${(props) => props.error && '2px solid var(--error)'};
  background: var(--white);

  &::placeholder {
    color: var(--gray500);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  }

  @media (max-width: 768px) {
    width: 320px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export default PostInputSection;
