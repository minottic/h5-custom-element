import { H5WebViewer } from "./h5-element";

if (!customElements.get('h5web-viewer')) {
  customElements.define('h5web-viewer', H5WebViewer);
}
