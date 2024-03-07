import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import EditorBox from '../WritingMessage/TextEditor';
import Dropdown from '../common/Dropdown';
import { getMessage, getProfile } from '../../api/GetApi';
// import Button from './Button';
import PutPatchButton from '../common/Buttons/PutPatchButton';
import { patchMessage, putMessage } from '../../api/PutPatchApi';

const FormPage = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    max-width: calc(100% - 32px);
  }
`;

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
  max-width: 720px;
  align-items: flex-start;
  gap: 50px;
`;

const FormSubject = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const InputTextContainer = styled.div`
  position: relative;

  @media (max-width: 767px) {
    min-width: 320px;
    width: 100%;
  }
`;

const InputText = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.isError ? 'var(--error)' : 'var(--gray300)')};
  background: var(--white);

  @media (max-width: 767px) {
    min-width: 320px;
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: calc(100% + 5px);
  left: calc(2%);
  color: var(--error);
`;

const ProfileSelectZone = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 32px;
`;

const ProfileZone = styled.img`
  border-radius: 100px;
  flex-wrap: wrap;
  width: 100px;

  @media (max-width: 767px) {
    width: 80px;
  }
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

const ProfileImageContainer = styled.div`
  flex-wrap: wrap;
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

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

function EditForm({ isBtnDisabled }) {
  // const imageList = ['img/image43.svg', 'img/image44.svg'];
  const nonProfileImage = ['/img/nonSelected.svg'];
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [profile, setProfile] = useState('');
  const [relation, setRelation] = useState('지인');
  const [fonts, setFonts] = useState('Noto Sans');
  const [contents, setContents] = useState('');
  const [isContent, setIsContent] = useState(true);
  const [profileImages, setProfileImages] = useState([]);
  const [originalData, setOriginalData] = useState({
    sender: '',
    profileImageURL: '',
    relationship: '',
    content: '',
    font: '',
  });
  const { id: recipientID } = useParams();
  const { messageid } = useParams();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(!e.target.value.trim());
  };

  const handleContentChange = (content) => {
    setContents(content);
  };

  const handleProfileSelect = (prof) => {
    setProfile(prof);
  };

  const handleFontChange = (font) => {
    setFonts(font);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 수정 전 기존 데이터 선언
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await getMessage(messageid);
        const message = response;

        setName(message.sender);
        setProfile(message.profileImageURL);
        setRelation(message.relationship);
        setContents(message.content);
        setFonts(message.font);
        setOriginalData({
          sender: message.sender,
          profileImageURL: message.profileImageURL,
          relationship: message.relationship,
          content: message.content,
          font: message.font,
        });
      } catch (error) {
        throw new Error('데이터를 불러오지 못했습니다.', error);
      }
    };

    fetchMessage();
  }, [messageid]);

  useEffect(() => {
    const handleImageLoad = async () => {
      try {
        const response = await getProfile();
        const result = response.imageUrls;
        setProfileImages(result);
        if (result.length > 0) {
          setProfile(result[0]);
        }
      } catch (error) {
        throw new Error('이미지를 불러오지 못했습니다.', error);
      }
    };
    handleImageLoad();
  }, []);

  useEffect(() => {
    handleProfileSelect(nonProfileImage);
  }, []);

  useEffect(() => {
    setIsContent(!!contents && !!name);
    isBtnDisabled(!!isContent);
  }, [contents, name, isContent]);

  return (
    <FormPage>
      <MainForm onSubmit={handleSubmit}>
        <FormSubject>
          <IndexMessage>From.</IndexMessage>
          <InputTextContainer>
            <InputText
              type="text"
              value={name}
              placeholder="이름을 입력해 주세요."
              onChange={handleNameChange}
              onBlur={(e) => {
                if (!e.target.value.trim()) setNameError(true);
              }}
              isError={nameError}
            />
            {nameError && <ErrorMessage>값을 입력해주세요.</ErrorMessage>}
          </InputTextContainer>
        </FormSubject>

        <FormSubject>
          <IndexMessage>프로필 이미지</IndexMessage>
          <ProfileSelectZone>
            <YourProfileImage>
              <ProfileZone src={profile} alt="프로필 이미지" />
            </YourProfileImage>
            <ImageSelectionList>
              <ImageSelectDirection>
                프로필 이미지를 선택해주세요!
              </ImageSelectDirection>
              <ProfileImageContainer>
                {profileImages.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => handleProfileSelect(image)}
                  >
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
            $state="0"
            options={['지인', '친구', '동료', '가족']}
            placeholder={relation}
            onChange={(selectedOption) => setRelation(selectedOption)}
          />
        </FormSubject>

        <FormSubject>
          <IndexMessage>내용을 입력해 주세요</IndexMessage>
          <EditorBox content={contents} onContentChange={handleContentChange} />
        </FormSubject>

        <FormSubject>
          <IndexMessage>폰트 선택</IndexMessage>
          <Dropdown
            $state="1"
            options={[
              'Noto Sans',
              'Pretendard',
              '나눔명조',
              '나눔손글씨 손편지체',
            ]}
            placeholder={fonts}
            onChange={(selectedOption) => handleFontChange(selectedOption)}
          />
        </FormSubject>
        <PutPatchButton
          onSubmit={async () => {
            const data = {
              team: '4-16',
              recipientId: recipientID,
              sender: name,
              profileImageURL: profile,
              relationship: relation,
              content: contents,
              font: fonts,
            };

            if (
              originalData.sender !== data.sender &&
              originalData.profileImageURL !== data.profileImageURL &&
              originalData.relationship !== data.relationship &&
              originalData.content !== data.content &&
              originalData.font !== data.font
            ) {
              // 모든 데이터 변경에 의한 PUT Request
              const response = await putMessage(messageid, data);
              return response.recipientId;
            }
            // 일부 데이터 변경에 의한 PATCH Request
            const response = await patchMessage(messageid, data);
            return response.recipientId;
          }}
          btnDisable={!isContent}
        />
      </MainForm>
    </FormPage>
  );
}

export default EditForm;
