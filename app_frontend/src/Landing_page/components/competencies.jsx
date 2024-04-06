import styles from "../styles.module.css";
import { Stack, Text, Divider, Flex, Avatar } from "@chakra-ui/react";

import growthIcon from "../assets/images/growthIcon.svg";
import podiumIcon from "../assets/images/podiumIcon.svg";
import clickIcon from "../assets/images/clickIcon.svg";
import infoIcon from "../assets/images/infoIcon.svg";

function Competencies() {
    return (
        <>
            <Divider orientation='horizontal' />
            <div className={styles.compContainer}>
                <div className={styles.compSection}>
                    <Stack>
                        <Text fontSize='2xl' color='#21664d'>Got Talent?</Text>
                        <Text as='b' fontSize='4xl' color='#15543c'>Why job seekers love us</Text>
                        <div className={styles.compList}>
                            <Stack gap='7'>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={growthIcon} />
                                    <Text fontSize='xl'>Connect directly with founders at top startups - no third party recruiters allowed.</Text>
                                </Flex>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={infoIcon} />
                                    <Text fontSize='xl'>Everything you need to know, all upfront. View salary, stock options, and more before applying.</Text>
                                </Flex>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={clickIcon} />
                                    <Text fontSize='xl'>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</Text>
                                </Flex>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={podiumIcon} />
                                    <Text fontSize='xl'>Unique jobs at startups and tech companies you can't find anywhere else.</Text>
                                </Flex>
                            </Stack>
                        </div>
                    </Stack>
                </div>
                <div className={styles.compSection} style={{ "backgroundColor": "#f2f0e4" }}>
                    <Stack>
                        <Text fontSize='2xl' color='#21664d'>Need Talent?</Text>
                        <Text as='b' fontSize='4xl' color='#15543c'>Why recruiters love us</Text>
                        <div className={styles.compList}>
                            <Stack gap='7'>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={growthIcon} />
                                    <Text fontSize='xl'>Tap into a community of 10M+ engaged, startup-ready candidates.</Text>
                                </Flex>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={infoIcon} />
                                    <Text fontSize='xl'>Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.</Text>
                                </Flex>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={clickIcon} />
                                    <Text fontSize='xl'>A free applicant tracking system, or free integration with any ATS you may already use.</Text>
                                </Flex>
                                <Flex justifyContent='space-around' gap='8'>
                                    <Avatar src={podiumIcon} />
                                    <Text fontSize='xl'>Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.</Text>
                                </Flex>
                            </Stack>
                        </div>
                    </Stack>
                </div>
            </div>
            <Divider orientation='horizontal' />
        </>
    );
}

export default Competencies;