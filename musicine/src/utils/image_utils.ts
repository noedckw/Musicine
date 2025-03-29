export function getImageURL(name: string): string {
    return new URL(`../assets/albums/${name}`, import.meta.url).href;
}
