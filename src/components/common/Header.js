import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 100%;
  background: #fff;
  position: sticky;
  border-bottom: 1px solid #ccc;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const StyledHeader = styled.div`
  max-height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0px;
  @media (max-width: 1247px) {
    margin: 0 24px;
  }
`;

const ButtonContainer = styled.div`
  button {
    height: 40px;
    border-radius: 6px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.16px;
    text-align: center;
  }
`;
const LogoURL = styled.a`
  display: flex;
  padding: 6px 0;
  gap: 8px;
  align-items: center;
`;
const LogoText = styled.div`
  color: var(--gray-light-gray-90, #4a494f);
  /* text-align: center; */

  /* padding-top: 3px; */
  /* font-family: Poppins; */
  font-size: 19.971px;
  font-weight: 700;
`;

function Header({ showButton }) {
  return (
    <StyledNav>
      <StyledHeader>
        <LogoURL href="/">
          <img src="/img/logo.svg" alt="로고 사진" />
          <LogoText>Rolling</LogoText>
        </LogoURL>
        {showButton && (
          <Link to="/post">
            <ButtonContainer>
              <button type="button">롤링 페이퍼 만들기</button>
            </ButtonContainer>
          </Link>
        )}
      </StyledHeader>
    </StyledNav>
  );
}

export default Header;
