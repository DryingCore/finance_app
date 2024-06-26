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

export default function ButtonsLeft() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={4} >
                    <Item>Suas Financas</Item>
                    <Item>Ultimas atualizacoes</Item>
                    <Item>Adiocionar</Item>
                    <Item>Retirar</Item>
                    <Item>modificar</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
