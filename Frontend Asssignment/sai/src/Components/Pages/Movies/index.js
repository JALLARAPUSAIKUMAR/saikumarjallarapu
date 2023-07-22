import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCards from '../../BasicCards';

const movies= [
    {
    image:"https://assets.gadgets360cdn.com/pricee/assets/product/202304/Custody_1681210462.jpg",
    title:"Custody",
    year:"2023",
    description:" A predictable yet engaging action drama. "
   
  },
  {
    image:"https://i.ytimg.com/vi/1qRT55I1LOk/maxresdefault.jpg",
    title:"Savaari",
    year:"2022",
    description:"Raju who rents his Badshah for weddings, meets Baagi who has been in quench of real love after her step-parents try to get her married against her wish."
    
  },
  {
    image:"https://i.ytimg.com/vi/oy31--mCjO4/maxresdefault.jpg",
    title:"Oy ninne",
    year:"2019",
    description:"charts the story of Vishnu (Bharat), a young man who aspires to be a farmer while his parents want him to aim for something big."
    
  },
  {
    image:"https://images.indianexpress.com/2022/12/telugu-movies-2022-1200.jpg",
    title:"Karthikeya2",
    year:"2022",
    description:"The plot follows Dr. Karthikeya who is on a quest to find the lost anklet of Lord Krishna."
  },
  {
    image:"https://i.ytimg.com/vi/d42Kk2ifY7k/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAbzNr-JjDEcXGIlKgeZSqbpu5G5A",
    title:"Doosukeltha",
    year:"2017",
    description:"A small bet by Chinna during his childhood results in his family escaping from a village."
   
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzv9qcT9tKLE6NWCqyOZ-MMhwO14DJG31n4hBKdlpI6GfHLgMKWkoMG8-6G8Obch-w4s&usqp=CAU",
    title:"Adipurush",
    year:"2023",
    description:"a 2023 Indian mythological action film based on the Hindu epic Ramayana."
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiZSS5E3g4W7QWw_MHQpKFhKgwc5VJsKftidtwWHwL4R2HLX-bj4U82SXNMwXSKR_x4A&usqp=CAU",
    title:"Vikram",
    year:"2022",
    description:"a black ops squad led by Amar is assigned to track down a group of ruthless vigilantes."
    
  },
  {
    image:"https://origin-staticv2.sonyliv.com/videoasset_images/ramaraoonduty_telugu_set4_8nov_landscape_thumb.jpg",
    title:"Ramarao on duty",
    year:"2023",
    description:"Premise. B. Ramarao, a deputy collector turned M.R.O posted at Chittoor"
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s3abGzhxUFVLVnCuUACd5UwW0Q_HNVTeZQ&usqp=CAU",
    title:"Beast",
    year:"2022",
    description:"The film is about Dr. Nate Daniels (Idris Elba), who, after the death of his ex-wife, takes his daughters to the South African savannah to the place where he met his ex."
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yFDP00g9HWmiG1uKO6NZK5WB0c9NC4Yeyg&usqp=CAU",
    title:"Love and Life",
    year:"2020",
    description:" a six-member crew of the International Space Station uncovers the first evidence of extraterrestrial life on Mars."
   
  },
  {
    image:"https://m.media-amazon.com/images/M/MV5BOGRkZTRiNjgtYzJlOS00OTU5LTg5MjEtZjI3MzhhM2QxMzgwXkEyXkFqcGdeQXVyMTU1NTM5NTU5._V1_.jpg",
    title:"Baby",
    year:"2023",
    description:"Baby is a Telugu romantic flick with a twist."
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLG62-DSKeIQn0xsGfLQxcW4xBUXHL2Z89w&usqp=CAU",
    title:"Bala Nagamma",
    year:"2022",
    description:"When Karyavardhi and Bala Nagamma's son, Balavardhi comes to know that his parents are held captive by a wicked wizard"
   
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvNAMUmZqQhxVP-aJ8kIW4CA0mV7oI_D_SQ&usqp=CAU",
    title:"The warrior",
    year:"2022",
    description:"Satya(Ram) is a duty-minded doctor who gets posted in the city of Kurnool which is under the rule of a dreaded gangster Guru(Aadhi Pinisetty)"
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVn_xohb8UKgVzF_ynaXIsdK7OvcEFvhJ1g&usqp=CAU",
    title:"Gharana mogudu",
    year:"2015",
    description:"An arrogant daughter of a rich industrialist decides to marry their factory employee in order to teach him a lesson."
   
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIx_JQjLYENTe9ljrfzeScTiwgEa2zDVQ44A&usqp=CAU",
    title:"Sreemanthudu",
    year:"2019",
    description:"Harsha, a multi-millionaire who has everything, still feels that there is something missing in his life. In an attempt to fill the void, he adopts a village to bring change in the people."
    
  },
  
  {
    image:"https://images.livemint.com/img/2021/07/25/1600x900/Telugu_film_1627197288346_1627197370622.jfif",
    title:"Ishq",
    year:"2018",
    description:"Ranjit Rai and Harbans Lal Saxena are two wealthy businessmen who despise the poor. However, Ranjit's son Ajay meets with his childhood friend Raja"
   
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7zKFruvVjqD5_NurryAP33zzNebY7tUgSQ&usqp=CAU",
    title:"RRR",
    year:"2022",
    description:"It centers around fictional versions of two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
   
  },
  {
    image:"https://assets.mspimages.in/gear/wp-content/uploads/2023/05/Untitled-design-74.jpg",
    title:"Virupaksha",
    year:"2023",
    description:"In 1979 Rudravanam, Venkata Chalapathy and his wife are brutally assaulted, whisked away and immolated by the outraged inhabitants"
    
  },
  {
    image:"https://www.bollymoviereviewz.com/wp-content/uploads/2023/07/Maaveeran-Movie-Box_Office-Collection.jpg",
    title:"Maaveeran",
    year:"2014",
    description:"A comic artist, Sathya sells himself short by letting someone use his sketches for a Tamil paper. "
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JDspZpnwGbd3hoJEEEMbtAEbW3CmoEQUSQ&usqp=CAU",
    title:"Bhai",
    year:"2015",
    description:"BHAI Bhai is the most skilled and trusted enforcer of a Hong Kong-based don named David. David is heavily dependent on Bhai for his day-to-day operations."
    
  }
  
  ]
  
  
  export default function Movies(){
    return(
        <>
        <Typography>
          <h2>Movies</h2>
        </Typography>
  
    <Box sx={{ flexGrow: 1,marginTop:"50px" , backgroundColor:"white" }}>
     
          <Grid    xs={2} sm={4} md={12}  sx={{backgroundColor:"lightred"}}>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          
  
           {
            movies.map((movies)=>{
              return <BasicCards image= {movies.image} title={movies.title} description={movies.description} price={movies.price} rating={movies.rating} year={movies.year}/>
            })
           }
          </Grid>
          
            
          </Grid>
  
          
            
          
          
            
        
    
      
      
    
    </Box>
  
   </>
    )
  }
  
  
            
              
            
            
  
          
        
      
  

