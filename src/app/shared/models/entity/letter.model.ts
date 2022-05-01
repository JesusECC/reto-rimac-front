export class Letter {
    idLetters: string;
    nro_unico: string; //change
    name_client: string;
    broadcast_date: string;
    days: string;
    expiration_date: string;
    days_thanks: string;
    amount: string;
    coin_name: string; //change
    user: string; //change
    letters_status: string; //change
    pay_status: string; //change
    balance: string;
    status: string;
    idDetail_letters: string;
    type_person: number;

    nro_document: string;
    payment: string; //abono

    coin_idCoin: number;
    status_name: string;

    document:string;
    idletters: string;
    detalle_letras:DetalleLetras[];
}


export class DetalleLetras {
    amount: string;
    broadcast_date: string;
    day_thanks: string;
    days: number;
    expiration_date: string;
    idDetail_letters: number
    letters_status: string;
    nro_letters: string;
    pay_status: string;
    sequence_letters: number;
}