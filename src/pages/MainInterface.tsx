import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TranscationCard from './Transaction';

export default function MainInterface() {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '50%', width: '60%', marginLeft: '20px' }}>
            <Grid sx={{ justifyContent: 'end', alignItems: 'center', width: '100%' }} rowSpacing={12}>
                <Grid>
                    <TranscationCard />
                </Grid>

                <Grid>
                    <TranscationCard />
                </Grid>
            </Grid>
        </Box>
    );
}


