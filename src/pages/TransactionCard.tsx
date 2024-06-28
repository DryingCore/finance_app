import { Card, CardContent, Typography } from "@mui/material";

interface TransactionCardProps {
    value: number;
}

export default function TranscationCard({ value }: TransactionCardProps) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Type: Expense
                </Typography>
                <Typography variant="h5" component="div">
                    Value: R${value}
                </Typography>
            </CardContent>
        </Card>
    );
}