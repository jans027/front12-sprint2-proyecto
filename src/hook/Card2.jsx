import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Coin } from "../styles/HomePage";


export default function CoursesCard2() {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://i.ibb.co/yF3n3bX/3154099.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Advanced
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        For advanced  
                        <Coin>
                            <MonetizationOnIcon sx={{ fontSize: 15 }}/>
                        </Coin>
                        1000
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions> */}
        </Card>
    );
}