import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import SelectSection from '../components/post/postmake/SelectSection';
import PostButton from '../components/post/postmake/PostButton';
import PostInputSection from '../components/post/postmake/PostInputSection';
import ColorSelection from '../components/post/postmake/ColorSelection';
import ImageSelection from '../components/post/postmake/ImageSelection';
import ToggleButton from '../components/post/postmake/ToggleButton';
import { getBackground } from '../api/GetApi';
import { submitRollingPost } from '../api/PostApi';

const colorList = ['beige', 'purple', 'blue', 'green'];

function Post() {
  const [isColor, setIsColor] = useState(true);
  const [selectColor, setSelectColor] = useState(colorList[0]);
  const [background, setBackground] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [inputUser, setInputUser] = useState('');
  const [inputError, setInputError] = useState(null);
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    const handleImageLoad = async () => {
      try {
        const response = await getBackground();
        const result = response.imageUrls;
        setBackground(result);
      } catch (error) {
        // console.error(error);
      }
    };
    handleImageLoad();
  }, []);

  const handleInput = (e) => {
    const { value } = e.target;
    setInputUser(value);
    setBtnDisable(value.trim() === '');
    setInputError(value.trim() === '');
  };

  const handleBlur = () => {
    setInputError(inputUser.trim() === '');
  };

  const toggleHandler = () => {
    setIsColor(!isColor);
    if (isColor) {
      setSelectImage(background[0]);
      setSelectColor(null);
    } else {
      setSelectColor('beige');
      setSelectImage(null);
    }
  };

  const handleColorChange = (color) => {
    setSelectColor(color);
    setSelectImage(null);
  };

  const handleImageChange = (image) => {
    setSelectImage(image);
    setSelectColor(null);
  };

  return (
    <PostPage>
      <Header />
      <PostSection>
        <PostInputSection
          user={inputUser}
          handleInput={handleInput}
          handleBlur={handleBlur}
          inputError={inputError}
        />
        <SelectSection />
        <ToggleButton
          state={isColor}
          handler={toggleHandler}
          text1="컬러"
          text2="이미지"
        />
        {isColor ? (
          <Select>
            {colorList.map((color) => (
              <ColorSelection
                color={color}
                handleFunction={() => handleColorChange(color)}
                checkSelected={selectColor === color}
              />
            ))}
          </Select>
        ) : (
          <Select>
            {background.map((image) => (
              <ImageSelection
                image={image}
                handleFunction={() => handleImageChange(image)}
                checkSelected={selectImage === image}
              />
            ))}
          </Select>
        )}
        <PostButton
          onSubmit={async () => {
            const data = {
              name: inputUser,
              backgroundColor: `${selectColor === null ? 'beige' : selectColor}`,
              backgroundImageURL: selectImage,
            };
            const response = await submitRollingPost(data);
            return response.id;
          }}
          btnDisable={btnDisable}
        />
      </PostSection>
    </PostPage>
  );
}

const PostPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  background: var(--white);
  margin: 57px auto;
  width: 720px;
  text-align: left;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

const Select = styled.div`
  width: 720px;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 45px;
  flex-wrap: wrap;
  flex-direction: row;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export default Post;
