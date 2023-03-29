import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import * as S from './Address.style';

const Address = (
  postalCode,
  address,
  addressDetail,
  setSignupInfo,
  handleAddressDetail
) => {
  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = data => {
    let postalCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setSignupInfo(prev => ({
      ...prev,
      postalCode,
      address: fullAddress,
    }));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      {!address ? (
        <button type="button" onClick={handleClick}>
          주소 검색
        </button>
      ) : (
        <div>
          <input name="postalCode" value={postalCode} readOnly />
          <input name="address" value={address} readOnly />
          <input
            name="addressDetail"
            value={addressDetail}
            type="text"
            onChange={handleAddressDetail}
            placeholder="상세 주소"
          />
        </div>
      )}
    </div>
  );
};

export default Address;
