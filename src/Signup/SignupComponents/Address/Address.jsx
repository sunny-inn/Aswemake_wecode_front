import React from 'react';
import * as S from './Address.style';

const Address = (
  postalCode,
  address,
  addressDetail,
  handleClick,
  handleAddressDetail
) => {
  return (
    <p>address</p>
    // <div>
    //   {!address ? (
    //     <>
    //       <label>주소 찾기</label>
    //       <button type="button" onClick={handleClick}>
    //         주소 검색
    //       </button>
    //     </>
    //   ) : (
    //     <>
    //       <label>주소</label>
    //       <input name="postalCode" value={postalCode} readOnly />
    //       <input name="address" value={address} readOnly />
    //       <input
    //         name="addressDetail"
    //         value={addressDetail}
    //         type="text"
    //         onChange={handleAddressDetail}
    //         placeholder="상세 주소"
    //       />
    //     </>
    //   )}
    // </div>
  );
};

export default Address;
