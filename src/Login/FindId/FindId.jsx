import React, { useEffect, useState } from 'react';
import LoginLayout from '../Component/LoginLayout';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import SubmitIdButton from '../Component/SubmitIdButton';
import { useNavigate } from 'react-router-dom';

const FindId = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isDisabled = name.length < 2 || phone.length < 5;

  const findIdSend = () => {
    fetch('https://', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phone,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div>
      <LoginLayout>
        <Header type="findid" onClickBack={onClickBack} />
        <Input
          type="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="phone"
          name="id"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <SubmitIdButton onclick={findIdSend} disabled={isDisabled}>
          확인
        </SubmitIdButton>
      </LoginLayout>
    </div>
  );
};

export default FindId;
