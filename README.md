# 📡 Supabase Realtime Demo

Este proyecto es una demo sencilla que integra **Supabase** en una aplicación **React**. La funcionalidad principal es la capacidad de **enviar y visualizar mensajes en tiempo real** usando la base de datos y las suscripciones de Supabase.

## ✨ Funcionalidades

* **Envío de mensajes en tiempo real**
* **Almacenamiento de mensajes en Supabase**
* **Frontend en React con estilos en TailwindCSS**

## 🚀 Instalación

1️⃣ Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/tu-usuario/supabase-demo.git
cd supabase-demo
npm install
```

2️⃣ Configura las variables de entorno:
Copia el archivo `.env_example` a `.env` y añade tus credenciales de Supabase.

```bash
cp .env_example .env
```

Rellena así:

```env
REACT_APP_SUPABASE_URL=tu-supabase-url
REACT_APP_SUPABASE_KEY=tu-supabase-key
```

3️⃣ Inicia la aplicación:

```bash
npm start
```

## 🛠️ Tecnologías utilizadas

* [React](https://react.dev/)
* [Supabase](https://supabase.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [@supabase/supabase-js](https://supabase.com/docs/reference/javascript)

## 📌 Próximos pasos

* Añadir eliminación de mensajes.
* Mejorar los estilos y la interfaz.
* Implementar autenticación de usuarios.
* Permitir editar mensajes existentes.
* Añadir un contador de mensajes en tiempo real.
* Filtrar mensajes por usuario o fecha.
* Explorar la integración de **storage** de Supabase para subir imágenes junto a los mensajes.
* Probar el despliegue en **Vercel** o **Netlify**.
* Optimizar la experiencia móvil con Tailwind.