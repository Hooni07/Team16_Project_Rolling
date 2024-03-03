import styled, { css } from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

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

const EmojiGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const EmojiBadge = styled.div`
  ${FlexCenter}
  padding: 8px 12px;
  gap: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 469px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

const Emoji = styled.span`
  padding: 0 2px;
  margin-right: 2px;
`;

const DownArrow = styled.button`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  margin: 6px 14px 6px 6px;
  position: relative;

  @media (max-width: 470px) {
    margin-right: 8px;
  }
`;

const ArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 312px;

  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  padding: 24px;

  align-items: flex-start;
  gap: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const EmojiGroupInDropDown = styled(EmojiGroup)`
  flex-wrap: wrap;
  max-width: 312px;
  width: 312px;
`;

const EmojiAddButton = styled.div`
  ${Button}
  position: relative;
  cursor: pointer;

  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 470px) {
    span {
      display: none;
    }
    padding: 6px 8px;
  }
`;

const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 9999;
`;

function EmojiDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [badges, setBadges] = useState([]);

  const handleEmojiPicker = () => {
    setIsOpen(!isOpen);
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <EmojiGroup>
        {badges.slice(0, 3).map((badge) => (
          <EmojiBadge key={badge.unified}>
            <Emoji>{badge.emoji}</Emoji>
            <span>{badge.count}</span>
          </EmojiBadge>
        ))}
      </EmojiGroup>
      {badges.length ? (
        <DownArrow onClick={() => setIsDropDownOpen((prev) => !prev)}>
          <ArrowImage src="img/arrow_down.svg" alt="" />
          <DropdownMenu isOpen={isDropDownOpen}>
            <EmojiGroupInDropDown>
              {badges.slice(3, 11).map((badge) => (
                <EmojiBadge key={badge.unified}>
                  <Emoji>{badge.emoji}</Emoji>
                  <span>{badge.count}</span>
                </EmojiBadge>
              ))}
            </EmojiGroupInDropDown>
          </DropdownMenu>
        </DownArrow>
      ) : (
        <div />
      )}

      <EmojiAddButton onClick={handleEmojiPicker}>
        <img src="img/emojiAdd.svg" alt="" />
        <span>추가</span>
        {isOpen && (
          <EmojiPickerWrapper onClick={stopPropagation}>
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                setBadges((prevBadges) => {
                  let newBadges;
                  const exists = prevBadges.some(
                    (badge) => badge.emoji === emojiData.emoji,
                  );
                  if (exists) {
                    newBadges = prevBadges.map((badge) =>
                      badge.emoji === emojiData.emoji
                        ? { ...badge, count: badge.count + 1 }
                        : badge,
                    );
                  } else {
                    newBadges = [...prevBadges, { ...emojiData, count: 1 }];
                  }
                  newBadges.sort((a, b) => b.count - a.count);
                  return newBadges;
                });
                setIsOpen(false);
              }}
            />
          </EmojiPickerWrapper>
        )}
      </EmojiAddButton>
    </>
  );
}

export default EmojiDropDown;
