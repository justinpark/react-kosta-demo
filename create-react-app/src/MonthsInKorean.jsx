import React from 'react';

function MonthsInKorean() {
  const months = Array(12).fill('');
  const monthsEls = months.map((_, index) => <li>{`${index + 1}월`}</li>);

  return (
    <ul>
      {monthsEls}
    </ul>
  );
}

export default MonthsInKorean;
