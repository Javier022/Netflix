<div align="center"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" width="300"></div>

***
# Descripción
Este proyecto es una copia de la página [Netflix](https://www.netflix.com/browse) haciendo uso de React.js. La importancia del proyecto se observa al reutilizar componentes, actualizar la vista sin refrescar la página y mejorar el rendimiento del DOM.

<div align="center"><div align="center"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/dehsivh-f9cc07fb-bcc1-49a4-b4b0-41febc01b748.png/v1/fill/w_1278,h_625,q_70,strp/1_by_andrea_smiler_dehsivh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjYiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaHNpdmgtZjljYzA3ZmItYmNjMS00OWE0LWI0YjAtNDFmZWJjMDFiNzQ4LnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.QIDnjMxpDBV7qozpAFq619PlLWFseUsc1qUI_1yB5vs" width="600"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/dehsivn-ba3a5aff-9ffd-4541-8bff-cf00f09244b7.png/v1/fill/w_1280,h_620,q_80,strp/2_by_andrea_smiler_dehsivn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjAiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaHNpdm4tYmEzYTVhZmYtOWZmZC00NTQxLThiZmYtY2YwMGYwOTI0NGI3LnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lS4bf0pw294nwbFmMHDh2EEsFststkUNZwBASCSsm3Q" width="600"></div><figcaption>Fig.1 - Vista principal con autoplay</figcaption>
<div align="center"><br><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/dehsivv-c3d27755-0656-43c1-bdce-20a2d968c7af.png/v1/fill/w_1280,h_625,q_80,strp/3_by_andrea_smiler_dehsivv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjUiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaHNpdnYtYzNkMjc3NTUtMDY1Ni00M2MxLWJkY2UtMjBhMmQ5NjhjN2FmLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.oCv8PTfMnB2-AwbOFmBn6zELwc61I_kSufwfb510HZE" width="600"></div><figcaption>Fig.2 - Recomendaciones</figcaption>
<div align="center"><br><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/dehsiw3-5bfa06ad-0329-420b-81ce-0e09186081e0.png/v1/fill/w_1276,h_626,q_70,strp/4_by_andrea_smiler_dehsiw3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjgiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaHNpdzMtNWJmYTA2YWQtMDMyOS00MjBiLTgxY2UtMGUwOTE4NjA4MWUwLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.AYhbOdstznQGv5pIeuwB0wVRC-fmKT6jOektSpcxWc0" width="600"></div><figcaption>Fig.3 - Zoom recomendaciones</figcaption>
<div align="center"><br><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57f8b1c-1c99-4f62-b6e7-9f3e3f9d958b/dehsiwc-c3b83558-5491-4f94-bdd5-674ef858ecfc.png/v1/fill/w_1269,h_629,q_70,strp/5_by_andrea_smiler_dehsiwc-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MzUiLCJwYXRoIjoiXC9mXC9lNTdmOGIxYy0xYzk5LTRmNjItYjZlNy05ZjNlM2Y5ZDk1OGJcL2RlaHNpd2MtYzNiODM1NTgtNTQ5MS00Zjk0LWJkZDUtNjc0ZWY4NThlY2ZjLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.q-vST0rTV0nDOeGMMYyAMwOvq7JB7XiLm0qEuiDIb6k" width="600"></div><figcaption>Fig.4 - Zoom Netflix Originals</figcaption></div>

# Características
* Autoplay del video en el banner
  * Se pausa al bajar cierta cantidad de pixeles el scroll
  * Solo se visualiza el video una vez y luego regresa a la imagen del poster
* Cambio de color del fondo del header al mover el scroll
* Aumento de vista en las recomendaciones
  * Diferencia entre la posición y botones de Netflix Originals y recomendaciones normales
* Posibilidad de regresar y ver siguiente fila en las recomendaciones
  * El botón de regresar solo aparece cuando hay una fila de recomendaciones anteriores
  * El botón de ver más regresa al inicio al llegar al final de las recomendaciones    

# Visualización
* Vista previa en: https://netflix-css-2021.web.app/

# Instalación
1. Clonar este repositorio https://github.com/andreamalin/Netflix/
2. Mover a la carpeta que el usuario desee
3. Dentro de la carpeta, correr el comando `npm run serve` para visualizar la página en http://localhost:8080/

# Uso
* Instalación de las librerías
  * `npm install`
* Correr página
  * `npm run build`
  * `npm run serve`

# Tecnologías implementadas
Tecnología    | Razón de implementación
------------- | -----------------------------------------------------------------
Babel         | Aumentar la compatibilidad de la página con otros navegadores Al hacer uso de babel, se puede programar con las últimas características de JavaScript y que esto sea legible en navegadores más antiguos. Por lo mismo, permite que este proyecto pueda ser utilizado por más personas.
Webpack       | Permite empaquetar y exoirtar todos los archivos necesarios para que el proyecto funcione con todas sus dependencias frontend. Además, cuenta con un servidor para correr la aplicación y un plugin para generar el archivo html. Se hicieron uso de loaders para cargar imágenes y css.
Eslint        | Evitar problemas de compilación tras marcar los errores en tiempo real. Además de ser personalizable por lo que permite definir qué reglas queremos aplicar en nuestro código. Esto nos ayuda a escribir un mejor código, pues es más legible y nos marca error al haber código innecesario.
React         | Desarrollo ordenado, reutilizable y facilita el mantenimiento. El hacer uso de componentes nos ahorra código además de garantizar un aspecto uniforme dentro de la aplicación. Además, el Virtual DOM permite aplicar todos los cambios primero al DOM y luego actualizar solo lo que sea necesario. 
***
> © 2021, Andrea Amaya  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)







