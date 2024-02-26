import styled from 'styled-components';

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
  color: var(--gray800);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
`;
const PostIdSetting = styled.div`
  display: flex;
  align-items: center;
`;
const WrittenBy = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;

  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
`;
const WrittenByIcons = styled.span`
  width: 76px;
  height: 30px;
  /* background-color: aqua; */
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
  padding: 8px 12px;
  gap: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);

  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
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
const EmojiAddButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
`;
const SplitBar2 = styled(SplitBar)`
  margin: 0 13px;
`;
const ShareButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
`;

function SubHeader() {
  return (
    <SubHeaderWrapper>
      <SubHeaderContainer>
        <Name>To. Ashley Kim</Name>
        <PostIdSetting>
          <WrittenBy>
            <WrittenByIcons />
            23명이 작성했어요!
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
          <EmojiAddButton>
            <img src="img/emojiAdd.svg" alt="" />
            <span>추가</span>
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
