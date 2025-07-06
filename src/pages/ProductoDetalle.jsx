import React, { useState } from 'react';
import {
  Box, Typography, Grid, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Chip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';

const ProductoDetalle = () => {
  const [cantidad, setCantidad] = useState(1);
  const [open, setOpen] = useState(false);

  const handleComprar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f3f6fa',
        minHeight: '100vh',
        py: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 4,
          maxWidth: 1100,
          width: '100%',
          p: 3,
          gap: 3,
        }}
      >
        <Box sx={{ flex: 1, backgroundColor: '#e0f7fa', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
          <Box sx={{ position: 'relative' }}>
            <img src="/img/sweetbalance.png" alt="Sweet Balance" style={{ maxWidth: '100%', borderRadius: 8 }} />
            <Chip
              label="1000 ml"
              color="error"
              sx={{ position: 'absolute', bottom: 16, left: 16 }}
            />
          </Box>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <Typography variant="h5" sx={{ color: '#1a237e', fontWeight: 600 }}>
            Sweet Balance 50
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#546e7a' }}>
            Solución Oral Sabor Fresa - Frasco 1L
          </Typography>
          <Typography variant="body1">
            <b>Precio:</b> <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>S/ 7.00</span>
          </Typography>

          <Box>
            <Typography><b>Elige la presentación:</b></Typography>
            <Button variant="outlined" sx={{ mt: 1, color: '#01579b', borderColor: '#90caf9' }}>FRASCO</Button>
          </Box>

          <Box>
            <Typography><b>Métodos de entrega disponibles:</b></Typography>
            <ul style={{ paddingLeft: '1rem', marginTop: 8 }}>
              <li><LocalShippingIcon fontSize="small" /> Despacho a domicilio <Chip label="Disponible" color="success" size="small" /></li>
              <li><StoreIcon fontSize="small" /> Retiro en botica <Chip label="Gratis" color="primary" size="small" /></li>
            </ul>
          </Box>

          <TextField
            label="Cantidad"
            type="number"
            size="small"
            value={cantidad}
            onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
            sx={{ maxWidth: 120 }}
          />

          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<ShoppingCartIcon />}
            onClick={handleComprar}
            sx={{ mt: 2 }}
          >
            AGREGAR AL CARRITO
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          🎉 Orden de Compra Realizada
        </DialogTitle>
        <DialogContent>
          <Typography>Gracias por tu compra. Hemos registrado tu pedido correctamente.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductoDetalle;