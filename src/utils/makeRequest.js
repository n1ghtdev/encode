const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export async function postRequest(url, body, headers = null) {
  const response = await fetch(url, {
    credentials: 'include',
    method: 'post',
    headers: { ...defaultHeaders, ...headers },
    body: JSON.stringify(body),
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw new Error(response.status);
}
