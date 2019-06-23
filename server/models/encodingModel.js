import fs from 'fs';

// import { query } from './index';

const getEncodingList = () => {
  // const sql = 'select * from encode_algorithms';
  // const result = await query(sql);
  // return result.rows;
  const data = fs.readFileSync(__dirname + '/encodings.json');

  return JSON.parse(data);
};

const Encoding = {
  getEncodingList,
};

export default Encoding;
