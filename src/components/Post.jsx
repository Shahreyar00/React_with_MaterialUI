import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import ice from "./images/ice.jpg";

const useStyles = makeStyles((theme)=>({
  card:{
    marginTop:theme.spacing(1),
    marginBottom:theme.spacing(4),
  },
  media:{
      height:250,
      [theme.breakpoints.down("sm")]:{
        height:150,
      },
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
                className={classes.media} 
                image={ice}
                title="My Post"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae assumenda sequi temporibus iste laudantium eum corrupti, repellendus cumque deserunt dolore.
                  .Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus ullam perspiciatis voluptas omnis vitae, ipsum obcaecati itaque, similique odio, amet dignissimos. Sequi fugiat ab omnis deleniti molestias sit.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default Post;
