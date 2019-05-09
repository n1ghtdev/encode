import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'encode',
  password: 'qwe123',
  port: 5432,
});

export const getTest = (req, res) => {
  pool.query('select * from encrypt_algorithms', (err, result) => {
    if (err) {
      throw err;
    }
    return result.rows;
  });
};
