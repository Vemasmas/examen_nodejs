# Examen API

Prueba Técnica Node.js - V++

## Instrucciones

1. Método GET que devuelva  ordenados por donde el nombre empiece con el parámetro de ruta enviado.
2. Método GET que devuelva los permisos para un usuario donde el id coincida con el parámetro de ruta 'id'.
3. Método POST que permita agregar permisos a un usuario teniendo cómo entrada un listado de pantallas
    3.1. Validar que el usuario y las pantallas existan en la base de datos y que el usuario no cuenta previamente con el nuevo permiso otorgado.
4. Método PUT que permita actualizar el permiso a un usuario sobre una pantalla teniendo como parámetro de ruta el id de usuario y cuerpo de entrada el id de pantalla y el permiso.
    4.2 Validar que el usuario exista y que cuente con permiso a la pantalla enviada.
5. Método DELETE eliminar una pantalla de los permisos del usuario donde el .
    5.2 Validar que el usuario exista y que cuente con permiso a la pantalla enviada.

## Consideraciones generales
- Los métodos deberán estar creados bajo el endpoint '/permisos'
- Los valores posibles para permisos posibles son 'L' (Lectura) y 'E'(Escritura).
- Usuario -> Rol -> Permisos <- Pantallas
- El tipo de cuerpo de entrada deberá ser application/json.
- El tipo de cuerpo de salida podrá ser application/json o text/plain según aplique.


