import {Transport} from './interfaces';

export abstract class Logistics { 
    abstract createTransport(): Transport

    public planDelivery() {
        const transport = this.createTransport();
        return transport.deliver();
    }
}

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