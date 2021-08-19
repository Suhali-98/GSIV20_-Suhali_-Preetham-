// import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Pagination } from "@material-ui/lab";

// const darkTheme = createTheme({
//   palette: {
//     type: "dark"
//   }
// });

const CustomPagination = ({ setPage, numOfPages = 5 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 30
      }}
    >
      {/* <ThemeProvider theme={darkTheme}> */}
      <Pagination
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        color="primary"
      />
      {/* </ThemeProvider> */}
    </div>
  );
};
export default CustomPagination;
