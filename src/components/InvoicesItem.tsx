import React from 'react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Listbox, Popover, Transition } from '@headlessui/react';

export default function InvoicesItem() {
  const state = [{ name: 'pending' }, { name: 'sent' }, { name: 'paid' }];
  const [selected, setSelected] = useState(state[0]);
  return (
    <div className="table-item flex items-center px-12 py-4 transition ease-in hover:bg-SoftGray/40">
      <div className="name w-1/4">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`${
                  open ? 'font-semibold' : ''
                } text-base text-BrandBlue transition ease-in`}
              >
                <span>Bookshop</span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 left-0">
                  <div className="overflow-hidden rounded-2xl shadow-header bg-white">
                    <div className="p-4">
                      <h2 className="Quicksand text-DarkGray font-bold text-2xl">
                        BookShop
                      </h2>
                      <p className=" text-base text-DarkGray py-2">
                        <strong className="Quicksand">User name: </strong>Jonh
                        Doe
                      </p>
                      <p className=" text-base text-DarkGray py-2">
                        <strong className="Quicksand">Email: </strong>
                        <a href="mailto:jonh@bookshop.com">jonh@bookshop.com</a>
                      </p>
                      <p className=" text-base text-DarkGray py-2">
                        <strong className="Quicksand">Phone: </strong>
                        <a href="tel:+34 986 748 834">+34 986 748 834</a>
                      </p>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      <div className="codes-sold w-1/4 text-base pl-10">
        <Link href="/invoices/invoiceCodes">
          <a className="flex items-center">
            5{' '}
            <div className="eye bg-BrandBlue/10 w-8 h-8 flex items-center justify-center rounded-lg ml-2">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.83087 5.64984C2.75087 5.78317 2.6842 5.89984 2.63087 5.99984C2.6842 6.09984 2.75087 6.2165 2.83087 6.34984C3.0917 6.77484 3.49087 7.34984 4.04087 7.92484C5.13837 9.05817 6.8092 10.1665 9.20003 10.1665C11.5909 10.1665 13.2617 9.05817 14.3592 7.92484C14.9092 7.34984 15.3084 6.77484 15.5692 6.34984C15.6492 6.2165 15.7159 6.09984 15.7692 5.99984C15.7159 5.89984 15.6492 5.78317 15.5692 5.64984C15.3084 5.22484 14.9092 4.64984 14.3592 4.07484C13.2617 2.9415 11.5909 1.83317 9.20003 1.83317C6.8092 1.83317 5.13837 2.9415 4.04087 4.07484C3.49087 4.64984 3.0917 5.22484 2.83087 5.64984ZM17.4659 6.32484C17.4659 6.32484 17.4659 6.32484 16.7 5.99984L17.4659 6.32484C17.5559 6.1165 17.5559 5.88317 17.4659 5.67484L16.7 5.99984C17.4659 5.67484 17.4659 5.67484 17.4659 5.67484L17.465 5.6665H17.4642H17.4617L17.455 5.64984C17.4492 5.63317 17.4409 5.6165 17.4309 5.5915C17.41 5.54984 17.38 5.48317 17.3417 5.40817C17.2634 5.25817 17.1484 5.0415 16.9942 4.78317C16.685 4.27484 16.2134 3.59984 15.5592 2.92484C14.245 1.55817 12.1667 0.166504 9.20003 0.166504C6.23337 0.166504 4.15503 1.55817 2.84087 2.92484C2.1867 3.59984 1.71503 4.27484 1.40587 4.78317C1.2517 5.0415 1.1367 5.25817 1.05837 5.40817C1.02003 5.48317 0.990033 5.54984 0.969199 5.5915C0.959199 5.6165 0.950866 5.63317 0.945033 5.64984L0.938366 5.6665H0.935866H0.935033L0.934199 5.67484C0.934199 5.67484 0.934199 5.67484 1.70003 5.99984L0.934199 5.67484C0.844199 5.88317 0.844199 6.1165 0.934199 6.32484L1.70003 5.99984C0.934199 6.32484 0.934199 6.32484 0.934199 6.32484L0.935033 6.33317H0.935866H0.938366L0.945033 6.34984C0.950866 6.3665 0.959199 6.38317 0.969199 6.40817C0.990033 6.44984 1.02003 6.5165 1.05837 6.5915C1.1367 6.7415 1.2517 6.95817 1.40587 7.2165C1.71503 7.72484 2.1867 8.39984 2.84087 9.07484C4.15503 10.4415 6.23337 11.8332 9.20003 11.8332C12.1667 11.8332 14.245 10.4415 15.5592 9.07484C16.2134 8.39984 16.685 7.72484 16.9942 7.2165C17.1484 6.95817 17.2634 6.7415 17.3417 6.5915C17.38 6.5165 17.41 6.44984 17.4309 6.40817C17.4409 6.38317 17.4492 6.3665 17.455 6.34984L17.4617 6.33317H17.4642H17.465L17.4659 6.32484ZM9.20003 7.6665C8.2792 7.6665 7.53337 6.9165 7.53337 5.99984C7.53337 5.08317 8.2792 4.33317 9.20003 4.33317C10.1209 4.33317 10.8667 5.08317 10.8667 5.99984C10.8667 6.9165 10.1209 7.6665 9.20003 7.6665ZM5.8667 5.99984C5.8667 4.15817 7.3592 2.6665 9.20003 2.6665C11.0409 2.6665 12.5334 4.15817 12.5334 5.99984C12.5334 7.8415 11.0409 9.33317 9.20003 9.33317C7.3592 9.33317 5.8667 7.8415 5.8667 5.99984Z"
                  fill="#4A6FFF"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
      <div className="amount w-[20%] text-base">500.00€</div>
      <div className="invoice w-[18%] text-base">
        <Link href="/invoices/singleInvoice">
          <a className="text-BrandBlue">035-07-2022</a>
        </Link>
      </div>
      <div className="state w-[12%] text-base">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1 w-full max-w-[140px]">
            <Listbox.Button className="relative w-full h-[26px] rounded-lg flex items-center justify-center p-1 bg-SoftGray text-MidGray text-xs Quicksand">
              <span className="block truncate">{selected.name}</span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full z-10 py-1 overflow-auto text-base bg-white rounded-lg shadow-header max-h-60">
                {state.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${
                        active ? 'text-PrimaryGray' : 'text-DarkGray'
                      } cursor-default select-none relative py-2 px-4`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } truncate flex items-center text-sm`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18C5.582 18 2 14.418 2 10Z"
                              fill="#4A6FFF"
                            />
                          </svg>
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-amber-600' : 'text-amber-600'
                            }
                              absolute top-[14px] left-[22px] w-2 h-2 bg-BrandBlue rounded-full`}
                          >
                            <b className="hidden">a</b>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
