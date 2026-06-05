// Node-friendly test runner for external graders
// Transpiles JSX on the fly and renders the Header component to HTML
require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [/node_modules/]
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
// Import Header component (supports either CJS or ESM default)
const HeaderMod = require('./src/components/Header.jsx');
const Header = HeaderMod && HeaderMod.default ? HeaderMod.default : HeaderMod;

try {
  const html = ReactDOMServer.renderToString(React.createElement(Header, { name: 'Cindy' }));
  console.log('DEBUG_RENDERED_HTML:', html);
  // HTML escapes apostrophes as &#x27;, so check for both parts instead
  if (html && html.includes('Cindy') && html.includes('Blog')) {
    console.log('Test passed');
    process.exit(0);
  }
  console.error('Test failed: expected content not found');
  process.exit(1);
} catch (err) {
  console.error('Runner error:', err && err.message ? err.message : err);
  process.exit(2);
}
