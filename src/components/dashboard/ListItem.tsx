import React from "react";
import styled from "styled-components";
import "./dashboard.css";
import { Applicant, ApplicantList } from "../../types/dashboard";
import { patchIsApplicantChecked } from "../../api/models/dashboard";
import { useRecoilState } from "recoil";
import { applicantAllData } from "../../store/dashboard";
import { replaceItemAtIndex } from "../../util/replaceItemIndex";

interface PropsType {
  data: Applicant;
  index: number;
  transportation: string;
}

const ListItem = ({ data, index, transportation }: PropsType) => {
  const { id, date, name, gender, birth, phone, email, address, isChecked } =
    data;

  const onlyDate: string = date.slice(0, 10);
  const [applicants, setApplicants] = useRecoilState(applicantAllData);

  const toggleChecked = async (applicant: Applicant) => {
    const changeApplicantIdx = applicants.findIndex(
      ({ id: applicantId }: Applicant) => id === applicantId,
    );

    let updatedApplicants = replaceItemAtIndex(applicants, changeApplicantIdx, {
      ...applicant,
      isChecked: !applicant.isChecked,
    }) as ApplicantList;
    setApplicants(updatedApplicants);

    const { status } = await patchIsApplicantChecked(applicant);
    if (status === 200) return;
    updatedApplicants = replaceItemAtIndex(applicants, changeApplicantIdx, {
      ...applicant,
      isChecked: !applicant.isChecked,
    });
    setApplicants(updatedApplicants);
  };

  return (
    <ListItemContainer className="ListItem" checked={isChecked}>
      <TD>{index + 1}</TD>
      <TD>{onlyDate}</TD>
      <TD>{name}</TD>
      <TD>{gender}</TD>
      <TD>{birth}</TD>
      <TD>{phone}</TD>
      <TD>{email}</TD>
      <TD>{transportation}</TD>
      <TD>{address}</TD>

      <ListCheckboxWrapper className="checkboxWrapper">
        <ListCheckbox
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleChecked(data)}
        />
      </ListCheckboxWrapper>
    </ListItemContainer>
  );
};

export default ListItem;

const ListItemContainer = styled.tr<{ checked: boolean }>`
  background-color: ${(props) => `${props.checked && "#ececec"}`};
  border-bottom: 1px solid #d9d9d9;
`;

const ListCheckboxWrapper = styled.td`
  display: flex;
  height: 67px;
  justify-content: center;
  align-items: center;
`;

const ListCheckbox = styled.input`
  display: block;
  width: 30px;
  height: 30px;
`;

const TD = styled.td`
  text-align: center;
  padding-top: 5px;
`;
