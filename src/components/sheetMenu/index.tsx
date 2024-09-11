'use client'
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default function SheetMenu() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const [sheetClass, setSheetClass] = useState('invisible hidden');

  const changeState = () => {
    setIsVisibleMenu(!isVisibleMenu);

    if (isVisibleMenu) {
      setTimeout(() => setSheetClass('invisible hidden'), 100);
    } else {
      setSheetClass('visible');
    }
  };

  return (
    <>
      {/* Button to open the sheet menu */}
      <button
        className="fixed top-3 right-3 z-10 w-10 h-10 rounded-md bg-main1 shadow-sm shadow-neutral-600 flex w410:hidden justify-center items-center"
        onClick={() => changeState()}
      >
        <AiOutlineMenuFold className="text-2xl text-text3" />
      </button>
      {/* Button to open the sheet menu */}


      {/* Background overlay when menu is open */}
      <div
        className={`fixed overflow-hidden w410:hidden w-[100vw] h-[100vh] top-0 left-0 z-30 bg-black/50 transition-opacity duration-300 ${
          isVisibleMenu ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => changeState()}
      />
      {/* Background overlay when menu is open */}

      {/* sheet menu */}
      <div
        className={`fixed top-0 right-0 h-full p-3 pt-7 bg-main1 shadow-lg shadow-black z-40 transition-all duration-300 ${
          isVisibleMenu ? 'w-1/2 visible' : 'w-0 invisible'
        } ${sheetClass}`}
      >
        <button
          onClick={() => changeState()}
          className={`absolute top-2 right-2 ${
            isVisibleMenu ? 'visible' : 'hidden'
          }`}
        >
          <IoClose className="text-text3 text-2xl" />
        </button>

        <nav>
          <ul className="flex flex-col gap-2 mt-3" onClick={() => changeState()}>
            <li>
              <Link href="#showCase" className="text2">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="#social" className="text2">
                Social
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* sheet menu */}
    </>
  );
}
