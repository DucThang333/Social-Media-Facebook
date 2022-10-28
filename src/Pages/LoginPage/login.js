import React, { useState } from 'react';
import LoginAction from '../../Action/LoginAction'
import { useNavigate } from 'react-router-dom'
import './Style/loginStyle.scss'
import { db } from '../../Action/config'
import { useEffect } from 'react';
const Login = () => {
    const getData = async () => {
        const a =  db.collection("Account").doc('1')
        a.get()
            .then(doc => {
                console.log(doc.data())
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()
    const [account, setAccount] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState({
        errorUsername: '',
        errorPassword: '',
        errorLogin: '',
    })
    const handleUsername = (e) => {
        setAccount({
            ...account,
            username: e.target.value
        })
    }
    const handlePassword = (e) => {
        setAccount({
            ...account,
            password: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (account.username === '') {
            setError({ errorUsername: 'username can not empty please enter again' })
            return;
        }
        if (account.password === '') {
            setError({ errorPassword: 'password can not empty please enter again' })
            return;
        }
        const checkLogin = await LoginAction(account.username, account.password)
        }
    }


    return (
        <div>
            <form className='form' onSubmit={handleLogin}>
                <div className='form-username'>
                    <label>Username</label>
                    <input nzame='username'
                        value={account.username}
                        type={'text'}
                        placeholder='enter your username'
                        className='form-input'
                        onChange={(e) => handleUsername(e)}
                    />
                </div>
                <span className='form-error'>{error.errorUsername}</span>
                <div className='form-password'>
                    <label>Password</label>
                    <input name='password'
                        value={account.password}
                        type={'password'}
                        placeholder='enter your password'
                        className='form-input'
                        onChange={(e) => handlePassword(e)}
                    />
                </div>
                <span className='form-error'>{error.errorPassword}</span><br></br>
                <div className='form-remember' >
                    <input type={'checkbox'} />
                    <span>remember</span>
                </div>
                <span className='form-error'>{error.errorLogin}</span><br></br>
                <button
                    className='form-button'
                >Login</button>
                <button
                    className='form-button form-button-create'
                >Create New Account</button>
            </form>
        </div>
    );
}

export default Login;
