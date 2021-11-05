import axios from 'axios';

export async function getLocation() {
  let response;

  let API = axios.create({
    baseURL: 'http://api.open-notify.org/iss-now.json',
    headers: {
      Accept: 'application/json',
    },
  });

  try {
    response = await API();
    response.success = true;
  } catch (err) {
    console.log('err',err)
    response = err.response; // pulls the response from the error
    if (response) response.success = false;
  }
  return response;
}
