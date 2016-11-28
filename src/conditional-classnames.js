'use strict';

import assert from 'assert';

DOMTokenList.prototype.cond = function(...args) {
    const value = args.pop();
    const tokens = args;

    assert(args.length >= 1, 'length');
    assert (typeof value === 'boolean', 'boolean');

    // Add the token
    if (value) {
        this.add(tokens);
    }

    // Remove the token
    else if (!value) {
        this.remove(tokens);
    }
}
