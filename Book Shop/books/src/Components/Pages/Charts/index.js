
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCards from '../../BaicCards';

const charts= [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw22zQqxrXgULXKtuP97KZus96fOm6zuq9TQ&usqp=CAU",
    title:"All in one chart",
    description:"The all in on chart",
    price:"Rs230/-",
    rating:"4.8*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUsqZQcGb7lzpcCGOSCUuM67B_xFRYZP4bA&usqp=CAU",
    title:"target publication",
    description:"The target publication",
    price:"Rs252/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4hFDXAM0IPtAaDdAnFtl1vCKhQ32U71r6Q&usqp=CAU",
    title:"sawan alphabet",
    description:"The sawan alphabet",
    price:"Rs236/-",
    rating:"4.6*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2uFLuA01mcwIA86eBMahClezvW5PBUWb7A&usqp=CAU",
    title:"all on one board book",
    description:"The all on board book",
    price:"Rs240/-",
    rating:"4.9*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhCO39Y6GCIDdkVacZEchxYRXTFypnNf6Rw&usqp=CAU",
    title:"cut and paste chart",
    description:"The cut and paste jobs",
    price:"Rs239/-",
    rating:"4.1*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ohif2oXEhmYi-9v02F89xbF8C8aQLjD47A&usqp=CAU",
    title:"class room jobs",
    description:"The class room jobs",
    price:"Rs250/-",
    rating:"4.2*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEAT1PUc1MWH5YGtd_7GN-1RQHe9jcAmyWg&usqp=CAU",
    title:"shapes",
    description:"The shapes",
    price:"Rs260/-",
    rating:"4.3*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94YmS030nspbrib8lBilwlTpM5WscyIur2Q&usqp=CAU",
    title:"phonics",
    description:"The phonics",
    price:"Rs265/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_9OmMkWvBJ7vOnovZ1-c-tPIXvodv07Dfg&usqp=CAU",
    title:"common words ",
    description:"The common words",
    price:"Rs300/-",
    rating:"4.2*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqokmbBrgxH2GoI04AVh9erTb1u1pv-qGMQ&usqp=CAU",
    title:"numbers",
    description:"The numbers",
    price:"Rs256/-",
    rating:"5.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF20IlA3dybtk-k6QM4MbJjywacGRdtePsQ&usqp=CAU",
    title:"big chart",
    description:"The big chart",
    price:"Rs222/-",
    rating:"4.3*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qH9ZnT_xAQ53bawfG0zLpr9tSBS4kdzj3A&usqp=CAU",
    title:"alphabet",
    description:"The alphabet",
    price:"Rs235/-",
    rating:"4.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9cQYHkMIOY3UDu4fT_wQdDBHWu1Z2AuaIg&usqp=CAU",
    title:"health education",
    description:"The health education",
    price:"Rs311/-",
    rating:"4.1*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0c7XuGpID9EOeg9V4QRcZie1xBqc8ZOXWQ&usqp=CAU",
    title:"rainbow",
    description:"The rainbow",
    price:"Rs301/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvgxP1mnBgVo0Sjg-ZbkXATeI353aiui_FQ&usqp=CAU",
    title:"world book fair",
    description:"The world book fair",
    price:"Rs266/-",
    rating:"4.1*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_zU_olCHYC8RzCP8YRJZImp60qvGIksINg&usqp=CAU",
    title:"cut and paste",
    description:"The cut and paste",
    price:"Rs277/-",
    rating:"4.3*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvLOWIhTC0B8JDIktSjmfHTrFwo8GPZJmTw&usqp=CAU",
    title:"shop drop",
    description:"The shop drop",
    price:"Rs301/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6x3Uyx89gXhn7a1JzSeX4FL-bskzRuXw5A&usqp=CAU",
    title:"neighbourhood",
    description:"The neighbourhood",
    price:"Rs299/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrm6sK5EeiGCskLLYC7RfoI3JbVIjteV-bw&usqp=CAU",
    title:"little cheff's",
    description:"The little cheff's",
    price:"Rs291/-",
    rating:"4.7*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQW-XIf35K-FqSK1MNH0Grez8h8XoEENedw&usqp=CAU",
    title:"neighbourhood",
    description:"The neighbourhood",
    price:"Rs288/-",
    rating:"4.5*"
  },


]


export default function Charts(){
    return(
        <>
        <Typography>
          <h2>CHARTS</h2>
        </Typography>

    <Box sx={{ flexGrow: 1,marginTop:"50px" , backgroundColor:"yellow" }}>
     
          <Grid    xs={2} sm={4} md={12}  sx={{backgroundColor:"lightblue"}}>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          

           {
            charts.map((charts)=>{
              return <BasicCards image= {charts.image} title={charts.title} description={charts.description} price={charts.price} rating={charts.rating}/>
            })
           }
          </Grid>
          
            
          </Grid>

          
            
          
          
            
        
    
      
      
    
    </Box>



          
            
          
          

        
        </>
    )
}