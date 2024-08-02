document.addEventListener('DOMContentLoaded', function () {
  // 데이터 배열
  const infoData = [
    { label: '결제금액', value: '220,000원' },
    { label: '결제일자', value: '2024.6.30' },
    { label: '결제수단', value: '카카오페이(3177)' },
    { label: '지역', value: 'SEOUL' },
    { label: '좌석', value: 'VIP_BLUE' },
    { label: '날짜', value: '2024.7.5(SUN)' },
  ];

  const infolist = document.querySelector('.infolist');

  infoData.forEach(info => {
    const item = document.createElement('div');
    item.innerHTML = `<h2>${info.label}</h2><span class="paymentData">${info.value}</span>`;
    infolist.appendChild(item);
  });
});




