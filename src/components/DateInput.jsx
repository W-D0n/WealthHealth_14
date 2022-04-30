import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker as MuiDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { fr } from "date-fns/locale";
import { useField } from 'formik'

// Custom DatePicker component using Material UI
export default function DatePicker(props) {
  const { name, label, value, onChange } = props
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const convertToDefEventPara = (name, value) => ({
    target: {
      name, value
    }
  })
  // Change date from datepicker format to date-fns format (ms)
  return (
    <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        size={value || 'small'}
        {...field}
        onChange={date => onChange(convertToDefEventPara(name, Date.parse(date)))}
        renderInput={(params) => <TextField fullWidth variant="outlined" {...params} />}
        helperText={errorText}
        error={!!errorText}
      />
    </LocalizationProvider>
  )
}