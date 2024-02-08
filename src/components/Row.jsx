import React, { useState } from "react";
import Container from "./Container";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Modal component
const Modal = ({
  imageUrl,
  title,
  about,
  linkedInLink,
  githubLink,
  onClose,
}) => (
  <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70">
    <div className="bg-white p-4 rounded-lg w-[700px] h-[400px] flex flex-row-reverse">
      <img
        src={imageUrl}
        alt={title}
        className="w-1/2 h-auto rounded-lg object-cover"
      />
      <div className="w-1/2 px-4 flex justify-end flex-col items-start gap-[2px]">
        <h2 className="text-3xl font-[900] mt-2">{title}</h2>
        <p className="mt-1">{about}</p>
        <div className="flex mt-4">
          {linkedInLink && (
            <a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1"
            >
              <button className="bg-primary text-white py-3 px-5 rounded-[6px] flex justify-center items-center gap-[5px]">
                <svg
                  className="w-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </button>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="border text-white border-[#3a3838] bg-[#3a3838] py-3 px-5 ml-1 rounded-[6px] flex justify-center items-center gap-[5px]">
                <svg
                  className="w-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Github
              </button>
            </a>
          )}
        </div>
        <button
          onClick={onClose}
          className=" text-black underline rounded-lg mt-2"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const Row = ({ title, data, rowID, className = "" }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // Function to handle opening the modal
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const divArray = data.map((item, index) => (
    <div
      key={index}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      onClick={() => handleOpenModal(item)}
    >
      <img
        className="w-full h-auto block rounded-[7px] relative"
        src={item.backdrop_path}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 bg-black hover:opacity-60 transition-opacity duration-300">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-view absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
          </svg>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={className}>
      <Container>
        <h2 className="text-white font-bold md:text-3xl">{title}</h2>
      </Container>
      <div className="mt-[42px] relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {divArray}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
      {modalOpen && selectedItem && (
        <Modal
          imageUrl={selectedItem.backdrop_path}
          title={selectedItem.title}
          about={selectedItem.about}
          linkedInLink={"https://www.linkedin.com/in/daudirfan"}
          githubLink={"https://www.linkedin.com/in/daudirfan"}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Row;
