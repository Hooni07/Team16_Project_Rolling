import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../common/Header';
import WritingForm from './WritingForm';
import Button from './Button';

const FormContainer = styled.div`
  margin-top: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WritingMessage() {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm isBtnDisabled={(isContent) => setButtonDisabled(isContent)} />
      </FormContainer>
      <Button onClick={() => navigate('/post')} disabled={!buttonDisabled} />
    </div>
  );
}

export default WritingMessage;
