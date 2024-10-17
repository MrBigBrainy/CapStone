import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
export default function BookingForm () {
    function handleSubmit (event) {
        event.preventDefault();
        console.log("Submitted");
    }
    return (
      <>
        <FormControl m ={10}>
          <FormLabel textAlign={"center"}>
            Number of guests: <Input type="number" name="guests" />
          </FormLabel>
          <br />
          <Button
            type="Submit"
            onClick={handleSubmit}
            bg={"#495E57"}
            color={"white"}
            m={5}
          >
            Submit
          </Button>
        </FormControl>
      </>
    ); 
}
    