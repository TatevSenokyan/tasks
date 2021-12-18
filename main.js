const useStyles = makeStyles((theme)=>({
   gridItem:{
     
     height:140,
     backgroundColor:'gray',
   
   },
   
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
            <Box mt={5} sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?570:0,
            height:upXs && downSm?480:upSm && downMd?340:upMd?340:0, backgroundColor:'red'}}></Box>
            <Box mt={5} ml={upMd?'30px':0} sx={{width:upXs && downSm?335:upSm && downMd?720:upMd?570:0,
            height:upXs && downSm?480:upSm && downMd?340:upMd?340:0,backgroundColor:'red'
            }}></Box>

         </Box>



    </Box>
   
  )


}



