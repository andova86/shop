import { Typography, Grid, TextField, MenuItem, FormControl, Select, Button, Box } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const AddressPage = () => {

  return (
    <ShopLayout title='Direccion' pageDescription='Confirmar direccion del destino'>
       <Typography variant='h1' component={'h1'} >
        Dirección
       </Typography>

      <Grid container spacing={ 2 } sx={{pt:4}}>
        <Grid item xs={ 12 } sm={ 6 }>
            <TextField label="Nombre" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
            <TextField label="Apellido" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
            <TextField label="Direccion" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
            <TextField label="Direccion 2 (Opcional)" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
            <TextField label="Codigo Postal" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
            <TextField label="Ciudad" variant="filled" fullWidth/>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }>
            <FormControl fullWidth>
                <Select variant='filled' label="País">
                <MenuItem value={1} selected>Cuba</MenuItem>
                <MenuItem value={2}>Honduras</MenuItem>
                <MenuItem value={3}>Costa Rica</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        <Grid item xs={ 12 } sm={ 12 } >
            <Box display={'flex'} justifyContent={'center'}>
            <Button color='secondary' size="large">Revisar Pedido</Button>
            </Box>
        </Grid>
        
      </Grid>
    </ShopLayout>
  )
}

export default AddressPage