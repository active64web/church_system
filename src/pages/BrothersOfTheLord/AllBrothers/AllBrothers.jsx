import "./AllBrothers.scss";
import DataTable from "react-data-table-component";
import { FaRegEye } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";
import { customStyles } from "../../../utils/styles";

const AllBrothers = () => {
    const data = [
        {
            id: 1,
            name: "بيشوى",
            phone: "0123654789",
            street: "ناهيا",
            location: "https://www.google.com/maps?q=30.0131,31.2089"
        },
        {
            id: 2,
            name: "مينا",
            phone: "0231458764",
            street: "برك الخيام",
            location: "https://www.google.com/maps?q=30.0131,31.2089"
        },
    ]

    const columns = [
        {
            name: 'م',
            selector: (_, id) => id + 1,
            maxWidth: "70px"
        },
        {
            name: 'اسم الاب',
            selector: row => row.name,
        },
        {
            name: 'الموبايل',
            selector: row => row.phone,
        },
        {
            name: 'الشارع',
            selector: row => row.street,
        },
        {
            name: 'موقع البيت',
            selector: (row) => (
                <a href={row.location} className="location">Map</a>
            ),
        },
        {
            name: 'اجمالى الدخل',
            selector: () => "5000ج.م",
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
        <div className="all-brothers">
            <h2 className="title-page">اخوة الرب</h2>

            <div className="search">
                <form>
                    <input type="text" placeholder="ابحث" />
                    <button>
                        <IoSearchOutline />
                    </button>
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

export default AllBrothers;