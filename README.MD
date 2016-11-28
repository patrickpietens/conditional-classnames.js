# conditional-classnames.js
Helper function adding one or more classnames to an element depending on the result of the condition.

## Installation
```bash
$ npm install --save conditional-classnames.js
```

## Example
```javascript
import 'conditional-classnames.js';

const foo = $('#foo');
const result = (Math.random() * 10) > 10;

// Add the classes when result is higher than 10
foo.classlist.cond('bar', 'highter-than-ten', result);
```
