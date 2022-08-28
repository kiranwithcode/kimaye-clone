import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import dataSlider from '../homecomponents/dataSlider';

const CheckoutInfo = () => {
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
              <BreadcrumbItem isCurrentPage color="blue">
                <Text>Information</Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Text>Shipping</Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Text>Payment</Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Grid templateColumns="repeat(10, 1fr)" gap={2} mt="2rem">
            <GridItem colSpan={6} h="10">
              <Text fontSize="1.1rem" fontWeight={600}>
                Contact information
              </Text>
            </GridItem>
            <GridItem colStart={7} colEnd={12} h="10">
              <Text fontSize="1rem">
                Already have an account /
                <Link to="log-in">
                  {' '}
                  <span style={{ color: 'red' }}>login</span>{' '}
                </Link>
              </Text>
            </GridItem>
          </Grid>

          <FormControl p={2} gap={2} bg="white">
            <Input type="email" placeholder='Enter email' />
            <Checkbox colorScheme="red">
              Get order notification and delivery updates
            </Checkbox>
            <Text fontWeight={600} mt={8} mb={4} fontSize="1.2rem">
              Shipping Address
            </Text>
            <Select placeholder="Select country">
              <option>India</option>
            </Select>
            <Flex mt={4}>
              <Input type="text" placeholder="First name" mr={2} />
              <Input type="text" placeholder="Last name" />
            </Flex>
            <Input type="text" placeholder="address" mt={4} />
            <Input type="text" placeholder="appartment" mt={4} />
            <Flex mt={4}>
              <Input type="text" mr={2} placeholder="City" />
              <Select placeholder="Select state" mr={2}>
                <option>Maharastra</option>
                <option>UP</option>
                <option>Delhi</option>
              </Select>
              <Input type="text" placeholder="Pin Code" />
            </Flex>
            <Input type="number" placeholder="Mobile number" mt={4} />
            <Checkbox colorScheme="red">
              Save this information for Next time
            </Checkbox>
          </FormControl>
          <Flex justifyContent="space-between">
            <Link to="/cart">
              <span style={{ color: 'red' }}>Return to Cart</span>
            </Link>
            <Button colorScheme="green"><Link to='/checkout/shipping'>Continue to Shopping</Link></Button>
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

export default CheckoutInfo;
