export interface Character {
    id: Number;
    name: String;
    status: String;
    species: String;
    type: String;
    gender: Number;
    origin: Object;
    location: Object;
    img: String;
    episode: Object;
    url: String;
    created: String;
}

export interface CharacterResults {
    info : Object;
    results : Character[];
}