import { useState } from 'react';

const SignupApi = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        // User created successfully, redirect to login or dashboard
        window.location.href = '/login';
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    handleSubmit,
    error,
  };
};

export default SignupApi;