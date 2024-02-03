import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import jsx from "lume/plugins/jsx.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";
import transform_images from "lume/plugins/transform_images.ts";

import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_typescript from "npm:highlight.js/lib/languages/typescript";
import lang_ruby from "npm:highlight.js/lib/languages/ruby";
import lang_bash from "npm:highlight.js/lib/languages/bash";

const site = lume({
  src: "./src/pages",
  dest: "./public",
});

site.use(code_highlight({
  languages: {
    javascript: lang_javascript,
    typescript: lang_typescript,
    ruby: lang_ruby,
    bash: lang_bash,
  },
}));
site.use(date());
site.use(jsx());
site.use(jsx_preact());
site.use(lightningcss());
site.use(postcss());
site.use(svgo());
site.use(transform_images());

export default site;
