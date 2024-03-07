import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import ModalWindow from '../common/ModalWindow';
import EditMessageButton from '../common/Buttons/EditMessageButton';

const Text = css`
  font-family: Pretendard;
  font-style: normal;
`;

const userStateColors = {
  가족: { background: 'var(--green100)', color: 'var(--green500)' },
  동료: { background: 'var(--purple100)', color: 'var(--purple600)' },
  지인: { background: 'var(--orange100)', color: 'var(--orange500)' },
  친구: { background: 'var(--blue100)', color: 'var(--blue500)' },
};

function CardModal({
  id,
  src,
  name,
  cardFont,
  userState,
  cardContent,
  cardCreatedAt,
}) {
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');
  console.log(id, isEditRoute);

  const createdDays = new Date(cardCreatedAt);
  const fontClass = {
    'Noto Sans': 'noto-sans',
    Pretendard: 'pretendard',
    나눔명조: 'nanum-gothic',
    '나눔손글씨 손편지체': 'nanum-myeongjo',
  };

  const font = fontClass[cardFont] || '';

  const Card = (
    <Container onClick={(e) => e.stopPropagation()}>
      <CardContent>
        <UserInfo>
          <UserPicture src={src} alt="프로필" />
          <UserText>
            From. <UserName>{name}</UserName>
            <UserState $state={userState}>{userState}</UserState>
          </UserText>
          <CardCreatedAt>
            {`${createdDays.getFullYear()}. ${
              createdDays.getMonth() + 1
            }. ${createdDays.getDate()}`}
          </CardCreatedAt>
        </UserInfo>
        <SplitHorizontal />
        <CardContentTextContainer>
          <CardContentText
            dangerouslySetInnerHTML={{ __html: cardContent }}
            className={font}
          />
        </CardContentTextContainer>
      </CardContent>
      {isEditRoute ? <EditMessageButton messageID={id} /> : ''}
    </Container>
  );

  return <ModalWindow children={Card} />;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  margin: 20px 40px;
`;

const UserInfo = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
  gap: 14px;
`;

const UserPicture = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;

  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);
`;

const UserText = styled.div`
  ${Text}
  display: block;
  position: relative;
  color: var(--black);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

const UserName = styled.span`
  font-weight: 700;
`;

const UserState = styled.div`
  display: flex;
  padding: 1.5px 8px 0;
  margin-top: 6px;
  width: 41px;
  height: 20px;
  text-align: center;
  align-items: center;

  border-radius: 4px;
  background: ${({ $state }) =>
    userStateColors[$state]
      ? userStateColors[$state].background
      : 'defaultColor'};
  color: ${({ $state }) =>
    userStateColors[$state] ? userStateColors[$state].color : 'defaultColor'};

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

const SplitHorizontal = styled.div`
  width: 520px;
  height: 1px;
  background: var(--gray200);
  margin: 15px auto;
`;

const CardContentTextContainer = styled.div`
  height: 100%;
  width: 520px;
`;

const CardContentText = styled.div`
  overflow-wrap: break-word;
  overflow: hidden;
  color: var(--gray600);
  width: 520px;
  height: 240px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-clip: padding-box;
    border: 9px solid transparent;
    background-color: var(--gray300);
  }

  /* max-height: 112px; */
  /* max-width: 312px; */

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;

  flex-wrap: wrap;
`;

const CardCreatedAt = styled.div`
  ${Text}
  position: absolute;
  top: 56px;
  right: 45px;

  color: var(--gray400);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.06px;
`;

export default CardModal;
