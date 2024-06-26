import { Card, CardContent, Typography } from "@mui/material";

export default function BalanceCard() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <span>
                            Total Balance
                        </span>
                    </Typography>
                    <Typography variant="h5" component="div">
                        <span>
                            R$1600,00
                        </span>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}