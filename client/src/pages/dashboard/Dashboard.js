import { DatePicker, Form, message, Select } from "antd";
import Table from "ant-responsive-table";
import axios from "axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import AddEditTransaction from "../../components/addEditTransaction/AddEditTransaction";
import Spinner from "../../components/spinner/Spinner";
import './style.css';
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import "antd/dist/antd.css";
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import Analatics from "../../components/analatics/Analatics";
const { RangePicker } = DatePicker;
function Dashboard() {
  const { user } = useSelector((state) => ({ ...state }));
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [type, setType] = useState("all");
  const [selectedRange, setSelectedRange] = useState([]);
  const [transId , setTransId] = useState('')
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
    console.log(error.response);
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
      render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
      key: 'date',
      showOnResponse: false,
      showOnDesktop: true
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Reference",
      dataIndex: "reference",
      key: "reference",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Descrizione",
      dataIndex: "description",
      key: "description",
      showOnResponse: true,
      showOnDesktop: true
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key:"actions",
      showOnResponse: true,
      showOnDesktop: true,
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
    <Header page="dashboard" />
    <LeftHome user={user} />
    <div className='container-dash'>
      <h2>Dashboard</h2>
      <p>Aggiungi le persone che hai portato in attività per tenere il conteggio dei punti</p>
      {loading && <Spinner />}
      <div className="dash filter d-flex justify-content-between align-items-center">
        <div className="d-flex sel">
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

        <div className="d-flex sel sel1">
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
            className="btn-add"
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            Aggiungi
          </button>
        </div>
      </div>

      <div className="table-analtics">
        {viewType === "table" ? (
          <div className="table">
            <Table rowKey={transId}
            antTableProps={{
              showHeader: true,
              columns: columns,
              dataSource: transactionsData,
              pagination: true,
            }}
            mobileBreakPoint={500}
            expandable={{
              expandedRowRender: (record) => (
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {record.description}
                </p>
              ),
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}/>
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

export default Dashboard;