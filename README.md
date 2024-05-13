# PokeApi_React

Este proyecto es una aplicación web que consume una API personalizada basada en la API de Pokémon, la cual se encuentra en el siguiente enlace: [PokeApiDjango](https://github.com/CodedSpirit-dev/PokeApiDjango). Es importante destacar que solamente un endpoint hace consumo de la API pública y el resto se hace desde el API privado.

## Tecnologías

- React
- Django Rest Framework
- Axios

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/TuUsuario/PokeApi_React.git
cd PokeApi_React
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto en modo de desarrollo:

```bash
npm run dev
```

4. Para correr el proyecto en modo de producción:

```bash
npm run build
```

## Uso

Una vez que el proyecto esté corriendo, estará disponible en el puerto 8000. Puedes acceder a la aplicación desde el navegador en la siguiente dirección: [http://localhost:8000/](http://localhost:8000/) para consumir el API hecho con Django.

## Notas

- Asegúrate de tener el API de Django corriendo en el puerto 8000 antes de ejecutar este proyecto.
- Este proyecto utiliza Axios para hacer solicitudes HTTP al API de Django.