import styled from 'styled-components';
import { useState } from 'react';

const statePosition = {
  0: { position: 'absolute' },
  1: { position: 'relative' },
};

const DropdownContainer = styled.button`
  position: relative;
  display: flex;
  width: 320px;
  padding: 12px 16px;
  align-items: center;
  /* gap: 192px; */
  border-radius: 8px;
  border: 1px solid var(--gray300);
  justify-content: space-between;

  &:focus,
  &:active {
    border: 2px solid var(--gray500);
    /* gap: 189px; */
  }

  &:hover {
    /* gap: 189px; */
    border: 1px solid var(--gray500);
  }

  &:disabled {
    gap: 189px;
    background: var(--gray100);
  }

  &:error {
    gap: 189px;
    border: 1px solid var(--error);
  }
`;

const TextContainer = styled.p`
  color: var(--gray500);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  white-space: nowrap;

  &:focus,
  &:active,
  &:error {
    color: var(--gray900);
  }

  &:disabled {
    color: var(--gray400);
  }
`;

const ListContainer = styled.div`
  position: ${({ $state }) => statePosition[$state]
    ? statePosition[$state].position
    : 'absolute'};
  /* position: absolute; */
  /* top: ${({ $state }) => statePosition[$state]
    ? '0'
    : statePosition[$state].top}; */
  display: inline-flex;
  overflow-y: auto;
  z-index: 1;
  padding: 10px 1px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const Lists = styled.li`
  display: flex;
  width: 316px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--gray100);
  }
`;

function Dropdown({ options, placeholder, onChange, $state }) {
  const dropdownImage = ['/img/arrow_down.svg', '/img/arrow_top.svg'];

  const [toggled, setToggled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleListDown = () => {
    setToggled(!toggled);
  };

  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);
    setToggled(false);
    onChange(itemText);
  };

  return (
    <div>
      <DropdownContainer
        onClick={handleListDown}
        type="button"
      >
        {selectedItem ? (
          <TextContainer>{selectedItem}</TextContainer>
        ) : (
          <TextContainer>{placeholder}</TextContainer>
        )}
        <img
          src={toggled ? dropdownImage[1] : dropdownImage[0]}
          alt="화살표"
        />
      </DropdownContainer>
      {toggled && (
        <ListContainer $state={$state}>
          {options.map((option) => (
            <Lists key={option} onClick={() => handleItemClick(option)}>
              <TextContainer>{option}</TextContainer>
            </Lists>
          ))}
        </ListContainer>
      )}
    </div>
  );
}

export default Dropdown;
