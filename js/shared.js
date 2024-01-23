// shared.js

function updateThemeColor(color) {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorMetaTag) {
        themeColorMetaTag.setAttribute('content', color);
    }
}
