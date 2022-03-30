import AppInputFile from "../Atoms/AppInputFile";
import {useState} from "react";

const FileUpload = (props) => {

    const required = val => !!val;
    const isPdf = val => {
        console.log('val',val);
        if (val === '') {
            return true;
        }
        if (val.type === 'application/pdf') {
            return true;
        }
        return false;
    }

    const getForm = (init = {}) => {
        const form = {}

        for (const [key, value] of Object.entries(init)) {
            // eslint-disable-line
            form[key] = getField(value)
        }

        return form;
    }

    const getField = (field) => {
        console.log('field', field);
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

        //watch(value, reassign)
        
        reassign(value)


        return {value, valid, errors};
    }

    const initForm = getForm({
        file: {
            value: '',
            validators: {isPdf}
        },
    })

    const [form, setForm] = useState(initForm)
    
    
    const onChangeFile = (file) => {
        const formChanged = getForm({
            file: {
                value: file,
                validators: {isPdf}
            }
        })
        setForm(formChanged)
    }
    
    return (
        <div>
            <pre>{JSON.stringify(form,null,2)}</pre>
            <h1 className="inline-block mb-4 text-neutral font-semibold text-xl">Upload your CV</h1>
            <div className="flex space-x-2">
                <div className="mb-3 w-96">
                    <AppInputFile onChangeFile={onChangeFile} />
                    {!form.file.valid && <span className="text-red text-sm">File CV requires only pdf format</span>}
                </div>
            </div>
        </div>
    )
}

export default FileUpload
