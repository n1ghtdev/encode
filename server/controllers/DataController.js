import Algorithm from '../models/algorithmModel';
import Encoding from '../models/encodingModel';

const getData = (req, res) => {
  try {
    const algorithmList = Algorithm.getAlgorithmList();
    const encodingList = Encoding.getEncodingList();

    res.status(200).json({ algorithmList, encodingList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const DataController = {
  getData,
};

export default DataController;
