export class DebitoFila {
    private _codigoInternoBanco: number;  
    private _fecha: Date;
    private _refIntTrans: number; //fija 6 ceros
    private _clienteId: string;
    private _moneda: string; //fija 'P'
    private _cbu: string;
    private _importe: number;
    private _cuit: string; //fija 30561600194
    private _prestacion: string; //fijo 'CUOTAS 014'
    private _nroMovimiento: number;
    private _refInterna: string;
    private _clienteId2: string;
    private _codRechazo: string;
    private _nomEmpresa: string; //fija 'SIND T MUN MERLO'

    public constructor(
        codigoInternoBanco: number,
        fecha: Date,
        legajoAfiliado: string,
        cbuAfiliado: string,
        importe: number,
        nroMovimiento: number,
        apellidoAfiliado: string,
        codRechazo: string = '   '
    ) {
        this._refIntTrans = 0; // 6 ceros
        this._moneda = 'P';
        this._cuit = '30561600194';
        this._prestacion = 'CUOTAS 014';
        this._nomEmpresa = 'SIND T MUN MERLO';
        this._refInterna = '               ';

        this._codigoInternoBanco = codigoInternoBanco;
        this._fecha = fecha;
        this._clienteId = legajoAfiliado;
        this._cbu = cbuAfiliado;
        this._importe = importe;
        this._nroMovimiento = nroMovimiento;
        this._clienteId2 = apellidoAfiliado;
        this._codRechazo = codRechazo;
    }

    public get fila(): string {
        return this.codInternoBanco + 
            this.fecha + 
            this.refIntTran + 
            this.clientId +
            this.tipoMoneda +
            this.cbu +
            this.importe +
            this.cuit +
            this.prestacion +
            this.movimiento +
            this.refInterna +
            this.nuevoIdCliente +
            this.codigoRechazo +
            this.nombreEmpresa;
    }

    public get codInternoBanco(): string {
        return this._codigoInternoBanco.toString();
    }

    public get fecha(): string {
        let dia: string = ('0' + this._fecha.getDate()).slice(-2);
        let mes: string = ('0' + (this._fecha.getMonth() + 1)).slice(-2);
        let anno: string = this._fecha.getFullYear().toString();
        return dia + mes + anno;
    }

    public get refIntTran(): string {
        return '000000';
    }

    public get clientId(): string {
        return ('0000000000000000000000' +
         this._clienteId).slice(-22); // 22 caracteres
    }

    public get tipoMoneda(): string {
        return this._moneda;
    }

    public get cbu(): string {
        return this._cbu
    }

    public get importe(): string {
        let decimal:string = Math.trunc(this._importe * 100).toString();
        return ('0000000000' + decimal).slice(-10);
    }

    public get cuit(): string {
        return this._cuit;
    }

    public get prestacion(): string {
        return this._prestacion;
    }

    public get movimiento(): string {
        return ('000000000000000' + this._nroMovimiento.toString()).slice(-15);
    }

    public get refInterna(): string {
        return this._refInterna;
    }

    public get nuevoIdCliente(): string {
        return ('                      ' + this._clienteId2).slice(-22);
    }

    public get codigoRechazo(): string {
        return this._codRechazo;
    }

    public get nombreEmpresa(): string {
        return this._nomEmpresa;
    }
}