# E2-M7 - Lectura de Datos y Consultas Seguras

## Descripción

Este proyecto corresponde al ejercicio **“Lectura de Datos y Consultas Seguras”** del módulo de Node.js y PostgreSQL.

El objetivo es aprender a ejecutar consultas `SELECT` desde una aplicación Node.js usando el paquete `pg`, leyendo datos desde una base de datos PostgreSQL y aplicando **consultas parametrizadas** para prevenir ataques de **inyección SQL**.

Para el desarrollo de este ejercicio se utilizó:

- **GitHub Codespaces** como entorno de desarrollo
- **Neon** como servicio de base de datos PostgreSQL en la nube

## Aprendizajes aplicados

En este ejercicio se trabajó con los siguientes conceptos:

- Conexión a PostgreSQL desde Node.js usando `pg`
- Uso de `pool.query()` para ejecutar consultas
- Consulta de todos los registros de una tabla con `SELECT *`
- Búsqueda de un registro específico usando `WHERE`
- Lectura de resultados mediante `result.rows`
- Manejo de errores con `try...catch`
- Uso de consultas parametrizadas con `$1` para mayor seguridad

## Tecnologías utilizadas

- Node.js
- PostgreSQL
- pg
- dotenv
- GitHub Codespaces
- Neon

## Entorno de trabajo

El proyecto fue desarrollado en **GitHub Codespaces**, lo que permitió trabajar completamente desde el navegador sin necesidad de instalar herramientas locales.

La base de datos PostgreSQL fue gestionada mediante **Neon**, utilizando su panel web y su editor SQL para crear la tabla `usuarios`, insertar datos de prueba y conectar la aplicación Node.js a la base de datos mediante una cadena de conexión segura.

## Estructura del proyecto

```bash
.
├── app.js
├── db.js
├── package.json
├── README.md
└── assets/
    ├── neon-tabla-usuarios.png
    └── consola-resultados.png