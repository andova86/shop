import { Box, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../components/layouts'

const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription=''>
       <Box display="flex" justifyContent="center" alignItems="center" 
         height="calc(100vh - 200px)" sx={{flexDirection: {xs:'column', sm:'row'}}}
       >
        <Typography variant="h1" color="h1" fontSize={100} fontWeight={200}>
        
        404 |

        </Typography>

        <Typography variant="h2" color="h2" marginLeft={2} fontSize={30} fontWeight={200}>
            No encontramos ninguna pagina
        </Typography>

       </Box>


    </ShopLayout>
  )
}

export default Custom404