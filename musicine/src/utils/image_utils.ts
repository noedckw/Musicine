export function getImageURL(folder: string, isCover: boolean): string | string[] {
  const covers = import.meta.glob('../assets/albums/**/covers/*.{jpg,jpeg,png}', { eager: true });
  const backgrounds = import.meta.glob('../assets/albums/**/backgrounds/*.{jpg,jpeg,png}', { eager: true });

  if (isCover) {
    const images: string[] = [];

    for (const path in covers) {
      if (path.includes(`/albums/${folder}/covers/`)) {
        const mod = covers[path] as { default: string };
        images.push(mod.default);
      }
    }

    images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return images;
  } else {
    const images: string[] = [];

    for (const path in backgrounds) {
      if (path.includes(`/albums/${folder}/backgrounds/`)) {
        const mod = backgrounds[path] as { default: string };
        images.push(mod.default);
      }
    }

    // Prendre un background au hasard si y’en a au moins un
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    return "";
  }
}
