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
- `npm run test`  
Ejecuta los tests
- `npm run cover`  
Ejecuta en terminal el software que evalua la cobertura de los tests
- `npm run report`  
Ejecuta en una página web el software que evalua la cobertura de los tests

En el directorio _Scripts_ se encuentran scripts adicionales para alimentar la base de datos con valores de prueba

## Sitio web

https://platzivideo.sparkcomco.now.sh/

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
- Si ya tenemos un despliegue el despliegue no se hará en producción si no se aplica la siguiente bandera
```shell
now --prod
```

## Desarrollo

Para la configuración del linter que se ejecuta automáticamente al guardar se ejecutó el comando

```shell
npx mrm lint-staged
```

En el SESSION_SECRET se usó un SHA-256 bit key

## Herramientas utilizadas

- [Mockaroo](https://mockaroo.com/) para la construcción del mock de datos
- [gitignore.io](https://www.gitignore.io/) Para la construcción del gitignore
- [Generación de Keys](https://keygen.io/)

## Pendientes

- Terminar los tests
- Revisar como contener la aplicación en Docker
