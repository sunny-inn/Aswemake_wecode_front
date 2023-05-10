import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import * as S from './Suggest.style';

const Suggest = ({ onClose, selectedMart }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ martName: '', martPhoneNumber: '' });

  const saveInput = e => {
    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));
  };

  const onClickBack = e => {
    e.preventDefault();
    navigate(`/detail/${selectedMart.martId}`);
  };
  console.log('ㅇ에에에???', selectedMart);

  const token = localStorage.getItem('token');
  const onClickSuggestBtn = e => {
    e.preventDefault();
    const body = {
      martName: input.martName,
      martPhoneNumber: input.martPhoneNumber,
    };
    fetch(
      `https://flyers.qmarket.me/api/home/martModification/${selectedMart.martId}`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify(body),
      }
    )
      .then(response => {
        response.json();
        console.log(response);
      })
      .then(data => {
        console.log('데이터', data);
      });
    navigate('./suggestCompleted');
  };
  return (
    // <S.SuggestModalContainer>
    <>
      <Header type="suggest" onClickBack={onClickBack} />
      <S.SuggestWholeContainer>
        <S.SuggestText>
          <S.BoldText>알고 계신 정보</S.BoldText>와 &nbsp;
          <S.BoldText>다른 정보</S.BoldText>가 있나요? <br />
          먼저 제보한 분께 <S.PointedText>300P </S.PointedText>를 드립니다!
        </S.SuggestText>
        <S.TitleAndInputContainer>
          <S.TitleAndInput>
            <S.BoldText>마트 이름</S.BoldText>
            <S.SuggestInput
              name="martName"
              type="text"
              placeholder="마트 이름을 입력해주세요."
              value={input.martName}
              onChange={saveInput}
            />
          </S.TitleAndInput>
          <S.TitleAndInput>
            <S.BoldText>마트 전화번호</S.BoldText>
            <S.SuggestInput
              type="text"
              name="martPhoneNumber"
              placeholder="전화번호를 입력해주세요."
              value={input.martPhoneNumber}
              onChange={saveInput}
            />
          </S.TitleAndInput>
        </S.TitleAndInputContainer>
        <S.SuggestBtn
          onClick={onClickSuggestBtn}
          disabled={
            input.martName.length < 2 || input.martPhoneNumber.length < 2
          }
        >
          요청하기
        </S.SuggestBtn>
      </S.SuggestWholeContainer>
      {/* </S.SuggestModalContainer> */}
    </>
  );
};

export default Suggest;
