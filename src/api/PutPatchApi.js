import { patchData, putData } from './DataMethodApi';

export function putMessage(id, message) {
  return putData(`/messages/${id}/`, message);
}

export function patchMessage(id, message) {
  return patchData(`/messages/${id}/`, message);
}
