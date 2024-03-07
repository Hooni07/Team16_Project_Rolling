import { useState } from 'react';
import styled from 'styled-components';
// import { useKakaoShare } from './useKakaoShare';

const ModalBox = styled.div`
  border-radius: 10px;
`;

const BlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -30%);
`;

const CloseBtn = styled.button`
  display: flex;
  width: 120px;
  padding: 7px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: var(--purple600);
  color: #fff;
  font-size: 16px;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  position: absolute;
  bottom: 40px;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  width: 600px;
  height: 476px;
  border-radius: 20px;
`;

function ModalWindow({ children }) {
  const [modal, setModal] = useState(true);
  // const ref = useRef();

  // const handleOutsideClick = (e) => {
  //   if (modal && (!ref.current || !ref.current.contains(e.target))) {
  //     setModal(false);
  //   }
  // };

  // useEffect(() => {
  //   if (modal) {
  //     window.addEventListener('click', handleOutsideClick);
  //   } else {
  //     window.removeEventListener('click', handleOutsideClick);
  //   }
  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [modal]);

  const handleClickBtn = (e) => {
    e.preventDefault();
    setModal((prev) => !prev);
  };

  return (
    modal && (
      <ModalBox>
        <BlackBackground />
        <ModalBody>
          <ModalContents>{children}</ModalContents>
          <CloseBtn onClick={handleClickBtn}>확인</CloseBtn>
        </ModalBody>
      </ModalBox>
    )
  );
}

export default ModalWindow;
