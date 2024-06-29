import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TransactionCard from '../TransactionCard';
import GreetingsCard from './GreetingsCard';

export default function MainInterface() {

    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '50%', width: '60%', marginLeft: '20px' }}>
            <Grid container justifyContent="end" alignItems="center" rowSpacing={2.3} width="100%">
                <Grid>
                    <GreetingsCard />
                </Grid>

                <Grid xs={12}>
                    <TransactionCard initialValue={1} />
                </Grid>

                <Grid xs={12}>
                    <TransactionCard initialValue={2}/>
                </Grid>

                <Grid xs={12}>
                    <TransactionCard initialValue={3}/>
                </Grid>
            </Grid>
        </Box>
    );
}
