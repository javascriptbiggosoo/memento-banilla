const localStorage = window.localStorage;

export const setItem = (key, data) => {
  const 저장할거 = JSON.stringify(data);
  try {
    localStorage.setItem(key, 저장할거);
  } catch (err) {
    alert(
      `${key} 추가에 실패 했습니다. 총 데이터 용량이 5MB를 초과된 경우일 수 있습니다.`
    );
  }
};

export const getItem = (key, defaultValue) => {
  const 가져올거 = localStorage.getItem(key);
  return JSON.parse(가져올거) || defaultValue;
};
