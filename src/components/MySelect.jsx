import { Autocomplete, TextField } from "@mui/material";

export default function MySelect(props) {
  const { name, label, value, onChange, options, error = null } = props;

  /**
   * Adapter pattern
   * => Convert event object from select input to be use with input handleChange function
   */
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <Autocomplete
      value={value || null}
      isOptionEqualToValue={(option, value) => option.label === value}
      disablePortal
      options={options}
      onChange={(event) => {
        onChange(convertToDefEventPara(name, event.target.textContent));
      }}
      renderInput={(params) => <TextField {...params} {...(error && { error: true, helperText: error })} label={label} />}
    />
  );
}