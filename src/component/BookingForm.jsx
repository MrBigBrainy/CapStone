import { FormControl, FormLabel, Input, Button, Select, Flex} from "@chakra-ui/react";
import { useState } from "react";
export default function BookingForm () {
    const [formData, setFormData] = useState({
        date: '',
         time: '',
        numberOfGuests: '',
        occasion: '',
    })
    function handleSubmit (event) {
        event.preventDefault();
        console.log("Submitted");
    }

    function handleChange(event, objectName){
        const {value} = event.target;
        setFormData((prevState)=> ({
            ...prevState,
            [objectName]: value,
        })) 
    }
    return (
      <>
        <Flex justifyContent={"center"}>
          <FormControl
            m={10}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <FormLabel htmlFor="res-date"> Choose Date </FormLabel>
            <Input type="date" id="res-date" onChange={(event) => handleChange(event, "date")} />
            <FormLabel htmlFor="res-time">Choose time</FormLabel>
            <Select id="res-time ">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </Select>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input type="number" placeholder="1" min="1" max="10" id="guests" />
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select id="occasion">
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