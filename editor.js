import { editorData, siteData } from "./data.js";
import { renderSharedLayout } from "./shared.js";

function renderEditorData(data) {
    const title = document.querySelector("#article-title");
    const byline = document.querySelector(".byline");
    const metadata = document.querySelector(".metadata");
    const bodyEditor = document.querySelector(".body-editor");
    const visibility = document.querySelector(".visibility-select");
    const categories = document.querySelector(".category-grid");
    const stats = document.querySelector(".stats");

    title.value = data.title;
    byline.textContent = `By: ${data.author}, ${data.source}`;
    metadata.innerHTML = data.metadata.join("&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;");
    bodyEditor.textContent = data.bodyPlaceholder;

    visibility.innerHTML = data.visibilityOptions.map((option) => (
        `<option>${option}</option>`
    )).join("");

    categories.innerHTML = data.categories.map((category) => (
        `<button type="button">${category}</button>`
    )).join("");

    stats.innerHTML = data.coverageStats.map(([label, value]) => (
        `<li><span>${label}</span><strong>${value}</strong></li>`
    )).join("");
}

renderSharedLayout(siteData);
renderEditorData(editorData);
