"use strict";
{
    // Use the function with Generic
    const CreateArray = (param) => {
        return [param];
    };
    const CreateArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = CreateArray("Bangladesh");
    const result2 = CreateArrayWithGeneric("Bangladesh");
    const result3 = CreateArrayWithGeneric({
        id: 1243,
        name: "Pritom Chakma",
    });
}
