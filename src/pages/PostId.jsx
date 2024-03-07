import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
import { CardContentWrapper } from '../components/post/Card';
import { getAllMessages, getRecipientData } from '../api/GetApi';
import EditButton from '../components/common/Buttons/EditButton';
import CardItems from '../components/post/card/CardItems';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  @media (max-width: 767px) {
    display: none;
  }
`;

const userBackgroundColors = {
  beige: { background: 'var(--orange200)' },
  purple: { background: 'var(--purple200)' },
  green: { background: 'var(--green200)' },
  blue: { background: 'var(--blue200)' },
};

export const PostIdWrapper = styled.div`
  background-color: ${(props) => {
    const colorInfo = userBackgroundColors[props.color];
    return colorInfo && colorInfo.background;
  }};
  background-image: url(${(props) => props.$image || 'none'});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const ButtonSection = styled.div`
  display: flex;
  margin: 63px auto 11px;
  max-width: 1200px;
  gap: 10px;
  justify-content: end;
  align-items: center;
`;

// eslint-disable-next-line
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0px auto 0px;
  padding-bottom: 127px;
  gap: 24px 2%;

  @media (max-width: 1247px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (min-width: 360px) and(max-width: 767px) {
    margin: 93px 24px 0px;
    /* align-content: center; */
  }
`;
// eslint-disable-next-line
const CardAdd = styled(CardContentWrapper)`
  justify-content: center;
  position: relative;
`;
// eslint-disable-next-line
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

function PostId() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [messages, setMessages] = useState(null);

  const handleIdData = async () => {
    try {
      const result = await getRecipientData(id);
      setData(result);
    } catch (error) {
      // console.error(error);
    }
  };

  const handleMessages = async () => {
    try {
      const result = await getAllMessages(id);
      setMessages(result.results);
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    handleIdData();
    handleMessages(id);
  }, []);

  return (
    <PostIdWrapper
      color={data.backgroundColor}
      $image={data.backgroundImageURL}
    >
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader
        name={data ? data.name : 'hello'}
        peopleNum={data ? data.messageCount : 0}
      />
      <ButtonSection>
        <EditButton />
      </ButtonSection>
      <CardWrapper>
        <CardAdd onClick={() => navigate(`/post/${data.id}/message`)}>
          <PlusIcon>
            <img src="/img/plusIcon.svg" alt="" />
          </PlusIcon>
        </CardAdd>
        <CardItems messages={messages} />
      </CardWrapper>
    </PostIdWrapper>
  );
}

export default PostId;
