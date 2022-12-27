import ResumeExperience from "../components/ResumeExperience";
import ResumeEducation from "../components/ResumeEducation";
import ResumeActivities from "../components/ResumeActivities";
import { Box } from "@chakra-ui/react";

function Resume(props) {
    return (
        <>
            <ResumeEducation/>
            <Box p={2}/>  
            <ResumeExperience/>
            <Box p={2}/>  
            <ResumeActivities/>
        </>
    );
}

export default Resume;