import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../fontawesome.ts";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import BalanceCard from './BalanceCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
}));

export default function ButtonsLeft() {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, backgroundColor: 'purple' }}>
            <Grid sx={{ justifyContent: 'start', alignItems: 'center' }}>
                <Grid sx={{ marginBottom: 2 }}>
                    <BalanceCard />
                </Grid>
                <Grid xs={12} md={4} >
                    <Item>
                        <FontAwesomeIcon icon={'coffee'} />
                        Your Transactions
                    </Item>
                    <Item>Last updates</Item>
                    <Item>Add new transaction</Item>
                    <Item>Remove transaction</Item>
                    <Item>Edit transaction</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
