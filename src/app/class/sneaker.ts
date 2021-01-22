export interface MediaSneaker {
    imageUrl: string,
    smallImageUrl: string,
    thumbUrl: string
}

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
        public year: number
    ) { }
}
