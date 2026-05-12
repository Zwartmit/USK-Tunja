---
name: Urban Sketchers Tunja System
colors:
  primary: '#1A1A1A'
  secondary: '#666666'
  surface: '#F9F9F8'
  surface-variant: '#EFEFEF'
  on-surface: '#1A1A1A'
  accent: '#D9381E'
  error: '#D9381E'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  accent-stamp: '#D9381E'
  ink: '#1A1A1A'
  graphite: '#666666'
  paper: '#F9F9F8'
  cardboard: '#EFEFEF'
typography:
  headings:
    fontFamily: Space Grotesk
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: '1.6'
  mono:
    fontFamily: Courier Prime
    fontSize: 14px
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  mono-label:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  none: 0px
  sm: 2px
spacing:
  unit: 4px
  edge-margin-mobile: 16px
  edge-margin-desktop: 40px
  gutter: 1px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

# Design System

## Overview
Una interfaz con estética editorial, cruda y documental para la comunidad de Urban Sketchers Tunja. 
El diseño se inspira en el acto físico de dibujar: papel, tinta china, grafito y el urbanismo crudo. La interfaz es predominantemente monocromática y estructurada (como un lienzo en blanco o una cuadrícula de ciudad), permitiendo que el color y la vida provengan EXCLUSIVAMENTE de las obras de arte y las fotografías de la comunidad. 

Se aleja por completo del diseño corporativo "limpio". Abraza el neobrutalismo sutil, el estilo fanzine y la cartografía.

## Colors
- **Primary** (#1A1A1A - Tinta China): Textos principales, bordes de alto contraste, elementos interactivos clave.
- **Secondary** (#666666 - Grafito): Textos secundarios, metadatos, bordes interiores.
- **Surface** (#F9F9F8 - Papel Acuarela): Un blanco roto cálido para el fondo principal, reduce la fatiga visual y simula el papel.
- **Surface-variant** (#EFEFEF - Cartón): Fondos para secciones secundarias o estados de hover.
- **Accent** (#D9381E - Sello Rojo): Un rojo vibrante (estilo sello de caucho o marcador) usado MUY raramente para notificaciones, fechas destacadas o pines en el mapa interactivo.
- **On-surface** (#1A1A1A): Contraste máximo sobre el fondo de papel.

## Typography
- **Headlines** (Space Grotesk): Geométrico, urbano y con carácter. Para títulos de eventos y nombres de autores.
- **Body** (Inter): Máxima legibilidad para descripciones, manifiestos y artículos.
- **Mono / Labels** (Courier Prime): Estilo máquina de escribir para metadatos (ej. coordenadas GPS, hora del evento, técnicas usadas: `[Acuarela]`, `[Tinta]`).

## Components
- **Borders & Grid**: Uso intensivo de bordes sólidos (`1px solid #1A1A1A` o `2px`). Las divisiones entre secciones deben parecer líneas trazadas con un tiralíneas.
- **Buttons & Cards**: Cero bordes redondeados (0px) o máximo 2px. No usar sombras suaves (drop-shadows difuminadas). En su lugar, usar sombras sólidas desplazadas (offset shadows, ej: `box-shadow: 4px 4px 0px #1A1A1A`) para un efecto de imprenta/fanzine.
- **Backgrounds**: Se fomenta el uso sutil de texturas de ruido (noise) o patrones de tramado (hatching / dots) en fondos de componentes vacíos o banners.
- **Images**: Las imágenes de los bocetos no deben tener recortes extremos, deben mostrarse completas y respetar su formato original (landscape, portrait o cuadrado).

## Do's and Don'ts
- **Do**: Usa el color de fondo `surface` y bordes negros agresivos para enmarcar las fotografías de los bocetos.
- **Do**: Usa el acento rojo (`accent`) únicamente como si fuera un sello físico sobre el papel.
- **Don't**: NO uses degradados suaves (gradients), sombras difuminadas, ni bordes muy redondeados.
- **Don't**: NO satures la interfaz con colores; la paleta de la web no debe competir con la paleta de las acuarelas de los artistas.