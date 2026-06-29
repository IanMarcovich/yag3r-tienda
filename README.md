# Proyecto Final - YAG3R TIENDA

API Rest de administración de productos construida con **Node.js + Express + Firebase Firestore + JWT**.

---

## 📁 Estructura del proyecto

```
yag3r-tienda api/
├── index.js                        # Punto de entrada del servidor
├── package.json
├── .env                            # Variables de entorno
└── src/
    ├── config/
    │   └── firebase.js             # Configuración de Firebase
    ├── routes/
    │   ├── products.routes.js      # Rutas /api/products
    │   └── auth.routes.js          # Rutas /auth
    ├── controllers/
    │   ├── product.controller.js
    │   └── auth.controller.js
    ├── services/
    │   ├── product.service.js
    │   └── auth.service.js
    ├── models/
    │   └── product.model.js        # Interacción con Firestore
    └── middlewares/
        └── auth.middleware.js      # Verificación JWT
```

---

## 🚀 Instalación

```bash
npm install
```

---

## ⚙️ Configuración del .env

Completá el archivo `.env` con tus credenciales reales:

```env
PORT=3000
JWT_SECRET=tu_clave_secreta

ADMIN_EMAIL=admin@tuweb.com
ADMIN_PASSWORD=admin123

FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

> 📌 Los datos de Firebase los encontrás en **Firebase Console → Configuración del proyecto → Tus apps**.

---

## ▶️ Ejecutar el servidor

```bash
npm run start
```

---

## 📡 Endpoints

### Auth (público)

| Método | Ruta         | Descripción                          |
|--------|--------------|--------------------------------------|
| POST   | /auth/login  | Devuelve un Bearer Token JWT         |

**Body:**
```json
{ "email": "admin@tuweb.com", "password": "admin123" }
```

---

### Productos (protegidas — requieren Bearer Token)

| Método | Ruta                    | Descripción                     |
|--------|-------------------------|---------------------------------|
| GET    | /api/products           | Obtiene todos los productos     |
| GET    | /api/products/:id       | Obtiene un producto por ID      |
| POST   | /api/products/create    | Crea un nuevo producto          |
| DELETE | /api/products/:id       | Elimina un producto por ID      |

**Header requerido:**
```
Authorization: Bearer <token>
```

**Body para crear producto:**
```json
{
  "name": "Teclado mecánico",
  "price": 45000,
  "description": "Teclado RGB con switches blue",
  "stock": 10
}
```

---

## 🔒 Códigos de error

| Código | Significado                                 |
|--------|---------------------------------------------|
| 400    | Petición con datos incorrectos o faltantes  |
| 401    | Token ausente o expirado                    |
| 403    | Token inválido                              |
| 404    | Recurso o ruta no encontrada               |
| 500    | Error interno del servidor / Firestore      |
# yag3r-tienda
