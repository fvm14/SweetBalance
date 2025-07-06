import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button
} from '@mui/material';
import './Recetas.css';

const recetas = [
  {
    nombre: 'Pan de Yacón',
    descripcion: 'El yacón es un tubérculo naturalmente dulce, rico en fructooligosacáridos, que ayudan a la salud intestinal. Esta receta no contiene azúcar añadida, lo que la hace ideal para personas que buscan controlar su glicemia.',
    imagen: '/img/pan-yacon.jpg',
    boton: 'Ver receta',
    beneficios: 'Ideal para personas con resistencia a la insulina o que desean reducir el azúcar. El yacón mejora la digestión y el tránsito intestinal.',
    ingredientes: [
      '2 tazas de harina integral',
      '1 taza de yacón rallado',
      '2 huevos',
      '1/4 taza de aceite de coco',
      '1 cdta de polvo de hornear',
      '1 cdta de canela en polvo',
      '1/2 taza de nueces picadas (opcional)'
    ],
    preparacion: [
      'Precalienta el horno a 180°C.',
      'Mezcla el yacón rallado, huevos y aceite en un bol.',
      'Agrega la harina, polvo de hornear y canela.',
      'Incorpora las nueces si deseas.',
      'Vierte en un molde engrasado.',
      'Hornea 35-40 minutos hasta que esté dorado.',
      'Deja enfriar antes de desmoldar y servir.'
    ]
  },
  {
    nombre: 'Jugo Antioxidante',
    descripcion: 'Este jugo combina camu camu, una de las frutas con más vitamina C del mundo, con maca, un adaptógeno que mejora la energía y el equilibrio hormonal. Ideal para fortalecer el sistema inmune y reducir el estrés oxidativo',
    imagen: '/img/jugo-camu-maca.jpg',
    boton: 'Ver preparación',
    beneficios: 'El camu camu aporta mucha vitamina C y la maca mejora el equilibrio hormonal. Es excelente para combatir el cansancio y reforzar defensas.',
    ingredientes: [
      '1 cdta de polvo de camu camu',
      '1 cdta de polvo de maca',
      '250 ml de agua',
      'Jugo de 1 limón',
      'Miel o estevia al gusto'
    ],
    preparacion: [
      'Coloca el agua en un vaso mezclador.',
      'Añade camu camu, maca y jugo de limón.',
      'Endulza con miel o estevia.',
      'Mezcla hasta integrar todo.',
      'Sirve frío con hielo si lo deseas.'
    ]
  },
  {
    nombre: 'Ensalada Balanceada',
    descripcion: 'Una ensalada rica en fibra, vitaminas y grasas saludables. Incluye vegetales frescos, semillas y una fuente de proteína vegetal o animal, lo que la convierte en una comida completa y baja en carbohidratos.',
    imagen: '/img/ensalada-balanceada.jpg',
    boton: 'Ver detalles',
    beneficios: 'Contiene vegetales crudos, semillas y quinua. Es ideal para mantener la saciedad, controlar el peso y aportar nutrientes esenciales.',
    ingredientes: [
      '1 taza de espinaca',
      '1/2 taza de quinua cocida',
      '1/2 palta en cubos',
      '1/2 taza de tomate cherry',
      '1/4 taza de pepino en rodajas',
      '2 cdas de semillas de chía o linaza',
      '1 huevo sancochado o tofu'
    ],
    preparacion: [
      'Lava y seca los vegetales.',
      'Mezcla todos los ingredientes en un bol.',
      'Agrega el huevo o tofu como fuente de proteína.',
      'Prepara un aderezo con aceite de oliva, limón, sal y pimienta.',
      'Vierte el aderezo sobre la ensalada y sirve.'
    ]
  }
];

const Recetas = () => {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  const abrirPopup = (receta) => {
    setRecetaSeleccionada(receta);
  };

  const cerrarPopup = () => {
    setRecetaSeleccionada(null);
  };

  return (
    <div className="recetas-container">
      <h2 className="recetas-titulo">Recetas Saludables</h2>
      <div className="recetas-grid">
        {recetas.map((receta, index) => (
          <div className="receta-card" key={index}>
            <img src={receta.imagen} alt={receta.nombre} className="receta-img" />
            <h3>{receta.nombre}</h3>
            <p>{receta.descripcion}</p>
            <button className="receta-btn" onClick={() => abrirPopup(receta)}>
              {receta.boton}
            </button>
          </div>
        ))}
      </div>

      <Modal open={!!recetaSeleccionada} onClose={cerrarPopup}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 900,
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
          {recetaSeleccionada && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' }, gap: 4 }}>
              <Box sx={{
                border: '3px solid #e0e0e0',
                borderRadius: 2,
                overflow: 'hidden',
                height: '100%',
                alignSelf: 'center'
              }}>
                <img
                  src={recetaSeleccionada.imagen}
                  alt={recetaSeleccionada.nombre}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {recetaSeleccionada.nombre}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                  sx={{ textAlign: 'justify' }}
                >
                  {recetaSeleccionada.beneficios}
                </Typography>

                <Typography variant="subtitle2" fontWeight="bold" mt={2}>
                  🧾 Ingredientes:
                </Typography>
                <ul style={{ textAlign: 'justify', paddingLeft: '1rem' }}>
                  {recetaSeleccionada.ingredientes.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </ul>

                <Typography variant="subtitle2" fontWeight="bold" mt={2}>
                  👨‍🍳 Preparación:
                </Typography>
                <ol style={{ textAlign: 'justify', paddingLeft: '1rem' }}>
                  {recetaSeleccionada.preparacion.map((paso, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{paso}</Typography>
                    </li>
                  ))}
                </ol>

                <Box sx={{ mt: 3 }}>
                  <Button variant="contained" onClick={cerrarPopup}>Cerrar</Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Recetas;
