import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

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

function MainInterface() {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, backgroundColor: 'red', height: '50%', width: '60%' }}>
            <Grid sx={{ justifyContent: 'end', alignItems: 'center', width: '100%' }}>
                <Grid xs={12} md={8}>
                    <Item>teste 1</Item>
                    <Item>teste 2</Item>
                    <Item>teste 3</Item>
                    <Item>teste 4</Item>
                    <Item>teste 5</Item>
                    <Item>teste 6</Item>
                    <Item>teste 7</Item>
                    <Item>teste 8</Item>
                    <Item>teste 9</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainInterface

