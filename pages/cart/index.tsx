import React from 'react'
import { ShopLayout } from '../../components/layouts'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Box, Card, CardContent, Divider, Button } from '@mui/material'
import { CartList } from '../../modules/cart/application/list/CartList'
import { OrderSummary } from '../../modules/cart/application/detail/OrderSummary'

const CartPage = () => {
    return (
        <ShopLayout title='Carrito - 3' pageDescription='Pagina del carrito de compra'>
            <Typography variant="h1" color="secondary" sx={{mb:5}}>Carrito de Compra</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>

                    <CartList editable={true}/>

                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2" color="initial">Orden</Typography>
                            <Divider sx={{ my: 1 }} />
                        </CardContent>

                        <OrderSummary />

                        <Box sx={{ my: 3 }} alignItems={'center'} display="flex" justifyContent={'center'}>
                            <Button className='circular-btn' color="secondary" >
                                Checkout

                            </Button>

                        </Box>

                    </Card>

                </Grid>


            </Grid>
        </ShopLayout>
    )
}

export default CartPage