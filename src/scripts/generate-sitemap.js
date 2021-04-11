const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  // Fetch all of the relevenat pages
  const pages = await globby([
    'src/pages/**/*{.js,.jsx,.ts,.tsx,.mdx}',
    'src/data/**/*.mdx',
    '!src/data/drafts/*.mdx',
    '!src/pages/_*{.js,.jsx,.ts,.tsx}',
    '!src/pages/404{.js,.jsx,.ts,.tsx}',
    '!src/pages/api'
  ]);

  // Generate the individual data
  const data = pages.map(page => {
    // The page is a dynamic route `/[slug].tsx` - ignore it
    if (page.match(/\[.*\].*/g)) return '';

    // Generate the route path
    let path = page
      .replace(/src\/.*?\//g, '') // replace `src/__/` with ``
      .replace(/\/?index.*/g, '') // replace `[/]index.__ with ``
      .split('.')[0];
    if (path) path = `/${path}`;

    return `<url><loc>${`https://reesmorris.co.uk${path}`}</loc></url>`;
  });

  // Generate the sitemap
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data.join('')}
  </urlset>
  `;

  // Format the sitemap
  const formatted = prettier.format(sitemap, {
    prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
