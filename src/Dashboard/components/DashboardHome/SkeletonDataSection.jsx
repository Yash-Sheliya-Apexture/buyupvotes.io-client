import React from 'react';

const SkeletonDataSection = () => {
  return (
    <div className="w-full h-full">
      <div
        className="p-4 border rounded-small"
        style={{ minHeight: "115px" }}
      >
        <div className='flex items-center justify-between w-full h-full animate-pulse '>
          
          <div className="w-1/2">
              <div className="w-20 h-5 mb-2 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-28"></div>
          </div>
          <div className="p-4 text-gray-200">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDataSection;