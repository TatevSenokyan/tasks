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


// const Profile = () => {
//     const classes = ProfileStyled();

//   return (
//      <Box 
//      sx={{
//          marginTop:20,
//          width: '100%',
//          display:'flex',
//          justifyContent:'center' 
//      }}
//      >
        
//        <Box 
//         sx={{
//         display:'flex',
//         flexDirection:'column'
//       }}
       
//        >
//            <Box className={classes.mainProfile}>
//               <Box sx={{
//                   width:275,
//                   justifyContent:'space-between',
//                   display:'flex',
                  
//               }}>
//                 <Box  mt={10} sx={{display:'flex', justifyContent:'space-between',  width:'100%'}}>
//                   <Box component={'img'}  src={profileImg} alt="picture" width={65}/>
//                   <Box sx={{display:'flex',flexDirection:'column', width:117, height:61, margin:'2px 12px'}}>
//                   <Typography className={classes.profileName}>fnxitodd_shots</Typography>
//                   <Typography className={classes.profileDesc}>Dark Winners</Typography>
//                   <Typography sx={{display:'flex', alignItems:'center', fontFamily: 'Forza',fontSize: 12,textTransform: 'capitalize',color: '#FFFFFF',
//                    marginTop:2}}>
//                      <Box mr={1}  sx={{width:8, height:8, borderRadius:'50%',backgroundColor:' #59B015'}}></Box>
//                       <span style={{opacity:0.6}}>Now Online</span>
//                   </Typography>
//                 </Box>
//                 <Box  className={classes.level}>
//                    <Typography className={classes.levelNumber}>58</Typography>
//                    <Typography className={classes.levelText}>Level</Typography>
//                 </Box>
//                  </Box>
//               </Box>
//               <Box component={'img'} src={lineImg} mt={'30px'}/> 

//               <Box className={classes.buttonsContainer}>
//                  <Box className={classes.topButtonsContainer}>
//                    <Box className={classes.topButtons}>
//                       <Box className={classes.firstFollowingButton}></Box>
//                       <Box className={classes.firstNumberButton}></Box>
                    
//                    </Box>
//                    <Box>
//                        <Box></Box>
//                        <Box></Box>
//                    </Box>
//                  </Box>
//                  <Box className={classes.bottomButtonsContainer}>
//                    <Box className={classes.topButtons}>
//                       <Box className={classes.firstButton}></Box>
//                       <Box className={classes.secondButton}></Box>
                    
//                    </Box>
//                    <Box>
//                        <Box></Box>
//                        <Box></Box>
//                    </Box>
//                  </Box>
//                  <Box>
                     
//                  </Box>

//               </Box>
//            </Box>

//            <Box width={335}>
//                  <Grid className={classes.gridItem} xs={12} mt={5} width={275}>
//                     <Box sx={{width:64,height:98, display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
//                         <Box component={'img'} src={killImg} alt='kill' width={44}/>
//                         <Typography className={classes.gridItemNumber}>1.965</Typography>
//                         <Typography className={classes.gridItemText}>KILL</Typography>
//                     </Box>
//                  </Grid>
//                  <Grid className={classes.gridItem} xs={12} mt={5}>
//                  <Box sx={{width:64,height:98, display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
//                         <Box component={'img'}  src={deathImg} alt='kill' width={44}/>
//                         <Typography className={classes.gridItemNumber}>456</Typography>
//                         <Typography className={classes.gridItemText}>DEATH</Typography>
//                     </Box>
//                 </Grid>
//                 <Grid className={classes.gridItem} xs={12} mt={5}>
//                 <Box sx={{width:64,height:98, display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
//                         <Box component={'img'} src={assistImg} alt='kill' width={44}/>
//                         <Typography className={classes.gridItemNumber}>745</Typography>
//                         <Typography className={classes.gridItemText}>ASSIST</Typography>
//                     </Box>
//                 </Grid>
//                 <Grid className={classes.gridItem} xs={12} mt={5}>
//                      <Box sx={{width:64,height:98, display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
//                         <Box component={'img'}  src={kdrImg} alt='kill' width={44}/>
//                         <Typography className={classes.gridItemNumber}>2.94</Typography>
//                         <Typography className={classes.gridItemText}>KDR</Typography>
//                     </Box>
//                 </Grid>
//             </Box>
//        </Box>
      

//      </Box>
//   )
// };

// export default Profile;


function createData(name, calories, fat, carbs, protein, price) {
  return {
    name:<><span>{name}</span><br></br><span>{calories}</span></>,
    calories,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const classes=useStyles()
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow classes={{root:classes.root}} sx={{ '& > *': {border:'1px solid transparent',boxSizing:'border-box',  background:props.index%2==0?'rgba(255, 255, 255, 0.05)':'',marginLeft:'90px !important'} }}>
        <TableCell >
          {/* <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> */}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        
      </TableRow>
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow> */}
                  {/* ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(`Mode`, 159),
  createData('Mode', 159),
  createData('Mode', 159),
  createData('Mode', 159),
  createData('Mode', 159),
  createData('Mode', 159),

];

export default function CollapsibleTable() {
  return (
    <TableContainer sx={{textAlign:'center',width:335, height:930, margin:'auto', backgroundSize:'cover',backgroundImage:`url(${backgroundImg})`}} >
      <h1>last match</h1>
      <hr></hr>
      <Table sx={{margin:'auto', width:275}} aria-label="collapsible table">
       
        <TableBody>
          {rows.map((row,index) => (
            <Row key={row.name} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

