import "./PersonFormSection.scss";
import { Field } from "formik";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { options3, options4, options5, options6, options7, options8 } from "../../utils/CoustomData";
import FileBox from "../FileBox/FileBox";

const PersonFormSection = ({
    title,
    remove,
    canRemove = false,
    initialImage = null,
    disabled = false,
}) => {
    const [image, setImage] = useState(initialImage);
    const [_, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setImageFile(null);
        document.getElementById(`file-${title}`).value = "";
    };

    return (
        <div className="person-data box-inputs">
            <h3 className="title-data">
                <> {title}</>

                <>
                    {canRemove && remove && (
                        <button
                            type="button"
                            onClick={remove}
                            className="remove-section-btn"
                        >
                            <IoClose />
                        </button>
                    )}
                </>
            </h3>

            <div className="files">
                <div className="main-image">
                    <label htmlFor={`file-${title}`}>
                        <input
                            type="file"
                            id={`file-${title}`}
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                            disabled={disabled}
                        />
                        {image ? (
                            <img
                                src={image}
                                alt="person"
                            />
                        ) : (
                            <span><FaPlus /> الصورة الشخصية </span>
                        )}
                    </label>

                    {image && (
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="remove-image"
                        >
                            <IoClose />
                        </button>
                    )}
                </div>

                <FileBox />
            </div>

            <div className="inputs">
                <div className="input-group">
                    <label>الاسم</label>
                    <Field type="text" name={`${title}.name`} placeholder="الاسم" />
                </div>

                <div className="input-group">
                    <label>العلاقة</label>
                    <Select isClearable options={options3} placeholder="اختر" name={`${title}.relation`} />
                </div>

                <div className="input-group">
                    <label>النوع</label>
                    <Select isClearable options={options4} placeholder="اختر" name={`${title}.gender`} />
                </div>

                <div className="input-group">
                    <label>تاريخ الميلاد</label>
                    <Field type="date" name={`${title}.birthDate`} />
                </div>

                <div className="input-group">
                    <label>رقم الموبايل</label>
                    <Field type="number" name={`${title}.phone`} placeholder="رقم الموبايل" />
                </div>

                <div className="input-group">
                    <label>الوظيفة</label>
                    <Field type="text" name={`${title}.job`} placeholder="الوظيفة" />
                </div>

                <div className="input-group">
                    <label>الرقم القومي</label>
                    <Field type="text" name={`${title}.nationalId`} placeholder="الرقم القومي" />
                </div>

                <div className="input-group">
                    <label>أب الاعتراف</label>
                    <Field type="text" name={`${title}.fatherOfConfession`} placeholder="أب الاعتراف" />
                </div>

                <div className="input-group">
                    <label>كنيسة أب الاعتراف</label>
                    <Field type="text" name={`${title}.church`} placeholder="كنيسة أب الاعتراف" />
                </div>

                <div className="input-group">
                    <label>يوم الاجازة</label>
                    <Field type="text" name={`${title}.church`} placeholder="اليوم" />
                </div>

                <div className="input-group">
                    <label>المؤهل الدراسي</label>
                    <Select isClearable options={options5} placeholder="اختر" name={`${title}.education`} />
                </div>

                <div className="input-group">
                    <label>الحالة الصحية</label>
                    <Select isClearable options={options6} placeholder="اختر" name={`${title}.health`} />
                </div>

                <div className="input-group">
                    <label>الحالة الاجتماعية</label>
                    <Select isClearable options={options7} placeholder="اختر" name={`${title}.marital`} />
                </div>

                <div className="input-group">
                    <label>الطائفة</label>
                    <Select isClearable options={options8} placeholder="اختر" name={`${title}.religion`} />
                </div>
            </div>
        </div>
    );
};

export default PersonFormSection;
