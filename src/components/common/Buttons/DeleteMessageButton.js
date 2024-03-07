import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function DeleteMessageButton({ id, onDelete }) {
  const location = useLocation();
  const isEditRoute = location.pathname.includes('/edit');

  const handleButtonClick = async (e) => {
    e.stopPropagation();
    onDelete(id);
    // navigate(`/post/${recipientID}/edit`, { replace: true });
  };

  return (
    <Button onClick={(e) => handleButtonClick(e)} $isDisplay={isEditRoute}>
      <DeleteImg src="/img/deleted.svg" alt="삭제" />
    </Button>
  );
}

const Button = styled.button`
  position: absolute;
  right: 24px;
  display: ${({ $isDisplay }) => ($isDisplay ? 'block' : 'none')};
  /* display: flex; */
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--white);
  border-radius: 6px;
  border: 1px solid var(--gray300);

  &:hover {
    background: var(--gray300);
  }

  &:active {
    background: var(--gray100);
  }

  &:focus {
    border: 1px solid var(--gray500);
  }
`;

const DeleteImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default DeleteMessageButton;
