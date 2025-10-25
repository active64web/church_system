import "./Areas.scss";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../utils/styles";
import { FaRegEye } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";

const Areas = () => {
    const data = [
        {
            id: 1,
            name: "بين البلدين",
            count: "20",
        },
        {
            id: 2,
            name: "ناهيا",
            count: "15",
        },
    ]

    const columns = [
        {
            name: 'م',
            selector: (_, id) => id + 1,
            width: "70px"
        },
        {
            name: 'اسم المنطقة',
            selector: row => row.name,
        },
        {
            name: 'عدد الشوارع',
            selector: row => row.count,
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
        <div className="areas">
            <h2 className="title-page">المناطق الخاصة بالكنيسة</h2>

            <div className="form">
                <h3>اضافة جديد</h3>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="ادخل اسم المنطقة" />
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

export default Areas;