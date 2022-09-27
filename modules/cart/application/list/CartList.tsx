import { FC } from 'react'
import { initialData } from '../../../../database/products'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import NextLink from 'next/link'
import { Box, Button, CardActionArea, CardMedia, Link } from '@mui/material'
import { ItemCounter } from '../../../../components/ui'


interface Props {
 editable: boolean
}

const productsInCart = [initialData.products[0], initialData.products[2], initialData.products[3]]

export const CartList: FC<Props> = ({ editable }) => {
    return (
        <>
            {
                productsInCart.map((product, pos) => (

                    <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                            <NextLink href={'/product/slug'} passHref >
                                <Link>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            image={`/products/${product.images[0]}`}
                                            alt={product.title}
                                            className="fadeIn"
                                            sx={{borderRadius:'5px'}}
                                        />                                      
                                    </CardActionArea>
                                     
                                </Link>
                            </NextLink>

                        </Grid>

                        <Grid item xs={7}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant="body1" color="initial">{ product.title }</Typography>
                                <Typography variant="body2" color="initial">Talla: <strong>M</strong></Typography>

                                {
                                    editable ? <ItemCounter /> :

                                        <Typography>No se puede editar</Typography>
                                }
                                

                            </Box>

                        </Grid>

                        <Grid item xs={2} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography variant="subtitle1" color="initial">{`$${product.price}`}</Typography>

{}
                              <Button variant='text' color='secondary'>Remover</Button>
                        </Grid>

                    </Grid>

                ))
            }
        </>
    )
}
