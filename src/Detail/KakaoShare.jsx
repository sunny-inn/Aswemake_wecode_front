const APP_JAVA_KEY = 'a320e86acb93342abb996dc9556d6c55';

const KakaoShare = (url, title, argumentKey, detailMartList) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(APP_JAVA_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${detailMartList[0].martName} 전단지 봐!`,
        description: `${detailMartList[0].endDate} 까지 할인한대!!!`,
        imageUrl:
          detailMartList.length > 0
            ? detailMartList[0].martFlyerImages[0].imageUrl
            : '/images/flyernone.png',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '전단지 구경하기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
};

export default KakaoShare;
