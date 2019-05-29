import rsaService from '../services/rsaService';

function encrypt(req, res) {
  try {
    const cipher = rsaService(req.body);
    const result = cipher.encrypt(req.body);
    return res.status(200).json({ rsaEncrypted: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
function decrypt(req, res) {
  try {
    const cipher = rsaService(req.body);
    const result = cipher.decrypt(req.body);
    return res.status(200).json({ rsaDecrypted: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
const RSAController = {
  encrypt,
  decrypt,
};

export default RSAController;
