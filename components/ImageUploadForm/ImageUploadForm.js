import { useState } from "react"
import { onChange, onSubmit, uploadImage } from "./functions"
import useSWRMutation from 'swr/mutation';

export default function ImageUploadForm({params}) {
    const [fileData, setFileData] = useState({})
    const {trigger} = useSWRMutation("/api/image", uploadImage)

    return (
        <form onSubmit={(event) => onSubmit(event, fileData, trigger)}>
            <label htmlFor="upload"></label>
            <input type="file" name="upload" onChange={(event) => onChange(event, setFileData)}></input>
            <button>Upload</button>
        </form>
    )
}