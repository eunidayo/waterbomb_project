document.addEventListener('DOMContentLoaded', function () {
  const articles = document.querySelectorAll('.payList article');

  articles.forEach(article => {
    article.addEventListener('click', function () {
      // 모든 article 요소에서 selected 클래스 제거
      articles.forEach(a => a.classList.remove('selected'));
      // 클릭한 article 요소에 selected 클래스 추가
      this.classList.add('selected');
    });
  });
});