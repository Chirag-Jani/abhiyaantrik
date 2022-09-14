import React from "react";
import Card from "../card";
import events from "../List";

const Home = () => {
  return (
    <div className="container mx-auto mt-3 ">
      {events.map((ele) => {
        return (
          <Card
            title={ele.name}
            department={ele.department}
            url={ele.url}
            img={ele.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
