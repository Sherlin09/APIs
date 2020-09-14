document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('ejecutar La funcion para reproducuir el video...');
    } else {
        console.log('Pausar el video');
    } 

})