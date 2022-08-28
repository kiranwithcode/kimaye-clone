import { Box, Button, Center, Image, InputRightAddon, Stack, TagRightIcon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import { v4 as uuidv4 } from 'uuid';
const SuccessPayment = () => {
  const { cartItems, totalPrice } = useStateContext();

  return (
    <Stack bg="lightgreen" h="100vh" p={6}>
      <Center>
        <Box w="800px" h="600px" bg="white" p={6} mt="5rem" borderRadius="1rem">
          <VStack>
          <Image w="100" h="100" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" />
            <Text fontSize="2rem" fontWeight={600}>Thank you for shopping us!</Text>
            <Text fontWeight={600} fontSize="1.5rem">Your Order Placed. </Text>
            <Text fontWeight={600} fontSize="1.3rem">Amount</Text>
            <Text color="green" fontWeight={600} fontSize="1.3rem">₹{totalPrice}</Text>
            <Text fontWeight={600}>Order Id: {uuidv4()}</Text>
            <Image w="180" h="180" src="https://www.pngitem.com/pimgs/m/34-343419_green-check-mark-in-circle-download-png-clipart.png" />
            <Button>
              <Link to="/">Back to Shipping</Link>
            </Button>
          </VStack>
        </Box>
      </Center>
    </Stack>
  );
};

export default SuccessPayment;
