export function getImageURL(name: string, isCover: boolean): string {
    const folder = isCover ? "covers" : "backgrounds";
    return new URL(`../assets/albums/${folder}/${name}`, import.meta.url).href;
}