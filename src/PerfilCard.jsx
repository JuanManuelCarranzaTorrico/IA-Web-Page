import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    ButtonGroup,
    Avatar
  } from "@mui/material";
export default function PerfilCard() {
    return (
        <card>
            <CardHeader 
            avatar={<Avatar alt="Remy Sharp" src="/1.png" sx={{ width: 80, height: 80 }} />}
            title="Juan Manuel Carranza Torrico"
            subheader="IKKI"
            />
            <CardContent>
                <center>
            <ButtonGroup variant="text" aria-label="text button group">
                <Button href="https://www.linkedin.com/in/juan-manuel-carranza-torrico-84ba94247/" >
                    <img  
                    height="200" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
                </Button>
                <Button href="https://www.instagram.com/ikki_carranza/" >
                    <img  
                    height="200" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" />
                </Button>
                <Button href="https://twitter.com/ikki_carranza" >
                    <img  
                    height="200" 
                    src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="Twiter" />
                </Button>
                </ButtonGroup>
                </center>
            </CardContent>
        </card>
    )}