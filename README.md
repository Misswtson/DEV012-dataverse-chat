# Dataverse Chat

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Historias de usuari@s](#5-Historias-de-usuari@s)
* [6. Prototipo de alta fidelidad](#6-Prototipo-de-alta-fidelidad)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Despliegue en Vercel](#8-Despliegue-en-Vercel)

***

## 1. Preámbulo

En nuestro día a día, las aplicaciones web son como amigas
inseparables. Desde las redes sociales hasta las herramientas de
trabajo, las usamos todo el tiempo. Pero lo que hace que este
momento sea realmente especial es que estas aplicaciones nos pueden
abrir una puerta a algo asombroso: la interacción con inteligencia
artificial.

## 2. Resumen del proyecto

Este proyecto convierte la aplicación desarrollada
en el proyecto previo (Dataverse) en una Single Page Application (SPA)
manteniendo las funcionalidades de visualizar, filtrar, ordenar y
calcular alguna estadística, adicionando una nueva vista para
consultar información detallada de cada película y agregando
la posibilidad de interactuar con un personaje
a través de un sistema de chat impulsado por la 
[API de OpenAI](https://openai.com/product).

## 3. Consideraciones generales

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS.

* Es fundamental reutilizar parte del código del proyecto previo (Dataverse), especialmente la sección relacionada con el dataset. Además, es esencial llevar a cabo una refactorización del código con el objetivo de hacerlo más modular y reutilizable. Esto implica la creación de nuevas funciones que permitan alcanzar las funcionalidades requeridas en el proyecto.

## 4. Funcionalidades

* La aplicación debe ser _responsive_
* La aplicación debe ser una SPA con múltiples vistas:
  - Implementar un sistema de enrutamiento que permita la navegación
    dentro de la aplicación.
  - Cada vista de la aplicación debe ser cargada dinámicamente
    mediante JavaScript.
  - Asegurarse de que la URL se actualice de manera acorde a la vista
    cargada al igual que el `title` del documento (la pestaña del navegador).
  - La aplicación debe ser capaz de cargar la vista correspondiente a
    la URL actual al iniciar la aplicación.
* La aplicación debe mantener las funcionalidades de Dataverse: visualizar,
  filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación debe
  redirigirse a una vista **con su propia URL** que muestre la información
  detallada sobre ese personaje/entidad en particular
* La aplicación debe permitir a la usuaria configurar la API Key para
  interactuar con la API de Open AI

### 5. Historias de usuari@s

En la actualidad la cultura y la gastronomía Japonesa han invadido todos los rincones del mundo
y no solo eso sus películas logran cautivar el corazon de miles, es por esta gran razón que decidimos
crear este maravillosos mundo ó para ser más técnicos esta maravillosa (SPA) que permita a cada uno de l@s usuari@s
que interactuen en ella.

Es por ende que:

Como Usuari@ quiero poder  buscar por nombre o personaje la película, para conocer más a detalle.

Como Usuari@ quiero poder filtrar las películas para conocer su género, año de estreno y el estudio que la creó. 

Como Usuari@ quiero poder ordenar las películas de manera ascendente y descendente.

Como Usuari@ quiero poder vizualizar la cantidad de películas que contiene esta aplicación web.

Como usuario quiero ingresar la apiKey para poder chatear con cada película.

Como usuario quiero un botón para poder ingresar la apiKey y que esta quede almacenada y permita iniciar el chat con el personaje principal de la película seleccionada.

#### Línea gráfica utilizada y prototipo de baja fidelidad

![Screen Shot 2024-02-20 at 22 44 03](https://github.com/Misswtson/DEV012-dataverse-chat/assets/76451432/0c27ad7d-d3fc-4dd3-a76b-21540a87eece)


![Screen Shot 2024-02-20 at 22 46 03](https://github.com/Misswtson/DEV012-dataverse-chat/assets/76451432/3775693c-42f1-4da4-ab56-a5900126c4ac)

Los cuales, fueron sido modificados en cada fin de Sprint, gracias a los feedbacks otorgados por la compañeras y coaches de <Laboratoria>

Ambos creados y modificados en Figma

#### 6. Prototipo de alta fidelidad

![Screen Shot 2024-02-20 at 23 04 47](https://github.com/Misswtson/DEV012-dataverse-chat/assets/76451432/4722d8a6-3320-4a3c-8f18-aab589b964c8)


## 7. Objetivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**
- [ ] **Modelo de caja (box model): borde, margen, padding**
- [ ] **Uso de flexbox en CSS**
- [ ] **Uso de CSS Grid Layout**

### Web APIs

- [ ] **Uso de selectores del DOM**
- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [ ] **Manipulación dinámica del DOM**
- [ ] **Ruteado (History API, evento hashchange, window.location)**
- [ ] **Browser storage (localStorage, sessionStorage)**
- [ ] **Fetch API**

### JavaScript

- [ ] **Callbacks**
- [ ] **Promesas**
- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [ ] **Variables (declaración, asignación, ámbito)**
- [ ] **Funciones (params, args, return)**
- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [ ] **Arrays (arreglos)**
- [ ] **Objetos (key, value)**
- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**
- [ ] **Uso de bucles/ciclos (while, for, for..of)**
- [ ] **Módulos de ECMAScript (ES Modules)**
- [ ] **Pruebas unitarias (unit tests)**
- [ ] **Pruebas asíncronas**
- [ ] **Uso de mocks y espías**

### HTTP

- [ ] **Cabeceras (headers)**
- [ ] **Consulta o petición (request) y respuesta (response).**
- [ ] **Códigos de status de HTTP**

### AI Prompting

- [ ] **Priming Chatbots**
- [ ] **OpenAI API**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**
- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**
- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

## 8. Despliegue en Vercel

Para poder acceder, haz click en el sigiente enlace: dev-012-dataverse-chat-iyq9imzwk-emmas-projects-cc952695.vercel.app

