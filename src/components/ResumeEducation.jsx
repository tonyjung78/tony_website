import { 
    Text, 
    Flex, 
    Spacer,
    VStack,
} from "@chakra-ui/react";
function ResumeEducation(props) {
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
        </>
    );
}

export default ResumeEducation;