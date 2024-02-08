import React from "react";

// Components
import Main from "../components/Main";
import Row from "../components/Row";

// Mocks
import speakers from "../mocks/speakers";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Our Speakers" data={speakers} />
    </>
  );
};

export default Home;
