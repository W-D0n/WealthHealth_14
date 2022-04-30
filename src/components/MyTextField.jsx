import TextField from '@mui/material/TextField';
import { useField } from 'formik'

export const MyTextField = (props) => {
  const { name, label, value, size, onChange } = props;
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value || ''}
      size={size || 'medium'}
      {...field}
      onChange={onChange}
      helperText={errorText}
      error={!!errorText}
    />
  )
}