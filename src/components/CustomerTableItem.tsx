import React from 'react';

export default function CustomerTableItem() {
  return (
    <div className="table-item flex items-center pl-12 pr-4 py-3 transition ease-in hover:bg-SoftGray/40 border-t border-solid border-SoftGray">
      <div className="email w-1/3 text-base text-left">
        <a href="mailto:user@gmail.com">user@gmail.com</a>
      </div>
      <div className="name w-1/3 text-base text-left">Customer name</div>
      <div className="company w-1/3 text-base text-left">School name</div>
    </div>
  );
}
