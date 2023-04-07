import React from "react";
import RegularText from "../component_parts/sharedComponent/RegularText";
import DetailsForm from "../component_parts/sharedComponent/DetailsForm";

function PersonalDetails({ title = "Personal details" }) {
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
      name: "Job Title",
      placeholder: "e.g Software developer",
      Component: RegularText,
      col: false,
    },
    {
      name: "Email ID",
      placeholder: "e.g myResume@gmail.com",
      Component: RegularText,
      col: true,
      type: "email",
    },
    {
      name: "Phone No.",
      placeholder: "Enter Phone No",
      Component: RegularText,
      col: true,
    },
    {
      name: "Country",
      placeholder: "Type here...",
      Component: RegularText,
      col: true,
    },
    {
      name: "State",
      placeholder: "Type here...",
      Component: RegularText,
      col: true,
    },
    {
      name: "Address",
      placeholder: "Type here...",
      Component: RegularText,
      type: "textArea",
    },
    {
      name: "Pincode",
      placeholder: "Type here...",
      Component: RegularText,
      type: "number",
      col: true,
    },
    {
      name: "Nationality",
      placeholder: "Type here...",
      Component: RegularText,
      col: true,
    },
  ];
  return (
    <>
      <DetailsForm data={data} title="personal details" />
    </>
  );
}

export default PersonalDetails;
