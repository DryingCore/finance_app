import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Typography, Box } from "@mui/material";

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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="div">
                        Value: R${value}
                    </Typography>
                    <FontAwesomeIcon icon={faEdit} size="sm" />
                </Box>
            </CardContent>
        </Card>
    );
}
