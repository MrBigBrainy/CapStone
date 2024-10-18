import { Grid, GridItem } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
export default function BookingPage() {
  const initialTime = ["17.00", "18.00","19.00","20.00","21.00","22.00",];
  function timeReducer(state, action) {
    if(action.type === "UPDATE_TIME") {
      const newState = [...state];
      return newState.filter((time) => time !== action.selectTime);
    }
  }

  const [availableTime, availableTimeDispatch] = useReducer(timeReducer, initialTime);

  function updateTime(selectTime) {
    availableTimeDispatch({
      type: "UPDATE_TIME",
      selectTime
    })
  }
  
  return (
    <>
      <GridItem
        colStart={{ base: 2, md: 1, lg: 3, xl: 4 }}
        colEnd={{ base: 8, sm: 6, md: 8, lg: 11, xl: 11, "2xl": 10 }}
      >
       <BookingForm availableTime={availableTime} updateTime={updateTime}/>
      </GridItem>
    </>
  );
}
