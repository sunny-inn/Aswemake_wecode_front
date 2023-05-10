import React, { useEffect, useState } from 'react';
import LoginLayout from '../Component/LoginLayout';
import Header from '../../Components/Header/Header';
import Input from '../Component/Input';
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
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const isDisabled =
    name.length > 2 &&
    phone.includes('010') &&
    (phone.length === 10 || phone.length === 11);

  const findIdSend = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/users/findUserId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phone,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.result && data.result.identification && data.result.name) {
          setUserId(data.result.identification);
          setUserName(data.result.name);
          navigate('/notifyid', {
            state: {
              userId: data.result.identification,
              userName: data.result.name,
            },
          });
        } else if (data.message === 'NOT EXIST ID') {
          navigate('/cntFindId');
        }
      });
  };

  return (
    <div>
      <Header type="findid" onClickBack={onClickBack} />
      <LoginLayout>
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
        <SubmitIdButton onClick={findIdSend} disabled={!isDisabled}>
          확인
        </SubmitIdButton>
      </LoginLayout>
    </div>
  );
};

export default FindId;
