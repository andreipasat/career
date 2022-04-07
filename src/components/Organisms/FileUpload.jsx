import AppInputFile from "../Atoms/AppInputFile";
import {useState} from "react";
import getForm from "../../hooks/form";
import http from "../../hooks/http"

const FileUpload = (props) => {
    
    const isPdf = val => {
        return val === '' || val.type === 'application/pdf';
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
            ...form,
            file: {...form.file, value: file, validators: {isPdf}}
        })
        setForm(formChanged)
        
        if (formChanged.file.valid && !formChanged.file.errors.isPdf) {
            const formData = new FormData();
            formData.append('documents_files', formChanged.file.value);
            http.post('http://18.217.126.4:8000/classification/', formData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                    "Content-type": "multipart/form-data",
                },
            });
            //http.get('http://18.217.126.4:8000/classification/?identifier=1')
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
