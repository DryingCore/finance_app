import { Card, CardContent, Typography } from "@mui/material";

export default function GreetingsCard() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Welcome Back
                    </Typography>
                    <Typography variant="h5" component="div">
                        John Doe
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}