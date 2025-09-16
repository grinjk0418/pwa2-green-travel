export const dateCalculater = {
  /**
   * 현시간 기준 timestamp 만큼 과거의 날짜를 계산하여 Date객체 반환
   * @param {number} timestamp 
   * @returns {Date} Date
   */
  getPastDate: (timestamp) => {
    const now = new Date();
    return new Date(now - timestamp); // 날짜 타임스탬프 형태를 다시 표준행태로 바꾸려고 new Date()로 감싼다
  }
}