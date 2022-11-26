import { Button, Card,Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import { company } from "src/_mock/company";

export default function Companies(){
  return(
    <>
    <Grid container sx={{gap:3,p:3}}>
     
    {company.map((company,index) => (
      <Card sx={{ maxWidth: 140 }} key={index}>
      <CardMedia
        component="img"
        height="140"
       
        image={company.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {company.title}
        </Typography>
       
      </CardContent>
      
    </Card>
    ))}
    
     </Grid>
      
      
      </>
  );
}