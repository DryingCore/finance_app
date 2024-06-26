import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faDollarSign, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'; // Or '@mui/material/Grid' if using stable Grid
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
        <Box sx={{ flexGrow: 1, padding: 0, height: '50%', width: '20%' }}>
            <Grid container rowSpacing={2}>
                <Grid xs={12}>
                    <BalanceCard />
                </Grid>
                <Grid xs={12}>
                    <Item>
                        <FontAwesomeIcon icon={faDollarSign} className='mr-[10px]' size='lg' />
                        <span>Your transactions</span>
                    </Item>
                </Grid>
                <Grid xs={12}>
                    <Item>
                        <FontAwesomeIcon icon={faBell} className='mr-[10px]' size='lg' />
                        <span>Last updates</span>
                    </Item>
                </Grid>
                <Grid xs={12}>
                    <Item>
                        <FontAwesomeIcon icon={faPlus} className='mr-[10px]' size='lg' />
                        <span>Add new transaction</span>
                    </Item>
                </Grid>
                <Grid xs={12}>
                    <Item>
                        <FontAwesomeIcon icon={faMinus} className='mr-[10px]' size='lg' />
                        <span>Remove transaction</span>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
