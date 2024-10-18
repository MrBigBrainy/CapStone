import { FormControl, FormLabel, Input, Button, Select, Flex} from "@chakra-ui/react";
import { useState } from "react";
export default function BookingForm({ availableTime, updateTime }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    numberOfGuests: "1",
    occasion: "Birthday",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    updateTime(formData.time);
    setFormData((prevState)=> ({
      ...prevState,
      time: availableTime[0]
    }))
  }

  function handleChange(event, objectName) {
    const { value } = event.target;
    setFormData((prevState) => {
      const newState = {
        ...prevState,
        [objectName]: value,
      };
      console.log(newState);
      return newState;
    });
  }
  return (
    <>
      <Flex justifyContent={"center"}>
        <FormControl
          m={10}
          style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          isRequired
        >
          <FormLabel htmlFor="res-date"> Choose Date </FormLabel>
          <Input
            type="date"
            id="res-date"
            onChange={(event) => handleChange(event, "date")}
            value={formData.date}
            required
          />
          <FormLabel htmlFor="res-time">Choose time</FormLabel>
          <Select
            id="res-time"
            onChange={(event) => handleChange(event, "time")}
            value={formData.time}
          >
            {availableTime.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
            
          </Select>
          <FormLabel htmlFor="guests">Number of guests</FormLabel>
          <Input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={(event) => handleChange(event, "numberOfGuests")}
            value={formData.numberOfGuests}
          />
          <FormLabel htmlFor="occasion">Occasion</FormLabel>
          <Select
            id="occasion"
            onChange={(event) => handleChange(event, "occasion")}
            value={formData.occasion}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </Select>

          <Input
            type="submit"
            value="Make Your reservation"
            bg={"#495E57"}
            color={"white"}
            onClick={handleSubmit}
            cursor={"pointer"}
          />
        </FormControl>
      </Flex>
    </>
  );
}
    

/*
 <Button
            type="Submit"
            onClick={handleSubmit}
            bg={"#495E57"}
            color={"white"}
            m={5}
          >
            Submit
          </Button>

   */