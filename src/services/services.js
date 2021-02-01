"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../interfaces/enums");
var Services = /** @class */ (function () {
    function Services() {
        var _a;
        this.maxNumberOutput = 999999;
        this.fnAlgoritmos = (_a = {},
            _a[enums_1.TiposAlgoritmo.SECUENCIADOR] = this.secuenciador,
            _a[enums_1.TiposAlgoritmo.FIBONACCI] = this.fibonacci,
            _a[enums_1.TiposAlgoritmo.FACTORIAL] = this.factorial,
            _a);
    }
    Services.prototype.bucle = function (max, fn) {
        var res = 0;
        var arrayOut = [];
        for (var i = 1; i <= max; i++) {
            res = Math.min(fn(res, i), this.maxNumberOutput);
            arrayOut.push(res.toString().padStart(6, "000000"));
        }
        return arrayOut;
    };
    Services.prototype.factorial = function (max) {
        var fnAux = function (anterior, siguiente) {
            if (siguiente === void 0) { siguiente = 1; }
            return Math.max(1, anterior) * siguiente;
        };
        return this.bucle(max, fnAux);
    };
    Services.prototype.fibonacci = function (max) {
        var fnAux = function (anterior, siguiente) {
            if (siguiente === void 0) { siguiente = 1; }
            return anterior + siguiente;
        };
        return this.bucle(max, fnAux);
    };
    Services.prototype.secuenciador = function (max) {
        var fnAux = function (anterior) { return anterior + 1; };
        return this.bucle(max, fnAux);
    };
    Services.prototype.correrAlgoritmos = function (config) {
        var _this = this;
        var salida = [];
        if (Array.isArray(config.algoritmos)) {
            config.algoritmos.forEach(function (v) {
                var fnAlgoritmo = _this.fnAlgoritmos[v.tipo];
                salida.push({
                    nombre: v.nombre,
                    salida: fnAlgoritmo(config.cantidad)
                });
            });
        }
        return salida;
    };
    return Services;
}());
exports.services = new Services();
