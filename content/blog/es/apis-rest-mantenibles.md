---
title: 5 principios para diseñar APIs REST mantenibles
date: 2026-10-19
description: Lo que reviso antes de exponer un endpoint para que la API siga siendo fácil de usar y de cambiar dentro de un año.
tags: apis, arquitectura, buenas prácticas
---

Una API es un contrato. Una vez que otro equipo (o tu propio frontend) depende de ella, cada cambio cuesta más. Estos son los principios que aplico para que ese contrato envejezca bien.

## 1. Modela recursos, no acciones

Los endpoints deberían describir *cosas*, y el método HTTP la acción sobre ellas.

```http
GET    /links          # listar
POST   /links          # crear
GET    /links/{id}     # obtener uno
PATCH  /links/{id}     # actualizar parcialmente
DELETE /links/{id}     # eliminar
```

Evita rutas como `/getLinks` o `/deleteLink?id=3`: duplican lo que el verbo HTTP ya expresa.

## 2. Errores consistentes y útiles

Elige **un** formato de error y úsalo en toda la API. El cliente debería poder manejar cualquier fallo con el mismo código:

```json
{
  "error": {
    "code": "LINK_NOT_FOUND",
    "message": "No existe un enlace con id 42",
    "status": 404
  }
}
```

Usa el código HTTP correcto (`400`, `401`, `403`, `404`, `409`, `422`) y deja el `500` solo para lo realmente inesperado.

## 3. Versiona desde el primer día

Agregar `/v1` cuesta nada al inicio y te salva cuando necesites un cambio incompatible:

- Cambios *compatibles* (nuevos campos opcionales) → misma versión.
- Cambios *incompatibles* (renombrar o eliminar campos) → nueva versión.

## 4. Paginación por defecto

Ningún endpoint de listado debería devolver "todo". Define un límite por defecto y devuelve la información para pedir la siguiente página:

```json
{
  "data": [],
  "pagination": { "limit": 20, "next_cursor": "eyJpZCI6MTIwfQ" }
}
```

## 5. Documenta con un contrato, no con un README

Un esquema OpenAPI generado desde el código (FastAPI, Spring Boot con springdoc, drf-spectacular en Django) se mantiene sincronizado solo. Un documento escrito a mano queda desactualizado en semanas.

---

> Regla práctica: si tuvieras que integrar tu propia API sin leer el código, ¿podrías hacerlo solo con la documentación y los mensajes de error?
