import React, { useEffect, useState } from 'react'


export default function addName() {
    const [data, setdata] = useState(null)
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                setdata(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    useEffect(() => {
        console.log(data);
    }, [data])
    
    
    return (
        <form>
            <label htmlFor="upload">Upload File</label>
            <input
                type="file"
                name="upload"
                id="upload"
                onChange={readUploadFile}
            />
        </form>
    )
}
