import React from 'react';
import * as S from './SetPoint.style';
import Header from '../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SetPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';
  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <Header type="withdraw" onClickBack={onClickBack} />
      <S.Container>
        <S.Name></S.Name>
        <span>&nbsp;님</span>
        {/* <div>asdfsdf</div> */}
        <S.Inform>&nbsp;&nbsp;9000원</S.Inform>
        <S.Inform>&nbsp;&nbsp;인출 요청이 완료되었습니다!</S.Inform>
      </S.Container>
      <Link to="/">
        <S.FinBtn>확인</S.FinBtn>
      </Link>
    </div>
  );
};

export default SetPoint;
