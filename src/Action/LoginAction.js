import React from 'react';
import {getAllAccount} from './APIAction'


const LoginAction =async (username,password)  => {
    const listAccount =  await getAllAccount()
    const account = listAccount.find(
        (item) => (item.username === username) 
        && (item.password === password))
    return account
}

export default LoginAction;
