export const importAllIcons = (requireContext) => {
    const icons = import.meta.glob('../assets/icons/*.svg', { eager: true});
    const formattedIcons = {};
    for (const path in icons) {
        const key = path.replace('../assets/icons/', '');
        formattedIcons[key] = icons[path].default;
    }
    return formattedIcons;
}