import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React, { type ChangeEvent } from "react";
import styles from "./pagination-bar.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/reducers/orderSlice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const PaginationBar: React.FC<{ totalPage: number }> = ({ totalPage }) => {
  const page = useAppSelector((state) => state.orderReducer.page);

  const dispatch = useAppDispatch();

  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => {
    dispatch(setPage(newPage));
    if (window.innerWidth < 1025) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.pagination}>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          size="medium"
        />
      </ThemeProvider>
    </div>
  );
};

export default PaginationBar;
