import TextField from '@mui/material/TextField';

export default function Input(props) {
  const { name, label, value, size, error = null, onChange, ...other } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value || ''}
      size={size || 'medium'}
      {...other}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  )
}