import React from 'react';

export default function InvoicesTableHead() {
  return (
    <div className="table-head flex items-center bg-SoftGray px-12 py-4 overflow-hidden rounded-head">
      <div className="name w-1/4 text-base text-DarkGray font-bold Quicksand">
        Distributer
      </div>
      <div className="codes-sold w-1/4 text-base text-DarkGray font-bold Quicksand">
        Codes sold
      </div>
      <div className="amount w-[20%] text-base text-DarkGray font-bold Quicksand">
        Amount
      </div>
      <div className="invoice w-[18%] text-base text-DarkGray font-bold Quicksand">
        Invoice
      </div>
      <div className="state w-[12%] text-base text-DarkGray font-bold Quicksand flex items-center">
        State
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-14 cursor-pointer"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
            fill="#9A9FB8"
            fillOpacity="0.16"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7508 14.6632C17.0791 14.9857 17.0833 15.5132 16.7608 15.8415L12.5941 20.084C12.4374 20.2432 12.2233 20.3332 11.9999 20.3332C11.7766 20.3332 11.5624 20.2432 11.4058 20.084L7.23909 15.8415C6.91659 15.5132 6.92076 14.9857 7.24909 14.6632C7.57742 14.3407 8.10492 14.3448 8.42742 14.6732L11.1666 17.4623V4.49984C11.1666 4.03984 11.5399 3.6665 11.9999 3.6665C12.4599 3.6665 12.8333 4.03984 12.8333 4.49984V17.4623L15.5724 14.6732C15.8949 14.3448 16.4224 14.3407 16.7508 14.6632Z"
            fill="#9A9FB8"
          />
        </svg>
      </div>
    </div>
  );
}
