# VitalHub | Social Network

![vh](/docs/vh-01.png)

Acceso al whiteboard en Figma [aquí]()

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Diseño y funcionalidades](#2-diseño-y-funcionalidades)
- [3. Test](#3-tests)
- [4. Tecnologías](#4-tecnologías)
- [5. Créditos](#5-créditos)
- [6. Licencia](#6-licencia)

## 1. Resumen del proyecto
VitalHub es una red social para personas interesadas en formar parte de y construir en conjunto una comunidad de vida saludable.
En VitalHub, sabemos que los hábitos son fundamentales y que el balance es clave en una vida donde no todo es fitness, es por ello que procuramos generar un entorno saludable, donde las personas puedan compartir rutinas, tips de ejercicio, recetas balanceadas y miles de ideas, fomentando e incentivando a los demás miembros de forma positiva.

El proyecto consta de una Single-page Application (SPA) con autenticación mediante Firebase, base de datos en Firestore/Firebase y fue desplegado en Netlify. El diseño es completamente responsivo y cuenta con tests para todas las vistas.

### Los objetivos generales de este proyecto son los siguientes

- Desarrollar una SPA con temática de red social.
- Aplicar los conceptos de responsividad en el desarrollo y creación de las vistas de usuario (templates).
- Implementar un router para la navegación entre las diferentes vistas de la aplicación
- Emplear un servicio externo para la persistencia de datos de la aplicación
- Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 2. Diseño y funcionalidades

Los prototipos de alta fidelidad y el flujo de usuario fueron diseñados en [Figma](https://www.figma.com/file/3rNMRouWOi2V3H2QKo9m4W/DEV010-Social-Network?type=whiteboard&node-id=0%3A1&t=l2q7C1ZZYkGvHHfi-1).

Las historias de usuario consisten en:

- **Onboarding**: Breve introducción a la app
- **Inicio de sesión/Registro de nueva usuaria**: La aplicación permite iniciar sesión o registrarse mediante correo eletrónico o Google. Cuando se realiza el registro mediante correo electrónico, permite a la usuaria ingresar su nombre.
- **Cambio/Recuperación de contraseña**
- **Feed**: Permite al usuario crear un nuevo post y seleccionar el tipo del mismo (post de recetas o de ejercicio). Muestra los posts de los usuarios registrados en la aplicación y dar "like" a los mismos. Para el usuario loggeado, permite editar/eliminar sus propios posts.
- **Recipes view**: Permite al usuario visualizar únicamente los posts de tipo "Receta".
- **Workout view**: Permite al usuario visualizar únicamente los posts de tipo "Ejercicio".P
- **Profile view**: Muestra al usuario sus propios post, así como su nombre y correo electrónico con el que se registró.

La lógica del proyecto está implementada completamente en JavaScript, HTML y CSS y se utilizó Vite para empaquetar los módulos.

## 3. Tests

Los test de la aplicación se implementaron mediante [Testing Library](https://testing-library.com/docs/queries/about/) para facilitar el manejo del DOM, logrando un coverage del 98.83% de las funciones y 99.81% de las líneas del código.

## 4. Tecnologías

VitalHub fue desarrollado usando las siguientes tecnologías. 

- HTML5
- Vanilla JavaScript
- CSS3 
- Firebase
- Firestore

## 5. Créditos 
Este proyecto web fue desarrollado por [Grecia Fragoso](https://github.com/GreciaFragoso), [Maricela Fuentes](https://github.com/MarFueGit) y [Marianne Teixido](https://github.com/MarianneTeixido) dentro del bootcamp de desarrollo web en [Laboratoria](https://www.laboratoria.la/).
Octubre, 2023. 

## 6. Licencia 
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
