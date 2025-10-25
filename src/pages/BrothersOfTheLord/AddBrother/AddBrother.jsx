import "./AddBrother.scss";
import { options } from "../../../utils/CoustomData";
import Select from "react-select";

const AddBrother = () => {
    return (
        <div className="add-brother">
            <h2 className="title-page">اضافة اسرة اخوة رب</h2>

            <div className="form">
                <form>
                    <div className="form-group">
                        <label>الاسرة</label>
                        <Select
                            isClearable
                            options={options}
                            placeholder="اختر"
                            name="street"
                        />
                    </div>

                    <div className="form-group">
                        <label>مبلغ مساعدة الكنيسة</label>
                        <input type="number" placeholder="ادخل المبلغ" />
                    </div>

                    <div className="form-group">
                        <label>كنيسة مساعدة</label>
                        <input type="number" placeholder="اسم الكنيسة" />
                    </div>

                    <div className="form-group">
                        <label>مبلغ الكنيسة المساعدة</label>
                        <input type="number" placeholder="ادخل المبلغ" />
                    </div>

                    <div className="total-price">
                        <p>اجمالى الدخل : 5000ج.م</p>
                    </div>

                    <button type="submit" className="submit">
                        اضافة
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddBrother;