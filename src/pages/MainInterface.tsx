import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TranscationCard from './Transaction';

export default function MainInterface() {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '50%', width: '60%' }}>
            <Grid sx={{ justifyContent: 'end', alignItems: 'center', width: '100%' }}>
                <Grid xs={12} md={8}>
                    <TranscationCard />
                </Grid>
            </Grid>
        </Box>
    );
}


