import {Transport} from './interfaces';

/*
Classe abstrata Logistics define o método de fábrica abstrato createTransport,
que deve ser implementado pelas subclasses. O método planDelivery() utiliza o
objeto criado pelo método de fábrica para realizar a entrega, chamando o método
deliver, que é implementado nas classes concretas que representam diferentes
meios de transporte.
*/ 
export abstract class Logistics { 
    abstract createTransport(): Transport

    public planDelivery() {
        const transport = this.createTransport();
        return transport.deliver();
    }
}

/*
Classes concretas Ship e Truck implementam a interface Transport, 
definindo o comportamento específico do método deliver para cada
tipo de transporte.
*/
class Ship implements Transport {
    deliver(): void {
        console.log('entrega de navio');
    }
}

class Truck implements Transport {
    deliver(): void {
        console.log('entrega de caminhão');
    }
}

/*
Subclasses TruckLogistics e ShipLogistics estendem a classe abstrata Logistics
e implementam o método de fábrica createTransport, retornando instâncias de Truck
e Ship, respectivamente. Isso permite que o método planDelivery seja chamado de forma
abstrata, sem depender de classes concretas.
*/
class TruckLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}

class ShipLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

const truck = new TruckLogistics();
const ship = new ShipLogistics();

truck.planDelivery();
ship.planDelivery();