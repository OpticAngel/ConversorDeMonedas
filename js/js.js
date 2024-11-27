const app = Vue.createApp({
    data() {
        return {
            monto: null, 
            monedaSeleccionada: '', 
            tasasCambio: {
                dolares: 0.055, 
                euros: 0.052,  
                bolivares: 0.50 
            },
            resultado: null, 
            historial: [] 
        };
    },
    methods: {
        convertir() {
            
            const tasa = this.tasasCambio[this.monedaSeleccionada];
            this.resultado = (this.monto * tasa).toFixed(2);

            this.historial.push({
                id: this.historial.length + 1,
                monto: this.monto,
                moneda: this.monedaSeleccionada,
                valor: this.resultado
            });

            this.monto = null;
            this.monedaSeleccionada = '';
        }
    }
});

app.mount('#app');
