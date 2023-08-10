import { useState } from 'react';
import styles from './LoginForm.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';

const LoginForm = () => {
  const [email, setEmail] = useLocalStorage('email1', '');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
