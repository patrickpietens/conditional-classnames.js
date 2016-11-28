'use strict';

import assert from 'assert';

DOMTokenList.prototype.bool = function(...args) {
    const value = args.pop();
    const tokens = args;

    assert(args.length >= 1, `The cond method accepts 2 or more arguments. Only ${args.length} argument are given.`);
    assert(typeof value === 'boolean', 'The last argument of the cond method should be a boolean');

    if (value) {
        this.add(tokens);
    }
    else {
        this.remove(tokens);
    }
}
