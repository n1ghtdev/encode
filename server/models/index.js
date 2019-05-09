import { Pool } from 'pg';
import { dbConfig } from '../config/config';

const pool = new Pool({
  user: dbConfig.user,
  host: 'localhost',
  database: 'encode',
  password: dbConfig.password,
  port: 5432,
});

export const query = async (sql) => {
  const client = await pool.connect();
  let result;
  try {
    client.release();
    result = await client.query(sql);
  } catch (error) {
    client.release();
    throw error;
  }

  return result.rows;
};
