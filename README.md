# React Query - Issues

1. Clonar repositorio
2. Ejecutar ``` yarn install``` o ```npm install```
3. Abrir el URL del proyecto
4. ejecutar yarn dev
5. instalar react query  ``` yarn add @tanstack/react-query ```
6. instalar devTools react query  ``` yarn add @tanstack/react-query-devtools ```

6. instalar axios  ``` yarn add axios ```






### Notas
* ``` {refetchOnWindowFocus:false} ``` Desactiva/Activa que la peticion se haga cada vez que se pone en foco la ventana 

Estados de las peticiones  

* Fresh  - Data recien obtenida "fresca", todavia no se vencio la data, podemos tener la confianza de que es la ultima data
* Fetching - Se cambia cada vez que dispara la promesa que trae la informacion
* Paused - React query puede pausar la promesa que trae la peticion 
* Stale -  Caracteristica por defecto de cada una de las peticiones, es una forma de decir que la data esta vieja, ya paso su fecha de expiracion. le decimos a react-query que no confie en la data que esta en el cache.

* isLoading vs isFetching - isLoading se refiere a cuando estamos cargando los datos por primera vez  y no tenemos nada de datos en cache, isFetching se dispara cada vez que estemos haciendo una peticion. usualmente vamos a usar el isLoading.

* initialData y placeHolderData nos ayudan a para poder hacer algo con el tiempo de busqueda mientras se esta cargando la data

* prefetch query

* chequear updatedAt - nos ayuda a considerar cuando fue la ultima vez que se actualizaron los datos