import axios from "axios";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async (e) => {
    try {
      e.preventDefault()
      const user = {username, password}
      let response = await axios.post('https://frontend-test-backend.tritronik.com//test/login',user)
      window.localStorage.setItem('token', response.data.token)
      history.push('/home')
    } catch (err) {
      
    }

  }
  return (
    <div>
      <form onSubmit={login}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <button type="submit" onClick={login}>Submit</button>
      </form>
      
    </div>
  )
}

export default LoginPage;