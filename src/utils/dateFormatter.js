export const dateFormatter = {
  /**
   * 스트링 타입의 날짜(YYYYMMDD ~ YYYYMMDDhhmiss)를 `YYYY-MM-DD`로 포맷해서 반환
   * @param {string} strDate 
   * @returns {string} YYYY-MM-DD 포맷
   */
  withHyphenYMD: (strDate) => {
    return `${strDate.slice(0, 4)}-${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  },
  /**
   * Date객체를 `YYYYMMDD` 포맷으로 반환
   * @param {Date} date 
   * @returns {string} `YYYYMMDD` 포맷
   */
  formatDateToYMD: (date) => {
    return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}`;
  },
}

// TODO: 테스트 코드 삭제 필요
// 모듈은 터미널에서 node .\src\utils\dateFormatter.js 이런식으로 간단히 테스트 해볼수 있다.
// const now = new Date('2025-01-01');
// console.log(dateFormatter.formatDateToYMD(now));