
// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Watch for DOM changes to re-render icons if needed
window.addEventListener('alpine:init', () => {
    lucide.createIcons();
});
