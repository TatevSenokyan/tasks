import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import backgroundImg from './images/background.png';
import lineImg from './images/Line.png'
import line from './images/linee.png'
import timeImg from './images/time.png'
import gameImg from './images/game.png'




const useStyles = makeStyles((theme)=>({
   gridItem:{
     height:140,
     backgroundColor:'gray',
   },
   overallContainer:{
     width:335,
     backgroundImage:`url(${backgroundImg})`,
     backgroundSize:'cover'

   }
   
}));


export default function App () {
  const classes=useStyles()
  const theme = useTheme();

  const upXs = useMediaQuery(theme.breakpoints.up('xs'));
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
  
    <Box sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?'91%':0,display:'flex',flexDirection:'column', margin:'auto'}}>
      <Box sx={{display:'flex',flexDirection:upMd?'row':'column'}} className={classes.topContainer}> 
         <Box sx={{width:upXs && downSm || upSm && downMd ?'100%':'50%',height:300,backgroundColor:'black'}} className={classes.profileContainer}>

         </Box>
         <Box  sx={{width:upXs && downSm || upSm && downMd?'100%':'50%'}} className={classes.gridContainer}>
           <Grid container>
           <Grid className={classes.gridItem} xs={12} sm={5.8} ml={!upMd?0:2.5} mt={upMd?0:2.5} md={5.5} >
           
           </Grid>
           <Grid  className={classes.gridItem} xs={12} sm={5.8} md={5.5} mt={upMd?0:2.5} ml={upSm && downMd?'24px':upMd?2:0} >
            
            </Grid>
            <Grid className={classes.gridItem}  xs={12} sm={5.8} md={5.5}  ml={upMd?2.5:0}   mt={2.5}>
            
            </Grid>
            <Grid className={classes.gridItem}  xs={12} sm={5.8} md={5.5}  mt={2.5} ml={upSm && downMd?'24px':upMd?2:0}>
            
            </Grid>
            </Grid>
           
         </Box>
        
        
      </Box>


      <Box sx={{display:'flex', flexDirection:upMd?'row':'column'}} className={classes.bottomContainer}>
         {downSm? <>
           <Box className={classes.overallContainer} mt={5} sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?570:0,
            height:upXs && downSm?420:upSm && downMd?340:upMd?340:0}}>
                <p style={{color:'white', width:'100%'}}>Overall</p>
                <Box component={'img'} src={lineImg} sx={{width:'100%', height:'auto'}}></Box>
                <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'138px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'137px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                </Box>
                 <Box component={'img'} src={lineImg} sx={{width:275,margin:'0 30px'}}></Box>
                 <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'138px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'137px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                </Box>
                <Box component={'img'} src={lineImg} sx={{width:275,margin:'0 30px'}}></Box>
                <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'138px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                
                </Box>
            </Box>
            <Box className={classes.overallContainer} mt={5} ml={upMd?'30px':0} sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?570:0,
                height:upXs && downSm?420:upSm && downMd?340:upMd?340:0
                }}>
    
                   <p style={{color:'white', width:'100%'}}>Last match</p>
                    <Box component={'img'} src={lineImg} sx={{width:'100%', height:'auto'}}></Box>
                    <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                      <Box sx={{width:'138px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                      </Box>
                      <img src={line}  />
                      <Box sx={{width:'137px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                      </Box>
                    </Box>
                     <Box component={'img'} src={lineImg} sx={{width:275,margin:'0 30px'}}></Box>
                     <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                      <Box sx={{width:'138px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                      </Box>
                      <img src={line}  />
                      <Box sx={{width:'137px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                      </Box>
                    </Box>
                    <Box component={'img'} src={lineImg} sx={{width:275,margin:'0 30px'}}></Box>
                    <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                      <Box sx={{width:'138px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                        <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                      </Box>
                      <img src={line}  />
                    
                    </Box>
                </Box>
                </>
          : (

          <>
          <Box className={classes.overallContainer} mt={5} sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?570:0,
            height:upXs && downSm?420:upSm && downMd?340:upMd?340:0}}>
                <p style={{color:'white', width:'100%'}}>Overall</p>
                <Box component={'img'} src={lineImg} sx={{width:'100%', height:'auto'}}></Box>
                <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                </Box>
                <Box component={'img'} src={lineImg} sx={{width:660,margin:'0 30px'}}></Box>
                <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'440px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                </Box>
                
              
            </Box>
            <Box className={classes.overallContainer} mt={5} sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?570:0,
            height:upXs && downSm?420:upSm && downMd?340:upMd?340:0}}>
                <p style={{color:'white', width:'100%'}}>Overall</p>
                <Box component={'img'} src={lineImg} sx={{width:'100%', height:'auto'}}></Box>
                <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                </Box>
                <Box component={'img'} src={lineImg} sx={{width:660,margin:'0 30px'}}></Box>
                <Box sx={{display:'flex',width:'100%',flexDirection:'row',marginTop:'15px'}}>
                  <Box sx={{width:'220px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={timeImg} sx={{width:20,height:'auto'}}></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                  <img src={line}  />
                  <Box sx={{width:'440px',marginLeft:'30px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Box component={'img'} src={gameImg} sx={{width:22,height:16}} ></Box>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>game times</Typography>
                    <Typography fontSize={12} color={'#FFFFFF'} opacity={0.6}>99909990</Typography>
                  </Box>
                </Box>
                
              
            </Box>
          </>
         )}   





         

         </Box>



    </Box>
   
  )


}
