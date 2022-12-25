import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { Image, VStack, Text, Center } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <MenuBar/>
            <VStack>
                <Text color="teal" as='b' fontSize='30px' align='center'>
                  Welcome To My Website!
                </Text>
              <Image 
                borderRadius='full'
                boxSize='350px'
                src="https://tonyjung78.github.io/tony_website/buckethat.jpg" 
                alt="selfie"/>
              <Center w='850px'>
                <Text color="teal" fontSize='20px'>
                  I am currently a Johns Hopkins University undergraduate student studying computer science and chemical & biomolecular engineering. I am also an incoming software developer at Epic Systems.
                </Text>
              </Center>
              <Center w='850px'>
                <Text color="teal" fontSize='20px'>
                  Feel free to explore my life and/or connect with me!
                </Text>
              </Center>
            </VStack>
          </>
        } />
        <Route
          path="/resume"
          element={
            <>
              <MenuBar/>
              <Resume />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <MenuBar/>
              <Contact/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;