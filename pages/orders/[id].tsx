import React from 'react'
import { ShopLayout } from '../../components/layouts'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Box, Card, CardContent, Divider, Button, Link, Chip } from '@mui/material'
import { CartList } from '../../modules/cart/application/list/CartList'
import { OrderSummary } from '../../modules/cart/application/detail/OrderSummary'
import NextLink from "next/link"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'
interface Props {

}

const OrderPage = ({ }) => {
    return (
        <ShopLayout title='Resumen de la orden 123456' pageDescription='Resumen de la orden'>
            <Typography variant="h1" color="secondary" sx={{ mb: 5 }}>Orden: 123456</Typography>

            <Chip
                sx={{ my: 2 }}
                label={'Pendiente de Pago'}
                variant={'outlined'}
                color="error"
                icon={<CreditCardOffOutlined />}
            />

            {/* <Chip 
             sx={{my:2}}
             label={'Orden ya fue pagada'}
             variant={'outlined'}
             color="success"
             icon={ <CreditScoreOutlined />}
           /> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>

                    <CartList editable={false} />

                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2" color="initial">Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box sx={{ mt: 2, mb: 1 }} display={'flex'} justifyContent={'end'}>
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

                            <Box sx={{ mt: 2, mb: 1 }} display={'flex'} justifyContent={'end'}>
                                <NextLink href={'/cart'} passHref>
                                    <Link underline='always' color={'secondary'}>
                                        Editar
                                    </Link>

                                </NextLink>
                            </Box>
                            <OrderSummary />

                            <Box sx={{ my: 3 }} alignItems={'center'} display="flex" justifyContent={'center'}>

                                {/* TODO: pending */}
                                <Chip
                                    sx={{ my: 2 }}
                                    label={'Orden ya fue pagada'}
                                    variant={'outlined'}
                                    color="success"
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>




                    </Card>

                </Grid>


            </Grid>
        </ShopLayout>
    )
}

export default OrderPage