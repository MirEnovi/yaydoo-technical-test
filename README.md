

# Formulario

## Descripción y contexto
---
Este es un ejemplo de formulario simple para una página web que toma su estructura de una configuración JSON local.
El ejemplo conserva los datos en el estado local.

La aplicación muestra un formulario con 2 preguntas, "Cuéntanos sobre ti" y "Dónde vives". La primera pregunta tiene 4 campos de entrada de texto debajo, la segunda tiene 2 campos de entrada de texto y 1 desplegable. Todos los campos usan el nombre y la etiqueta de la configuración (y, en el caso de los menús desplegables, el campo "opciones").

Al final del formulario, incluye un botón que imprime el estado actual de la aplicación en la consola del navegador. Los valores impresos deben ser similar al siguiente ejemplo:

firstName: "Lana",

lastName: "Kane",

country: "Canada",

email: " lana@example.com ",

phoneNumber: "555-123-1111",

postCode: "V6B 1S5",

streetAddress: "123 Evergreen Drive".



## Guía de usuario
---
La aplicación esta deployada [aquí](https://mirenovi.github.io/yaydoo-technical-test/), y también se puede probar de manera local.

Puedes folkear este repositorio si quieres trabajar con él.


## Guía de instalación
---
Para probar de manera local es necesario contar con:
- [NodeJS](https://nodejs.org/es/).
- y tu package manager preferido. En este proyecto se uso NPM.

- El resto de dependencias ya están en el package json.


Guía de instalación:

- Clonar este repositorio.
- Abrir la carpeta de trabajo en tu terminal y escribir lo siguiente.
    - git clone https://github.com/MirEnovi/yaydoo-technical-test.git.
    - cd yaydoo-technical-test.
    - npm install.
    - npm start.

Y listo.

### Dependencias
---
Para este proyecto se uso:
- [React](https://jedwatson.github.io/react-select/).
- [NodeJS](https://nodejs.org/es/).
- [NPM](https://www.npmjs.com/).
- [Materialize](https://materializecss.com/getting-started.html).
- [React-select](https://jedwatson.github.io/react-select/).
- [React-GH-Pages](https://github.com/gitname/react-gh-pages).


## Versión
---
### Release V2.1.0
