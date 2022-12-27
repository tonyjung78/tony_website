import { Input, HStack, useToast, useForceUpdate } from "@chakra-ui/react";
import { wordExists } from "../api/wordsapi";

function WordleInput(props) {

    const { setGuess, userInput, setUserInput, won } = props;
    const toast = useToast();

    const handleKeyDown = async (e) => {
        if (e.key === "Backspace" && userInput.length > 0) {
            setUserInput(userInput.substring(0, userInput.length - 1));
        } else if (e.key === "Enter" && userInput.length === 5) {
            if (await wordExists(userInput)) {
                setGuess(userInput);
            } else {
                toast({
                    title: 'Not in word list.',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                })
            }
        } else if (e.keyCode >= 65 && e.keyCode <= 90 && userInput.length < 5) {
            setUserInput(userInput+e.key);
        }
    }

    return (
        <>
            <HStack w='200px'>
                <Input size='lg' maxLength={5} color="teal" onKeyDown={handleKeyDown} value={userInput} fontSize="25px" textAlign="center" spellCheck={false} isDisabled={won} readOnly/>
            </HStack>
        </>
    );
}

export default WordleInput;