# To-Do List App

## Descripción
Esta es una aplicación de lista de tareas (To-Do List) desarrollada en React. Permite a los usuarios agregar, marcar como completadas y eliminar tareas. La aplicación está diseñada para ser fácil de usar y tiene una interfaz visualmente atractiva.

## Características
- **Agregar Tareas**: Los usuarios pueden agregar nuevas tareas a la lista.
- **Marcar como Completadas**: Las tareas pueden ser marcadas como realizadas o no realizadas.
- **Eliminar Tareas**: Los usuarios pueden eliminar tareas de la lista.

## Tecnologías Utilizadas
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Redux Toolkit**: Para la gestión del estado de la aplicación.
- **Material-UI**: Para componentes de interfaz de usuario.

## Estructura del Proyecto
- **src**
  - **components**
    - `Encabezado.tsx`: Componente de encabezado de la aplicación.
    - `FormTarea.tsx`: Formulario para creación y edición de tareas.
    - `ListaTareas.tsx`: Componente para listar las tareas.
    - `TodoList.tsx`: Componente principal.
  - **store**
    - `thunks.tsx`: Configuración de acciones asíncronas.
    - `todoSlice.js`: Slice de Redux para la gestión del estado de las tareas.
  - **styles.css**: Estilos de la aplicación.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/pedro0324/todo_list.git
