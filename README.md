# Prueba entrevista nodejs
Prueba entrevista de ejecución de algoritmos

Pasos:
- npm install
- npm start
- acceso mediante http al http://localhost:3000/
- output: json con las secuencias. Ejemplo formato :
[{"nombre":"Secuenciador","salida":["000001","000002","000003","000004","000005"]},{"nombre":"Fibonacci","salida":["000001","000002","000003","000005","000008"]},{"nombre":"Factorial","salida":["000001","000002","000006","000024","000120"]},{"nombre":"Binario","salida":["000001","000002","000004","000008","000016"]}]

El fichero config.json es el que contiene la configuracion de los algoritmos. Se han programado 4 tipos de algoritmos: secuenciador, factorial, binario y fibonacci. En la carpeta src se ecuentran la logica de la aplicación:
- src/app: main y controlador de la app (servicio rest)
- src/interfaces: interfaces de la aplicación
- src/enums: enumeradores de la aplicación
- src/services: servicios y lógica de cáculo de los algoritmos.
