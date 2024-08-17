from abc import ABC, abstractmethod

class Transport(ABC):
    @abstractmethod
    def delivery(self) -> None:
        pass;
    
class Logistics(ABC):
    @abstractmethod
    def createTransport(self) -> Transport:
        pass
    
    def planDelivery(self):
        transport = self.createTransport()
        return transport.delivery();
    
class Truck(Transport):
    def delivery(self):
        print('Entrega de camionete')

class Ship(Transport):
    def delivery(self):
        print('Entrega de barco')

class TruckLogistics(Logistics):
    def createTransport(self):
        return Truck()
    
class ShipLogistics(Logistics):
    def createTransport(self):
        return Ship();
        
        
TruckLogistics().planDelivery();
ShipLogistics().planDelivery();