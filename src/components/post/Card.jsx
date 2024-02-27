import styled, { css } from 'styled-components';

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
export const CardContentWrapper = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const CardContent = styled.div`
  margin: 28px 24px 24px;
`;

const UserInfo = styled.div`
  display: flex;
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
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

const UserName = styled.span`
  font-weight: 700;
`;

const UserState = styled.div`
  ${Text}
  display: flex;
  padding: 1.5px 8px 0;
  width: 41px;
  height: 20px;
  text-align: center;
  align-items: center;

  border-radius: 4px;
  background: ${({ state }) => userStateColors[state].background};
  color: ${({ state }) => userStateColors[state].color};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

const SplitHorizontal = styled.div`
  width: 336px;
  height: 1px;
  background: var(--gray200);
  margin: 15px auto;
`;

const CardContentText = styled.div`
  ${Text}
  overflow: hidden;
  color: var(--gray600);
  text-overflow: ellipsis;

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
`;

const CardCreatedAt = styled.div`
  ${Text}
  position: absolute;
  left: 24px;
  bottom: 24px;

  color: var(--gray400);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.06px;
`;

function Card({
  src = 'img/shareIcon.svg',
  name = '김동훈',
  userState = '친구',
  cardContent = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
  cardCreatedAt = '2023.07.08',
}) {
  return (
    <CardContentWrapper>
      <CardContent>
        <UserInfo>
          <UserPicture src={src} alt="" />
          <UserText>
            From. <UserName>{name}</UserName>
            <UserState state={userState}>{userState}</UserState>
          </UserText>
        </UserInfo>
        <SplitHorizontal />
        <CardContentText>{cardContent}</CardContentText>
        <CardCreatedAt>{cardCreatedAt}</CardCreatedAt>
      </CardContent>
    </CardContentWrapper>
  );
}
export default Card;
