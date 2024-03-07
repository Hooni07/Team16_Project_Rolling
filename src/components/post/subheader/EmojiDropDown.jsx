import styled, { css } from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { submitEmojiPost } from '../../../api/PostApi';
import { getEmojiData } from '../../../api/GetApi';

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
  width: 63px;
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

const MarginRight = styled.div`
  margin-right: 28px;
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

  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  padding: 24px;

  align-items: flex-start;
  gap: 10px;
`;

const EmojiGroupInDropDown = styled(EmojiGroup)`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 63px 63px 63px 63px;
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
  const { id: recipient_id } = useParams();

  const handleEmojiPicker = () => {
    setIsOpen(!isOpen);
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleEmojiData = async () => {
    try {
      const response = await getEmojiData(recipient_id);
      const data = response.results.map((item) => ({
        unified: item.id,
        emoji: item.emoji,
        count: item.count,
      }));
      setBadges(data);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  useEffect(() => {
    handleEmojiData();
  }, []);

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
      {
        // eslint-disable-next-line
        badges.length > 0 &&
          (badges.length > 3 ? (
            <DownArrow onClick={() => setIsDropDownOpen((prev) => !prev)}>
              <ArrowImage src="/img/arrow_down.svg" alt="" />
              {isDropDownOpen && (
                <DropdownMenu>
                  <EmojiGroupInDropDown>
                    {badges.slice(3, 11).map((badge) => (
                      <EmojiBadge key={badge.unified}>
                        <Emoji>{badge.emoji}</Emoji>
                        <span>{badge.count}</span>
                      </EmojiBadge>
                    ))}
                  </EmojiGroupInDropDown>
                </DropdownMenu>
              )}
            </DownArrow>
          ) : (
            <MarginRight />
          ))
      }
      {badges.length === 0 && <div />}

      <EmojiAddButton onClick={handleEmojiPicker}>
        <img src="/img/emojiAdd.svg" alt="" />
        <span>추가</span>
        {isOpen && (
          <EmojiPickerWrapper onClick={stopPropagation}>
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                const updateBadges = async () => {
                  let newCount = 0;

                  setBadges((prevBadges) => {
                    let newBadges;
                    const exists = prevBadges.some(
                      (badge) => badge.emoji === emojiData.emoji,
                    );
                    if (exists) {
                      newBadges = prevBadges.map((badge) => {
                        if (badge.emoji === emojiData.emoji) {
                          newCount = badge.count + 1;
                          return { ...badge, count: newCount };
                        }
                        return badge;
                      });
                    } else {
                      newCount = 1;
                      newBadges = [
                        ...prevBadges,
                        { ...emojiData, count: newCount },
                      ];
                    }
                    newBadges.sort((a, b) => b.count - a.count);
                    return newBadges;
                  });
                  const data = {
                    emoji: emojiData.emoji,
                    type: 'increase',
                  };

                  await submitEmojiPost(recipient_id, data);
                };

                updateBadges().then(() => {
                  setIsOpen(false);
                });
              }}
            />
          </EmojiPickerWrapper>
        )}
      </EmojiAddButton>
    </>
  );
}

export default EmojiDropDown;
