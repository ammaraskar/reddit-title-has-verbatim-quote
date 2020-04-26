# reddit-title-has-verbatim-quote

Test whether a reddit post title is a verbatim quote from the linked page.

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ammaraskar/reddit-title-has-verbatim-quote/CI)
![npm](https://img.shields.io/npm/v/reddit-title-has-verbatim-quote)
![npm bundle size](https://img.shields.io/bundlephobia/min/reddit-title-has-verbatim-quote)
![GitHub stars](https://img.shields.io/github/stars/ammaraskar/reddit-title-has-verbatim-quote?style=social)


## Installation

    $ npm install reddit-title-has-verbatim-quote

## API

```typescript
import hasVerbatimQuote from 'reddit-title-has-verbatim-quote';

await hasVerbatimQuote(
  'https://www.reddit.com/r/programmingcirclejerk/comments/g7qdzz/i_started_programming_rust_because_i_saw_that_it/');
// true

await hasVerbatimQuote(
  'https://www.reddit.com/r/programming/comments/g7xweu/another_1liner_npm_package_broke_the_js_ecosystem/');
// false

await hasVerbatimQuote('g812bj');
// true
```
