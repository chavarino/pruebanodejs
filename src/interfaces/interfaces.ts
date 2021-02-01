import { TiposAlgoritmo } from "./enums";

export interface ConfiguracionAlgoritmo {

    cantidad : number,
    algoritmos : Array<Algoritmo>
}




export interface Algoritmo {

    nombre : string,
    tipo : TiposAlgoritmo
} 


export interface SalidaAlgoritmo {

    nombre: string, //algorimot que produce la salida
    salida : Array<string>


}


