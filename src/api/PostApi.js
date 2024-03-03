import { postData } from './DataMethodApi';

// 롤링페이퍼를 생성 후 POST
export function submitRollingPost(data) {
  return postData('/recipients/', data);
}

// 대상에게 보내는 매세지 생성 후 POST
export function submitMessagePost(recipientId, data) {
  return postData(`/${recipientId}/messages/`, data);
}
