import { DatePicker, Form, message, Select, Table } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import AddEditTransaction from "../../components/addEditTransaction/AddEditTransaction";
import Spinner from "../../components/spinner/Spinner";
import "./style.css";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import Analatics from "../../components/analatics/Analatics";
const { RangePicker } = DatePicker;
function Marketing() {
  const { user } = useSelector((state) => ({ ...state }));
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [transId , setTransId] = useState('')
  const [type, setType] = useState("all");
  const [selectedRange, setSelectedRange] = useState([]);
  const [viewType, setViewType] = useState("table");
  const getTransactions = async () => {
    try {

      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/get-all-transactions`,
        {
          user: user.id,
          frequency,
          ...(frequency === "custom" && { selectedRange }),
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      ).then((res) => {
        setTransactionsData(res.data);
        res.data.forEach(item => {
        setTransId(item._id)
      });
      setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  const deleteTransaction = async (record) => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/delete-transaction`,  {
        transactionId: record._id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      );
      message.success("Transaction Deleted successfully");
      getTransactions();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };
  useEffect(() => {
    getTransactions();
  }, [frequency, selectedRange, type]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
      key: 'date'
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "Reference",
      dataIndex: "reference",
      key: "reference"
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key:"actions",
      render: (text, record) => {
        return (
          <div>
            <EditOutlined
              onClick={() => {
                setSelectedItemForEdit(record);
                setShowAddEditTransactionModal(true);
              }}
            />
            <DeleteOutlined className="mx-3" onClick={()=>deleteTransaction(record)}/>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dashboard-cont">
      <Header page="marketing" />
      <LeftHome user={user} />
      {loading && <Spinner />}
      <div className='container-dash'>
      <h2>Lista contatti</h2>
      <p>scrivi la tua lista contatti completa e implementala con le note</p>
      <div className="dash filter d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)}>
              <Select.Option value="7">Ultima settimana</Select.Option>
              <Select.Option value="30">Ultimo mese</Select.Option>
              <Select.Option value="365">Ultimo anno</Select.Option>
              <Select.Option value="custom">Personalizza</Select.Option>
            </Select>

            {frequency === "custom" && (
              <div className="mt-2">
                <RangePicker
                  value={selectedRange}
                  onChange={(values) => setSelectedRange(values)}
                />
              </div>
            )}
          </div>
          <div className="d-flex flex-column mx-5">
            <h6>Select Type</h6>
            <Select value={type} onChange={(value) => setType(value)}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expence">Expence</Select.Option>
            </Select>
          </div>
        </div>

        <div className="d-flex">
          <div>
            <div className="view-switch mx-5">
              <UnorderedListOutlined
                className={`mx-3 ${
                  viewType === "table" ? "active-icon" : "inactive-icon"
                } `}
                onClick={() => setViewType("table")}
                size={30}
              />
              <AreaChartOutlined
                className={`${
                  viewType === "analytics" ? "active-icon" : "inactive-icon"
                } `}
                onClick={() => setViewType("analytics")}
                size={30}
              />
            </div>
          </div>
          <button
            className="primary"
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            AGGIUNGI
          </button>
        </div>
      </div>

      <div className="table-analtics">
        {viewType === "table" ? (
          <div className="table">
            <Table columns={columns} dataSource={transactionsData} rowKey={transId}/>
          </div>
        ) : (
          <Analatics transactions={transactionsData} />
        )}
      </div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          getTransactions={getTransactions}
          setSelectedItemForEdit={setSelectedItemForEdit}
        />
      )}
    </div>
    </div>
  );
}

export default Marketing;