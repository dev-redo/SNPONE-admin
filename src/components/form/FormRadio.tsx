import React from "react";
import { FormControlLabel, Radio, RadioGroup, styled } from "@mui/material";
import { Controller } from "react-hook-form";

interface RadioProps {
  values: string[];
  control: any;
  name: string;
}

const FormRadio = ({ control, name, values }: RadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={values[0]}
      render={({ field }) => (
        <Ap {...field}>
          {values.map((value, idx) => (
            <FormControlLabel
              key={value + idx}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </Ap>
      )}
    />
  );
};
export default FormRadio;

const Ap = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`;
