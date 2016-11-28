# conditional-classnames.js
Helper function adding one or more classnames to an element depending on the result of the condition.

## Installation
```bash
$ npm install --save conditional-classnames.js
```

## Example
```javascript
import 'conditional-classnames.js';

// Add the classes when result is higher than 10
const result = (Math.random() * 10) > 10;
document.getElementById('#foo').classlist.cond('bar', 'highter-than-ten', result);
```
