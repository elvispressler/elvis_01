const { suggestNewProject } = require("./.local/bin/skillSearch.js") || {};
console.log("suggestNewProject exists:", typeof suggestNewProject === "function");
