import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import RecipientCard from './RecipientCard';
import { getRecipients } from '../../api/GetApi';

function RecipientList() {
  const [recipients, setRecipients] = useState([]);

  const handleRecipientsLoad = async () => {
    try {
      const response = await getRecipients();
      const data = response.results;
      setRecipients(data);
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    handleRecipientsLoad();
  }, []);

  return (
    <div>
      {recipients.map((recipient) => (
        <RecipientCard key={recipient.id} recipient={recipient} />
      ))}
    </div>
  );
}

export default RecipientList;
