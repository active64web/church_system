import "./ReligiousSects.scss";
import { FiEdit3 } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import { customStyles } from "../../../utils/styles";
import DataTable from "react-data-table-component";

const ReligiousSects = () => {
    const data = [
        {
            id: 1,
            name: "ارثوذكس",
        },
        {
            id: 2,
            name: "كاثوليك",
        },
    ]

    const columns = [
        {
            name: 'م',
            selector: (_, id) => id + 1,
            width: "100px"
        },
        {
            name: 'اسم الطائفة',
            selector: row => row.name,
        },
        {
            name: 'تحكم',
            selector: () => (
                <div className="control">
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
        <div className="religious-sects">
            <h2 className="title-page">الطوائف الدينية</h2>

            <div className="form">
                <h3>اضافة جديد</h3>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="ادخل اسم الطائفة" />
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

export default ReligiousSects;