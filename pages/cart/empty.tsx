import { RemoveCircleOutlineOutlined, RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link'

const EmptyPag = () => {
    return (
        <ShopLayout pageDescription="" title="No hay articulos en el carrito">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"

                sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />

                <Box
                    display="flex"
                    flexDirection={'column'}
                    justifyContent="center"
                    alignItems="center" >

                    <Typography variant="h2"  marginLeft={2} fontSize={30} fontWeight={200}>
                        Su carrito está vació
                    </Typography>
                    <NextLink href={'/'} passHref>
                        <Link typography={'h4'} color={'secondary'}>
                            Regresar
                        </Link>
                    </NextLink>

                </Box>

            </Box>
        </ShopLayout>
    )
}

export default EmptyPag