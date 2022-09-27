import React from 'react'
import { ShopLayout } from '../../components/layouts'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import {  Chip , Link} from '@mui/material'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'
import NextLink from 'next/link'

const HistoryPage = () => {

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "fullName", headerName: "Nombre Completo", width: 300 },
        {
            field: "paid",
            headerName: "Pagada",
            description: "Muestra información si está pagada o no.",
            width: 200,
            renderCell: (params: GridValueGetterParams) => {
                return params.row.paid ? (
                    <Chip
                        sx={{ my: 2 }}
                        label={"Pagada"}
                        variant={"outlined"}
                        color="success"
                        icon={<CreditScoreOutlined />}
                    />
                ) : (
                    <Chip
                        sx={{ my: 2 }}
                        label={"Pendiente de Pago"}
                        variant={"outlined"}
                        color="error"
                        icon={<CreditCardOffOutlined />}
                    />
                );
            },
        },
        {
            field: "detail",
            headerName: "Detalles",
            sortable:false,
            width: 200,
            renderCell: (params: GridValueGetterParams) => {
                return (
                    <NextLink href={`/orders/${params.row.id}`} passHref>
                        <Link color={'secondary'} underline={'always'}>
                             Ver orden
                        </Link>
                    
                    </NextLink>
                ) 
            },
        },
    ];

    const rows = [
        { id: 1, fullName: "Jhon Smith", paid: true },
        { id: 2, fullName: "Swanner James", paid: false },
        { id: 3, fullName: "Jhon Smith", paid: true },
        { id: 4, fullName: "Swanner James", paid: false },
        { id: 5, fullName: "Jhon Smith", paid: true },
        { id: 6, fullName: "Swanner James", paid: false }
    ]

    return (
        <ShopLayout title='Historial de Ordenes' pageDescription='Historial de Ordenes del cliente' >
            <Typography variant="h1" >Historial de Ordenes</Typography>

            <Grid container spacing={2} >

                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />


                </Grid>

            </Grid>

        </ShopLayout>

    )
}

export default HistoryPage