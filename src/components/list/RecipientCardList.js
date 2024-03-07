import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecipientCard from './RecipientCard';
import { getRecipients } from '../../api/GetApi';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRecipientsLoad = async () => {
    try {
      const response = await getRecipients();
      const data = response.results;
      setRecipients(data);
    } catch (error) {
      throw new Error('롤링페이퍼를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleRecipientsLoad();
  }, []);

  const handleLeftButton = () => {
    setCurrentIndex((prev) => Math.max(prev - 4, 0));
  };

  const handleRightButton = () => {
    setCurrentIndex((prev) => Math.min(prev + 4, recipients.length - 4));
  };

  return (
    <CarouselContainer>
      {currentIndex > 0 && (
        <LeftButton onClick={handleLeftButton}>
          <img src="/img/arrow_left.svg" alt="arrow_left" />
        </LeftButton>
      )}
      <CardsContainer>
        {recipients.slice(currentIndex, currentIndex + 4).map((recipient) => (
          <RecipientCard key={recipient.id} recipient={recipient} />
        ))}
      </CardsContainer>
      {currentIndex < recipients.length - 4 && (
        <RightButton onClick={handleRightButton}>
          <img src="/img/arrow_right.svg" alt="arrow_right" />
        </RightButton>
      )}
    </CarouselContainer>
  );
}

export default RecipientList;

const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #ffffffe5;
  border-radius: 50px;
  border: 1px solid #dadcdf;
  box-shadow: 0px 4px 8px 0px #00000014;
  cursor: pointer;
`;

const LeftButton = styled(Button)`
  left: -20px;
  z-index: 1;
`;

const RightButton = styled(Button)`
  right: -20px;
  z-index: 1;
`;
