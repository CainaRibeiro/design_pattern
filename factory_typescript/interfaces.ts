export interface Transport {
    deliver(): void;
}

export type TransportTypes = 'truck' | 'ship'; 