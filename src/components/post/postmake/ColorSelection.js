import styled from 'styled-components';
import CheckIcon from '../../common/CheckIcon';

function ColorSelection({ color, handleFunction, checkSelected }) {
  return (
    <ColorOption color={color} onClick={handleFunction} selected={checkSelected}>
      {checkSelected && <CheckIcon imgSrc="img/check.svg" />}
    </ColorOption>
  );
}

const ColorOption = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  background-color: ${(props) => (props.color === 'beige' ? 'var(--orange200)' : `var(--${props.color}200)`)};
  margin: 5px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
    margin: 12px 0;
  }
`;

export default ColorSelection;
