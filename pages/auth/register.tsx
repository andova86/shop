import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from '../../components/layouts'
import NextLink from 'next/link'

const RegisterPage = () => {
    return (
        <AuthLayout title='Registrar usuario'>
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" color="secondary">Registrar usuario<noscript></noscript></Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="userName"
                            label="Nombre"
                            variant='filled'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="userEmail"
                            label="Correo"
                            variant='filled'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="userPassword"
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
                        <NextLink href={'/auth/login'} passHref>
                            <Link color={'secondary'} underline='always'>
                                Ir a iniciar sesión
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage