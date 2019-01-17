import '@babel/polyfill';
// input #text
// button #encode
// input R #encoded
// input R #key
const form = {
  button: document.getElementById('encode'),
  finalText: document.getElementById('encoded'),
  finalKey: document.getElementById('key'),
};

const encodeText = async () => {
  try {
    const result = await fetch('/api/encrypt', {
      method: 'post',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        text: document.getElementById('text').value,
        algorithm: 'aes-256-ctr',
        encodingFrom: 'uft8',
        encodingTo: 'base64',
      }),
    });
    const finalText = await result.json();
    console.log(finalText);
    return finalText;
  } catch (e) {
    console.log(e);
  }
};

// encodeText()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

form.button.addEventListener('click', encodeText);
