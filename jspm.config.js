SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.20"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "angular-material": "npm:angular-material@1.1.2"
  },
  packages: {
    "npm:angular-material@1.1.2": {
      "map": {
        "angular-animate": "npm:angular-animate@1.6.1",
        "systemjs-plugin-css": "npm:systemjs-plugin-css@0.1.32",
        "angular": "npm:angular@1.6.1",
        "angular-aria": "npm:angular-aria@1.6.1"
      }
    }
  }
});
