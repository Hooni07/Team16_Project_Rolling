import styled from 'styled-components';
import ModalWindow from '../common/ModalWindow';

function KakaoModal() {
  const ShareContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const KakaoImg = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20%;
    align-items: center;
    cursor: pointer;

    img {
      width: 40%;
      height: 40%;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 16px;
    }
  `;

  const KakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('6fd1b477fa346b57215edf8982a8f34b');
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Rolling',
          description: '추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  };

  const ShareKakao = (
    <ShareContainer onClick={KakaoButton}>
      <KakaoImg>
        <img src="/img/Kakao.svg" alt="카카오톡 공유" />
        <h2>카카오톡 공유하기</h2>
      </KakaoImg>
    </ShareContainer>
  );

  return <ModalWindow children={ShareKakao} />;
}

export default KakaoModal;
