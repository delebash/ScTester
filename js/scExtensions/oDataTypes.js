isc.SimpleType.create({
    name: "OInteger",
    inheritsFrom: "integer",
    validators: [
        {type: "integerRange", min: -2147483648, max: 2147483647, errorMessage: "Integer must be between -2,147,483,648 and 2,147,483,647"}
    ]
});
isc.SimpleType.create({
    name: "OShort",
    inheritsFrom: "integer",
    validators: [
        {type: "integerRange", min: -32768, max: 32767, errorMessage: "Integer must be between -3,2768 and 3,2767"}
    ]
});

isc.SimpleType.create({
    name: "OByte",
    inheritsFrom: "integer",
    validators: [
        {type: "integerRange", min: -128, max: 127, errorMessage: "Integer must be between -128 and 127"}
    ]
});