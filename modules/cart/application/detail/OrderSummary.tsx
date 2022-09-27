import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {}

export const OrderSummary = () => {
    return (
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
                <Typography variant="body1" color="initial">
                    Nro. Productos:
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>3 elementos</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Subtotal:</Typography>
            </Grid>

            <Grid item xs={6}>
            <Typography>{`$${ 155 }`}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos (15%):</Typography>
            </Grid>

            <Grid item xs={6}>
            <Typography>{`$${ 35 }`}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h6" >Total:</Typography>
            </Grid>

            <Grid item xs={6}>
            <Typography variant="h6">{`$${ 190 }`}</Typography>
            </Grid>
        </Grid>
        </Paper>
    );
};
