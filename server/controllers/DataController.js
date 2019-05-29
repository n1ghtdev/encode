import Algorithm from '../models/algorithmModel';
import Encoding from '../models/encodingModel';

const getData = async (req, res) => {
  try {
    const [algorithmList, encodingList] = await Promise.all([
      Algorithm.getAlgorithmList(),
      Encoding.getEncodingList(),
    ]);
    res.status(200).json({ algorithmList, encodingList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const DataController = {
  getData,
};

export default DataController;
