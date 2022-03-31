import getField from "./field";
const getForm = (init = {}) => {
    const form = {}

    for (const [key, value] of Object.entries(init)) {
        // eslint-disable-line
        form[key] = getField(value)
    }

    console.log(form);

    return form;
}

export default getForm;
