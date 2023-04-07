import React from "react";
import RegularText from "../component_parts/sharedComponent/RegularText";
import StyledButton from "../component_parts/sharedComponent/StyledButton";
import DetailsForm from "../component_parts/sharedComponent/DetailsForm";

function EducationalDetails({ title = "Personal details" }) {
  const data = [
    {
      name: "First Name",
      placeholder: "Enter First Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
    {
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },{
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },{
      name: "Last Name",
      placeholder: "Enter Last Name",
      Component: RegularText,
      col: true,
    },
  ];
  return (
    <>
      <DetailsForm data={data} title="educational details" />
    </>
  );
}

export default EducationalDetails;
