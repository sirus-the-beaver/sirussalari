export const importAllImages = (requireContext) => {
    const images = import.meta.glob('../assets/images/*.png', { eager: true});
    const formattedImages = {};
    for (const path in images) {
        const key = path.replace('../assets/images/', '');
        formattedImages[key] = images[path].default;
    }
    return formattedImages;
}