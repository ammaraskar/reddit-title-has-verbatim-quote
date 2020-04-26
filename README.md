# reddit-title-has-verbatim-quote

Test whether a reddit post title is a verbatim quote from the linked page.

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
