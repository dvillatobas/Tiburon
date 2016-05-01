cd ~/workspace_daw/DAW2016_ElTiburon/angular/
google-chrome https://localhost:8443 &
ng serve -output-path ~/workspace_daw/DAW2016_ElTiburon/TiburonSpring/src/main/resources/static/

# el servidor de spring se arranca desde eclipse, pero los cambios 
# en angular se exportan automaticamente a la carpeta que corresponde
# en el proyecto de spring
# el servidor de spring se actualiza solo al guardar, para que se vean 
# los cambios de angular hay que actualizar el proyecto con maven (alt + f5) en 
# spring y refrescar el navegador