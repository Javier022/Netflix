<div align="center"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" width="300"></div>

***
# Descripción
Este proyecto es una copia de la página [Netflix](https://www.netflix.com/browse) haciendo uso de React.js. La importancia del proyecto se observa al reutilizar componentes, actualizar la vista sin refrescar la página y mejorar el rendimiento del DOM.

<div align="center"><div align="center"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/deh7n16-a51c25e1-b13e-41bf-ada6-2620eff12a7e.png/v1/fill/w_1280,h_693,q_80,strp/netflix1_by_andrea_smiler_deh7n16-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02OTMiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaDduMTYtYTUxYzI1ZTEtYjEzZS00MWJmLWFkYTYtMjYyMGVmZjEyYTdlLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3x_yA5XWunT_JpUPzJS0FV8sh_4BA7etJcAvl5Gxe-o" width="700"></div><figcaption>Fig.1 - Vista principal</figcaption>
<div align="center"><br><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/deh7n1d-3bbfc46b-afd3-48d1-ad95-6771ab29e7c8.png/v1/fill/w_1280,h_687,q_80,strp/netflix2_by_andrea_smiler_deh7n1d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02ODciLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaDduMWQtM2JiZmM0NmItYWZkMy00OGQxLWFkOTUtNjc3MWFiMjllN2M4LnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.T9Gjxkvfj7MsA7uztsV-utR0706EHhRHGeP5Lt6pTDI" width="700"></div><figcaption>Fig.2 - Recomendaciones</figcaption>
<div align="center"><br><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/deh7n1k-dadddd7d-48e4-474e-8fd1-c7be05ef6e99.png/v1/fill/w_1217,h_657,q_70,strp/netflix3_by_andrea_smiler_deh7n1k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02OTEiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaDduMWstZGFkZGRkN2QtNDhlNC00NzRlLThmZDEtYzdiZTA1ZWY2ZTk5LnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.QyF8vFSEWPzeOHwKWptwewGc2c6yqnKSWaAkSUB2z8c" width="700"></div><figcaption>Fig.3 - Zoom recomendaciones</figcaption>
<div align="center"><br><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/deh7n1v-7b4b9e0f-356d-4890-a7d5-fb5257f6851c.png/v1/fill/w_1216,h_657,q_70,strp/netflix4_by_andrea_smiler_deh7n1v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02OTIiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaDduMXYtN2I0YjllMGYtMzU2ZC00ODkwLWE3ZDUtZmI1MjU3ZjY4NTFjLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.syhMVRSrETXv14pEIK5cKKtFaOO5Qb4l0P9Px7EHR-I" width="700"></div><figcaption>Fig.4 - Zoom Netflix Originals</figcaption></div>



# Instalación
1. Clonar este repositorio https://github.com/andreamalin/Netflix/
2. Mover a la carpeta que el usuario desee
3. Dentro de la carpeta, correr el comando `npm run serve` para visualizar la página en http://localhost:8080/

# Uso
* Instalación babel: Para aumentar compatibilidad en web
  * `npm install @babel/core`
  * `npm install @babel/preset-env`
  * `npm install babel-loader`
* Instalación webpack
  * `npm install webpack webpack-cli` : Para agilizar dependencias 
  * `npm install --save-dev html-webpack-plugin` : Para generar el dist 
* Instalación lint
  * `npm install eslint eslint-loader`
  * `npm run lint -- --fix` : Para arreglar errores
  * `npx eslint --init`
* Instalación react
  * `npm install react react-dom`
* Instalación loaders
  * `npm install file-loader` : Para cargar imágenes 
  * `npm install style-loader` : Para cargar css 
  * `npm install css-loader` : Para cargar css 
* Instalación proptypes
  * `npm i -S prop-types` : Para verificar los tipos de atributos
* Correr página
  * `npm run build`
  * `npm run serve`

# Tecnologías implementadas
Tecnología    | Razón de implementación
------------- | -----------------------------------------------------------------
Babel         | Aumentar la compatibilidad de la página con otros navegadores
Webpack       | Optimiza el agregar dependencias: imágenes, css, React
Eslint        | Evitar problemas de compilación tras marcar los errores en tiempo real
React         | Desarrollo ordenado, reutilizable y facilita el mantenimiento 
***
> © 2021, Andrea Amaya  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)






