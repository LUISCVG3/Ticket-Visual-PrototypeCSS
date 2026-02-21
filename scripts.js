function ObtenerDatos(){
    fetch('resumen.json')
    .then(res => res.json())
    .then((salida) => {
    
    
        let Nomina = document.getElementById('banco').textContent = salida.banco;;
        let establecimiento = document.getElementById('sucursal').textContent = salida.sucursal;
        let name = document.getElementById('cliente').textContent = salida.titular;
        let cuenta = document.getElementById('cuenta').textContent = salida.nro_cuenta;
        let saldoCD = document.getElementById('saldo');
        let cbu = document.getElementById('cbu').textContent = salida.cbu;
        let fecha = document.getElementById('fecha').textContent = salida.abierto;

        saldoCD.innerHTML = "";
        for(let item of salida.saldo){
            let p = document.createElement('p');
            p.textContent = item.moneda + ": " + item.monto;
            saldoCD.appendChild(p);
        }
    
    })
    .catch((error) => {
          alert('Error al cargar el JSON: ' + error);
    });
}
