import { TiposAlgoritmo } from "../interfaces/enums";
import { ConfiguracionAlgoritmo, SalidaAlgoritmo } from "../interfaces/interfaces";



class Services {


   private maxNumberOutput : number = 999999;
   private  fnAlgoritmos = {

        [TiposAlgoritmo.SECUENCIADOR] : this.secuenciador.bind(this),
        [TiposAlgoritmo.FIBONACCI] : this.fibonacci.bind(this),
        [TiposAlgoritmo.BINARIO] : this.binario.bind(this),
        [TiposAlgoritmo.FACTORIAL] : this.factorial.bind(this)


    }    
    constructor(){}


    private bucle (max : number, fn : (anterior:number, siguiente ?:number)=>number) : Array<string>
    {
        
        let res = 0;
        let arrayOut : Array<string> = [];
        for (let i = 1; i <= max; i++) {
            
            try {
                res = fn(res, i);
    
                
                arrayOut.push(res.toString().padStart(6, "000000"))
                
            } catch (error) {
                break;
                //arrayOut.push("Máximo Superado")
            }
        }

        return arrayOut;

    }

    private binario (max : number) : Array<string>
    {
        
        let anterior2 = 1;
        
        let fnAux =  (anterior : number) =>  {
            
            anterior2 = anterior + anterior2;
            return anterior2;
        };

        return this.bucle(max, fnAux);
    }


    private factorial (max : number) : Array<string>
    {
        
        let fnAux =  (anterior : number, siguiente :number = 1) => Math.max(1, anterior) * siguiente;

        return this.bucle(max, fnAux);
    }
    private fibonacci(max : number) : Array<string>
    {
        let anterior2 = 0;
        
        let fnAux =  (anterior : number) =>  {
            anterior = Math.max(1, anterior);
            let res = anterior + anterior2;
            anterior2 =  anterior;
            return res;
        };

        return this.bucle(max, fnAux);
       
    }

    private secuenciador(max : number) : Array<string>
    {
        

        let fnAux =  (anterior : number ) =>  anterior + 1;

        return this.bucle(max, fnAux);
    }

    correrAlgoritmos(config : ConfiguracionAlgoritmo) : Array<SalidaAlgoritmo>
    {
        
        let salida :  Array<SalidaAlgoritmo> = [];


        if( Array.isArray(config.algoritmos))
        {

            config.algoritmos.forEach((v)=>{
                let fnAlgoritmo = this.fnAlgoritmos[v.tipo]
                if(fnAlgoritmo)
                {
                    salida.push({
                        nombre : v.nombre,
                        salida : fnAlgoritmo(config.cantidad )
                    })

                }
                else{
                    console.log("Algorimo no reconocido")
                }
                




            })
        }




        return salida;

    } 

}

export const services : Services = new Services();


