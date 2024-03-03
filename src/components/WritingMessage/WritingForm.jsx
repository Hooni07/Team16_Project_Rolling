import { useState, useEffect } from 'react';
import styled from 'styled-components';
import EditorBox from './TextEditor';
import Dropdown from '../common/Dropdown';
import { getProfile } from '../../api/GetApi';

const IndexMessage = styled.p`
  color: var(--gray900);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

const MainForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  
`;

const FormSubject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const InputText = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background: var(--white);
`;

const ErrorMessage = styled.p`
  color: var(--error);
`;

const ProfileSelectZone = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const YourProfileImage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const ImageSelectionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  gap: 12px;
`;

const ImageSelectDirection = styled.p`
  color: var(--gray500);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

// const RelationSelect = styled.select`
//   display: flex;
//   width: 320px;
//   height: 50px;
//   padding: 12px 16px;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 8px;
//   border: 1px solid var(--gray300);
// `;

const TextAreaDevice = styled.div`
  display: flex;
  width: 720px;
  height: 260px;
  padding: 16px 1px 16px 1px;
  justify-content: center;
  align-items: center;
`;

const ProfileImageContainer = styled.div`
  max-width: 560px;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);
`;

function WritingForm({ isBtnDisabled }) {
  // const imageList = ['img/image43.svg', 'img/image44.svg'];
  const nonProfileImage = ['img/nonSelected.svg'];
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [profile, setProfile] = useState('');
  // const [relationship, setRelationship] = useState('');
  // const [font, setFont] = useState('');
  const [content, setContent] = useState('');
  const [isContent, setIsContent] = useState(true);
  const [profileImages, setProfileImages] = useState([]);



  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(!e.target.value.trim());
  };

  const handleContentChange = (contents) => {
    setContent(contents);
  };

  const handleProfileSelect = (prof) => {
    setProfile(prof);
  };

  // const handleButtonClick = (imageUrl) => {
  //   handleProfileSelect(imageUrl);
  // };

  // const handleRelationshipSelect = (relation) => {
  //   setRelationship(relation);
  // };

  // const handleFontChange = (fonts) => {
  //   setFont(fonts);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getProfile().then((data) => {
      const images = data.imageUrls;
      setProfileImages(images);
      if (images.length > 0) {
        setProfile(images[0]);
      }
    }).catch((error) => {
      console.error('이미지를 불러오지 못했습니다.', error);
    });
  }, []);

  useEffect(() => {
    handleProfileSelect(nonProfileImage);
  }, []);

  useEffect(() => {
    setIsContent(!!content && !!name);
    isBtnDisabled(!!isContent);
  }, [content, name, isContent]);

  return (
    <div>
      <MainForm onSubmit={handleSubmit}>
        <FormSubject>
          <IndexMessage>From.</IndexMessage>
          <InputText
            type="text"
            value={name}
            placeholder="이름을 입력해 주세요."
            onChange={handleNameChange}
            onBlur={(e) => { if (!e.target.value.trim()) setNameError(true); }}
          />
          {nameError && <ErrorMessage>값을 입력해주세요.</ErrorMessage>}
        </FormSubject>

        <FormSubject>
          <IndexMessage>프로필 이미지</IndexMessage>
          <ProfileSelectZone>
            <YourProfileImage>
              <button type="button" onClick={() => handleProfileSelect(profile)}>
                <img src={profile} alt="프로필 이미지" />
              </button>
            </YourProfileImage>
            <ImageSelectionList>
              <ImageSelectDirection>프로필 이미지를 선택해주세요!</ImageSelectDirection>
              <ProfileImageContainer>
                {profileImages.map((image) => (
                  <button key={image} type="button" onClick={() => handleProfileSelect(image)}>
                    <ProfileImage src={image} alt={`Profile ${image}`} />
                  </button>
                ))}
              </ProfileImageContainer>
            </ImageSelectionList>
          </ProfileSelectZone>
        </FormSubject>

        <FormSubject>
          <IndexMessage>상대와의 관계</IndexMessage>
          <Dropdown
            options={['지인', '친구', '동료', '가족']}
            placeholder="지인"
          />
        </FormSubject>

        <FormSubject>
          <IndexMessage>내용을 입력해 주세요</IndexMessage>
          <TextAreaDevice>
            <EditorBox onContentChange={handleContentChange} />
          </TextAreaDevice>
        </FormSubject>

        <FormSubject>
          <IndexMessage>폰트 선택</IndexMessage>
          <Dropdown
            options={['Noto Sans']}
            placeholder="Noto Sans"
          />
        </FormSubject>

      </MainForm>
    </div>
  );
}

export default WritingForm;
