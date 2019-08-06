import { Type } from 'class-transformer';

interface GameInterface {
    id: string | number;
    name: string;
    category?: string[];
    downloads: DownloadLink[];
    size: string; // GB
    date?: Date; // Uploaded
    dateUpdated?: Date; // Uploaded
}

export class DownloadLink {
    id: number;
    type: DownloadLinkType;
    link: string;
}

export enum DownloadLinkType {
    Torrent = 'TORRENT',
    DDl = 'DDL'
}

export class GameInformations {
    id: number;
    name: string;
    value: string;
}

export class Game implements GameInterface {

    public id: number;
    public name: string;
    @Type(() => DownloadLink)
    public downloads: DownloadLink[];
    public size: string;
    public infos: GameInformations[];
    public summary = 'No summary.';
    public website: string;

    constructor()
    constructor(id?, name?, downloads?, size?) {
        this.id = id ? id : undefined;
        this.name = name ? name : undefined;
        this.downloads = downloads ? downloads : undefined;
        this.size = size ? size : undefined;
    }

    public parseGame(game: Game) {
        this.id = game.id ? game.id : undefined;
        this.name = game.name ? game.name : undefined;
        this.downloads = game.downloads ? game.downloads : undefined;
        this.size = game.size ? game.size : undefined;
        this.infos =  game.infos ? game.infos : [];
        this.summary = game.summary ? game.summary : 'No summary.';
        this.website = game.website ? game.website : undefined;
    }

    public hasDdlLink() {
        return this.downloads && !!this.downloads.find(d => d.type === DownloadLinkType.DDl);
    }

    public hasTorrentLink() {
        return this.downloads && !!this.downloads.find(d => d.type === DownloadLinkType.Torrent);
    }

}