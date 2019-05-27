import { Pool } from 'pg';
import { dbConfig } from '../config/config';

const pool = new Pool({
  user: dbConfig.user,
  host: 'localhost',
  database: 'encode',
  password: dbConfig.password,
  port: 5432,
});

export const query = async sql => {
  const client = await pool.connect();
  let result;
  try {
    result = await client.query(sql);
  } catch (error) {
    throw error;
  }
  client.release();
  return result;
};
