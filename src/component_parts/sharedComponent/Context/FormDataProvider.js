import React from "react";
import FormDataContext from "./FormDataContext";

function FormDataProvider({ children }) {
  return <FormDataContext.Provider>{children}</FormDataContext.Provider>;
}

export default FormDataProvider;
