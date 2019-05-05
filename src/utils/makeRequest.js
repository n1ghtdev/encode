const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export async function getRequest(url) {
  if (url) {
    try {
      const response = await fetch(url, {
        method: 'get',
        headers: defaultHeaders,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error.message;
    }
  }
  return null;
}

export async function postRequest(url, body) {
  if (url) {
    try {
      console.log(body);
      const response = await fetch(url, {
        method: 'post',
        headers: defaultHeaders,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error.message;
    }
  }
  return null;
}
