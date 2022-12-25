import { Text, VStack } from "@chakra-ui/react";
import ContactTable from "../components/ContactTable";
function Contact(props) {
    return (
        <VStack>
            <Text color="teal" fontSize='30px'>
                Feel free to reach out!
            </Text>
            <Text color="teal" fontSize='18px'>
                I'd love to connect with you
            </Text>
            <ContactTable/>
        </VStack>
    );
}

export default Contact;