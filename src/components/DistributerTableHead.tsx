import React from 'react';

export default function DistributerTableHead() {
  return (
    <div className="table-head flex items-center bg-SoftGray pl-12 pr-4 py-4 overflow-hidden rounded-head">
      <div className="email w-1/4 text-base text-DarkGray font-bold Quicksand text-left">
        Email
      </div>
      <div className="name w-1/4 text-base text-DarkGray font-bold Quicksand text-left">
        Name
      </div>
      <div className="company w-1/4 text-base text-DarkGray font-bold Quicksand text-left">
        Company
      </div>
      <div className="action w-1/4 text-base text-DarkGray font-bold Quicksand text-left"></div>
    </div>
  );
}
