import styled from 'styled-components';
import { useState } from 'react';
import ColorSelect from '../components/post/ColorSelect';
import ImageSelect from '../components/post/ImageSelect';

function Post() {
  const [isColor, setIsColor] = useState(true);

  const toggleHandler = () => {
    setIsColor(!isColor);
  };

  return (
    <PostSection>
      <PostInput>
        <InputTitle>To.</InputTitle>
        <Input placeholder="받는 사람 이름을 입력해 주세요" />
      </PostInput>
      <SelectSection>
        <SelectTitle>배경화면을 선택해 주세요.</SelectTitle>
        <SelectContent>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </SelectContent>
      </SelectSection>
      <SelectToggle onClick={toggleHandler}>
        {isColor ? (
          <>
            <OnButton>컬러</OnButton>
            <OffButton>이미지</OffButton>
          </>
        ) : (
          <>
            <OffButton>컬러</OffButton>
            <OnButton>이미지</OnButton>
          </>
        )}
      </SelectToggle>
      {isColor ? <ColorSelect /> : <ImageSelect />}
      <Button>생성하기</Button>
    </PostSection>
  );
}

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--white);
  margin-top: 57px;
`;

const PostInput = styled.div`
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
  backgournd: var(--white);

  &::placeholder {
    color: var(--gray500);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  }
`;

const SelectSection = styled.div`
  width: 720px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: 50px;
`;

const SelectTitle = styled.p`
  color: var(--gray900);

  /* Font/24 Bold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;
const SelectContent = styled.p`
  color: var(--grat500);

  /* Font/16 Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

const SelectToggle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 720px;
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

const Button = styled.button`
  display: flex;
  width: 720px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 24px;
  border-radius: 12px;
  background: var(--purple600);

  color: var(--white);
  text-align: center;
  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;

export default Post;
