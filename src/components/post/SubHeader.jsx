import styled, { css } from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const Text = css`
  font-family: Pretendard;
  font-style: normal;
`;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = css`
  ${FlexCenter}
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  gap: 10px;
`;

const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
`;

const SubHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  max-height: 65px;
  margin: 0 24px;
  padding: 13px 0;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  ${Text}
  color: var(--gray800);
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
`;

const PostIdSetting = styled.div`
  display: flex;
  align-items: center;
`;

const WrittenBy = styled.div`
  ${FlexCenter}
  gap: 11px;
  color: var(--gray900);
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
`;

const WrittenByIcons = styled.span`
  width: 76px;
  height: 30px;
  border: 1px solid black;
`;

const SplitBar = styled.div`
  width: 1px;
  height: 28px;
  background-color: var(--gray200);
  line-height: 27px;
`;

const SplitBar1 = styled(SplitBar)`
  margin: 0 28px;
`;

const EmojiGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const EmojiCount = styled.div`
  ${FlexCenter}
  padding: 8px 12px;
  gap: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

const Emoji = styled.span`
  padding: 0 2px;
  margin-right: 2px;
`;

const DownArrow = styled.img`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  margin: 6px 14px 6px 6px;
`;

const EmojiAddButton = styled.div`
  ${Button}
  position: relative;
  cursor: pointer;
`;

const SplitBar2 = styled(SplitBar)`
  margin: 0 13px;
`;

const ShareButton = styled.button`
  ${Button}
`;

const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 9999;
`;

function SubHeader({ name = 'Ashley Kim', peopleNum = 23 }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleEmojiPicker = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SubHeaderWrapper>
      <SubHeaderContainer>
        <Name>To. {name}</Name>
        <PostIdSetting>
          <WrittenBy>
            <WrittenByIcons />
            {peopleNum}명이 작성했어요!
          </WrittenBy>
          <SplitBar1 />
          <EmojiGroup>
            <EmojiCount>
              <Emoji>👍</Emoji>
              <span>24</span>
            </EmojiCount>
            <EmojiCount>
              <Emoji>😍</Emoji>
              <span>16</span>
            </EmojiCount>
            <EmojiCount>
              <Emoji>🎉</Emoji>
              <span>10</span>
            </EmojiCount>
          </EmojiGroup>
          <DownArrow src="img/downArrow.svg" alt="" />
          <EmojiAddButton onClick={handleEmojiPicker}>
            <img src="img/emojiAdd.svg" alt="" />
            <span>추가</span>
            {isOpen && (
              <EmojiPickerWrapper>
                <EmojiPicker />
              </EmojiPickerWrapper>
            )}
          </EmojiAddButton>

          <SplitBar2 />
          <ShareButton>
            <img src="img/shareIcon.svg" alt="" />
          </ShareButton>
        </PostIdSetting>
      </SubHeaderContainer>
    </SubHeaderWrapper>
  );
}

export default SubHeader;
