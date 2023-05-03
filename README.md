# markdown-to-bbcode · ![npm](https://img.shields.io/npm/v/markdown-to-bbcode) [![Latest Stable Version](https://img.shields.io/npm/v/markdown-to-bbcode)](https://www.npmjs.com/package/markdown-to-bbcode)

A BBCode renderer for commonmark.js

## Usage

You'll need commonmark.js and markdown-to-bbcode.

```
var reader = new commonmark.Parser();
var parsed = reader.parse("BBCODE");

var writer = new markdown_to_bbcode.BBCodeRenderer();
var result = writer.render(parsed);
```

### importing the module
`import markdown_to_bbcode from 'markdown-to-bbcode';`

### including the bundle
`<script src="markdown-to-bbcode.js"></script>`

#### markdown to bbcode webpage:

https://ddormer.github.io/markdown-to-bbcode-site/
