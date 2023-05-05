import React, { useState } from 'react';
import Header from '../../../../Components/Header/Header';
import DropOutSuccess from './DropOutSuccess';
import * as S from './DropOut.style';
import { useEffect } from 'react';

const DropOut = ({ setModalOpen, totalPoints }) => {
  const [successDropOut, setSuccessDropOut] = useState(false);
  const [selected, setSelected] = useState('1');
  const [isClicked, setIsClicked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [dropOutReason, setDropOutReason] = useState('사용 빈도가 낮음');

  const handleModal = () => {
    setSuccessDropOut(prev => !prev);
  };

  const onClickBack = () => {
    setModalOpen(prev => !prev);
  };

  const handleSelectReason = e => {
    setSelected(e.target.value);

    if (e.target.value === '1') {
      setDropOutReason('사용 빈도가 낮음');
    } else if (e.target.value === '2') {
      setDropOutReason('자주가는 마트가 없음');
    } else if (e.target.value === '3') {
      setDropOutReason(textAreaValue);
    }
  };

  useEffect(() => {
    if (selected === '3') {
      setDropOutReason(textAreaValue);
    }
  }, [selected, textAreaValue]);

  //탈퇴하기 버튼 눌렀을 때 실행되는 함수
  const toDropOut = () => {
    fetch('https://flyers.qmarket.me/api/users/deleteRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        withdrawReason: dropOutReason,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'USER_DELETE_REQUESTED') {
          setSuccessDropOut(true);
        }
      });
  };

  return (
    <S.DropOut>
      {successDropOut && <DropOutSuccess />}
      <Header type="dropOut" onClickBack={onClickBack} />
      <S.DropOutBody>
        <S.DropOutText>
          그동안 전단지도를 이용해주셔서 감사합니다. <br />
          탈퇴 시, 포인트 <b>{totalPoints}P</b>는 소멸됩니다.
        </S.DropOutText>
        <S.DropOutTitle margin="22px 0 25px 0">
          탈퇴하시려는 이유를 선택해주세요.
        </S.DropOutTitle>
        <ul>
          <S.DropOutReasonLi>
            <S.DropOutReasonLabel htmlFor="tab1">
              <input
                type="image"
                id="tab1"
                src={
                  selected === '1'
                    ? '/images/mypage/selected.png'
                    : '/images/mypage/unselected.png'
                }
                alt="selected"
                onClick={handleSelectReason}
                role="tab"
                value="1"
                aria-selected={selected === '1'}
              />
              <span aria-selected={selected === '1'}>사용 빈도가 낮음</span>
            </S.DropOutReasonLabel>
          </S.DropOutReasonLi>
          <S.DropOutReasonLi>
            <S.DropOutReasonLabel htmlFor="tab2">
              <input
                type="image"
                id="tab2"
                src={
                  selected === '2'
                    ? '/images/mypage/selected.png'
                    : '/images/mypage/unselected.png'
                }
                alt="unselected"
                onClick={handleSelectReason}
                role="tab"
                value="2"
                aria-selected={selected === '2'}
              />
              <span aria-selected={selected === '2'}>자주가는 마트가 없음</span>
            </S.DropOutReasonLabel>
          </S.DropOutReasonLi>
          <S.DropOutReasonLi>
            <S.DropOutReasonLabel htmlFor="tab3">
              <input
                type="image"
                id="tab3"
                src={
                  selected === '3'
                    ? '/images/mypage/selected.png'
                    : '/images/mypage/unselected.png'
                }
                alt="unselected"
                onClick={handleSelectReason}
                role="tab"
                value="3"
                aria-selected={selected === '3'}
              />
              <span aria-selected={selected === '3'}>기타</span>
            </S.DropOutReasonLabel>
          </S.DropOutReasonLi>
          <S.DropOutReasonEtc
            placeholder="더 나은 전단지도가 될 수 있도록 의견을 들려주세요."
            disabled={selected !== '3'}
            onChange={e => setTextAreaValue(e.target.value)}
            value={textAreaValue}
          />
        </ul>
        <S.DropOutTitle margin="40px 0 8px 0">꼭 확인해주세요!</S.DropOutTitle>
        <ul>
          <S.DropOutConfirmLi>
            • 회원탈퇴 시 계정과 관련된 정보는 복구가 불가능합니다.
          </S.DropOutConfirmLi>
          <S.DropOutConfirmLi>
            • 현재 보유중인 포인트는 모두 소멸됩니다.
          </S.DropOutConfirmLi>
          <S.DropOutConfirmLi>
            • 회원탈퇴 후 30일 이내 재 로그인 시, 탈퇴가 취소됩니다.
          </S.DropOutConfirmLi>
        </ul>
        <S.DropOutAgree>
          <S.DropOutAgreeLabel htmlFor="agree">
            <input
              type="image"
              id="agree"
              src={
                isClicked
                  ? '/images/checkedImg.png'
                  : '/images/uncheckedImg.png'
              }
              alt="unchecked"
              onClick={() => {
                setIsClicked(prev => !prev);
              }}
            />
            <S.DropOutAgreeText>
              위 내용을 숙지하였으며 탈퇴에 동의합니다.
            </S.DropOutAgreeText>
          </S.DropOutAgreeLabel>
        </S.DropOutAgree>
      </S.DropOutBody>
      <S.ConfirmBtn
        onClick={toDropOut}
        disabled={!isClicked || (selected === '3' && textAreaValue === '')}
      >
        탈퇴하기
      </S.ConfirmBtn>
    </S.DropOut>
  );
};

export default DropOut;
