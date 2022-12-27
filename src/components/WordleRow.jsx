import { HStack, Box, Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function WordleRow(props) {
    console.log(props);
    const { guess, word, keyColors, setKeyColors }  = props;
    const [l1, setL1] = useState("white")
    const [l2, setL2] = useState("white")
    const [l3, setL3] = useState("white")
    const [l4, setL4] = useState("white")
    const [l5, setL5] = useState("white")
    const indexToLetter = {
        0: setL1,
        1: setL2,
        2: setL3,
        3: setL4,
        4: setL5
    }

    useEffect(() => {
        setL1("white");
        setL2("white");
        setL3("white");
        setL4("white");
        setL5("white");
    }, [word]);

    useEffect(() => {
        if (guess.length === 5) {
            for (let i = 0; i < 5; i++) {
                for (let j = i; j < 5; j++) {
                    if (guess.charAt(i) === word.charAt(j)) {
                        if (i === j) {
                            indexToLetter[i]("#319795");
                            keyColors[guess[i].toUpperCase()] = "teal";
                        } else {
                            indexToLetter[i]("#ECC94B");
                            if (keyColors[guess[i].toUpperCase()] !== "teal") {
                                keyColors[guess[i].toUpperCase()] = "yellow";
                            }
                        }
                        break;
                    } else {
                        if (keyColors[guess[i].toUpperCase()] === "gray") {
                            keyColors[guess[i].toUpperCase()] = "blackAlpha";
                        }
                    }
                }
            }
            setKeyColors({...keyColors})
        }
    }, [guess]);

    return (
        <HStack>
            <Box borderWidth='1px' h="50px" w="50px" bg={l1}>
                <Center>
                    <Text fontSize='30px'>
                        {guess[0]}
                    </Text>
                </Center>
            </Box>
            <Box borderWidth='1px' h="50px" w="50px" bg={l2}>
                <Center>
                    <Text fontSize='30px'>
                        {guess[1]}
                    </Text>
                </Center>
            </Box>
            <Box borderWidth='1px' h="50px" w="50px" bg={l3}>
                <Center>
                    <Text fontSize='30px'>
                        {guess[2]}
                    </Text>
                </Center>
            </Box>
            <Box borderWidth='1px' h="50px" w="50px" bg={l4}>
                <Center>
                    <Text fontSize='30px'>
                        {guess[3]}
                    </Text>
                </Center>
            </Box>
            <Box borderWidth='1px' h="50px" w="50px" bg={l5}>
                <Center>
                    <Text fontSize='30px'>
                        {guess[4]}
                    </Text>
                </Center>
            </Box>
        </HStack>
    );
}

export default WordleRow;