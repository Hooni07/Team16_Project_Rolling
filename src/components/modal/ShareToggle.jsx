import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const ShareBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 10px 1px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const ShareButton = styled.button`
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  color: var(--gray900);
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.16px;

  &:hover {
    background: var(--gray100);
  }
`;

function ShareToggle({ setIsKakaoOpen, setIsUrlCopy }) {
  const handleClickKakao = async (e) => {
    e.preventDefault();
    setIsKakaoOpen((prev) => !prev);
  };

  const handleClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickUrl = () => {
    setIsUrlCopy((prev) => !prev);
    setTimeout(() => {
      setIsUrlCopy(false);
    }, 5000);
  };

  const location = useLocation();
  const baseUrl = 'http://localhost:3000';

  return (
    <ShareBox>
      <ShareButton onClick={handleClickKakao}>카카오톡 공유</ShareButton>
      <ShareButton
        onClick={() => {
          handleClipBoard(`${baseUrl}${location.pathname}`);
          handleClickUrl();
        }}
      >
        URL 공유
      </ShareButton>
    </ShareBox>
  );
}

export default ShareToggle;
