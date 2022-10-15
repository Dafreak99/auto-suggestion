import { Box, Flex, Image, List, ListItem } from '@chakra-ui/react';

const Products = ({ data }) => {
  return (
    <Box>
      <Box textTransform='uppercase' fontSize='sm' bg='gray.300' p='10px'>
        Products
      </Box>
      <List spacing={3}>
        {data.map(({ id, title, url, brand, price, image }) => (
          <ListItem
            key={id}
            _hover={{ background: 'gray.100' }}
            p='10px'
            transition='300ms'
          >
            <Flex as='a' href={url} gap='1rem' target='_blank'>
              <Image
                src={image}
                h='100px'
                w='80px'
                borderRadius='sm'
                objectFit='cover'
              />
              <Box>
                <Box>{title}</Box>
                <Box fontSize='sm' color='gray.500'>
                  {brand}
                </Box>
                <Box as='strong' fontSize='sm'>
                  ${price}
                </Box>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Products;
