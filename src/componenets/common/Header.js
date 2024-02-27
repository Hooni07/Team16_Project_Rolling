import styled from 'styled-components';
import logo from '../../assests/image/logo.png';

const StyledNav = styled.nav`
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledHeader = styled.div`
  height: 64px;
  padding: 0 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
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

function Header() {
  return (
    <StyledNav>
      <StyledHeader>
        <a href="/">
          <img className="logo" src={logo} alt="로고 사진" />
        </a>
        <ButtonContainer>
          <button type="button">롤링 페이퍼 만들기</button>
        </ButtonContainer>
      </StyledHeader>
    </StyledNav>
  );
}

export default Header;
