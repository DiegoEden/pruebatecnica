<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Sistema de Gestión de Empleados y Áreas

## Acerca del sistema

Para su desarrollo, se usaron las tecnologías Laravel, InertiaJs y React

Requisitos

- XAMPP (Instalará la última versión de PHP y la base de datos MYSQL)
- NodeJs (La última versión hasta la fecha)
- Composer (La última versión hasta la fecha)

Pasos para instalación y montaje en su computadora

**Clonar el repositorio en la carpeta "htdocs" de su carpeta de XAMPP**

```
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

**Instalar Dependencias de PHP con Composer:**

Dentro del directorio del proyecto, ejecuta:

```bash
composer install
```

**Configurar el Archivo .env:**

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Luego, edita el archivo `.env` con tu editor preferido para configurar tu entorno, incluyendo la conexión a la base de datos. Sigue esta configuración

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pruebatecnica
DB_USERNAME=root
DB_PASSWORD=

**Generar la Clave de la Aplicación:**

```bash
php artisan key:generate
```

**Instalar Dependencias de Node.js:**

```bash
npm install
```

**Compilar Assets:**

ejecuta:

```bash
npm run dev
```
Para configurar la base de datos según las migraciones de Laravel, ejecuta:

```bash
php artisan migrate
```

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo de Laravel y acceder a tu proyecto en un navegador, ejecuta:

```bash
php artisan serve
```

Esto iniciará un servidor de desarrollo accesible generalmente en `http://localhost:8000`.
