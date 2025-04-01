export function getImageURL(name: string, isCover: boolean): string {
    const folder = isCover ? "covers" : "backgrounds";
    const file_name = name.toLowerCase().replace(/\s+/g, "_");
    console.log(file_name)
    return new URL(`../assets/albums/${folder}/${file_name}.jpg`, import.meta.url).href;
}