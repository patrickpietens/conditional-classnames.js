# conditional-classnames.js
Helper function adding one or more classnames to an element depending on the result of the condition.

## Installation
```bash
$ npm install --save conditional-classnames.js
```

## Example
```javascript
import 'conditional-classnames.js';

// Add bar when result is higher than 10. Otherwise remove it.
const foo = document.getElementById('#foo');
const result = (Math.random() * 10) > 10;

foo.classlist.bool('bar', result);
```
