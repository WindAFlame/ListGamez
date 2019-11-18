import { DownloadLinkType } from './download-link-type.enum';

export class DownloadLink {
    id: number;
    type: DownloadLinkType;
    link: string;
}
