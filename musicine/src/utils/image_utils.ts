export function getImageURL(folder: string, isCover: boolean): string | string[] {
    // Utilisation de Vite pour importer dynamiquement toutes les images
    const covers = import.meta.glob('../assets/albums/**/covers/*.{jpg,jpeg,png}', { eager: true });
    const backgrounds = import.meta.glob('../assets/albums/**/backgrounds/*.{jpg,jpeg,png}', { eager: true });
  
    if (isCover) {
      const images: string[] = [];
  
      for (const path in covers) {
        if (path.includes(`/albums/${folder}/covers/`)) {
          // Vite retourne un module, on récupère son URL avec `.default`
          const mod = covers[path] as { default: string };
          images.push(mod.default);
        }
      }
  
      // Trier les covers par nom si tu veux
      images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  
      return images;
    } else {
      for (const path in backgrounds) {
        if (path.includes(`/albums/${folder}/backgrounds/`)) {
          const mod = backgrounds[path] as { default: string };
          return mod.default;
        }
      }
      return "";
    }
  }
  