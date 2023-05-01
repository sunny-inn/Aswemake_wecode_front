import React, { useState } from 'react';
import * as S from './Modal.style';
import BankData from './BankData';
import StockBankData from './StockBankData';

const Modal = ({ modalOpen, onClose, onSelectBank }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      {modalOpen && (
        <S.Modal>
          <S.Title>은행 선택</S.Title>
          <S.CloseBtn onClick={handleClose}>x</S.CloseBtn>
          <S.BankGrid>
            {BankData.map((bank, id) => (
              <S.BankWrapper key={id} onClick={() => onSelectBank(bank)}>
                <S.BankImgWrapper>
                  <S.BankImg src={bank.img} />
                  <S.BankName>{bank.name}</S.BankName>
                </S.BankImgWrapper>
              </S.BankWrapper>
            ))}
          </S.BankGrid>
          <S.Title>증권사 선택</S.Title>
          {/* <p>증권사 선택</p> */}
          <S.BankGrid>
            {StockBankData.map((stock, id) => (
              <S.BankWrapper key={id} onClick={() => onSelectBank(stock)}>
                <S.BankImgWrapper>
                  <S.BankImg src={stock.img} />
                  <S.BankName>{stock.name}</S.BankName>
                </S.BankImgWrapper>
              </S.BankWrapper>
            ))}
          </S.BankGrid>
        </S.Modal>
      )}
    </div>
  );
};

export default Modal;
