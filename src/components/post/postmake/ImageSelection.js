import styled from 'styled-components';
import CheckIcon from '../../common/CheckIcon';

function ImageSelection({ image, handleFunction, checkSelected }) {
  return (
    <ImageOption onClick={handleFunction} selected={checkSelected}>
      <ImageWrapper selected={checkSelected}>
        <img
          src={image}
          alt="배경화면 이미지"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </ImageWrapper>
      {checkSelected && <CheckIcon imgSrc="/img/check.svg" />}
    </ImageOption>
  );
}

const ImageOption = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
    margin: 12px 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: url(${(props) => props.image}) lightgray 50% / cover no-repeat;
  opacity: ${(props) => (props.selected ? '0.5' : '1')};

  > img {
    border-radius: 16px;
  }
`;

export default ImageSelection;
