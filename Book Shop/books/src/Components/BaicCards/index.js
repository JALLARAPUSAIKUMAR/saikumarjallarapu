import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid , TextField} from '@mui/material';


export default function BasicCards(props) {
  const image = props.image;
  const title = props.title;
  return (
    <Card sx={{ maxWidth: 265 , margin:"15px", backgroundColor:"white"}}>
      <CardMedia
        sx={{ height: 140 ,margin:"15px"}}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <Grid container spacing={2}>
  <Grid item xs={8}>
  <Typography gutterBottom variant="h6" component="div" sx={{backgroundColor:"violet"}}>
          {props.price}
        </Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="body2" color="text.secondary" sx={{backgroundColor:"orange"}}>
        {props.rating}
        </Typography>
  </Grid>
 
      </Grid>
     
      <Grid container spacing={2}>
      <Grid item xs={8}>
         <TextField id="outlined-basic" label="qty" variant="outlined" />
         </Grid>
      <Grid item xs={4}>
          <Button>
            Add
          </Button>
      </Grid>
    
      </Grid>
     
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}