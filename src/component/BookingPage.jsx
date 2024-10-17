import { Grid, GridItem } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
export default function BookingPage() {
  return (
    <>
      <GridItem
        colStart={{ base: 2, md: 1, lg: 3, xl: 4 }}
        colEnd={{ base: 8, sm: 6, md: 8, lg: 11, xl: 11, "2xl": 10 }}
      >
       <BookingForm />
      </GridItem>
    </>
  );
}
