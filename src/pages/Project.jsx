import { Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Project(props) {
    return (
        <>
            <VStack>
                <Text color="teal" fontSize='30px'>
                    Check out some projects that I am working/worked on!
                </Text>
                <Text color="teal" fontSize='20px' as="b">
                    Tondle
                </Text>
                <Link to="/tondle">
                <Text color='teal' as='b' fontSize='16px'>
                    Click here to play!
                </Text>
            </Link>
            </VStack>
        </>
    );
}

export default Project;