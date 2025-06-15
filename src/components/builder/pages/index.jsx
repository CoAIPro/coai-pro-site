import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";

const Pages = () => {
  const pages = ["Untitled", "How It Works", "Testimonials", "About Us"];
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const modalRef = useRef(null);

  const toggleModal = (index) => {
    setOpenModalIndex(prev => (prev === index ? null : index));
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setOpenModalIndex(null);
      }
    };

    if (openModalIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModalIndex]);

  return (
    <>
      {/* Search bar */}
      <div className="w-full relative">
        <input
          type="text"
          className="w-full h-full bg-[#EEF2FF] pl-14 pr-3 py-5 rounded-xl"
          placeholder="Search Pages..."
        />
        <span className="absolute left-4 top-1/2 -translate-y-[50%] text-2xl">
          <CiSearch />
        </span>
      </div>

      {/* Add new page button */}
      <button className="w-full text-center bg-primary py-5 text-white rounded-xl block cursor-pointer mt-5">
        Add New Page
      </button>

      <h2 className="pt-4 pb-5 text-lg font-primary font-semibold">Pages</h2>

      {/* Pages list */}
      <div className="space-y-4">
        {pages.map((page, idx) => (
          <div
            key={idx}
            className="p-4 text-dark bg-[#F6F6F6] hover:bg-[#E6F2FF] rounded-xl group relative duration-200"
          >
            {page}

            {/* Icons */}
            <div className="absolute right-5 top-1/2 -translate-y-[50%] space-x-3 text-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200">
              <button
                className="text-[#0000004D]"
                onClick={() => toggleModal(idx)}
              >
                <SlOptions />
              </button>
              <button className="text-[#0000004D]">
                <IoEyeSharp />
              </button>
            </div>

            {/* Options modal */}
            {openModalIndex === idx && (
              <div
                ref={modalRef}
                className="absolute top-0 -right-[160px] bg-white rounded-xl overflow-hidden shadow-md z-10"
              >
                <button className="bg-transparent hover:bg-primary hover:text-white duration-200 block w-full px-6 py-3">
                  Rename
                </button>
                <button className="bg-transparent hover:bg-primary hover:text-white duration-200 block w-full px-6 py-3">
                  Duplicate
                </button>
                <button className="bg-transparent hover:bg-primary hover:text-white duration-200 block w-full px-6 py-3">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Pages;
