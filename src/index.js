import ProjectCollection from './modules/projectCollection.js';
import UI from './modules/UI.js';

const projectCollection = new ProjectCollection();
export default projectCollection;

document.addEventListener('DOMContentLoaded', UI.loadHomepage);