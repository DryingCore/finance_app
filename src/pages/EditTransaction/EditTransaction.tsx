import { Card, CardContent, Typography } from "@mui/material";
export default function EditTransaction() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <span>
                            Which you want to edit?
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