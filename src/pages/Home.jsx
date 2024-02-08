import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";
import Faq from "../components/faq";

// Mocks
import speakers from "../mocks/speakers";
import Sponsor from "../components/Sponsor";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Our Speakers"
        data={speakers}
        className="mt-[120px]"
      />
      <Sponsor />
      <Faq className="mt-[120px]" />
    </>
  );
};

export default Home;
