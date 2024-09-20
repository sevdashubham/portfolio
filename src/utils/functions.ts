export const scrollWindowTop = () => {
    if (window) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
