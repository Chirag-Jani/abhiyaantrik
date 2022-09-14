import React from "react";

const PaperCupRace = () => {
  return (
    <div>
      <h1>Paper Cup Race</h1>
      <p> Event Type: Group of 2-3 students (Technical)</p>{" "}
      <p> (Non-Technical)</p>
      <p>Department: CE</p>
      <p>
        Description: Each team will be given 5 Engineering Mathematics MCQs
        which they’ll need to solve within the given amount of time. For every
        correct answer, each team will have a chance to move the paper cups from
        the starting line to the ending line (using air blown in the balloon).
        The team with maximum number of paper cups at the ending line will be
        the winning team.
      </p>
      <p>Venue: EG Hall</p>
      <p>
        Rules: If the paper cup falls before reaching the ending line, the
        student can continue to move paper cup from it’s previous point from
        where it fell down. Only 1 paper cup will be considered for one correct
        answer.
      </p>
      <p>Coordinators: Roshni Jain (8780282257) Parth Desai (9978670800)</p>
      <a
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdeEk7nRoupVG80i6jDVcJiiuGSVWPE6SAwckX-FHGqefNmjQ/viewform?usp=sf_link"
      >
        Fill The Form
      </a>
    </div>
  );
};

export default PaperCupRace;
