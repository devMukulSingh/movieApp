import React from 'react';
import { Box,styled,Typography,Divider} from "@mui/material";
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import Img from '../LazyLoading/Img';
///////////////////////////////////////////

const MainBox = styled(Box) (({theme}) =>  ({
  padding:'1rem 7rem',
  [theme.breakpoints.down('md')]:{
    padding:'0.5rem 2rem'
  }

}))
const CastImg = styled(Img)({
  width:'9rem',
  height:'11rem',
  objectFit:"cover",
  objectPosition: 'top',

})
const CastCarousel = styled(Box)({
  display:"flex",
  gap:'1rem',
  overflow:'scroll',
  color:'#000',
  scrollMargin: 10,
  padding:'1rem 0',
  scrollbarWidth:'10px',
})
const CastDetailsBox = styled(Box)({
  background:'#fff',
  borderRadius:10,
  width:'9rem',
})
const DividerStyled = styled(Divider) (({theme}) => ({
  borderColor:'#fff',
  margin:'2rem auto',
}))
const CastName = styled(Typography) (({theme})=> ({
    display:'-webkit-box',
    '-webkit-line-clamp':'2',
    '-webkit-box-orient':'vertical',
    overflow:'hidden',
    fontSize:16,
    fontWeight:600
}))
const CastCharacter = styled(Typography)({
  display:'-webkit-box',
  '-webkit-line-clamp':'2',
  '-webkit-box-orient':'vertical',
  overflow:'hidden',
  fontSize:13,
})
///////////////////////////MAIN FUNCTION STARTS///////////////////////////////
  
const CastSection = ( {url} ) => {

    const { id,mediaType } = useParams();
    const { data,loading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <>
    {
      !loading && data?.cast && 
      
    <MainBox>
        <Typography sx={{ fontWeight:600,fontSize:20}}>Top Billed Cast</Typography>

        <CastCarousel>

          {
            !loading &&
            data?.cast?.map( (cast,index) => {

              const castImg = url.backdrop + cast.profile_path;
              const emptyImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';

              return(
                <CastDetailsBox >
                    <CastImg src={ cast?.profile_path ? castImg : emptyImg }  alt="castImg" />
                    <Box sx={{marginTop:"auto",padding:'10px 7px',display:'flex',flexDirection:"column"}}>
                      <CastName >{cast.original_name}</CastName>
                      <CastCharacter>{cast.character}</CastCharacter>
                    </Box>
                </CastDetailsBox>
              )

            })

          }
          </CastCarousel>
          <DividerStyled/>
    </MainBox>

        }
    </>

  )
}

export default CastSection