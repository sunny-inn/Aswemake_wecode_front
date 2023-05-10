import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const TokenRefresher = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const refreshAPI = axios.create({
      baseURL: 'https://flyers.qmarket.me/api/users/login',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    });

    const intercepter = axios.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const originalConfig = error.config;
        const msg = error.response.data.message;

        await axios({
          url: 'https://flyers.qmarket.me/api/users/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
          .then(res => {
            localStorage.setItem('token', res.data.accessToken);
            originalConfig.headers['Authorization'] =
              'Bearer' + res.data.accessToken;
            return refreshAPI(originalConfig);
          })
          .then(res => {
            window.location.reload();
          });

        if (msg === 'YOU NEED LOGIN AGAIN') {
          localStorage.clear();
          navigate('/');
          window.alert('로그인 기한이 만료되어 자동으로 로그아웃 되었습니다.');
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.reject(intercepter);
    };
  }, []);

  return;
};
