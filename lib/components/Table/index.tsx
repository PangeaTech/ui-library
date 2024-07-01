import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface ITableProps {
  columnDefs: { headerName: string; field: string }[];
  rowData: { [key: string]: any }[];
  rowHeight?: number;
}

const Table: React.FC<ITableProps> = ({ columnDefs, rowData, rowHeight = 45 }) => {
  const [gridApi, setGridApi] = useState<any>(null);
  const [gridColumnApi, setGridColumnApi] = useState<any>(null);

  const gridHeight = useMemo(() => {
    return rowData.length * rowHeight + 80;
  }, [rowData.length, rowHeight]);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: `${gridHeight}px`, width: '600px' }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} onGridReady={onGridReady} rowHeight={rowHeight} domLayout="autoHeight" />
    </div>
  );
};

export default Table;
