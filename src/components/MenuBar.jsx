import { Text, HStack, Button, Flex, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MenuBar(props) {
  return (
    <Flex borderWidth="2px" p={4}>
        <Box>
            <Link to="/">
            <Text fontSize='25px' color='teal' as='b'>
                Tony's Website
            </Text>
            </Link>
        </Box>
        <Spacer/>
        <HStack spacing='20px'>
            <Link to="/resume">
                <Text color='teal' as='b' fontSize='16px'>
                    Resume
                </Text>
            </Link>
            <Link to="/contact">
                <Button colorScheme='teal' variant='outline'>
                    Contact Me!
                </Button>
            </Link>
        </HStack>
    </Flex>
  );
}

export default MenuBar;
