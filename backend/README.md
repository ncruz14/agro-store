# Agro-Store Backend

Este proyecto es el backend del sistema **Agro-Store**, una plataforma diseñada para conectar agricultores con compradores, facilitando la comercialización de productos agrícolas.

## Descripción del Proyecto

El backend de Agro-Store está construido utilizando [tecnología aquí, por ejemplo, Node.js con Express], y proporciona una API RESTful para manejar las operaciones principales del sistema, como la gestión de usuarios y productos.
## Servicios Expuestos

Los servicios principales expuestos por la API incluyen:

- **Autenticación y Autorización**:
    - Registro de usuarios.
    - Inicio de sesión con tokens JWT.
- **Gestión de Productos**:
    - Creación, edición y eliminación de productos.
    - Listado de productos disponibles.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión X.X.X o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Cómo Ejecutar el Proyecto

1. Clona este repositorio:
     ```bash
     git clone https://github.com/ncruz14/agro-store.git
     cd agro-store
     ```

2. Instala las dependencias:
     ```bash
     npm install
     ```

3. Configura las variables de entorno:
     - Crea un archivo `.env` en la raíz del proyecto.
     - Agrega las siguientes variables:
         ```
         PORT=3000
         DATABASE_URL=tu_url_de_base_de_datos
         JWT_SECRET=tu_secreto_jwt
         ```

4. Inicia el servidor:
     ```bash
     npm start
     ```

5. Accede a la API en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir al proyecto, por favor abre un issue o envía un pull request. ¡Toda ayuda es bienvenida!

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).