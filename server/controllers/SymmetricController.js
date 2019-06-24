import symmetricService from '../services/symmetricService';

function encrypt(req, res) {
  try {
    const cipher = symmetricService(req.body);
    const result = cipher.encrypt(req.body);
    return res.status(200).json({ encrypted: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
function decrypt(req, res) {
  try {
    const cipher = symmetricService(req.body);
    const result = cipher.decrypt(req.body);
    return res.status(200).json({ decrypted: result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
const SymmetricController = {
  encrypt,
  decrypt,
};

export default SymmetricController;
