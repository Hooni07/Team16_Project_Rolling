import { deleteData } from './DataMethodApi';

export function deleteMessages(MessageID) {
  return deleteData(`/messages/${MessageID}/`);
}

export function deleteRecipient(recipientID) {
  return deleteData(`/recipients/${recipientID}/`);
}
