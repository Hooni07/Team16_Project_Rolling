import { useState } from 'react';

let indexMessage = styled.label`
  color: var(--gray900);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`

const WritingForm = () => {
  
  const [name, setName] = useState('');
  const [profile, setProfile] = useState(null);
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
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>From.</label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  </div>
)

export default WritingForm;