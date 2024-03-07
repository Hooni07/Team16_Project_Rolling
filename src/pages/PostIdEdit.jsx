import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteRecipientButton from '../components/common/Buttons/DeleteRecipientButton';
import { getRecipientData, getAllMessages } from '../api/GetApi';
import {
  PostIdWrapper,
  HeaderWrapper,
  ButtonSection,
  CardWrapper,
} from './PostId';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
import CardItems from '../components/post/card/CardItems';
import BackToPostButton from '../components/common/Buttons/BackToPostButton';
import { deleteMessages } from '../api/DeleteApi';

function PostIdEdit() {
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

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessages(messageId);
      handleMessages(id);
    } catch (error) {
      console.error('메세지 삭제에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    handleIdData();
    handleMessages(id);
  }, [id]);

  return (
    <PostIdWrapper
      color={data.backgroundColor}
      $image={data.backgroundImageURL}
    >
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader
        name={data ? data.name : ''}
        peopleNum={data ? data.messageCount : 0}
      />
      <ButtonSection>
        <BackToPostButton />
        <DeleteRecipientButton />
      </ButtonSection>
      <CardWrapper>
        <CardItems messages={messages} onDelete={handleDeleteMessage} />
      </CardWrapper>
    </PostIdWrapper>
  );
}

export default PostIdEdit;
