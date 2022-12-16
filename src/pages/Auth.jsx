import { MailOutline, Person, Security } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { register } from '../redux/apiCalls';

const Auth = () => {
  
    const {isFetching, error} = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [page, setPage] = useState('register');
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {
          username, 
          password
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        register(dispatch, {
          username, 
          password,
          email
        })
    }

    const handlePage = (e) => {
        e.target.classList.remove('disabled')
        if(e.target.classList.contains('loginBtn')) {
            setPage('login')
           document.querySelector('.registerBtn').classList.add('disabled')
        } else {
            setPage('register')
            document.querySelector('.loginBtn').classList.add('disabled')
        }
    }
    return (
        <div className='auth'>
            <div className="wrapper">
                <h1 id='title'>{page === 'register' ? 'Sign up' : 'Sign in'}</h1>
                <form action="">
                    <div className="input-group">
                        <div className="input-field"  onChange={e => setUsername(e.target.value)}>
                            <Person className='fa'/>
                            <input type="text" placeholder='Name'/>
                        </div>

                        <div className="input-field" style={{
                            maxHeight: page === 'register' ? '50px' : '0px',
                            margin: page === 'login' && 0
                        }}>
                            <MailOutline className='fa'/>
                            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="input-field">
                            <Security className='fa'/>
                            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <p>Lost password <a href="#">Click Here!</a></p>
                    </div>
                    {
                        error && <span className="error text-danger">Something went wrong</span>
                    }
                    <div className="btn-field">
                        <button type='button' onClick={page === 'register' ? handleRegister : handlePage} className='registerBtn'  disabled={isFetching}>Sign up</button>
                        <button type='button' onClick={page === 'login' ? handleLogin : handlePage} className='disabled loginBtn'  disabled={isFetching}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;
