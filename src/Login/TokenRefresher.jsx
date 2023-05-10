import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TokenRefresher = () => {
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: 'https://flyers.qmarket.me',
  });

  instance.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('token');

    config.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return config;
  });

  instance.interceptors.response.use(function (response) {
    console.log(1, response);

    if (response.data.message === 'CREATED NEW ACCESS TOKEN') {
      axios({
        url: 'https://flyers.qmarket.me/api/users/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => {
          localStorage.setItem('token', response.data.accessToken);
          response.config.headers['Authorization'] =
            'Bearer' + response.data.accessToken;
        })
        .then(response => {
          window.location.reload();
        });
    } else if (response.data.message === 'YOU NEED LOGIN AGAIN') {
      localStorage.clear();
      window.alert('로그인 기한이 만료되어 자동으로 로그아웃 되었습니다.');
      navigate('/');
    }

    console.log(2, response);

    return response;
  });

  return null;
};

export default TokenRefresher;
