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
function ResumeExperience(props) {
    return (
        <>
            <VStack>
                <Text color="teal" fontSize='30px' as="b">
                    Experience
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
                <Text color="teal" fontSize='17px' as="b">
                    Computer Systems Fundamental Course Assistant
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2022-present
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Enhance learning experiences in Computer Systems Fundamentals course consisting of 100+ students by improving student comprehension of data representation, assembly language, memory, CPU architecture, networks, and concurrency.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Administer office hours two hours a week for students with questions about course concepts and x86-64 assembly/C/C++ coding assignments.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
            <Box p={2}/>
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
            <Box p={2}/>
            <Flex>
                <Text color="teal" fontSize='20px' as="b">
                    Precision Theranostics
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    Baltimore, MD
                </Text>
            </Flex>
            <Flex>
                <Text color="teal" fontSize='17px' as="b">
                    R&D Engineering Technician
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2021-2022
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Compiled programs in Python for quantification of diagnostic tests and analysis of proteins in cell samples.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Planned experiments for design of prototype diagnostics and lung health devices for monitoring and detecting pulmonary diseases.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Committed 40 hours/week during summer and 20 hours/week during school semester.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
            <Box p={2}/>
            <Flex>
                <Text color="teal" fontSize='20px' as="b">
                    Rong Li Lab
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    Baltimore, MD
                </Text>
            </Flex>
            <Flex>
                <Text color="teal" fontSize='17px' as="b">
                    Research Assistant
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2019-2021
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Investigated cellular dynamics by compiling programs in Python for image and movie analysis of mitochondria/mitochondrial DNA fusion and fission. Also worked with FIJI and Imaris software.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Collaborated closely with a biomedical engineering PhD student to design experiments for growing e. coli/yeast cells and evaluating cellular changes through microscopy imaging.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
            <Box p={2}/>
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
                <Text color="teal" fontSize='17px' as="b">
                    General Physics I/II Learning Assistant
                </Text>
                <Spacer/>
                <Text color="teal" fontSize='17px'>
                    2020-2021
                </Text>
            </Flex>
            <List spacing={3}>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Advised students with questions about mechanics or electricity/magnetism during class.
                        </Text>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <ListIcon as={CheckCircleIcon} color='teal' />
                        <Text color="teal" fontSize='17px'>
                            Supervised a weekly office hours session to help students outside of class times.
                        </Text>
                    </Flex>
                </ListItem>
            </List>
        </>
    );
}

export default ResumeExperience;