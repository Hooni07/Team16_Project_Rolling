import { useState } from 'react';

function ColorSelect() {
  return (
    <ColorFrame>
      <ColorChip onClick={handleClick}></ColorChip>
    </ColorFrame>
  );
}

const ColorChip = styled.button`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export default ColorSelect;
