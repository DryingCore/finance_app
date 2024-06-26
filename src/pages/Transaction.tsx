import { Card, CardContent, Typography } from "@mui/material";

export default function TranscationCard() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Type: Expense
                    </Typography>
                    <Typography variant="h5" component="div">
                        Value: R$1600,00
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}