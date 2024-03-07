import styled from 'styled-components';
import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
import Header from '../common/Header';
import WritingForm from './WritingForm';
// import Button from './Button';
// import MessageContext from './MessageContext';
// import { submitMessagePost } from '../../api/PostApi';

const FormContainer = styled.div`
  margin-top: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WritingMessage() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  console.log(buttonDisabled);

  return (
    <div>
      <Header />
      <FormContainer>
        <WritingForm
          isBtnDisabled={(isContent) => setButtonDisabled(isContent)}
        />
      </FormContainer>
      {/* <Button onClick={handleSubmit} disabled={!buttonDisabled} /> */}
    </div>
  );
}

export default WritingMessage;
