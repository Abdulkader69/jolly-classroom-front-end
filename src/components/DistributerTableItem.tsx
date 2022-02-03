import React from 'react';

export default function DistributerTableItem() {
  return (
    <div className="table-item flex items-center pl-12 pr-4 py-3 transition ease-in hover:bg-SoftGray/40">
      <div className="email w-1/4 text-base text-left">
        <a href="mailto:user@gmail.com" className="text-BrandBlue">
          user@gmail.com
        </a>
      </div>
      <div className="name w-1/4 text-base text-left">User name</div>
      <div className="company w-1/4 text-base text-left">Book shop name</div>
      <div className="action w-1/4 text-base text-right">
        <button
          type="button"
          className="flex items-center mr-0 ml-auto bg-SoftGray rounded-lg py-2 px-3 text-MidGray Quicksand transition ease-in hover:bg-red-500 hover:text-white"
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.55 3.1665H11.3333C11.3333 1.78567 10.2142 0.666504 8.83333 0.666504H7.16667C5.78583 0.666504 4.66667 1.78567 4.66667 3.1665H4.11917H3.83333H3.8325H1.33333C0.873333 3.1665 0.5 3.53984 0.5 3.99984C0.5 4.45984 0.873333 4.83317 1.33333 4.83317H2.16667V14.8332C2.16667 16.214 3.28583 17.3332 4.66667 17.3332H11.3333C12.7142 17.3332 13.8333 16.214 13.8333 14.8332V4.83317H14.6667C15.1267 4.83317 15.5 4.45984 15.5 3.99984C15.5 3.53984 15.1267 3.1665 14.6667 3.1665H12.1683H12.1667H11.55ZM12.1667 4.83317H10.5H9.66667H6.33333H5.5H3.83333V6.49984V14.8332C3.83333 15.2932 4.20667 15.6665 4.66667 15.6665H11.3333C11.7933 15.6665 12.1667 15.2932 12.1667 14.8332V6.49984V4.83317ZM6.33333 3.1665H7.16667H8H8.83333H9.66667C9.66667 2.7065 9.29333 2.33317 8.83333 2.33317H7.16667C6.70667 2.33317 6.33333 2.7065 6.33333 3.1665ZM6.33333 6.49984C6.79333 6.49984 7.16667 6.87317 7.16667 7.33317V13.1665C7.16667 13.6265 6.79333 13.9998 6.33333 13.9998C5.87333 13.9998 5.5 13.6265 5.5 13.1665V7.33317C5.5 6.87317 5.87333 6.49984 6.33333 6.49984ZM10.5 7.33317C10.5 6.87317 10.1267 6.49984 9.66667 6.49984C9.20667 6.49984 8.83333 6.87317 8.83333 7.33317V13.1665C8.83333 13.6265 9.20667 13.9998 9.66667 13.9998C10.1267 13.9998 10.5 13.6265 10.5 13.1665V7.33317Z"
              fill="#9A9FB8"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
