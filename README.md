# PlatziVideo (Backend)

Backend del proyecto académico PlatziVideo de la Escuela de JavaScript

## Instalación

```shell
npm i
```

## Scripts

- `npm run dev`  
Inicia el servidor en modo de desarrollo
- `npm start`  
Inicia el servidor en modo producción

## Deploy en Now

- Instalamos now en nuestro ordenador y creamos una cuenta
- Almacenamos las variables que tenemos en el archivo `.env` en las variables de entorno de _Now_
```shell
now secret add <key> <value>
```
- Podemos listar las keys almacenadas para comprobar que tengan los nombre correctos
```shell
now secret ls
```
- Hacemos un despliegue local de Now para asegurarnos que todo está bien
```shell
now dev
```
- Realizamos el despliegue definitivo
```shell
now
```

## Desarrollo

Para la configuración del linter que se ejecuta automáticamente al guardar se ejecutó el comando

```shell
npx mrm lint-staged
```

## Herramientas utilizadas

- [Mockaroo](https://mockaroo.com/) para la construcción del mock de datos
- [gitignore.io](https://www.gitignore.io/) Para la construcción del gitignore

## Pendientes

- Terminar los tests
- No se hizo el despliegue porque ya hay un despliegue de esta aplicación