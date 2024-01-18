import React from 'react';
import { StyledContainer } from "./TransactionTable.styles";
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';

interface TransactionTableProps {
    shouldShow: boolean;
    transactionData: Array<GridValidRowModel>; 
  }
const TransactionTable: React.FC<TransactionTableProps> = ({ shouldShow, transactionData }) => {

const columns: GridColDef[] = [
  { field: 'hash', headerName: 'Transaction Hash', width: 250 },
  { field: 'blockNum', headerName: 'Block', width: 100 },
  { field: 'from', headerName: 'From', sortable: false, width: 200 },
  { field: 'to', headerName: 'To', sortable: false, width: 200},
  { field: 'value', headerName: 'ETH value',  type: 'number', width: 110 },
];

const transactionDataWithId = transactionData.map((item, index) => ({ ...item, id: index + 1 }));

  return shouldShow ? (
    <StyledContainer>
      <DataGrid
        rows={transactionDataWithId}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </StyledContainer>
  ): (
    <></>
  );
};

export default TransactionTable;
