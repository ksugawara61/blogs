import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";
import transform_images from "lume/plugins/transform_images.ts";
import remark from "lume/plugins/remark.ts";

const site = lume({
  src: "./src/pages",
  dest: "./public",
  location: new URL("https://ksugawara61.github.io/blogs/"),
});

site.use(code_highlight()).use(date())
  .use(jsx_preact())
  .use(lightningcss())
  .use(postcss())
  .use(svgo())
  .use(transform_images())
  .use(remark());

export default site;
