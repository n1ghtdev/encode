import { postRequest } from './utils/makeRequest';
import algorithmList from './encryptions.json';
import encodingsList from './encodings.json';

// class Encryption {
//   constructor() {}
// }

const API_URI = 'http://localhost:3000/api';
export class SymmetricEncryption {
  constructor() {
    this.algorithmList = algorithmList;
    this.encodingsList = encodingsList;
  }
  encrypt = async body => {
    try {
      const response = await postRequest(`${API_URI}/encrypt`, body);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  decrypt = body => {};
}
export class RSAEncryption {}

// or hooks like useSymmetricEncryption
// () => enclist, alglist, encrypt(body), loading, respData
