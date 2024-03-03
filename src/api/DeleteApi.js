import { deleteData } from './DataMethodApi';

export function deleteMessages(id) {
  return deleteData(`/messages/${id}`);
}

export function deleteRecipient(id) {
  return deleteData(`/recipients/${id}`);
}
