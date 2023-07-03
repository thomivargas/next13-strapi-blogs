export interface Post {
    id: number;
    attributes: Attributes2;
}

interface Attributes2 {
    title: string;
    description: string;
    body: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
}

interface Image {
    data: Data;
}

interface Data {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    name: string;
    alternativeText?: any;
    caption?: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata: Providermetadata;
    createdAt: string;
    updatedAt: string;
}

interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

interface Large {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
    provider_metadata: Providermetadata;
}

interface Providermetadata {
    public_id: string;
    resource_type: string;
}
