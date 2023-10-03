import React, { useState } from 'react'
import { Box, ToggleButton, ToggleButtonGroup, Typography, styled,Divider } from "@mui/material";
import useFetch from '../../Hooks/useFetch';
import CarouselComp from './CarouselComp';

////////////////////////////////////////////////////////////////////////////////

const MainBox = styled(Box) (({theme}) =>  ({
  width:"70vw",
  [theme.breakpoints.down('lg')]:{
    margin:0,
    width:'100vw',
    padding:'20px',
  },
  margin:'0 auto 0rem auto',

}))
const ToggleButtonStyled = styled(ToggleButton)({
    color:"#000",
    textTransform:"none",
    width:'5rem',
    borderRadius:100,
    border:'none',

    '&:select':{
      background: 'linear-gradient(194deg, rgba(255,76,0,1) 42%, rgba(245,110,0,1) 59%)',
      transition: 'background 1s ease-in-out',
      color:'#fff',
    }
})
const TrendingBox = styled(Box) (({theme}) =>  ({
  display:"flex",
   justifyContent:'space-between',
   alignItems:'center',
   marginBottom:"1rem",

}))
const CarouselBox = styled(Box) (({theme}) => ({
 

}))
const DividerStyled = styled(Divider) (({theme}) => ({
  borderColor:'#fff',
  margin:'1rem auto 2rem auto', 
}))

////////////////////////MAIN FUNCTION STARTs/////////////////////////////////////////
const Trending = () => {
 
  const[btnValue,setBtnValue] = useState('day');
  const[timeFrame,setTimeFrame] = useState('day');

  const{ data,loading } = useFetch(`/trending/movie/${timeFrame}`); 
  const handleChange = (e,newAlignment) => {
    e.preventDefault();
    setBtnValue(newAlignment);
    setTimeFrame(e.target.value);

  }
  return (
    <>
        <MainBox>   

          <TrendingBox >
            <Typography sx={{fontSize:'1.3rem',fontWeight:600}}>Trending</Typography>
            <ToggleButtonGroup sx={{background: '#fff', width:'10rem',padding:'2px 5px',borderRadius:10,height:'2.4rem',}}
              exclusive
              onChange={handleChange}
              value={btnValue}
              >
              <ToggleButtonStyled value="day" >
                Day
              </ToggleButtonStyled>
              <ToggleButtonStyled value="week" >
                Week
              </ToggleButtonStyled>
            </ToggleButtonGroup>
         </TrendingBox>
          
          <CarouselBox >
          {
            !loading &&
           <CarouselComp data={data?.results} loading={loading} recommended={false}/>
          
          } 
          <DividerStyled  />
          </CarouselBox>

      </MainBox>
  </>
  )
}

export default Trending