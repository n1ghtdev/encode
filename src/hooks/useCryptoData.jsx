import algorithmList from '../encryptions.json';
import encodingsList from '../encodings.json';

const useCryptoData = () => ({
  encryptions: algorithmList,
  encodings: encodingsList,
});

export default useCryptoData;
