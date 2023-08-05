import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCards from '../../BaicCards';

const pens= [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9Q3mU4H54SBhpw8kTfWboQ0BK0jaSMbfOA&usqp=CAU",
    title:"Ballpoint pencil",
    description:" The Ballpoint pencil",
    price:"Rs.320/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgf1v_7SaDjaMEgDQhAvrDFh4leAgX993OWJ9Tl-kWA&usqp=CAU&ec=48600112",
    title:"Fountain pens",
    description:"The Fountain pens",
    price:"Rs.223/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qC7JCb6-X4gZlTur-8Feun7FhP6hXc1gihXqBfKK9ex432xpmVnHX_N_c9BJbBurul8&usqp=CAU",
    title:"Rollerball pencil",
    description:"The Rollerball pencil",
    price:"Rs.200/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3JylG_Vd2mAFysBbZ99vxlh_fN9Ypo-9PFCCuDvq5RCNo49hN4SQXORUD-6ggZ4B56s&usqp=CAU",
    title:"Gel pens",
    description:"The gel pens",
    price:"Rs.200/-",
    rating:"4.0*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-YQJ0N0fsMfvzy5QifwYmO_fW297Q3qdgtPeaUkkeQ&usqp=CAU&ec=48600112",
    title:"Disposable stick pens",
    description:"The disposable stick pens",
    price:"Rs.200/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qxe2QYhVIszNA_dSfKAYS0-EwhiQn0aZe3GnMGiGyg&usqp=CAU&ec=48600112",
    title:"Click pens",
    description:"The click pens",
    price:"Rs.223/-",
    rating:"4.1*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIh6b3Psay0ECcJC8TT6YBiWRD7yh6j3htN3VVfH51Tw&usqp=CAU&ec=48600112",
    title:"Stylus pens",
    description:"The stylus pens",
    price:"Rs.230/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5VKnqkHE3aYzf2rDcq3vdj5clMEGVj8gij6dNzXaDQ&usqp=CAU&ec=48600112",
    title:"Felt",
    description:"The felt",
    price:"Rs.288/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvN28NHTRYKSadzaRbUfEuEg1UE65TQtZZ3Eo65mSaA&usqp=CAU&ec=48600112",
    title:"Novelt",
    description:"The novelt",
    price:"Rs.200/-",
    rating:"4.1*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp8Uz1GutL5BcrZFt4dhUn2YhBNNOQSj_HCDmb7MX5w&usqp=CAU&ec=48600112",
    title:"Refillable ink pens",
    description:"The refillable ink pens",
    price:"Rs 299",
    rating:"4.5",
  },

  
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicQDvQsq49ewjgsYfNvXZ7nGYNlHwO7cf1BZXH1QldQ&usqp=CAU&ec=48600112",
    title:"Multi-ink pens",
    description:"The multi-ink pens",
    price:"Rs.223/-",
    rating:"4.5*"
  },
  {
  
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ72RQ-9E1uYyozovsWsoFvIzYxu4NTW0ASySf8-hcZQ&usqp=CAU&ec=48600112",
  title:"Highlighterpens",
  description:"The highlighterpens",
  price:"Rs301/-",
  rating:"4.6*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Kc9mOMAEjS9Sk6PkjAyhdzcmCFiK33nQYg&usqp=CAU",
    title:"Flairpens",
    description:"The flairpens",
    price:"Rs.223/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUzU-drdG0_RCAGRPPy0JTBFLGPrj7vf_uw&usqp=CAU",
    title:"All-free",
    description:"The all-free",
    price:"Rs.200/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rJgTrQrBS7ncC96mK4pFn9A5hSyLSwV2jg&usqp=CAU",
    title:"Mechanical Pencil",
    description:"The mechanical pencil",
    price:"Rs.279/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2wzKoY65pNcFbLXzrLNRDtc8pxNlTOdZ-w&usqp=CAU",
    title:"CNN",
    description:"The cnn",
    price:"Rs.256/-",
    rating:"4.4*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-ii72LOSj0MBrrYlhfOzeTmMwzIBffcdNQWqwsVBpONQDxPtvPFE6xZxgGq6B3Gda_w&usqp=CAU",
    title:"Everyday carry",
    description:"The everyday carry",
    price:"Rs.289/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7W55cfvV9O0rzcIKpxjxytNBL6PcJrgym1YZVDjHs_l8EuH1dVV1uHESV1nZCN_qcpw&usqp=CAU",
    title:"Quality",
    description:"The quality",
    price:"Rs.263/-",
    rating:"4.8*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctvXLvIobQ2QuUpt00tqfHUsxrt3y9Z8Dcs_OC6ZgcOU80za5OkLzzz0oHTabNi2i0c&usqp=CAU",
    title:"Law student Busted",
    description:"The law student busted",
    price:"Rs.255/-",
    rating:"4.5*"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlHi_xLZgheKCn9thmhCb4rarc_if3T8fGg&usqp=CAU",
    title:"pencils",
    description:"The pencils",
    price:"Rs.259/-",
    rating:"4.0*"
  },  
  

]


export default function Pens(){
    return(
        <>
        <Typography>
          <h2>PENS</h2>
        </Typography>

    <Box sx={{ flexGrow: 1,marginTop:"50px" , backgroundColor:"yellow" }}>
     
          <Grid    xs={2} sm={4} md={12}  sx={{backgroundColor:"orange"}}>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 

           {
            pens.map((pens)=>{
              return <BasicCards image= {pens.image} title={pens.title} description={pens.description} price={pens.price} rating={pens.rating}/>
            })
           }
          </Grid>
          </Grid>
    </Box>



          
            
          
          

        
        </>
    )
}