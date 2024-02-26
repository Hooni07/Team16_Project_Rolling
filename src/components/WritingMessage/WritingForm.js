import { useState } from 'react';
import nonProfileImage from '../../../public/img/nonSelected.svg';
import exampleProfile1 from '../../../public/img/image43.svg';
import exampleProfile2 from '../../../public/img/image44.svg';

let indexMessage = styled.label`
  color: var(--gray900);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`

function WritingForm(){
  
  const [name, setName] = useState('');
  const [profile, setProfile] = useState(nonProfileImage);
  const [relationship, setRelationship] = useState('');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('');


  const handleProfileSelect = (profile) => {
    setProfile(profile);
  };

  const handleRelationshipSelect = (relationship) => {
    setRelationship(relationship);
  };

  const handleContentWriting = (content) => {
    setContent(content.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleFontChange = (font) => {
    setFont(font);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From.</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>프로필 이미지</label>
          <div>
            <img src={exampleProfile1} alt='예시1' onClick={handleProfileSelect(exampleProfile1)} />
            <img src={exampleProfile2} alt='예시2' onClick={handleProfileSelect(exampleProfile2)} />
          </div>
        </div>

        <div>
          <label>상대와의 관계</label>
          <select value={relationship} onChange={(e) => handleRelationshipSelect}>
            <option value="">관계 선택</option>
            <option value="지인">지인</option>
          </select>
        </div>

        <div>
          <label>내용을 입력해 주세요</label>
          <textarea value={content} onAbort={handleContentWriting} />
        </div>

        <div>
          <label>폰트 선택</label>
          <select value={font} onChange={(e) => handleFontChange}>
            <option value="Noto Sans">Noto Sans</option>
            <option value="Main">Main</option>
          </select>
        </div>


      </form>
    </div>
  )
}


export default WritingForm;