import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';


const RozarpayPayment = () => {
  const { totalPrice } = useStateContext()

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
            <label>Country</label>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input variant="flushed" type="tel" placeholder="phone number" />
              <InputRightElement children={<PhoneIcon color="green.500" />} />
            </InputGroup>
            <label>Email</label>
            <InputGroup>
              <InputRightElement fontSize="1.2em" children />
              <Input placeholder="Enter email" variant="flushed" />
              <InputRightElement children={<EmailIcon color="green.500" />} />
            </InputGroup>
          </Stack>
          <Stack spacing={0} w="100%" d="flex" flexDir="column" mt="107px">
            <Button p={2} borderRadius="0px">
              3 Offers availble
            </Button>
            <Button colorScheme="red" borderRadius="0px" >
              <Link to="/rozarpay/card">
                PROCEED
              </Link>
            </Button>
          </Stack>
        </Box>
      </Center>
    </Stack>
  )
}

export default RozarpayPayment;
