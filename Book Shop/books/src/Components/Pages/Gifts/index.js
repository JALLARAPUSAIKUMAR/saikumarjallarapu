import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCards from '../../BaicCards';

const gifts= [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB6P7Bemc2b9GdqpZ5Eaq5MgQiw3ObVw1nnqUd8LZGg&usqp=CAU&ec=48600112",
    title:"Bible",
    description:"The Bible",
    price:"Rs.289/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLw9SL0AT8NwsRSC7sBTxXglcFLnVAXKD9mA&usqp=CAU",
    title:"Photo frame",
    description:"The photo frame",
    price:"Rs.200/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvg1sbwThqYW5LueN4ya6dpHx297kcAOwO1rRrIKIhKzy3a5hf33lx_3idlA4LN5jJAuE&usqp=CAU",
    title:"Vinayaka",
    description:"The vinayaka",
    price:"Rs.212/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhotFfniLBjTXe185giWJwUj3QgZlOnZ_B_Q&usqp=CAU",
    title:"Romantic",
    description:"The romantic",
    price:"Rs.233/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqdH6cpYZPymmq7zBIRMxbaNLrsukNhLi72u5C17u8i3nFol9dXE7an7sbdHjdk3-_aI&usqp=CAU",
    title:"Watch",
    description:"The watch",
    price:"Rs.202/-",
    rating:"4.1*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ugOq3Y4vc_g4Tcs-y0tadls5MCPSM_eZEA&usqp=CAU",
    title:"Dinner set",
    description:"The Dinner set",
    price:"Rs.266/-",
    rating:"4.7*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYk6-U3H5whJ-O_Lwi8qFxZTQNBtvmzhNMA&usqp=CAU",
    title:"Chain",
    description:"The chains",
    price:"Rs.212/-",
    rating:"4.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmQFUC9XwLeessw7_tJ1nmM_C6vX_5cyYCw&usqp=CAU",
    title:"Teddy",
    description:"The teddy",
    price:"Rs.214/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUOInw0g8picA-5c7mo9I6vMf8E6MwD-XwA&usqp=CAU",
    title:"Train ",
    description:"The train",
    price:"Rs.299/-",
    rating:"4.8*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCoWnBRAOBTFrfRw1W4IutInkJph7FrPwfg&usqp=CAU",
    title:"Aeroplane",
    description:"The aeroplane",
    price:"Rs.223/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXMaNq1UZm7VeiOzUQmTK0dihPVpvEfV-8t1Qx87UIZJ_G_j1jaAdJ7u1UGLFb7G5QJ4&usqp=CAU",
    title:"Bangles",
    description:"The bangles",
    price:"Rs.225/-",
    rating:"4.7*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyAtyuv9Zv8jxwFGbLTNR8LXcPpQfkVwIcQ&usqp=CAU",
    title:"House ",
    description:"The house",
    price:"Rs.299/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnk_BaVsbj74k9rWKxz3wwztHFLeHte1CBkQ&usqp=CAU",
    title:"Ring",
    description:"The ring",
    price:"Rs.236/-",
    rating:"4.6*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aVBkQPMLVhn21yiMCFK_0JUhhcaq-7RzXQ&usqp=CAU",
    title:"Locket",
    description:"The locket",
    price:"Rs.278/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXuVlmY98641HyDnS23UezzVxGXcp4FG2XIu-gfmu5MoS-ENxFfkj8CV_7a29js5TOeI&usqp=CAU",
    title:"Neckless",
    description:"The neckless",
    price:"Rs.200/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8rTIvSN3D2z2GpE2NcMEdgLQAMZJUpgltsGD2gc3h-VAmovf2kzUY1gSAw4Wy7isW8U&usqp=CAU",
    title:"Cups",
    description:"The cups",
    price:"Rs.205/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMjGPhyveJseQYgP4W5gpjmBiX0KegaU6Kg&usqp=CAU",
    title:"Venakateshwara swami",
    description:"The venkateshwara swami",
    price:"Rs.296/-",
    rating:"4.6*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ZMMluZN_-3oceT8f0yEtoFZ6U-zdnAGuA&usqp=CAU",
    title:"Khuran",
    description:"The khuran",
    price:"Rs.200/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS651aGm3ODHiaU4fE0t-b2cuaflIzKSMkO_A&usqp=CAU",
    title:"Shiva",
    description:"The shiva",
    price:"Rs.225/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF9pXZe6DgvQczm6LsZKui8P2r0q5VfqS1g&usqp=CAU",
    title:"Giftalove",
    description:"The giftalove",
    price:"Rs.200/-",
    rating:"4.5*"
  },

]


export default function Gifts(){
    return(
        <>
        <Typography>
          <h2>GIFTS</h2>
        </Typography>

    <Box sx={{ flexGrow: 1,marginTop:"50px" , backgroundColor:"white" }}>
     
          <Grid    xs={2} sm={4} md={12}  sx={{backgroundColor:"lightgrey"}}>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          

           {
            gifts.map((gifts)=>{
              return <BasicCards image= {gifts.image} title={gifts.title} description={gifts.description} price={gifts.price} rating={gifts.rating}/>
            })
           }
          </Grid>
          
            
          </Grid>

          
            
          
          
            
        
    
      
      
    
    </Box>



          
            
          
          

        
        </>
    )
}