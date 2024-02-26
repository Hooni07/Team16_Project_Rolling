import styled from 'styled-components';

export const CardContentWrapper = styled.div`
  /* display: flex; */
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
  display: block;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
const UserName = styled.span`
  font-weight: 700;
`;
const UserState = styled.div`
  display: flex;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: var(--Green-100, #e4fbdc);

  color: var(--green500);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
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

function Card() {
  return (
    <CardContentWrapper>
      <CardContent>
        <UserInfo>
          <UserPicture src="" alt="" />
          <UserText>
            From. <UserName>김동훈</UserName>
            <UserState>가족</UserState>
          </UserText>
        </UserInfo>
        <SplitHorizontal />
      </CardContent>
    </CardContentWrapper>
  );
}
export default Card;
