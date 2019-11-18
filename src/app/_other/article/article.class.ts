import { ArticleType } from './article-type.enum';
import { DownloadLinkType } from './download-link-type.enum';
import { DownloadLink } from './download-link.class';
import { ArticleInformation } from './information.class';

export class Article {

    public id: number;
    public readonly type: ArticleType;
    public downloads: DownloadLink[];
    public infos: ArticleInformation[];
    public size: string;

    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    public hasDdlLink() {
        return this.downloads && !!this.downloads.find(d => d.type === DownloadLinkType.DDl);
    }

    public hasTorrentLink() {
        return this.downloads && !!this.downloads.find(d => d.type === DownloadLinkType.Torrent);
    }

    public hasStoreLink() {
        return this.downloads && !!this.downloads.find(d => d.type === DownloadLinkType.Store);
    }

    public hasPlayableLink() {
        return this.downloads && !!this.downloads.find(d => d.type === DownloadLinkType.Playable);
    }

}
