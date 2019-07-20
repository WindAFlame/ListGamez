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

class DownloadLink {
    type: string;
    link: string;
}

export class Game implements GameInterface {

    public id: number;
    public name: string;
    @Type(() => DownloadLink)
    public downloads: DownloadLink[];
    public size: string;
    public infos: [];
    public summary = 'No summary.';
    public website: string;

    constructor()
    constructor(id?, name?, downloads?, size?) {
        this.id = id ? id : undefined;
        this.name = name ? name : undefined;
        this.downloads = downloads ? downloads : undefined;
        this.size = size ? size : undefined;
    }

    public hasDdlLink() {
        return this.downloads && !!this.downloads.find(d => d.type === 'DDL');
    }

    public hasTorrentLink() {
        return this.downloads && !!this.downloads.find(d => d.type === 'TORRENT');
    }

}