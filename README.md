# Tabla de rutas
## _Juan de santis_



## Ruta ('/') index




| Ruta | Función | Método |
| ------ | ------ | ----- |
| / | Ruta raíz, home| GET





## Ruta ('/admin') rutas para Rol Admin
| Ruta | Función | Método |
| ------ | ------ | ----- |
| /admin | Perfil del admin | GET |
| /admin/beats | Lista de los sonidos que vaya subiendo | GET |
| /admin/beats/:id | Detalles de los sonidos  | GET |
| /admin/beats/:id/editar | Editar sonidos | GET |
| /admin/beats/:id/eliminar | Borrar sonidos | POST |

## Ruta ('/beats') rutas para Rol cliente
| Ruta | Función | Método |
| ------ | ------ | ----- |
| /beats | Listado de sonidos | GET |
| /beats/:id | Detalles de los sonidos | GET |
| /company/:id | Modificar datos  | POST |
| /company/crear | Form para crear evento | GET |
| /company/crear | Envio de form | POST |
| /company/estadísticas | Estadísticas de todos sus eventos | GET |

## Ruta ('/user') rutas para Rol Usuario
| Ruta | Función | Método |
| ------ | ------ | ----- |
| /user | Datos de usuario y listado de amigos | GET |
| /user/editar-perfil | Form para editar perfil | GET |
| /user/editar/perfil | Envio de Form  | POST |
| /user/buscar-usuario | Busqueda de usuarios | GET |
| /user/buscar-usuario/:id | Agregar usuario a amigo | GET |
| /user/amigos | Chat con Amigos | GET |