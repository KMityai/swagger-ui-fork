/* eslint-disable no-undef */
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]

  // Build a system
  window.ui = SwaggerUIBundle({
    url: "demo-config.json",
    dom_id: "#swagger-ui",
    deepLinking: true,
  })
}
