import styles from "../styles.module.css";
import { Text, Stack } from '@chakra-ui/react'

function Numbers() {
    return (
        <div className={styles.numbersContainer}>
            <div className={styles.numbersInfo}>
                <Stack gap='2' alignItems='center'>
                    <div className={styles.number}>
                        <Text as='b' fontSize='6xl' color='#003a37'>8M+</Text>
                    </div>
                    <div className={styles.info}>
                        <Text as='b' fontSize='2xl' color='#003a37'>Matches Made</Text>
                    </div>
                </Stack>
            </div>
            <div className={styles.numbersInfo}>
                <Stack gap='2' alignItems='center'>
                    <div className={styles.number}>
                        <Text as='b' fontSize='6xl' color='#003a37'>150K+</Text>
                    </div>
                    <div className={styles.info}>
                        <Text as='b' fontSize='2xl' color='#003a37'>Tech Jobs</Text>
                    </div>
                </Stack>
            </div>
            <div className={styles.numbersInfo}>
                <Stack gap='2' alignItems='center'>
                    <div className={styles.number}>
                        <Text as='b' fontSize='6xl' color='#003a37'>10M+</Text>
                    </div>
                    <div className={styles.info}>
                        <Text as='b' fontSize='2xl' color='#003a37'>Startup Ready Candidates</Text>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default Numbers;