export function getImageURL(name: string, isCover: boolean): string {
    const folder = isCover ? "covers" : "backgrounds";
    const file_name = name.toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[?!,“”]/g, "");

    return new URL(`../assets/albums/${folder}/${file_name}.jpg`, import.meta.url).href;
}
