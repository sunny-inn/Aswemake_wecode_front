import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TokenRefresher = () => {
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: 'https://flyers.qmarket.me',
    withCredentials: true,
  });

  instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('token');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const originalRequest = error.config;

      if (error.response.data.message === 'CREATED NEW ACCESS TOKEN') {
        try {
          const response = await instance.post(
            'https://flyers.qmarket.me/api/users/login'
          );
          const token = response.data.accessToken;
          localStorage.setItem('token', token);

          return instance(originalRequest);
        } catch (e) {
          localStorage.removeItem('token');
          navigate('/');
        }
      }
      return Promise.reject(error);
    }
    // if (response.data.message === 'CREATED NEW ACCESS TOKEN') {
    //   axios({
    //     url: 'https://flyers.qmarket.me/api/users/login',
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //     },
    //   })
    //     .then(response => {
    //       localStorage.setItem('token', response.data.accessToken);
    //       instance.defaults.headers.common['Authorization'] =
    //         'Bearer' + response.data.accessToken;
    //     })
    //     .then(response => {
    //       window.location.reload();
    //     });
    // } else if (response.data.message === 'YOU NEED LOGIN AGAIN') {
    //   localStorage.clear();
    //   window.alert('로그인 기한이 만료되어 자동으로 로그아웃 되었습니다.');
    //   navigate('/');
    // }

    // console.log(2, response);

    // return response;
  );

  return null;
};

export default TokenRefresher;
