import React from 'react';
import {AiOutlineWallet} from 'react-icons/ai'
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
import { useStateContext } from '../context/StateContext';

const Payment = () => {
  const { cartItems, totalPrice } = useStateContext()

  return (
    <SimpleGrid>
      <Flex>
        <Box w="50%" h="1000" bg="gray.100" pl="10rem" pt="3rem" pr="2rem">
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
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/checkout/shipping">shipping</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Text color="blue" isCurrentPage>
                  Payment
                </Text>
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
          <Stack mt={6}>
            <Text fontSize="1.2rem">Shipping Method</Text>
            <Text>All transactions are secure and encrypted.</Text>
          </Stack>
          <Stack mt={6} bg="white" borderRadius="10px" p={6}>
            <Flex justifyContent="space-between">
              <Text>Razorpay Secure (UPI, Cards, Wallets, NetBanking)</Text>
              <Text>Visa MasterCard</Text>
            </Flex>
            <Divider />
            <Center>
              <AiOutlineWallet fontSize="10rem"/>
            </Center>
            <Center mt={4}>
              <Text align="center">
                After clicking “Complete order”, you will be redirected to
                Razorpay <br /> Secure (UPI, Cards, Wallets, NetBanking) to complete
                your <br /> purchase securely.
              </Text>
            </Center>
          </Stack>
          <Stack mt={6} bg="white" borderRadius="10px" p={6}>
            <Stack bg='white'>
              <Radio size="md" name="1" colorScheme="red" value="a">
                Same as shipping adderss 
              </Radio>
              <Divider />
              <Radio size="md" name="1" colorScheme="red" value="ab">
                Use a diffrent billing address
              </Radio>
            </Stack>
          </Stack>
          <Flex justifyContent="space-between" mt={6}>
            <Link to="/checkout/shipping">
              <span style={{ color: 'red' }}>Return to information</span>
            </Link>
            <Button colorScheme="green">
              <Link to="/rozarpay">Complete order</Link>
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

export default Payment;
