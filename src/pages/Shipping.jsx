import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Input,
  Radio,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import dataSlider from '../homecomponents/dataSlider';
import { useStateContext } from '../context/StateContext';
const Shipping = () => {
  const { cartItems, totalPrice } = useStateContext()

  return (
    <SimpleGrid>
      <Flex>
        <Box w="50%" h="850" bg="gray.100" pl="10rem" pt="3rem" pr="2rem">
          <Image
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
            alt="png"
          />
          <Box mt={6}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/cart">Cart</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/checkout-info">information</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem color="blue" isCurrentPage>
                <Text>Shipping</Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Text>Payment</Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Stack mt={6} bg="white" borderRadius="10px" p={6}>
            <Flex justifyContent="space-between">
              <Text>contact</Text>
              <Text>some@gmail.com</Text>
              <Text>change</Text>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between">
              <Text>ship to</Text>
              <Text>Pawai west Mumbai 452136</Text>
              <Text>change</Text>
            </Flex>
          </Stack>
          <Stack mt={6} fontWeight={500} fontSize="1.2rem">
            <Text>Shipping Method</Text>
          </Stack>
          <Stack mt={6} bg="white" borderRadius="10px" p={6}>
            <Flex justifyContent="space-between">
              <Radio size="md" name="1" colorScheme="red">
                Delivery Charges
              </Radio>
              <Text>50</Text>
            </Flex>
          </Stack>
          <Flex justifyContent="space-between" mt={6}>
            <Link to="/checkout-info">
              <span style={{ color: 'red' }}>Return to information</span>
            </Link>
            <Button colorScheme="green">
              <Link to="/payment">Continue to Payment</Link>
            </Button>
          </Flex>
        </Box>

         {/* rightbox */}
         <Box
          w="50%"
          h="600"
          bg="white"
          paddingLeft="4rem"
          paddingRight="4rem"
          pt={4}
        >
          <Box>
            {cartItems.map((item) => (
              <Flex justifyContent="space-around" mt={4}>
                <Image src={item.image} w="70px" h="70px" borderRadius={4} />
                <Text>{item.name}</Text>
                <Text>₹{item.price}</Text>
              </Flex>
            ))}
          </Box>
          <Center>
            <Divider mt={4} w="90%" />
          </Center>
          <Flex mt={6} align="center" ml={8}>
            <Input
              w="450px"
              type="text"
              placeholder="Enter coupon code"
              mr={2}
            />
            <Button>Apply</Button>
          </Flex>
          <Box p={4} ml={8} w="560px">
            <Divider mt={4} w="100%" />
            <Flex justifyContent="space-between" mt={4}>
              <Text>Subtotal</Text>
              <Text>₹{totalPrice}</Text>
            </Flex>
            <Flex justifyContent="space-between" mt={4}>
              <Text>Shipping</Text>
              <Text>₹50</Text>
            </Flex>
            <Divider mt={4} w="100%" />
            <Flex justifyContent="space-between" mt={4}>
              <Text fontWeight={600}>Total</Text>
              <Text>₹{totalPrice}</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default Shipping;
