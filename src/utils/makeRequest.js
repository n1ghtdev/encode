const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export async function getRequest(url, headers = null) {
  if (url) {
    try {
      const response = await fetch(url, {
        method: 'get',
        headers: { ...defaultHeaders, ...headers },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error.message;
    }
  }
  return null;
}

export async function postRequest(url, body, headers = null) {
  if (url) {
    try {
      const response = await fetch(url, {
        credentials: 'include',
        method: 'post',
        headers: { ...defaultHeaders, ...headers },
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
