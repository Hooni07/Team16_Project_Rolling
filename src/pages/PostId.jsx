import styled from 'styled-components';
import SubHeader from '../components/post/SubHeader';
import Card, { CardContentWrapper } from '../components/post/Card';

const PostIdWrapper = styled.div`
  /* 배경화면 변경하면 여기에 적용 */
  background-color: var(--orange200);
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
  margin: 127px auto 0px;
`;
const CardAdd = styled(CardContentWrapper)`
  /* background-color: aqua; */
  /* justify-content: center; */
`;
const PlusIcon = styled.div`
  /* display: flex; */
  padding: 16px;

  /* height: 24px; */
  /* align-items: flex-start; */
  justify-content: center;
  border-radius: 100px;
  background: var(--gray-500, #555);
`;

function PostId() {
  return (
    <PostIdWrapper>
      {/* <Header /> */}
      <Header>header 자리</Header>
      <SubHeader />
      <CardWrapper>
        <CardAdd>
          <PlusIcon>
            <img src="img/plusIcon.svg" alt="" />
          </PlusIcon>
        </CardAdd>
        <Card />
      </CardWrapper>
      <div>CardContents</div>
    </PostIdWrapper>
  );
}

export default PostId;
