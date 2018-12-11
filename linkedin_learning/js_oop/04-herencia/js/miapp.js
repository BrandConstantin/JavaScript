function MiApp() {
    this.pantallaActual = null;
}

//propriedades estaticas
MiApp.PANTALLA_MENU = 'MENU';
MiApp.PANTALLA_DETALLE = 'DETALLE';

//método publico
MiApp.prototype.inicializar = function() {
    this.actualizarPantalla(MiApp.PANTALLA_MENU);
}

MiApp.prototype.actualizarPantalla = function(nuevaPantalla) {
    if (this.pantallaActual === null || nuevaPantalla !== this.pantallaActual.getNombre()) {
        if (this.pantallaActual !== null) {
            this.pantallaActual.ocultar();
            this.pantallaActual.destruir();
        }

        switch (nuevaPantalla) {
            case MiApp.PANTALLA_MENU:
                this.pantallaActual = new PantallaMenu();
                break;
            case MiApp.PANTALLA_DETALLE:
                this.pantallaActual = new PantallaDetalle();
                break;
        }

        this.pantallaActual.setNombre(nuevaPantalla);
        this.pantallaActual.mostrar();
    }
}