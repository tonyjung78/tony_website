import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Tondle from "./pages/Tondle";
import { Image, VStack, Text } from "@chakra-ui/react";

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
                src="./buckethat.jpg" 
                alt="selfie"/>
              <Text color="teal" fontSize='20px'>
                  I am currently a Johns Hopkins University undergraduate student studying computer science
              </Text>
              <Text color="teal" fontSize='20px'>
                  and chemical & biomolecular engineering. I am also an incoming software developer at Epic Systems.
              </Text>
              <Text color="teal" fontSize='20px'>
                Feel free to explore my life and/or connect with me!
              </Text>
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
          path="/project"
          element={
            <>
              <MenuBar/>
              <Project/>
            </>
          }
        />
        <Route
          path="/tondle"
          element={
            <>
              <MenuBar/>
              <Tondle/>
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