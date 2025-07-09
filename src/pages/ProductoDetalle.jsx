import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import PhoneIcon from '@mui/icons-material/Phone';

const ProductoDetalle = () => {
  const [sabor, setSabor] = useState('Camu Camu');

  const handleSaborChange = (event) => {
    setSabor(event.target.value);
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
        {/* Imagen del producto */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#e0f7fa',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <img
              src="/img/sweetbalance.png"
              alt="Sweet Balance"
              style={{ maxWidth: '100%', borderRadius: 8 }}
            />
            <Chip
              label="1000 ml"
              color="error"
              sx={{ position: 'absolute', bottom: 16, left: 16 }}
            />
          </Box>
        </Box>

        {/* Detalles del producto */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h5" sx={{ color: '#1a237e', fontWeight: 600 }}>
            Sweet Balance
          </Typography>

          <FormControl fullWidth sx={{ maxWidth: 300 }}>
            <InputLabel id="sabor-label">Sabor</InputLabel>
            <Select
              labelId="sabor-label"
              id="sabor-select"
              value={sabor}
              label="Sabor"
              onChange={handleSaborChange}
            >
              
              <MenuItem value="Camu Camu">Solución oral sabor Camu Camu</MenuItem>
              <MenuItem value="Yacón">Solución oral sabor Yacón</MenuItem>
              <MenuItem value="Maca">Solución oral sabor Maca</MenuItem>
            </Select>
          </FormControl>

          <Box>
            <Typography>
              <b>Elige la presentación:</b>
            </Typography>
            <Button
              variant="outlined"
              sx={{ mt: 1, color: '#01579b', borderColor: '#90caf9' }}
            >
              FRASCO
            </Button>
          </Box>

          <Box>
            <Typography>
              <b>Métodos de entrega disponibles:</b>
            </Typography>
            <ul style={{ paddingLeft: '1rem', marginTop: 8 }}>
              <li>
                <LocalShippingIcon fontSize="small" /> Despacho a domicilio{' '}
                <Chip label="Disponible" color="success" size="small" />
              </li>
              <li>
                <StoreIcon fontSize="small" /> Retiro en tiendas:
                <ul style={{ marginTop: 4 }}>
                  <li>
                    <b>La Sanahoria</b> – Av. Vasco Núñez de Balboa 755, Miraflores
                  </li>
                  <li>
                    <b>Madre Natura</b> – Av. Angamos Oeste 1102, Miraflores
                  </li>
                  <li>
                    <b>Viva Salud</b> – Calle Alcanfores 495, Miraflores
                  </li>
                </ul>
              </li>
            </ul>
            <Typography
              sx={{
                mt: 2,
                color: '#37474f',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <PhoneIcon fontSize="small" />
              <b>Para más información:</b>
              <Link href="tel:987654321" underline="hover" color="inherit">
                987-654-321
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductoDetalle;
