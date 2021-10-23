

# Tabla de rutas
## _Juan de santis_


## Ruta ('/') index


| Ruta | Función | Método |
| ------ | ------ | ----- |
| / | Ruta raíz, home| GET


## Ruta ('/music') 
| Ruta | Función | Método |
| ------ | ------ | ----- |
| /music | listado de canciones de artista | GET |
| /music/:id | Redirigir a hyperlink donde contenga links de streaming de musica | GET |


## Ruta ('/admin') rutas para Rol Admin
| Ruta | Función | Método |
| ------ | ------ | ----- |
| /admin | Perfil del admin | GET |
| /admin/beats | Lista de los sonidos  | GET |
| /admin/beats | Formulario de creacion de beats | GET |
| /admin/beats | Envio de formulario | POST |
| /admin/beats | Estadisticas de venta (si da tiempo) | GET |
| /admin/beats/:id | Detalles de los sonidos  | GET |
| /admin/beats/:id/editar | Editar sonidos | PUT |
| /admin/beats/:id/eliminar | Borrar sonidos | DELETE |
| /admin/music/:id/editar | Editar musica | PUT |
| /admin/music/:id/eliminar | Borrar musica | DELETE |


## Ruta ('/beats') 
| Ruta | Función | Método |
| ------ | ------ | ----- |
| /beats | Listado de sonidos | GET |
| /beats/:id | Detalles de los sonidos | GET |