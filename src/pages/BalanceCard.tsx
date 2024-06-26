import { Card, CardContent, Typography } from "@mui/material";

export default function BalanceCard() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total Balance
                    </Typography>
                    <Typography variant="h5" component="div">
                        R$1600,00
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}