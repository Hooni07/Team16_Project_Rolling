import styled from 'styled-components';
// import { useKakaoShare } from './useKakaoShare';

const ModalBox = styled.div`
  border-radius: 10px;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalContents = styled.p`
  font-size: 16px;
  cursor: pointer;
`;

function KakaoModal() {
  // const { shareKakao } = useKakaoShare(userId);
  // 임의로 /post:id 부분은 userId로 작성했습니다!

  return (
    <ModalBox>
      <ModalContainer>
        <ModalContents>카카오톡으로 공유하기</ModalContents>
      </ModalContainer>
    </ModalBox>
  );
}

export default KakaoModal;
