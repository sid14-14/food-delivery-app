import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};

export default Home;
