export const importAllImages = () => {
    const images = import.meta.glob('../assets/images/*.png', { eager: true});
    const formattedImages = {};

    // Extract the key from the path and assign the value to the formattedImages object
    for (const path in images) {
        const key = path.replace('../assets/images/', '');
        formattedImages[key] = images[path].default;
    }
    return formattedImages;
}