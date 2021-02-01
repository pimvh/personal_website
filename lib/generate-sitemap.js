const path = require('path');
const fs = require('fs');
const globby = require('globby');

const postsDirectory = path.join(process.cwd(), 'blog');

async function generateSitemap() {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const staticpages = await globby([
        'pages/**/*{.js,.mdx}',
        '!pages/_*.js',
        '!pages/api',
        '!pages/**/[*.js'
    ]);

    const posts = fs.readdirSync(postsDirectory);
    const dynamicroutes = posts.map((post) => `/blog/${post.replace('.md', '')}`);

    const pages = staticpages.concat(dynamicroutes);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('.js', '')
                  .replace('.mdx', '');
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://www.pimvanhelvoirt.nl${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

    fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
