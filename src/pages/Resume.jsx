import { 
    Text, 
    VStack,
    Flex, 
    Spacer, 
    List, 
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'

function Resume(props) {
    return (
        <>
            <VStack>
                <Text color="teal" fontSize='30px' as="b">
                    Education
                </Text>
            </VStack>
            <Flex>
                <Text color="teal" fontSize='20px' as="b">
                    Johns Hopkins University
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    Baltimore, MD
                </Text>
            </Flex>
            <Flex>
                <Text color="teal" fontSize='17px'>
                    B.S Computer Science and Chemical & Biomolecular Engineering, GPA: 3.79
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    May 2023
                </Text>
            </Flex>
            <Text color="teal" fontSize='17px'>
                Awards and Honors: Suzanne and Joseph Jenniches Scholarship, Dean’s List (2019, 2020, 2021)
            </Text>
            <Text color="teal" fontSize='17px'>
                Relevant Courses: Gateway Computing Java, Python Bootcamp, Intermediate Programming,
            </Text>
            <Text color="teal" fontSize='17px'>
                Computer Systems Fundamentals, Data Structures, Full Stack Javascript, Parallel Computing
            </Text>
            <Text color="teal" fontSize='17px'>
                for Data Science, Databases, Intro to Algorithms, Artificial Intelligence, Object Oriented Software Engineering
            </Text>
            <VStack>
                <Text color="teal" fontSize='30px' as="b">
                    Experience
                </Text>
            </VStack>
            <Flex>
                <Text color="teal" fontSize='20px' as="b">
                    Baker & Bruno
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    Baltimore, MD
                </Text>
            </Flex>
            <Flex>
                <Text color="teal" fontSize='17px' as="b">
                    Software Engineering Intern
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2022-2023
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Automate a data extraction process by developing a program in a Python environment for analysis of input csv files to pseudo-randomly assign elements into corresponding Qualtrics csv files.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Devise an additional program for evaluating output files to extract meaningful data.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
        </>
    );
}

export default Resume;