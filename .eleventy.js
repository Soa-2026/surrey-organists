const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, linkify: true, typographer: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  eleventyConfig.addFilter("md", (content) => md.render(content || ""));
  eleventyConfig.addFilter("mdInline", (content) => md.renderInline(content || ""));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
