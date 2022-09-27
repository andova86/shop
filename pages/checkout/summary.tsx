import React from 'react'
import { ShopLayout } from '../../components/layouts'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Box, Card, CardContent, Divider, Button, Link } from '@mui/material'
import { CartList } from '../../modules/cart/application/list/CartList'
import { OrderSummary } from '../../modules/cart/application/detail/OrderSummary'
import NextLink from "next/link"

const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen de la' pageDescription='Resumen de la orden'>
            <Typography variant="h1" color="secondary" sx={{ mb: 5 }}>Resumen de la orden</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>

                    <CartList editable={false} />

                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2" color="initial">Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box sx={{mt:2, mb:1}} display={'flex'} justifyContent={'end'}>
                                <NextLink href={'/checkout/address'} passHref>
                                    <Link underline='always' color={'secondary'}>
                                     Editar
                                    </Link>

                                </NextLink>
                            </Box>

                            <Typography variant="subtitle1" >Dirección de Entrega</Typography>
                            <Typography >Jhon Smith</Typography>
                            <Typography >656 Some Place in the Wordl</Typography>
                            <Typography >SkyllPlace, HYA 288</Typography>
                            <Typography >Australia</Typography>
                            <Typography >+1786 3654789</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box sx={{mt:2, mb:1}} display={'flex'} justifyContent={'end'}>
                                <NextLink href={'/cart'} passHref>
                                    <Link underline='always' color={'secondary'}>
                                     Editar
                                    </Link>

                                </NextLink>
                            </Box>
                            <OrderSummary />

                            <Box sx={{ my: 3 }} alignItems={'center'} display="flex" justifyContent={'center'}>
                                <Button className='circular-btn' color="secondary" >
                                    Confirmar Orden

                                </Button>

                            </Box>
                        </CardContent>




                    </Card>

                </Grid>


            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage