import styled, { css } from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import EmojiDropDown from './subheader/EmojiDropDown';
import ShareToggle from '../modal/ShareToggle';
import KakaoModal from '../modal/KakaoModal';
import ModalPortal from '../modal/ModalPortal';
import Toast from '../common/Toast';

const Text = css`
  font-family: Pretendard;
  font-style: normal;
`;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = css`
  ${FlexCenter}
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--gray300);
  background: var(--white);
  gap: 10px;
`;

const SubHeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  position: sticky;
  top: 62px;
  z-index: 99999;

  @media (max-width: 767px) {
    top: 0;
  }
`;

const SubHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 13px 0;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1247px) {
    margin: 0 24px;
  }
  @media (max-width: 767px) {
    display: block;
    padding: 0;
  }
`;

const Name = styled.div`
  ${Text}
  color: var(--gray800);
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;

  @media (min-width: 470px) and (max-width: 767px) {
    padding: 12px 20px;
  }
  @media (max-width: 469px) {
    padding: 12px 20px;
    color: var(--gray-800, #2b2b2b);

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.18px;
  }
`;

const SplitBarHorizontal = styled.div`
  display: none;
  width: 100%;
  height: 1px;
  background-color: var(--gray200);

  @media (max-width: 767px) {
    display: block;
  }
`;

const PostIdSetting = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    margin-left: 24px;
    padding: 8px 0px;
  }
  @media (max-width: 469px) {
    margin-left: 20px;
  }
`;

const WrittenBy = styled.div`
  ${FlexCenter}
  gap: 11px;
  color: var(--gray900);
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const WrittenByIcons = styled.span`
  width: 76px;
  height: 30px;
  border: 1px solid black;
`;

const SplitBarVertical = styled.div`
  width: 1px;
  height: 28px;
  background-color: var(--gray200);
  line-height: 27px;
`;

const SplitBarVertical1 = styled(SplitBarVertical)`
  margin: 0 28px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const SplitBarVertical2 = styled(SplitBarVertical)`
  margin: 0 13px;
`;

const ShareButton = styled.button`
  ${Button}

  @media (max-width: 470px) {
    padding: 6px 8px;
  }
`;

const ShareWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 2px;
  z-index: 9999;
`;

const Container = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    padding: 19px 30px;
    color: #fff;
    align-items: center;
    justify-content: center;
    width: 524px;
    margin: 0 auto;
    right: 33%;
  }

  .Toastify__toast-icon {
    width: 24px;
    height: 24px;
  }

  .Toastify__toast--success {
    background: #000;
  }
`;

function SubHeader({ name, peopleNum }) {
  const [shareToggle, setShareToggle] = useState(false);
  const [isKakaoOpen, setIsKakaoOpen] = useState(false);
  const [isUrlCopy, setIsUrlCopy] = useState(false);
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (shareToggle && (!ref.current || !ref.current.contains(e.target))) {
      setShareToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [shareToggle]);

  const handleClickShare = (e) => {
    e.preventDefault();
    setShareToggle(!shareToggle);
  };

  return (
    <SubHeaderWrapper>
      <SubHeaderContainer>
        <Name>To. {name}</Name>
        <SplitBarHorizontal />
        <PostIdSetting>
          <WrittenBy>
            <WrittenByIcons />
            {peopleNum}명이 작성했어요!
          </WrittenBy>
          <SplitBarVertical1 />
          <EmojiDropDown />
          <SplitBarVertical2 />
          <ShareButton ref={ref} onClick={handleClickShare}>
            <img src="/img/shareIcon.svg" alt="" />
          </ShareButton>
          {shareToggle && (
            <ShareWrapper>
              <ShareToggle
                setIsKakaoOpen={setIsKakaoOpen}
                setIsUrlCopy={setIsUrlCopy}
              />
            </ShareWrapper>
          )}
          {isKakaoOpen && (
            <ModalPortal>
              <KakaoModal />
            </ModalPortal>
          )}
          {isUrlCopy && (
            <ModalPortal>
              <Container limit={1} />
              <Toast />
            </ModalPortal>
          )}
        </PostIdSetting>
      </SubHeaderContainer>
    </SubHeaderWrapper>
  );
}

export default SubHeader;
