import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Typography } from "@mui/material";

export default function BalanceCard() {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <span>
                            <FontAwesomeIcon icon={faSackDollar} className="mr-[10px]" size="lg" />
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