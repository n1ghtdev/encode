import { query } from './index';

const getEncodingList = async () => {
  const sql = 'select * from encode_algorithms';
  const result = await query(sql);
  return result.rows;
};

const Encoding = {
  getEncodingList,
};

export default Encoding;
