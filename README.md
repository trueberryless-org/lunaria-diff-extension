# Lunaria Diff Extension

Adds diff viewer links to Lunaria dashboards. 

## Usage

### Marketplace

The extension is available on the Chrome Web Store and Firefox Add-ons extension stores. Click on your browser's badge below to install.

<p>
  <a href="https://chromewebstore.google.com/detail/mjhcefacnhijilklkippladhcgdjbiho"><img src="https://img.shields.io/badge/Chrome_Web_Store-b7bdf8?style=for-the-badge&logo=GoogleChrome&logoColor=24273a"></a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/lunaria-diff-viewer/"><img src="https://img.shields.io/badge/Firefox_Add--ons-f5a97f?style=for-the-badge&logo=Firefox-Browser&logoColor=24273a"></a>
</p>

## Development

### Directory Structure

| Folder | Description |
|---|---|
| `entrypoints/content.ts` | Logic for adding links to Git Diff Viewer on Lunaria websites. |
| `public/icon/` | Extension icon in different sizes. |

### Scripts

The following package.json scripts are available for your convenience:

| Script | Description |
|---|---|
| `dev` | Launch a Chrome instance with the extension installed and hot reloading enabled. Use `dev:firefox` to launch a Firefox instance instead. |
| `build` | Build the Chrome extension to `dist/`. Use `build:firefox` to build the Firefox version instead. |
| `zip` | Build and zip the Chrome extension. Use `zip:firefox` to build and zip the Firefox version instead. |
