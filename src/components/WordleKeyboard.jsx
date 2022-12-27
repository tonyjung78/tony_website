import { Button, VStack, HStack } from "@chakra-ui/react";
import { useLayoutEffect } from "react";
function WordleKeyboard(props) {
    const { keyColors, setKeyColors, userInput, setUserInput } = props;

    useLayoutEffect(() => {
        setKeyColors(keyColors);
    }, []);

    const handleOnClick = (e) => {
        if (userInput.length < 5) {
            setUserInput(userInput + e.target.value);
        }
    };

    return (
        <>
            <VStack>
                <HStack>
                    <Button colorScheme={keyColors["Q"]} value="q" onClick={handleOnClick}>Q</Button>
                    <Button colorScheme={keyColors["W"]} value="w" onClick={handleOnClick}>W</Button>
                    <Button colorScheme={keyColors["E"]} value="e" onClick={handleOnClick}>E</Button>
                    <Button colorScheme={keyColors["R"]} value="r" onClick={handleOnClick}>R</Button>
                    <Button colorScheme={keyColors["T"]} value="t" onClick={handleOnClick}>T</Button>
                    <Button colorScheme={keyColors["Y"]} value="y" onClick={handleOnClick}>Y</Button>
                    <Button colorScheme={keyColors["U"]} value="u" onClick={handleOnClick}>U</Button>
                    <Button colorScheme={keyColors["I"]} value="i" onClick={handleOnClick}>I</Button>
                    <Button colorScheme={keyColors["O"]} value="o" onClick={handleOnClick}>O</Button>
                    <Button colorScheme={keyColors["P"]} value="p" onClick={handleOnClick}>P</Button>
                </HStack>
                <HStack>
                    <Button colorScheme={keyColors["A"]} value="a" onClick={handleOnClick}>A</Button>
                    <Button colorScheme={keyColors["S"]} value="s" onClick={handleOnClick}>S</Button>
                    <Button colorScheme={keyColors["D"]} value="d" onClick={handleOnClick}>D</Button>
                    <Button colorScheme={keyColors["F"]} value="f" onClick={handleOnClick}>F</Button>
                    <Button colorScheme={keyColors["G"]} value="g" onClick={handleOnClick}>G</Button>
                    <Button colorScheme={keyColors["H"]} value="h" onClick={handleOnClick}>H</Button>
                    <Button colorScheme={keyColors["J"]} value="j" onClick={handleOnClick}>J</Button>
                    <Button colorScheme={keyColors["K"]} value="k" onClick={handleOnClick}>K</Button>
                    <Button colorScheme={keyColors["L"]} value="l" onClick={handleOnClick}>L</Button>
                </HStack>
                <HStack>
                    <Button colorScheme={keyColors["Z"]} value="z" onClick={handleOnClick}>Z</Button>
                    <Button colorScheme={keyColors["X"]} value="x" onClick={handleOnClick}>X</Button>
                    <Button colorScheme={keyColors["C"]} value="c" onClick={handleOnClick}>C</Button>
                    <Button colorScheme={keyColors["V"]} value="v" onClick={handleOnClick}>V</Button>
                    <Button colorScheme={keyColors["B"]} value="b" onClick={handleOnClick}>B</Button>
                    <Button colorScheme={keyColors["N"]} value="n" onClick={handleOnClick}>N</Button>
                    <Button colorScheme={keyColors["M"]} value="m" onClick={handleOnClick}>M</Button>
                </HStack>
            </VStack>
        </>
    );
}

export default WordleKeyboard;