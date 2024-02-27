import { useState, useEffect } from 'react';
import Editor from '@toast-ui/editor';
import styled from 'styled-components';
// import exampleProfile1 from '../../../public/img/image43.svg';
// import exampleProfile2 from '../../../public/img/image44.svg';

const IndexMessage = styled.p`
  color: var(--gray900);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

const Form = styled.form`
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

const ProfileSelectZone = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const YourProfileImage = styled.div`
  display: flex;
  padding: 24px;
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

const RelationSelect = styled.select`
  display: flex;
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray300);
`;

// const TextAreaDevice = styled.div`
//   display: flex;
//   width: 720px;
//   height: 260px;
//   padding: 1px 1px 16px 1px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8px;
//   border: 1px solid var(--gray300);
// `;

// const TextAreaTools = styled.div`
//   width: 718px;
//   height: 49px;
//   flex-shrink: 0;
//   border-radius: 8px 8px 0px 0px;
//   background: var(--gray200);
// `;

// const FontStyleTools = styled.div`
//   display: inline-flex;
//   align-items: flex-start;
//   gap: 14px;
// `;

// const HandWritingTools = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 2px;
// `;

function WritingForm() {
  const imageList = ['img/image43.svg', 'img/image44.svg'];
  const nonProfileImage = ['img/nonSelected.svg'];
  // const WritingTools = ['img/bold.svg', 'img/italic.svg', 'img/underbar.svg'];
  const [name, setName] = useState('');
  const [profile, setProfile] = useState(nonProfileImage);
  const [relationship, setRelationship] = useState('');
  // const [bold, setBold] = useState(false);
  // const [italic, setItalic] = useState(false);
  // const [underline, setUnderline] = useState(false);
  // const [content, setContent] = useState('');
  const [font, setFont] = useState('');

  const handleProfileSelect = (prof) => {
    setProfile(prof);
  };

  const handleButtonClick = (imageUrl) => {
    handleProfileSelect(imageUrl);
  };

  const handleRelationshipSelect = (relation) => {
    setRelationship(relation);
  };

  // const handleToggleBold = () => {
  //   setBold(!bold);
  // };

  // const handleToggleItalic = () => {
  //   setItalic(!italic);
  // };

  // const handleToggleUnderline = () => {
  //   setUnderline(!underline);
  // };

  // const handleContentWriting = (contents) => {
  //   setContent(contents.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  const handleFontChange = (fonts) => {
    setFont(fonts);
  };

  useEffect(() => {
    handleProfileSelect(nonProfileImage);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormSubject>
          <IndexMessage>From.</IndexMessage>
          <InputText type="text" value={name} placeholder="이름을 입력해 주세요." onChange={(e) => setName(e.target.value)} />
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
              <div>
                <button type="button" onClick={() => handleButtonClick(imageList[0])}>
                  <img src={imageList[0]} alt="예시1" />
                </button>
                <button type="button" onClick={() => handleButtonClick(imageList[1])}>
                  <img src={imageList[1]} alt="예시2" />
                </button>
              </div>
            </ImageSelectionList>

          </ProfileSelectZone>
        </FormSubject>

        <FormSubject>
          <IndexMessage>상대와의 관계</IndexMessage>
          <RelationSelect value={relationship} onChange={handleRelationshipSelect} placeholder="지인">
            <option value="지인">지인</option>
            <option value="친구">친구</option>
            <option value="동료">동료</option>
            <option value="가족">가족</option>
          </RelationSelect>
        </FormSubject>

        {/* <FormSubject>
          <IndexMessage>내용을 입력해 주세요</IndexMessage>
          <TextAreaDevice>
            <TextAreaTools>
              <HandWritingTools>
                <FontStyleTools>
                  <button type="button" onClick={handleToggleBold}>
                    <img src={WritingTools[0]} alt="굵게" />
                  </button>
                  <button type="button" onClick={handleToggleItalic}>
                    <img src={WritingTools[1]} alt="기울이게" />
                  </button>
                  <button type="button" onClick={handleToggleUnderline}>
                    <img src={WritingTools[2]} alt="밑줄" />
                  </button>
                </FontStyleTools>
                <PlacementTools>
                <button type="button" onClick={handleToggleBold}>
                    <img src={WritingTools[0]} alt="가운데 정렬" />
                  </button>
                  <button type="button" onClick={handleToggleItalic}>
                    <img src={WritingTools[1]} alt="오른쪽 정렬" />
                  </button>
                  <button type="button" onClick={handleToggleUnderline}>
                    <img src={WritingTools[2]} alt="양쪽 정렬" />
                </PlacementTools>
              </HandWritingTools>
            </TextAreaTools>
            <textarea
              value={content}
              onChange={handleContentWriting}
              style={{
                fontWeight: bold ? 'bold' : 'normal',
                fontStyle: italic ? 'italic' : 'normal',
                textDecoration: underline ? 'underline' : 'none',
              }}
            />
          </TextAreaDevice>
        </FormSubject> */}

        <FormSubject>
          <IndexMessage>폰트 선택</IndexMessage>
          <RelationSelect value={font} onChange={handleFontChange}>
            <option value="Noto Sans">Noto Sans</option>
            <option value="Main">Main</option>
          </RelationSelect>
        </FormSubject>

      </Form>
    </div>
  );
}

export default WritingForm;
