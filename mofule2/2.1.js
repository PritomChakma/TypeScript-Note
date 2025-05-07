"use strict";
{
    let anything;
    anything = "Pritom Chakma";
    // anything = 222;
    anything;
    const KgToGm = (value) => {
        if (typeof value === "string") {
            const convert = parseFloat(value) * 1000;
            console.log(`The result is: ${convert}`);
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
}
