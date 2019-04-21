const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const makeRequest = async (url, method = 'get', data, headers = defaultHeaders) => {
  if (url && data) {
    try {
      const response = await fetch(
        url,
        {
          method,
          mode: 'cors',
          headers,
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (e) {
      throw e.message;
    }
  }
};

export default makeRequest;
