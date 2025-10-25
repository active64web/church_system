import "./Streets.scss";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../utils/styles";
import { FaRegEye } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import Select from "react-select";
import { options } from "../../../utils/CoustomData";

const Streets = () => {
    const data = [
        {
            id: 1,
            name: "شارع 123",
            area: "بين البلدين",
        },
        {
            id: 2,
            name: "شارع 456",
            area: "ناهيا",
        },
    ]

    const columns = [
        {
            name: 'م',
            selector: (_, id) => id + 1,
            width: "70px"
        },
        {
            name: 'اسم الشارع',
            selector: row => row.name,
        },
        {
            name: 'اسم المنطقه',
            selector: row => row.area,
        },
        {
            name: 'تحكم',
            selector: () => (
                <div className="control">
                    <button className="show" title="عرض">
                        <FaRegEye />
                    </button>
                    <button className="edit" title="تعديل">
                        <FiEdit3 />
                    </button>
                    <button className="del" title="حذف">
                        <TbTrash />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="streets">
            <h2 className="title-page">الشوارع داخل المناطق</h2>

            <div className="form">
                <h3>اضافة جديد</h3>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="ادخل اسم الشارع" />
                    </div>

                    <div className="form-group">
                        <Select
                            isClearable
                            options={options}
                            placeholder="اختر المنطقة"
                            name="street"
                        />
                    </div>

                    <button>اضافة</button>
                </form>
            </div>

            <div className="table">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    pagination
                    noDataComponent="لا يوجد بيانات"
                    paginationComponentOptions={{
                        rowsPerPageText: 'عدد الصفوف في الجدول:',
                        rangeSeparatorText: 'من',
                        noRowsPerPage: false,
                        selectAllRowsItem: false,
                    }}
                />
            </div>
        </div>
    );
}

export default Streets;