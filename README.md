# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto y Definición del producto](#2-resumen-del-proyecto-y-definición-del-producto)
  * [2.1. Historias de Usuario](#21-historias-de-usuario)
  * [2.2. Diseño de la Interfaz de Usuario](#22-diseño-de-la-interfaz-de-usuario)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Conclusiones](#4-conclusiones)
  

## 1. Preámbulo

Las redes sociales son plataformas digitales diseñadas para permitir la interacción entre usuarios a través de internet. Estas redes proporcionan un entorno virtual donde las personas pueden crear perfiles, establecer conexiones con otros usuarios y participar en actividades sociales en línea; a través de ellas, los usuarios pueden compartir publicaciones, fotos, videos y enlaces, así como interactuar mediante comentarios, mensajes privados y reacciones. Estas plataformas ofrecen diversas funcionalidades como la creación de comunidades, la organización de eventos, la promoción de productos o servicios, la difusión de noticias y el desarrollo de relaciones personales o profesionales. 

Hay redes sociales de todo tipo y para todo tipo de intereses. Estas plataformas digitales han tenido un impacto significativo en la forma en que nos comunicamos, nos informamos y nos relacionamos, pues han transformado la manera en que interactuamos tanto a nivel individual como colectivo.

![adem-ay-Tk9m_HP4rgQ-unsplash](https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg)

## 2. Resumen del proyecto y Definición del producto

Para este proyecto se propuso la elaboración de una Red Social con libre temática que permita a cualquier usuario crear una cuenta de acceso y loguearse con ella, así como crear, editar, borrar y _"likear"_ publicacciones. 

_"Nanai"_, una Red Social enfocada en promover la salud mental, da respuesta a esta solicitud. Esta plataforma fue construida como una [Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)[_responsive_](https://curriculum.laboratoria.la/es/topics/css/02-responsive) (con más de una vista / página) en la que es posible leer y escribir datos. Aquí se aplican los conceptos de responsividad en el desarrollo de las vistas (templates), se implementa un router para la navegación entre las diferentes vistas de la aplicación, se emplea un servicio externo para la persistencia de datos de la aplicación y se crea una suite de pruebas unitarias que permiten testear código asíncrono.

Inicialmente se implementó un [*formulario virtual*](https://docs.google.com/forms/d/1dTSggcu8N7ssEiBhRwln_lIFkjWUA64KnBUtJI3jAJI/ "formulario virtual") como herramienta de investigación diligenciado por veintiocho (28) personas, de las cuales, el 92,6% consideraron muy útil el desarrollo e implementación de una Red Social que promueva la salud mental.

<p align="center">
  <img src="https://github.com/LauriLugo/DEV007-social-network/assets/129604876/0d3c2433-b6e3-4110-a2b4-82606247b8b9"
">
</p>

En base al conocimiento obtenido del usuario, se trabajaron las siguientes preguntas: 

* **¿Quiénes son los principales usuarios del producto?** // Esta red social está dirigida a una amplia gama de usuarios que comparten un interés común en mejorar y mantener su bienestar emocional y psicológico. Los principales usuarios de esta red social son personas que desean obtener apoyo, recursos y herramientas para abordar temas relacionados con la salud mental, como la ansiedad, la depresión, el estrés, la autoestima y otros desafíos emocionales. Así mismo puede ser utilizada por organizaciones y expertos en el campo de la salud mental, como instituciones educativas, clínicas y fundaciones, que deseen difundir información, programas y eventos relacionados con la promoción de la salud mental. Los principales usuarios de esta red social son individuos que buscan apoyo, profesionales en el campo de la salud mental y organizaciones comprometidas con el bienestar emocional.

* **¿Qué problema resuelve el producto / para qué le servirá a estos usuarios?** // Esta red social aborda varios problemas relacionados con el bienestar emocional y psicológico. Algunos son:

  - Aislamiento y soledad: La red social proporciona un espacio en línea que permite establecer relaciones, compartir experiencias y brindar apoyo mutuo, lo que ayuda a reducir la sensación de aislamiento y soledad.
  - Falta de información y recursos: La red social ofrece acceso a recursos educativos, herramientas prácticas y materiales informativos relacionados con la salud mental. Esto ayuda a los usuarios a obtener información precisa y confiable sobre diferentes problemas de salud mental, técnicas de autocuidado, estrategias de afrontamiento y opciones de tratamiento.
  - Estigma y discriminación: La red social trabaja para desafiar y combatir el estigma asociado con los trastornos de salud mental. Al proporcionar un entorno seguro y de apoyo, fomenta la aceptación, la comprensión y la empatía hacia las personas que luchan con problemas de salud mental, contribuyendo así a reducir la discriminación y el estigma en la sociedad.
  - Fomento del autocuidado: La red social promueve prácticas de autocuidado y bienestar emocional, proporcionando consejos, ejercicios y recordatorios para ayudar a los usuarios a cuidar de sí mismos y mantener una buena salud mental.

## 2.1. Historias de Usuario

 Como resultado del proceso de investigación se obtuvieron las siguientes _Historias de Usuario_:

### ☆ Historia de Usuario 1: El usuario de la red social desea poder ingresar a la aplicación.

+ *Criterios de aceptación:*
  + El usuario debe poder visualizar la pantalla de inicio con el logo de la aplicación
  + El usuario debe poder ver dos opciones de ingreso: registro e inicio de sesión

+ *Definición de terminado:*
  +	Debe ser una SPA
  +	Debe ser responsive
  +	Recibimos code review de al menos una compañera de otro equipo
  +	Hicimos los test unitarios
  +	Testeamos manualmente buscando errores e imperfecciones simples
  +	Hicimos pruebas de usabilidad e incorporamos el feedback de los usuarios como mejoras
  +	Desplegamos la aplicación y etiquetamos la versión (git tag)
  +	Todo el código está subido a la rama principal del repositorio
  +	Hemos publicado la historia en GitHub Pages

### ☆ Historia de usuario 2: El usuario desea poder registrarse y crear su perfil.

+ *Criterios de aceptación:*
  +	El usuario debe poder visualizar la pantalla de inicio con el logo de la aplicación
  +	El usuario debe poder registrarse con su correo electrónico o con su cuenta de Google y crear su perfil

+ *Definición de terminado:*
  +	Debe ser una SPA
  +	Debe ser responsive
  +	Recibimos code review de al menos una compañera de otro equipo
  +	Hicimos los test unitario
  +	Testeamos manualmente buscando errores e imperfecciones simples
  +	Hicimos pruebas de usabilidad e incorporamos el feedback de los usuarios como mejoras
  +	Desplegamos la aplicación y etiquetamos la versión (git tag)
  +	Todo el código está subido a la rama principal del repositorio
  +	Hemos publicado la historia en GitHub Pages

### ☆ Historia de usuario 3: El usuario desea crear, editar y borrar publicaciones.

+ *Criterios de aceptación:*
  +	El usuario debe poder visualizar en la pantalla los campos necesarios para crear publicaciones
  +	El usuario debe poder visualizar en la pantalla los campos necesarios para editar publicaciones
  +	El usuario debe poder visualizar en la pantalla los campos necesarios para borrar publicaciones

+ *Definición de terminado:*
  +	Debe ser una SPA
  +	Debe ser responsive
  +	Recibimos code review de al menos una compañera de otro equipo
  +	Hicimos los test unitarios
  +	Testeamos manualmente buscando errores e imperfecciones simples
  +	Hicimos pruebas de usabilidad e incorporamos el feedback de los usuarios como mejoras
  +	Desplegamos la aplicación y etiquetamos la versión (git tag)
  +	Todo el código está subido a la rama principal del repositorio
  +	Hemos publicado la historia en GitHub Pages

### ☆ Historia de usuario 4: El usuario desea reaccionar con likes a las publicaciones.

+ *Criterios de aceptación:*
  +	El usuario debe poder contar con la opción de interactuar con las demás publicaciones mediante likes
    
+ *Definición de terminado:*
  +	Debe ser una SPA.
  +	Debe ser responsive.
  +	Recibimos code review de al menos una compañera de otro equipo.
  +	Hicimos los test unitarios
  +	Testeamos manualmente buscando errores e imperfecciones simples.
  +	Hicimos pruebas de usabilidad e incorporamos el feedback de los usuarios como mejoras.
  +	Desplegamos la aplicación y etiquetamos la versión (git tag).
  +	Todo el código está subido a la rama principal del repositorio.
  +	Hemos publicado la historia en GitHub Pages

### ☆ Historia de usuario 5: El usuario desea encontrar espacios en los que pueda conocer información y compartir sus opiniones.

+ *Criterios de aceptación:*
  +	El usuario debe poder visualizar en la pantalla los campos necesarios para encontrar información
  +	El usuario debe poder visualizar en la pantalla categorías de interés y poder acceder a ellas
  +	El usuario debe poder visualizar en la pantalla los campos necesarios para compartir su opinión

+ *Definición de terminado:*
  + Debe ser una SPA
  + Debe ser responsive
  + Recibimos code review de al menos una compañera de otro equipo
  + Hicimos los test unitarios
  + Testeamos manualmente buscando errores e imperfecciones simples
  + Hicimos pruebas de usabilidad e incorporamos el feedback de los usuarios como mejoras
  + Desplegamos la aplicación y etiquetamos la versión (git tag)
  + Todo el código está subido a la rama principal del repositorio
  + Hemos publicado la historia en GitHub Pages

## 2.2. Diseño de la Interfaz de Usuario

### _Prototipo de baja fidelidad_

Una vez definidas las _Historias de Usuario_, y como primer paso en el diseño de la interfaz, se elaboraron los prototipos de baja fidelidad para vista móvil y desktop mediante la herramienta de diseño visual [Figma](https://www.figma.com/file/QqMaJzbKZr7XRhcxI2Csua/Untitled?type=design&mode=design&t=MCyXglHL00GyJPf4-0).

+ Vista móvil
<p align="center">
  <img src="https://github.com/LauriLugo/DEV007-social-network/assets/129604876/73ecdceb-7204-4f36-9f22-faa764e0bda2" alt="Prototipo de baja fidelidad - Movil">
</p>

+ Vista desktop
<p align="center">
  <img src="https://github.com/LauriLugo/DEV007-social-network/assets/129604876/a006f054-78ea-457f-9b94-a683d78d1be5" alt="Prototipo de baja fidelidad - Desktop">
</p>

### _Prototipo de alta fidelidad_

Seguidamente se diseñó la _Interfaz de Usuario_ también mediante la herramienta de [Figma](https://www.figma.com/file/RH5KRGoMVpmowuvfcsL7Nt/Untitled?type=design&mode=design&t=DLM72CbPql0fCCWS-0). Se presenta a continuación el diseño final de la red social propuesta, la cual busca cumplir con los fundamentos de visual design:

+ Vista móvil
<p align="center">
  <img src="https://github.com/LauriLugo/DEV007-social-network/assets/129604876/b3b4f081-f9c9-4dc1-b1e3-13f0970db7ee" alt="Prototipo de alta fidelidad - Movil">
</p>

+ Vista desktop
<p align="center">
  <img src="https://github.com/LauriLugo/DEV007-social-network/assets/129604876/5e7cadb3-b270-45c4-a59a-dfbfccdef32b" alt="Prototipo de alta fidelidad - Desktop">
</p>

## 3. Consideraciones generales

La lógica de este proyecto está implementada completamente en JavaScript (ES6+), HTML y CSS; en ningun momento se utilizaron _frameworks_ o librerías de CSS y JS.

Se implementó la herramienta [Vite](https://es.vitejs.dev/) para empaquetar los módulos y arrancar el servidor de desarrollo, el cual provee los archivos utilizando
la estrategia `Hot Module Replacement`[(HMR)](https://es.vitejs.dev/guide/features.html#hot-module-replacement), esto permite que cuando se hagan cambios en los archivos que estén siendo servidos, el navegador automáticamente se actualizará sin tener que refrescar y volver a cargar todo el sitio. 

Para la creación de la cuenta del usuario e inicio de sesión se utilizó [Firebase](https://firebase.google.com/products/database/) como servicio externo para la persistencia de datos; esta plataforma facilita la creación de las cuentas de acceso y autenticación con correo y contraseña, así como también con cuentas de Google. En esta fase, se permite solamente el acceso a usuarios con cuentas y correos electrónicos válidos; no se permiten usuarios repetidos y no permite la legibilidad en el campo de la contraseña. Si hay errores, se muestran mensajes descriptivos para ayudar al usuario a corregirlos.

En el Muro/timeline de la red social se valida el contenido en el input para poder realizar una publicación. En esta fase también se hace uso de _firebase_ para que sea posible publicar un post, dar y quitar like a una publicación (máximo uno por usuario), para llevar el conteo de los likes y para poder eliminar un post específico; se pide confirmación antes de eliminar un post. Al dar click para editar un post, se cambia el texto por un input que permite editar el texto y luego guardar los cambios; al guardar los cambios cambia de vuelta a un texto normal pero con la información editada y al recargar la página se logran evidenciar los textos editados.

## 4. Conclusiones

* Se desarrolló una SPA con temática de red social
* Se implementó un router para la navegación entre las diferentes vistas de la aplicación
* Se empleó un servicio externo para la persistencia de datos de la aplicación
* Se complementó el _boilerplate_ propuesto definiendo la estructura de carpetas y se creó una suite de pruebas unitarias que permitan testear código asíncrono
* Se aplicaron los conceptos de responsividad en el desarrollo de las vistas (templates); las diferentes vistas de la red social logran visualizarse adecuadamente en dispositivos de pantallas grandes (computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Se siguió la técnica de _`mobile first`_
* Los tests unitarios cubren más del 70% de _statements_, _functions_, _lines_, y _branches_
* El código se expuso en GitHub (`commit`/`push`) y la interfaz fue desplegada usando el servicio de hosting de _Firebase_
* Este proyecto fue desarrollado en triada bajo la metodología de Scrum implementando [**Trello**](https://trello.com/b/MCBnNhPW/social-network-proyecto-grupal) para la planeación y consecución de los objetivos
