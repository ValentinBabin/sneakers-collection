export interface MediaSneaker {
    imageUrl: string,
    smallImageUrl: string,
    thumbUrl: string
}

export interface lowestResellPriceSneaker {
    flightClub: string,
    goat: string,
    stockX: string
}

/**
 * Interface for sizing
 */
export interface resellPricesSneaker {
    goat: {
        "4": string,
        "4.5": string,
        "5": string,
        "5.5": string,
        "6": string,
        "6.5": string,
        "7": string,
        "7.5": string,
        "8": string,
        "8.5": string,
        "9": string,
        "9.5": string,
        "10": string,
        "10.5": string,
        "11": string,
        "11.5": string,
        "12": string,
        "12.5": string,
        "13": string,
        "14": string,
        "15": string,
        "16": string,
    }
}

/**
 * Interface for BDD return object
 */
export interface SneakerSQL {
    sku: string,
    brand: string,
    colorway: string,
    gender: string,
    media: string,
    release_date: string,
    retail_price: string,
    style_id: string,
    shoe: string,
    name: string,
    title: string,
    year: string,
    description: string,
    lowest_resell_price: string,
    resell_prices: string
}

/**
 * Class for sneaker object
 */
export class Sneaker {
    constructor(
        public id: string,
        public brand: string,
        public colorway: string,
        public gender: string,
        public media: MediaSneaker,
        public releaseDate: string,
        public retailPrice: number,
        public styleId: string,
        public shoe: string,
        public name: string,
        public title: string,
        public year: string,
        public description: string,
        public lowestResellPrice: lowestResellPriceSneaker | {},
        public resellPrices: resellPricesSneaker | {}
    ) { }
}
