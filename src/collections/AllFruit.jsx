import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { Grid, GridItem, Image, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../context/StateContext';
import style from './allfruit.css'
const AllFruit = () => {
  const [data, setData] = useState([]);
  const { qty, onAdd} = useStateContext()

  const getData = async () => {
    const res = await axios.get(
      `https://kimaye-rest-api.herokuapp.com/all-fruits`
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {/* Link Tabs */}
      <Center h="50px">
        <Tabs>
          <TabList>
            <Tab>ALL FRUITS</Tab>
            <Tab>ALL VEGGIES</Tab>
            <Tab>FRESH CUTS</Tab>
            <Tab>FRUIT COMBOS</Tab>
            <Tab>GIFTS BY KIMAYE</Tab>
          </TabList>
        </Tabs>
      </Center>

      {/* Breadcrumb */}
      <Box ml="9rem" mt="5rem">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text>all-fruits</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      {/* Grid items */}
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={10}
        p={5}
        ml="8rem"
        mt={4}
        mr="8rem"
      >
        {data.length >= 1 &&
          data?.map((item) => (
            <GridItem w="100%">
              <Image
                src={item.image}
                alt=""
                objectFit="cover"
                br={4}
                style={{ borderRadius: '18px' }}
                key={item.id}
              />
              <SimpleGrid className={style.hidebtn} mt="-30px">
                <Button  colorScheme='green' onClick={() => onAdd(item, qty)}>Add to Cart</Button>
              </SimpleGrid>
              <Center>
                <Text fontSize='xl' align="center">{item.name}</Text>
              </Center>
              <Center>
                <Text fontSize='xl' color='crimson'>₹{item.price}</Text>
              </Center>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default AllFruit;
