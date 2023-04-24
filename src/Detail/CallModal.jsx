import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './CallModal.style';

const CallModal = ({ detailMartList, handleModal, handlePhoneNum }) => {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.ModalTitleBox>
          <S.ModalTitle>
            {detailMartList[0].martPhoneNumber.replace(
              /(\d{2})(\d{3,4})(\d{4})/,
              '$1-$2-$3'
            )}
          </S.ModalTitle>
          <S.ModalCloseImg
            src="./images/closeImg.png"
            onClick={handleModal}
            alt="닫기"
          />
        </S.ModalTitleBox>
        <S.ModalContentBox>
          <S.ModalText>
            <a href={`tel:${detailMartList[0].martPhoneNumber}`}>전화 걸기</a>
          </S.ModalText>
          <CopyToClipboard
            text={detailMartList[0].martPhoneNumber}
            onCopy={handlePhoneNum}
          >
            <S.ModalText>클립보드 복사하기</S.ModalText>
          </CopyToClipboard>
        </S.ModalContentBox>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};
export default CallModal;
