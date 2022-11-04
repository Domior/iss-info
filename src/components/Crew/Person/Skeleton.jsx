import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={390}
      height={100}
      viewBox="0 0 390 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#b4b4b4"
    >
      <rect x="110" y="40" rx="3" ry="3" width="132" height="21" />
      <circle cx="55" cy="50" r="37.5" />
    </ContentLoader>
  );
};

export default Skeleton;
