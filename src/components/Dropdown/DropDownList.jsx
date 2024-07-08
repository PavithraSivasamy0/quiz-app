import { useState } from "react";
import states from "../../helpers/indianStates.json";

export const DropDownList = () => {
  const [statesList] = useState(states.states);
  const [selectedState, setSelectedState] = useState("");
  const [districtList, setDistrictList] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isSubmited, setIsSubmitted] = useState(false);

  const handleStateSelection = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
    const dis = statesList.find((state) => state.state === e.target.value);
    setDistrictList(dis?.districts);
    setIsSubmitted(false);
  };

  const handleDistrictSelection = (e) => {
    setSelectedDistrict(e.target.value);
    setIsSubmitted(false);
  };

  return (
    <>
      <h1>Welcome to Indian States and Districts</h1>
      <form onSubmit={(e) => e.preventDefault()} className="input-form">
        <select
          name="states"
          className="states-dropdown"
          value={selectedState}
          onChange={handleStateSelection}
        >
          <option value="">---Select States---</option>
          {statesList.map((state, ind) => {
            return (
              <option key={ind} value={state.state}>
                {state.state}
              </option>
            );
          })}
        </select>
        {selectedState && (
          <select
            name="districts"
            value={selectedDistrict}
            onChange={handleDistrictSelection}
          >
            <option value={""}>---Select District---</option>
            {districtList.map((district, ind) => {
              return (
                <option key={ind} value={district}>
                  {district}
                </option>
              );
            })}
          </select>
        )}
        {selectedState && (
          <button onClick={() => setIsSubmitted(true)}>Submit</button>
        )}
      </form>
      {isSubmited && (
        <h1>{`Hi I'm from ${selectedState} state of ${selectedDistrict} district`}</h1>
      )}
    </>
  );
};

/* 
 2 different dropdown one for state selection another for corresponding states avaialable district
 
*/
