import { useState, useEffect, useContext } from 'react';
import { Pagination, Table } from 'antd';
import { Link } from 'react-router-dom';
import { URL } from '../../data/variables';
import { AppContext } from '../App/App';
import 'antd/dist/antd.css';

export default function UsersList({ selectedGender, defaultGender }) {
  const pageSize = 10;
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  let [users, setUsers] = useState([]);
  let [page, setPage] = useState(1);
  let [usersToShow, setUsersToShow] = useState(users.slice(0, pageSize));
  let { setCurUser } = useContext(AppContext);

  useEffect(() => {
    setUsersToShow(users.slice((page - 1) * pageSize, page * pageSize));
  }, [users, page]);

  function onChange(currentPage) {
    setPage(currentPage);
  }

  // let paginationInfo;

  useEffect(() => {
    let requestURL;
    if (selectedGender === defaultGender) {
      requestURL = URL;
    } else {
      requestURL = `${URL}?gender=${selectedGender}`;
    }
    fetch(requestURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // paginationInfo = data.meta.pagination;
        setUsers(data.data);
      })
      .catch(err => {
        console.error('there was some error:', err);
      });
  }, [selectedGender]);

  if (users.length === 0) {
    return <>Sorry, but no data loaded</>;
  } else {
    return (
      <>
        <Link to="/edit">
          <Table
            onRow={record => {
              return {
                onClick: event => {
                  setCurUser(record);
                },
              };
            }}
            style={{ width: '90vw', cursor: 'pointer' }}
            columns={columns}
            size="middle"
            dataSource={usersToShow}
            pagination={false}
          />
        </Link>

        <Pagination
          size="small"
          onChange={onChange}
          total={users.length}
          showTotal={total => `Total ${total} items`}
          pageSize={pageSize}
          defaultCurrent={page}
        />
      </>
    );
  }
}
