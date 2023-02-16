import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import "../styles/Title.css";

const Title = () => {
  const [columns, setColumns] = useState([
    {
      name: "Column A",
      items: ["A1", "A2", "A3"],
      color: "",
    },
    {
      name: "Column B",
      items: ["B1", "B2", "B3"],
      color: "yellow",
    },
    {
      name: "Column C",
      items: ["C1", "C2", "C3"],
      color: "blue",
    },
    {
      name: "Column D",
      items: ["D1", "D2", "D3"],
      color: "red",
    },
  ]);

  const addColumn = () => {
    setColumns([
      ...columns,
      {
        name: `Column ${String.fromCharCode(65 + columns.length)}`,
        items: [],
        color: "",
      },
    ]);
  };

  const removeColumn = (index) => {
    setColumns((prevColumns) => {
      return prevColumns.filter((column, i) => i !== index);
    });
  };

  const onDragStart = (event, columnIndex, itemIndex) => {
    event.dataTransfer.setData("columnIndex", columnIndex);
    event.dataTransfer.setData("itemIndex", itemIndex);
  };

  const onColumnDragStart = (event, columnIndex) => {
    event.dataTransfer.setData("columnIndex", columnIndex);
    event.dataTransfer.setData("isColumn", "true");
  };
  const onDrop = (event, toColumnIndex) => {
    const fromColumnIndex = parseInt(event.dataTransfer.getData("columnIndex"));
    const isColumn = event.dataTransfer.getData("isColumn") === "true";
    if (isColumn) {
      const newColumns = [...columns];
      const [column] = newColumns.splice(fromColumnIndex, 1);
      newColumns.splice(toColumnIndex, 0, column);
      setColumns(newColumns);
    } else {
      const itemIndex = parseInt(event.dataTransfer.getData("itemIndex"));
      const newColumns = [...columns];
      const [item] = newColumns[fromColumnIndex].items.splice(itemIndex, 1);
      newColumns[toColumnIndex].items.push(item);
      setColumns(newColumns);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="column-container">
          {columns.map((column, index) => (
            <div
              className={`column  `}
              key={index}
              onDrop={(e) => onDrop(e, index)}
              onDragOver={onDragOver}
            >
              <div
                className={`column-header `}
                draggable
                onDragStart={(e) => onColumnDragStart(e, index)}
              >
                {column.name}
                <span style={{ color: "grey", cursor: "pointer" }}>
                  <AiOutlineClose onClick={() => removeColumn(index)} />
                  <RxDragHandleDots2
                    style={{ paddingLeft: 20, cursor: "grab" }}
                  />
                </span>
              </div>
              <div className={`column-body `}>
                {column.items.map((item, indexItem) => (
                  <div
                    className={`item ${column.color}`}
                    key={indexItem}
                    draggable
                    onDragStart={(e) => onDragStart(e, index, indexItem)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="add-item" onClick={addColumn}>
            {" "}
            <IoIosAdd /> Add
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
