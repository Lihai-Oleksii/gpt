window.onload = function() {
  
      //<editor-fold desc="Changeable Configuration Block">
      window.ui = SwaggerUIBundle({
        url: "https://keycrm.s3.eu-central-1.amazonaws.com/static/open-api.yml",
        "dom_id": "#swagger-ui",
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        queryConfigEnabled: false,
      })
      
      //</editor-fold>

};
