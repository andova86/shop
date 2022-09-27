import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../../components/layouts'
import NextLink from 'next/link'

const LoginPage = () => {
    return (
        <AuthLayout title='Ingresar datos de Sesión'>
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" color="secondary">Iniciar Sesión<noscript></noscript></Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="user"
                            label="Correo"
                            variant='filled'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="user"
                            label="Contraseña"
                            variant='filled'
                            type={'password'}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size='large'
                            className='circular-btn'
                            fullWidth>
                            Ingresar
                        </Button>
                    </Grid>

                    <Grid item xs={12} display='flex' justifyContent={'end'} >
                        <NextLink href={'/auth/register'} passHref>
                            <Link color={'secondary'} underline='always'>
                                No tienes cuenta ?
                            </Link>
                        </NextLink>
                    </Grid>

                </Grid>


            </Box>

        </AuthLayout>
    )
}

export default LoginPage