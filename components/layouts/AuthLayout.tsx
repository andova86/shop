import Head from "next/head"
import { FC } from "react"
import Grid from '@mui/material/Grid'
import { Box } from "@mui/material"



interface Props {
    title: string,
    children: any
}

export const AuthLayout: FC<Props> = ({ children, title}) => {
  return (
    <>
    <Head>
        <title>{ title  }</title>
    </Head>

    <main>
        <Box 
        display={'flex'}
        justifyContent="center" 
        alignItems="center"     
        height="calc(100vh - 200px)" 
        >
            { children }
          
        </Box>
    </main>
    </>
  )
}
