import "./FileBox.scss";
import { useRef, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaFileImage, FaFileWord, FaRegFilePdf } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const FileBox = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleMultipleFiles = (files) => {
        const filesArray = Array.from(files);
        const validFiles = filesArray.filter(file =>
            file.type.startsWith('image/') ||
            file.type === 'application/pdf' ||
            file.type === 'application/msword' ||
            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );

        const newFiles = validFiles.filter(file =>
            !uploadedFiles.some(el => el.name === file.name && el.size === file.size)
        );

        uploadedFiles.map(() => {
            if (newFiles.length === 0) {
                toast.warn("هذا الملف مرفق بالفعل!", {
                    position: "top-left",
                    autoClose: 1000
                });
                return;
            }
        })

        setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleRemoveFile = (index) => {
        setUploadedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="file-box">
            <label htmlFor="multiFile">
                <p className="select-fill">
                    <CiSquarePlus />
                </p>
                <input
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    onChange={(e) => handleMultipleFiles(e.target.files)}
                    id="multiFile"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />
            </label>

            {uploadedFiles.length > 0 ? (
                <div className="result">
                    {uploadedFiles.map((file, index) => (
                        <div key={index}>
                            {file.type.startsWith('image/') ? (
                                <div>
                                    <FaFileImage />
                                    {file.name.length > 15 ? `${file.name.slice(0, 10)}...` : file.name}
                                </div>

                            ) : file.type === 'application/pdf' ? (
                                <div>
                                    <FaRegFilePdf />
                                    {file.name.length > 15 ? `${file.name.slice(0, 10)}...` : file.name}
                                </div>

                            ) : (
                                <div>
                                    <FaFileWord />
                                    {file.name.length > 15 ? `${file.name.slice(0, 10)}...` : file.name}
                                </div>
                            )}
                            <button onClick={() => handleRemoveFile(index)}>
                                <MdOutlineDeleteForever />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>ملفات اخرى  (صور، PDF، Word)</p>
            )}
        </div>
    );
}

export default FileBox;