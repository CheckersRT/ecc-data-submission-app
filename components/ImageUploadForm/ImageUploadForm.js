import { useState } from "react"
import { onChange, onSubmit, uploadImage } from "./functions"
import useSWRMutation from 'swr/mutation';

export default function ImageUploadForm({setData, setIsLoading}) {
    const [fileData, setFileData] = useState()
    const {trigger} = useSWRMutation("/api/image", uploadImage)

    return (
        <form onSubmit={(event) => onSubmit(event, fileData, trigger, setData, setIsLoading)}>
            <label htmlFor="upload">Image Upload</label>
            <input type="file" name="upload" onChange={(event) => onChange(event, setFileData)}></input>
            <button>Upload</button>
        </form>
    )
}