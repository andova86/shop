import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { IProduct } from '../../domain/product'
import { ProductCard } from '../item/ProductCard'

interface Props {
products: IProduct[]
}

export const ProductList:FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4}>
    {
     products.map(product => (
        <ProductCard product={product} />
      ))
    }
  </Grid>
  )
}
