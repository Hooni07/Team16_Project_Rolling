import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import SubHeader from '../components/post/SubHeader';
import Card, { CardContentWrapper } from '../components/post/Card';

const PostIdWrapper = styled.div`
  background-color: ${(props) => props.color || 'var(--orange200)'};
  background-image: url(${(props) => props.image || 'none'});
  height: 1000px;
`;
const Header = styled.div`
  height: 65px;
  width: 100%;
  background-color: beige;
`;

const CardWrapper = styled.div`
  display: flex;
  /* display: grid; */
  /* justify-content: center; */
  margin: 127px 24px 0px;
  gap: 24px;
`;
const CardAdd = styled(CardContentWrapper)`
  justify-content: center;
  /* align-items: center; */
  /* padding: 14px; */
  position: relative;
`;

const PlusIcon = styled.div`
  width: 56px;
  height: 56px;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  background: var(--gray500);
`;

function PostId({ color, image }) {
  return (
    <PostIdWrapper color={color} image={image}>
      {/* <Header /> */}
      <Header>header 자리</Header>
      <SubHeader />
      <CardWrapper>
        <CardAdd>
          <PlusIcon>
            <img src="img/plusIcon.svg" alt="" />
          </PlusIcon>
        </CardAdd>
        <Card
          src="img/shareIcon.svg"
          name="김동훈"
          userState="친구"
          cardContent="코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!"
          cardCreatedAt="2023.07.08"
        />
      </CardWrapper>
    </PostIdWrapper>
  );
}

export default PostId;
