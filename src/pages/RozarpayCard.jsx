import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { v4 as uuidv4 } from "uuid";


const RozarpayCard = () => {
  const { totalPrice, setCartItems } = useStateContext()

  const handleCart = () =>{
    setCartItems([])
  }
  return (
    <Stack bg="black" h="100vh">
      <Center mt="100px">
        <Box bg="white" h="550px" w="350px" borderRadius="5px">
          <Box w="100%" h="140px" bg="crimson">
            <Flex p={4}>
              <Image
                mr={4}
                borderRadius="15"
                bg="white"
                w="100px"
                h="100px"
                objectFit="contain"
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
                alt="png"
              />
              <Text color="white" fontSize="1.5rem">
                Kimaya <br /> ₹{totalPrice}
              </Text>
            </Flex>
          </Box>
          <Stack spacing={4} mt={4} p={4}>
            <label>Add new card</label>
            <Flex>
              <Input
                mr={2}
                variant="flushed"
                type="text"
                placeholder="Card Number"
              />
              <Input variant="flushed" type="text" placeholder="Expiry" />
            </Flex>
            <Flex>
              <Input
                mr={2}
                variant="flushed"
                type="text"
                placeholder="Card Holder's Name"
              />
              <Input variant="flushed" type="text" placeholder="CVV" />
            </Flex>
            <Checkbox colorScheme="red" >
              <Text fontSize="12px">Save card securely for future payments <br /> <Link to='/rozarpay/card'><span style={{color:"blue"}}>Know More</span></Link></Text>
            </Checkbox>
          </Stack>
          <Stack spacing={0} w="100%" d="flex" flexDir="column" mt="150px">
            <Button p={2} borderRadius="0px">
              3 Offers availble
            </Button>
            <Button colorScheme="red" borderRadius="0px" onClick={handleCart}>
              {' '}
              <Link to={`/success/payment/${uuidv4()}`}>PAY ₹{totalPrice}</Link>
            </Button>
          </Stack>
        </Box>
      </Center>
    </Stack>
  );
};

export default RozarpayCard;
