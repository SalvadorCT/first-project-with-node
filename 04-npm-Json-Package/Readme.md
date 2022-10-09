##  Contenido

---

| Option | Description |
| ------ | ----------- |
|  npm   | npm es el gestor de paquetes de node.js.<br><br>npm contiene mas de 800.000 paquetes de codigo abierto |
| npm init | npm init crea un archivo package.json,<br>package.json contiene informacion sobre el proyecto,<br>package.json contiene informacion sobre los paquetes de npm que se usan en el proyecto|
| npm install   | npm install descarga paquetes de npm y los instala en la carpeta node_modules |
| npm install <package>   | npm install <package> descarga el paquete de npm y lo instala en la carpeta node_modules|
| npm install <package> --save   | La diferencia superficial entre ellos es que --save agregará el nombre del paquete dependiente a la clave de dependencias del archivo package.json, y --save-dev se agregará a la clave devDependencies del archivo package.json. |
|  package.json  | package.json contiene informacion sobre el proyecto.<br>package.json contiene informacion sobre los paquetes de npm que se usan en el proyecto |
|  Node_modules   | node_modules contiene los paquetes de npm que se usan en el proyecto |

---

1. Para instalar express (lo veras en dependencies en package.json)

```
npm install express
```

2. Si deseas instalar una version especifica de express

```
npm install express@<version>
```

3. Para desinstalar un paquete:

```
npm uninstall <nombre del paquete>
```
