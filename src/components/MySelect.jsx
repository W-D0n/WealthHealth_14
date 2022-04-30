import { Autocomplete, TextField } from "@mui/material";

// Custom Select component using Material UI
export default function MySelect(props) {
  const { name, label, value, onChange, options, error = null } = props;

  /**
   * Adapter pattern => Convert event object from select input to be use with input handleChange function
   * @param {string} name - name of the input
   * @param {string} value - value of the input
   * @returns {object} - event object
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