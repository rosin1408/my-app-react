import React from 'react';
import MaterialTable from 'material-table';
import api from '../../../services/api';

export default function Orders() {
  return (
    <MaterialTable
        title="Customers"
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'Name', field: 'name' },
          { title: 'Birth Date', field: 'birthDate' },
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            api.get(`/customer?page=${query.page}&size=${query.pageSize}`).then(result => {
              resolve({
                data: result.data.content,
                page: result.data.pageable.pageNumber,
                totalCount: result.data.pageable.pageSize,
              })
            });
          })
        }
      />
  );
}
