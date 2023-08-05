import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCards from '../../BaicCards';

const books= [
  {
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2614BDxXR587lCLb2PvrQ0RMjcwjtmXBdIIzt_YWTGNABCgMpgExxmyQrTBWsqqRL7o&usqp=CAU",
  title:"General Studies", 
  description:" The general studies",
  price:"Rs.200/-",
  rating:"4.2*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasRjex0YfB66_4rSMuqt0WuXi_seTIQA1RrOBrp-yyt4CR8nAecZns--S3K2B92x2Wng&usqp=CAU",
  title:"Goppa Alochanalu",
  description:"The goppa Alochanalu",
  price:"Rs.281/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1iZmCnFH2rHRSkOC09i3TbDaBthIuLh25g&usqp=CAU",
   title:"Metric book",
  description:"The metric book",
  price:"Rs.277/-",
  rating:"4.4*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27MDh_y2n53XfPD60a5oXfy39WAPO9iFn0IDafEV5sSt0DlL0C3ra_4IJBAN1TRmph-k&usqp=CAU",
  title:"General science",
  description:"The general science ",
  price:"Rs.245/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOk8bOE_ygTxyeiHK0tSX_b1K1-Ll6k-suQ&usqp=CAU",
  title:" II grade",
  description:"The II grade",
  price:"Rs.263/-",
  rating:"4.7*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK-nxMiiVMNYcteS-0cRxuulRVkmAJb1WhQ&usqp=CAU",
  title:"Color",
  description:"The color",
  price:"Rs.212/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZW4WipFJWCf3gNbazB0-LMBUxONhmS5sxg&usqp=CAU",
  title:"Matric book",
  description:"The matri book",
  price:"Rs.256/-",
  rating:"4.0*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ8EtxNglh7xJ8OwxNAYFRIqCjSeEw7l4tw&usqp=CAU",
  title:"Lovepik",
  description:"The lovepik",
  price:"Rs.263/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY-mMMIEIkDrUhDflGdEAacIFgD0nZRIWcA&usqp=CAU",
  title:"Data science",
  description:"The data science",
  price:"Rs.202/-",
  rating:"4.1*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMMrrVT-bjIo5DbkHdBv3JULQF9hv0IzlvQ&usqp=CAU",
  title:"Forest ecosystems",
  description:"The forest ecosystems",
  price:"Rs.245/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxhM56atHkXnyBog-aYACZgmaw6r_87zU0g&usqp=CAU",
  title:"Science",
  description:"The science",
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVy_PZktfE_NIGMHgJEuhAiyH1b_-NVEn4w&usqp=CAU",
  title:"Uninary tracks",
  description:"The uninary tracks",
  price:"Rs.201/-",
  rating:"4.8*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYunk2c-kha4Ihs6ek2SuB5iTUMdHLU1-DQg&usqp=CAU",
  title:"Biology",
  description:"The biology",
  price:"Rs.214/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-sWdYLMB9Gw4Ps9e0DaOLj8eGlvYHasl5w&usqp=CAU",
  title:"Scientists",
  description:"The scientists",
  price:"Rs.263/-",
  rating:"4.4*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgPiGTKxX91zzqjFfZue1Ly6_sL_rmboR8A&usqp=CAU",
  title:"Artificial",
  description:"The artificial",
  price:"Rs.271/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbd1Z0uGTwdBn-z98KQpYIiegUAZJ_Wzsxg&usqp=CAU",
  title:"RAS mains",
  description:"The ras mains",
  price:"Rs.285/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_pkwnIguTTQEGRiy7V5K750SdrPwG2qTYA&usqp=CAU",
  title:"Radiant",
  description:"The radiant",
  price:"Rs.296/-",
  rating:"4.9*"
},

{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_TEr8ViEkLJXTB3t3Fk2Bq_Ngq_NQj0qfQ&usqp=CAU",
  title:"Vegetable Science",
  description:"The vegetable science",
  price:"Rs.225/-",
  rating:"4.5*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOWjvrPoOOvmANZIUGnlF2yuM2awkuQXxqQ&usqp=CAU",
  title:"Experimental science",
  description:"The experimental science",
  price:"Rs.205/-",
  rating:"4.4*"
},
{
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjYkQSruZJy2f9OR5usJdHIGCigwN92eeWg&usqp=CAU",
  title:"Social",
  description:"The social",
  price:"Rs.209/-",
  rating:"4.3*"
},

]


export default function Books(){
  return(
      <>
      <Typography>
        <h2>BOOKS</h2>
      </Typography>

  <Box sx={{ flexGrow: 1,marginTop:"50px" , backgroundColor:"white" }}>
   
        <Grid    xs={2} sm={4} md={12}  sx={{backgroundColor:"lightred"}}>
          
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
        

         {
          books.map((books)=>{
            return <BasicCards image= {books.image} title={books.title} description={books.description} price={books.price} rating={books.rating}/>
          })
         }
        </Grid>
        
          
        </Grid>

        
          
        
        
          
      
  
    
    
  
  </Box>

 </>
  )
}


          
            
          
          

        
      
    
