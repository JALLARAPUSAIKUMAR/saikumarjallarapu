
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import BasicCards from '../../BaicCards';

const papers = [
  

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJlCw_s3kiIMyk8IjvoZj3IxsF-P8jfAHolke18EfFA&usqp=CAU&ec=48600112",
    title:"Bangalore Mirror",
    description:"The",
    price:"Rs.253/-",
    rating:"4.2*"
  },
  
  
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQm-hNidpIX-oIz5rs1CGSby1okVnamTIkg&usqp=CAU",
    title:"Png background",
    description:"The png background" ,
    price:"Rs.203/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9fuJ9O8GupiAxyYx3os5BFL79ZBE1D1-mg&usqp=CAU",
    title:"Wall paper house",
    description:"The wall paper house ",
    price:"Rs.222/-",
    rating:"4.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fbO3rmQUFML-suFrHZU467P35UFL2jBPHQ&usqp=CAU",
    title:"Dreamstime",
    description:"The dreamstime ",
    price:"Rs.232/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4k8HH1kthlGuRa0m1R8pOhBTcqGapljauWw&usqp=CAU",
    title:"Transparent PNG ",
    description:"The transparent png",
    price:"Rs.200/-",
    rating:"4.9*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIkJ-RtpXktdy3oDvvSQMednfGagW2JVRGw&usqp=CAU",
    title:"City png",
    description:"The city ping",
    price:"Rs.286/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5X1tJ8PyuIZbO4DhXJjeWqS0A2RFGgAKYbA&usqp=CAU",
    title:"Adobe stock",
    description:"The adobe stock ",
    price:"Rs.230/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3R1B-0jMN_-N_xqoqd04XQ7oglpXdo4P2Cw&usqp=CAU",
    title:"Wallpaper fare",
    description:"The wallpaper fare",
    price:"Rs.266/-",
    rating:"4.7*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntoiFWVi6PRXM8JJqWEiqIBr-dfj7K9TsoA&usqp=CAU",
    title:"Manual stamp papers",
    description:"The manual stamp papers ",
    price:"Rs.277/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6Y7PQ6rJj4OEUcWIshK0fVGQOdxrtEJBxA&usqp=CAU",
    title:"Freepik",
    description:"The freepik ",
    price:"Rs.288/-",
    rating:"4.7*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpEDP3mMBnYsqKPBV_mLtu9xrHgtjawUBUQ&usqp=CAU",
    title:"Adobe stock",
    description:"The adobe stock ",
    price:"Rs.233/-",
    rating:"4.6*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bnHFhQZLwioo_jP4joyY5gvA_JMgdaaW_g&usqp=CAU",
    title:"istock",
    description:"The istock ",
    price:"Rs.200/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_38IH8EEmmAOvkfTUO_UyfQPRnpHr3PaTx0Xwee1hQ&usqp=CAU&ec=48600112",
    title:"Maharashtra Times",
    description:"The maharashtra news ",
    price:"Rs.205/-",
    rating:"4.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXywv3tLK-A05emuYsQl8qdmoBwCvkPQ9gyK1HJRnKXg&usqp=CAU&ec=48600112",
    title:"Times Now News",
    description:"The times now news",
    price:"Rs.204/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3f5bHY6kSXIlCOVuqSWxeJVa3uMwFOD3xcCBZ5Xu3w&usqp=CAU&ec=48600112",
    title:"Ei Samay",
    description:"The ei samay ",
    price:"Rs.205/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Y7Ww6Ia-GlOZvEpWZC_8jwey5b-DqekB1mNcKg_maQ&usqp=CAU&ec=48600112",
    title:"Mumbai Mirror",
    description:"The mumbai mirror ",
    price:"Rs.204/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsr3uQI6roOZhbg77mNgk2bFMJyjblgbtinWw1pj7sw&usqp=CAU&ec=48600112",
    title:"Navbharat Times",
    description:"The navbharat times",
    price:"Rs.263/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDYG0AK3Yx0iKZcXGZpf-1_E6OSxmYsGQwxMPYHO9zg&usqp=CAU&ec=48600112",
    title:"The Economic Times",
    description:"The economic times ",
    price:"Rs.266/-",
    rating:"4.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWKrDivQO0yzhrmdgnOttMndj1BeDDIf9gViGL5TSOg&usqp=CAU&ec=48600112",
    title:"Vijaya Karnataka",
    description:"The vijaya karnataka ",
    price:"Rs200/-",
    rating:"4.4*"
  },
  {
    image:"data:image/jpeg;base64,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",
    title:"Times Now News",
    description:"The ",
    price:"Rs.289/-",
    rating:"4.5*"
  },
  
  
  
  
]


export default function Papers(){
    return(
        <>
        <Typography>
          <h2>PAPERS</h2>
        </Typography>

    <Box sx={{ flexGrow: 1,marginTop:"50px" , backgroundColor:"yellow" }}>
     
          <Grid   item xs={2} sm={4} md={12}  sx={{backgroundColor:"lightpinkPaper is a thin sheet material produced by mechanically or chemically processing cellulose fibres"}}>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          

           {
            papers.map((papers)=>{
              return <BasicCards image= {papers.image} title={papers.title} description={papers.description} price={papers.price} rating={papers.rating}/>
            })
           }
          </Grid>
         </Grid>

         
          

            
          </Box>

        
        </>
    )
}