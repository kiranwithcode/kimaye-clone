import React, { useState } from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Spacer,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
const CollectCart = () => {
  let [value, setValue] = useState('');
  const {
    totalPrice,
    totalQuanties,
    setShowCart,
    cartItems,
    toggleCartItemQuantity,
    onRemove,
    qty
  } = useStateContext();

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div>
      <Center bg="green" h="100px" color="white" mt={-7}>
        <VStack spacing={2} align="stretch">
          <Box>
            <Center>
              <Text fontSize="2rem">CART</Text>
            </Center>
          </Box>
          <Box>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Text>cart</Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </VStack>
      </Center>

      <Box w="70%" m="auto" mt={4}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th isNumeric>Quantity</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                cartItems.map((item) =>(
                  <Tr key={item.id}>
                    <Td><Image src={item.image} w="50" h="50"/></Td>
                    <Td>₹{item.price}</Td>
                    <Td >
                  
                        <Button
                          onClick={() => toggleCartItemQuantity(item.id, 'dec')}
                        >
                          {/* <span className="minus" onClick={() => toggleCartItemQuantity(item.id,'dec')}> */}
                          <AiOutlineMinus />
                          {/* </span> */}
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          onClick={() => toggleCartItemQuantity(item.id, 'inc')}
                        >
                          {/* <span className="plus" onClick={() => toggleCartItemQuantity(item.id,'inc')}> */}
                          <AiOutlinePlus />
                          {/* </span> */}
                        </Button>
                    
                    </Td>
                    <Td isNumeric>({item.price}*{qty})</Td>
                </Tr>
                ))
              }
             
             
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Stack w="70%" m="auto" mt={4}>
        <Box>
          <Center>
            <Text>Pick a Delivery date:</Text>
          </Center>
          <Center>
            <input type="date" name="" id="" />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text>Choose a time:</Text>
          </Center>
          <Center>
            <input type="time" name="" id="" />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text fontSize="1.5rem" mt={4} fontWeight="600">
              Your current delivery location is Mumbai
            </Text>
          </Center>
        </Box>
      </Stack>
      <Stack w="70%" m="auto" mt={4} mb="2rem">
        <Flex w="100%" bg="white" p={6} border="0.5px solid gray">
          <Center w="45%">
            <VStack spacing={2} align="stretch">
              <Box textAlign="center" fontSize="1.5rem">
                SPECIAL INSTRUCTIONS
              </Box>
              <Box>
                <Textarea
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Here is a sample placeholder"
                  size="sm"
                  color="black"
                ></Textarea>
              </Box>
            </VStack>
          </Center>
          <Spacer />
          <Center w="45%">
            <VStack spacing={2} align="stretch">
              <Box textAlign="center" fontSize="1.5rem">
                CART TOTALS
              </Box>
              <Box
                textAlign="left"
                bg="white"
                color="black"
                p={6}
                borderRadius="20px"
                border="0.5px solid gray"
              >
                <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                  <GridItem colSpan={2} h="10">
                    <Text fontSize="1.1rem">Subtotal</Text>
                  </GridItem>
                  <GridItem colStart={9} colEnd={12} h="10">
                    <Text fontSize="1.1rem">₹{totalPrice}</Text>
                  </GridItem>
                </Grid>
                <Divider orientation="horizontal" />
                <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                  <GridItem colSpan={2} h="10">
                    <Text fontSize="1.1rem">Total</Text>
                  </GridItem>
                  <GridItem colStart={9} colEnd={12} h="10">
                    <Text fontSize="1.1rem">₹{totalPrice}</Text>
                  </GridItem>
                </Grid>
              </Box>

              <Skeleton
                startColor="red.500"
                endColor="orange.500"
                height="40px"
                borderRadius="20px"
              />
              <Skeleton
                startColor="red.500"
                endColor="orange.500"
                height="40px"
                borderRadius="20px"
              />

              <Stack direction="column" spacing={4} align="center">
                <Button w="100%" colorScheme="green" variant="solid">
                  <Link to="/checkout-info">PROCEED TO CHECKOUT</Link>
                </Button>

                <Button w="100%" colorScheme="green" variant="solid">
                  CONTINUE SHOPPING
                </Button>
              </Stack>
            </VStack>
          </Center>
        </Flex>
      </Stack>
    </div>
  );
};

export default CollectCart;
