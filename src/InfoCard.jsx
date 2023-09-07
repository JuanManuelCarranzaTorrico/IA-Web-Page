import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Avatar
  } from "@mui/material";
  
  export default function MyCard({title, text, link, image}) {
    console.log(image);
    return (
      <Card
        // sx={{
        //   transition: "0.2s",
        //   "&:hover": {
        //     transform: "scale(1.05)",
        //   },
        // }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            height="200"
            alt="Card Image"
          />
          <CardContent>
            <h2>{title}</h2>
            <p>
              {text}
            </p>
            <center>
          <Button variant="contained" href={link}>read more</Button>
          </center>
          </CardContent>
        </CardActionArea>

      </Card>
    );
  }
  
  