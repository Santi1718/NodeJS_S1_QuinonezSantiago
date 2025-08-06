class CuentaBancaria{
    #saldo //Atributo privado

    constructor(titular, salarioInical){
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(monto){
        if(monto>0){
            this.#saldo += monto;
        }
    }
    verSaldo(){
        return this.#saldo;
    }
}

/* Con el uso de campos privados (#), protegemos el estado interno del objeto, reforzando la seguridad y confiabilidad del sistema.
Hay que recordar que el encapsulamiento busca ocultar los detalles internos y exponer solo lo necesario.
*/