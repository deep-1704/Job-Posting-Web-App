import styles from "../styles.module.css";
import { Highlight, Heading, Stack, Flex, Button } from "@chakra-ui/react";

function IntroTagLine() {
    return (
        <div className={styles.introTagContainer}>
            <div className={styles.darkBg}>
                <Stack gap='10'>
                    <div className={styles.tagLine}>
                        <Heading lineHeight='tall' color='#bfdbdd' size='xl'>
                            <Highlight
                                query={['Talent', 'Ambition']}
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                            >
                                Connecting Talent With Ambition
                            </Highlight>
                        </Heading>
                    </div>
                    <div className={styles.navButtons}>
                        <Flex gap='5' justifyContent='center'>
                            <Button colorScheme='green' variant='solid' size='lg'>
                                Get Hired
                            </Button>
                            <Button colorScheme='green' variant='solid' size='lg'>
                                Find the best talent
                            </Button>
                        </Flex>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default IntroTagLine;