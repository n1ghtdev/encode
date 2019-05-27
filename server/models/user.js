import { query } from './index';

async function getUser(id) {
  const sql = `select * from users where users.id = ${id}`;
  const result = await query(sql);
  return result;
}

async function getUserByEmail(email) {
  const sql = {
    text: 'select * from users where users.email = $1',
    values: [email],
  };
  const result = await query(sql);
  console.log(result.rows);
  return result.rows[0];
}

async function createUser(username, hashPassword, email) {
  const sql = {
    text: 'insert into users(username, password, email) values ($1, $2, $3)',
    values: [username, hashPassword, email.toLowerCase()],
  };

  const result = await query(sql);
  return result.rowCount;
}

const User = {
  getUser,
  getUserByEmail,
  createUser,
};

export default User;
