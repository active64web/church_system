import "./AddFamilies.scss";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { options1, options2 } from "../../../utils/CoustomData";
import PersonFormSection from "../../../components/PersonFormSection/PersonFormSection";

const AddFamilies = () => {

    const initial = {
        street: "",
        propertyNumber: "",
        floorNumber: "",
        apartmentNumber: "",
        houseLocation: "",
        financialStatus: "",
        father: {
            name: "",
            relation: "الأب",
            gender: "ذكر",
            birthDate: "",
            phone: "",
            job: "",
            nationalId: "",
            fatherConfession: "",
            church: "",
            education: "",
            healthStatus: "",
            socialStatus: "",
            sect: "",
        },
        mother: {
            name: "",
            relation: "الأم",
            gender: "أنثى",
            birthDate: "",
            phone: "",
            job: "",
            nationalId: "",
            fatherConfession: "",
            church: "",
            education: "",
            healthStatus: "",
            socialStatus: "",
            sect: "",
        },
        children: [],
        others: [],
    };

    const schema = Yup.object({
        street: Yup.string().required(),
        propertyNumber: Yup.number().required().min(1),
        floorNumber: Yup.number().required().min(0),
        apartmentNumber: Yup.number().required().min(1),
        houseLocation: Yup.string().required(),
        financialStatus: Yup.string().required(),
    });

    return (
        <div className="add-families">
            <h2 className="title-page">اضافة اسرة جديدة</h2>

            <Formik
                initialValues={initial}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div className="global-data box-inputs">
                            <h3 className="title-data">بيانات عامة</h3>

                            <div className="inputs">
                                <div className="input-group">
                                    <label>الشارع</label>
                                    <Select
                                        isClearable
                                        options={options1}
                                        placeholder="اختر"
                                        name="street"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>رقم العقار</label>
                                    <Field
                                        type="number"
                                        name="propertyNumber"
                                        placeholder="الرقم"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>رقم الدور</label>
                                    <Field
                                        type="number"
                                        name="floorNumber"
                                        placeholder="الرقم"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>رقم الشقة</label>
                                    <Field
                                        type="number"
                                        name="apartmentNumber"
                                        placeholder="الرقم"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>موقع البيت</label>
                                    <Field
                                        type="text"
                                        name="houseLocation"
                                        placeholder="الموقع"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>الحالة المادية</label>
                                    <Select
                                        isClearable
                                        options={options2}
                                        placeholder="اختر"
                                        name="financialStatus"
                                    />
                                </div>
                            </div>
                        </div>

                        <PersonFormSection title="بيانات الأب" namePrefix="father" />
                        <PersonFormSection title="بيانات الأم" namePrefix="mother" />

                        <FieldArray name="children">
                            {({ push, remove }) => (
                                <div>
                                    <div className="box-inputs other">
                                        {values.children.map((child, index) => (
                                            <PersonFormSection
                                                key={index}
                                                title={`ابن / ابنة ${index + 1}`}
                                                namePrefix={`children[${index}]`}
                                                remove={() => remove(index)}
                                                canRemove={true}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="add-btn"
                                        onClick={() =>
                                            push({
                                                name: "",
                                                relation: "ابن",
                                                gender: "",
                                                birthDate: "",
                                                phone: "",
                                                job: "",
                                                nationalId: "",
                                                fatherConfession: "",
                                                church: "",
                                                education: "",
                                                healthStatus: "",
                                                socialStatus: "",
                                                sect: "",
                                            })
                                        }
                                    >
                                        + إضافة ابن / ابنة
                                    </button>
                                </div>
                            )}
                        </FieldArray>

                        <FieldArray name="others">
                            {({ push, remove }) => (
                                <div>
                                    <div className="box-inputs other">
                                        {values.others.map((person, index) => (
                                            <PersonFormSection
                                                key={index}
                                                title={`فرد ${index + 1}`}
                                                namePrefix={`others[${index}]`}
                                                remove={() => remove(index)}
                                                canRemove={true}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="add-btn"
                                        onClick={() =>
                                            push({
                                                name: "",
                                                relation: "آخر",
                                                gender: "",
                                                birthDate: "",
                                                phone: "",
                                                job: "",
                                                nationalId: "",
                                                fatherConfession: "",
                                                church: "",
                                                education: "",
                                                healthStatus: "",
                                                socialStatus: "",
                                                sect: "",
                                            })
                                        }
                                    >
                                        + إضافة فرد آخر
                                    </button>
                                </div>
                            )}
                        </FieldArray>

                        <button type="submit" className="submit">
                            اضافة
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddFamilies;