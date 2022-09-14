import React from "react";

const CutTheChase = () => {
  return (
    <div className="mx-4">
      <h1>Cut the Chase</h1>
      <ol className="text-start">
        <li className="my-4">
          [1] One can participate with 3 members in the team, but not more than
          that.
        </li>
        <li className="my-4">
          {" "}
          [2] Leader should report to the coordinator for any queries.
        </li>
        <li className="my-4">
          [3] Members should cooperate with the student coordinators and
          incharge of events otherwise necessary actions might be taken against
          them for disqualification.
        </li>
        <li className="my-4">
          [4] Candidates will be notified about the starting and ending points
          in the link provided later on. Be alert during the procedural
          explanation of the game by the student coordinator.
        </li>
        <li className="my-4">
          [5] Candidates must report at the given time by coordinators for easy
          convenience.
        </li>
      </ol>
      <a
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdErleNZYuRhhuFB8SZLT2sId2cO78Ih5vPAXNNAwO_hzjnTw/viewform?usp=sf_link"
      >
        Fill The Form
      </a>
    </div>
  );
};

export default CutTheChase;
