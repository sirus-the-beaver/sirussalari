export const importAllIcons = () => {
    const icons = import.meta.glob('../assets/icons/*.svg', { eager: true});
    const formattedIcons = {};
    
    // Extract the key from the path and assign the value to the formattedIcons object
    for (const path in icons) {
        const key = path.replace('../assets/icons/', '');
        formattedIcons[key] = icons[path].default;
    }
    return formattedIcons;
}