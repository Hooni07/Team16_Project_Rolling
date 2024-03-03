import axios from 'axios';

const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '/4-16';

// background, profile image fetch
export async function fetchImages(endpoint) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

export async function fetchRecipients(endpoint) {
  try {
    const response = await axios.get(`${BASE_URL}${TEAM}${endpoint}`, {
      headers: {
        accept: 'application/json',
        'X-CSRFToken':
          'fMj2sOIqI9AcFOHzN97CRfUfKEmwG2fzuuVyuBRGtONF3PqIUvMX0XnEOEgXEjSn',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

// data POST
export async function postData(endpoint, data) {
  try {
    const response = await axios.post(`${BASE_URL}${TEAM}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

// data PUT
export async function putData(endpoint, data) {
  try {
    const response = await axios.put(`${BASE_URL}${TEAM}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

// data DELETE
export async function deleteData(endpoint) {
  try {
    const response = await axios.delete(`${BASE_URL}${TEAM}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

// data PATCH
export async function patchData(endpoint, data) {
  try {
    const response = await axios.patch(`${BASE_URL}${TEAM}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}
