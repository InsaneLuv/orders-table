import React from "react";

interface Props {
  children: React.ReactNode;
}

const TableBody: React.FC<Props> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
