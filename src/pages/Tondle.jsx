import { 
    Text, 
    VStack, 
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay, 
    useDisclosure,
    Button 
} from "@chakra-ui/react";
import { getRandomWord } from "../api/wordsapi";
import WordleKeyboard from "../components/WordleKeyboard";
import WordleRow from "../components/WordleRow";
import WordleInput from "../components/WordleInput";
import { useState, useEffect, useRef } from "react";

function Tondle(props) {
    const [word, setWord] = useState("");
    const [prevWord, setPrevWord] = useState("");
    const [guess, setGuess] = useState("");
    const [guess0, setGuess0] = useState("");
    const [guess1, setGuess1] = useState("");
    const [guess2, setGuess2] = useState("");
    const [guess3, setGuess3] = useState("");
    const [guess4, setGuess4] = useState("");
    const [guess5, setGuess5] = useState("");
    const [userInput, setUserInput] = useState("");
    const [won, setWon] = useState(false);
    const [guessNum, setGuessNum] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();
    const [keyColors, setKeyColors] = useState({
        "Q": "gray",
        "W": "gray",
        "E": "gray",
        "R": "gray",
        "T": "gray",
        "Y": "gray",
        "U": "gray",
        "I": "gray",
        "O": "gray",
        "P": "gray",
        "A": "gray",
        "S": "gray",
        "D": "gray",
        "F": "gray",
        "G": "gray",
        "H": "gray",
        "J": "gray",
        "K": "gray",
        "L": "gray",
        "Z": "gray",
        "X": "gray",
        "C": "gray",
        "V": "gray",
        "B": "gray",
        "N": "gray",
        "M": "gray",
    });
    const handlePlayAgain = () => {
        onClose();
        setWon(false);
    }

    useEffect(() => {
        const getWord = async () => {
            setWord(await getRandomWord());
        }
        getWord();
    }, []);

    useEffect(() => {
        if (guess.length === 5) {
            if (guess === word) {
                setWon(true);
            }
            switch (guessNum) {
                case 0:
                    setGuess0(guess);
                    break;
                case 1:
                    setGuess1(guess);
                    break;
                case 2:
                    setGuess2(guess);
                    break;
                case 3:
                    setGuess3(guess);
                    break;
                case 4:
                    setGuess4(guess);
                case 5: 
                    setGuess5(guess);
                    break;
            }
            setGuessNum(guessNum+1);
            setUserInput("");
            setGuess("");
        }
    }, [guess]);

    useEffect(() => {
        if (won) {
            setPrevWord(word)
            onOpen();
            setGuess0("");
            setGuess1("");
            setGuess2("");
            setGuess3("");
            setGuess4("");
            setGuess5("");
            setGuessNum(0);
            setGuess("");
            setKeyColors({
                "Q": "gray",
                "W": "gray",
                "E": "gray",
                "R": "gray",
                "T": "gray",
                "Y": "gray",
                "U": "gray",
                "I": "gray",
                "O": "gray",
                "P": "gray",
                "A": "gray",
                "S": "gray",
                "D": "gray",
                "F": "gray",
                "G": "gray",
                "H": "gray",
                "J": "gray",
                "K": "gray",
                "L": "gray",
                "Z": "gray",
                "X": "gray",
                "C": "gray",
                "V": "gray",
                "B": "gray",
                "N": "gray",
                "M": "gray",
            });
            const getWord = async () => {
                setWord(await getRandomWord());
            }
            getWord();
        }
    }, [won]);

    useEffect(() => {
        if (guessNum === 5) {
            setWon(true);
        }
    }, [guessNum]);

    return (
        <>
            <VStack>
                <Text color="teal" fontSize='30px'>
                    TONDLE
                </Text>
                <WordleRow guess={guess0} word={word} keyColors={keyColors} setKeyColors={setKeyColors}/>
                <WordleRow guess={guess1} word={word} keyColors={keyColors} setKeyColors={setKeyColors}/>
                <WordleRow guess={guess2} word={word} keyColors={keyColors} setKeyColors={setKeyColors}/>
                <WordleRow guess={guess3} word={word} keyColors={keyColors} setKeyColors={setKeyColors}/>
                <WordleRow guess={guess4} word={word} keyColors={keyColors} setKeyColors={setKeyColors}/>
                <WordleRow guess={guess5} word={word} keyColors={keyColors} setKeyColors={setKeyColors}/>
                <WordleInput setGuess={setGuess} userInput={userInput} setUserInput={setUserInput} won={won}/>
                <WordleKeyboard keyColors={keyColors} setKeyColors={setKeyColors} userInput={userInput} setUserInput={setUserInput}/>
            </VStack>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        The word was {prevWord}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Would you like to play again?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button colorScheme='green' onClick={handlePlayAgain} ml={3}>
                        Play Again
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default Tondle;