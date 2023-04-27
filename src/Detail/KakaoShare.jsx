const KakaoShare = (url, title, argumentKey, detailMartList) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_JAVA_SCRIPT_KEY);
    }
    console.log('마트리스트?', detailMartList[0]);

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${detailMartList[0].martName} 전단지 봐!`,
        description: `${detailMartList[0].endDate} 까지 할인한대!!!`,
        imageUrl:
          detailMartList.length > 0
            ? detailMartList[0].martFlyerImages[0]
            : './images/flyernone.png',
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