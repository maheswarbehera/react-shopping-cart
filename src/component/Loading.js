import React from 'react';

const Loading = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
        <span className="relative flex h-14 w-14 ">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-14 w-14 bg-sky-500"></span>
</span>
</div>
      
    </div>
  );
}

export default Loading;
