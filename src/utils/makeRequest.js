const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export async function makeRequest(url, method = 'get', body = {}) {
  if (url) {
    try {
      const response = await fetch(url, {
        method,
        headers: defaultHeaders,
        body: JSON.stringify(body),
      });
      console.log(body);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw error.message;
    }
  }
  return null;
}
