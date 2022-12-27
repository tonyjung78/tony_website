import { 
    Text, 
    Flex, 
    Spacer, 
    List, 
    ListItem,
    ListIcon,
    Box,
    VStack
} from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'
function ResumeActivities(props) {
    return (
        <>
            <VStack>
                <Text color="teal" fontSize='30px' as="b">
                    Activities
                </Text>
            </VStack>
            <Flex>
                <Text color="teal" fontSize='20px' as="b">
                    MedHacks
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2022
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Cooperated with four students to design a prototype electronic health record system to improve patient-doctor interactions and increase healthcare accessibility to elderly and visually impaired patients.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Placed in top three for the JHU Applied Physics Lab’s Health and Data Science Innovation track.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
            <Box p={2}/>
            <Flex>
                <Text color="teal" fontSize='20px' as="b">
                    TedX JHU Marketing Team
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2020-2022
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Promoted Ted Talks and related events in the Baltimore community by managing social media platforms.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
        </>
    );
}

export default ResumeActivities;