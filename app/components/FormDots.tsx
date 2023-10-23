import React, { useEffect } from 'react';

const ProgressDots = ({ currentPart, visitedPages, updateVisitedPages, pageNumber }) => {
  useEffect(() => {
    if (pageNumber >= 0 && pageNumber <= 13) {
      updateVisitedPages(pageNumber, true);
    }
  }, [pageNumber]);

  return (
    <div className="flex flex-row gap-[13px]">
      {currentPart &&
        currentPart.map((page: string | number, index: React.Key) => (
          <div key={index} className={`${visitedPages[page] ? 'blueProgressDot' : 'lightProgressDot'} my-[30px]`}></div>
        ))}
    </div>
  );
};

export default ProgressDots;
