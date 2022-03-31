import AppInputFile from "../Atoms/AppInputFile";
import {useState} from "react";
import getForm from "../../hooks/form";
import http from "../../hooks/http"

const FileUpload = (props) => {
    
    const isPdf = val => {
        if (val === '') {
            return true;
        }
        if (val.type === 'application/pdf') {
            return true;
        }
        return false;
    }
    
    
    const initForm = getForm({
        file: {
            value: '',
            validators: {isPdf}
        },
    })

    const [form, setForm] = useState(() => {
        return initForm;
    })
    
    
    const onChangeFile = (file) => {
        const formChanged = getForm({
            file: {
                value: file,
                validators: {isPdf}
            }
        })
        setForm(formChanged)
        
        if (formChanged.file.valid && !formChanged.file.errors.isPdf) {
            const formData = new FormData();
            formData.append('file', formChanged.file.value);
            http.post('/upload', formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
        }
        
    }
    
    return (
        <div>
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
