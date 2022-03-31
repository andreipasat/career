import React from 'react'

const getField = (field) => {
    let valid = true;
    const value = field.value;

    const not = val => !val
    const errors = {};

    const reassign = val => {
        valid = true;
        Object.keys(field.validators ?? {}).map(name => {
            const isValid = field.validators[name](val);
            errors[name] = not(isValid);
            if (not(isValid)) {
                valid = false;
            }
        })
    }

    reassign(value)

    return {value, valid, errors};
}

export default getField
