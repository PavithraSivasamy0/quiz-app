import { useContext, useState } from "react";
import { Questions } from "../helpers/questions";
import { pageContext } from "../context/pageContext";

export const Quiz = () => {
  const [currentQusIndex, setCurrentQusIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const { setPage, score, setScore } = useContext(pageContext);

  console.log("currentQusIndex", currentQusIndex);

  const handleOptionSelection = (e) => {
    setSelectedOption(e.target.value);
    setError("");
  };

  const handleClickNext = () => {
    if (!selectedOption) {
      setError("please select an option");
      return;
    }

    if (Questions[currentQusIndex].asnwer === selectedOption) {
      setScore(score + 1);
    }

    setCurrentQusIndex(currentQusIndex + 1);
    setError("");
    setSelectedOption("");

    if (currentQusIndex === Questions.length - 1) {
      setPage("Score");
    }
  };

  return (
    <>
      {currentQusIndex < Questions.length && (
        <>
          <p>{Questions[currentQusIndex].prompt}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <>
              {Questions[currentQusIndex].options.map((opt, index) => {
                return (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={opt}
                        checked={selectedOption === opt}
                        onChange={(e) => handleOptionSelection(e)}
                      />
                      {opt}
                    </label>
                  </div>
                );
              })}
              {error && <p className="error-text">{error}</p>}
              <button
                className="next-btn"
                type="submit"
                onClick={handleClickNext}
              >
                {currentQusIndex === Questions.length - 1 ? "Submit" : "Next"}
              </button>
            </>
          </form>
        </>
      )}
    </>
  );
};
/* 
1. display single question in a page
    1. options need to be displayed as radio buttons
    2. work on choosing both only one option and multiple option selections (multiple option yet to work on)
    3. display error as "select an option" when click on next button if option is not selected
    4. next option is selected update the current Question index as curent+1

*/
