export default function validateUser({ email, password }) {
  const isValidEmail = typeof email === 'string' && email.trim() !== '';
  const isValidPassword =
    typeof password === 'string' && password.trim() !== '';

  return isValidEmail && isValidPassword;
}
