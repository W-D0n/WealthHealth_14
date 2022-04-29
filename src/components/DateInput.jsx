import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker as MuiDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { fr } from "date-fns/locale";

export default function DatePicker(props) {
  const { name, label, value, onChange, error = null, ...other } = props

  const convertToDefEventPara = (name, value) => ({
    target: {
      name, value
    }
  })

  return (
    <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        size={value || 'small'}
        {...other}
        onChange={date => onChange(convertToDefEventPara(name, Date.parse(date)))}
        renderInput={(params) => <TextField fullWidth variant="outlined" {...params} {...(error && { error: true, helperText: error })} />}
      />
    </LocalizationProvider>
  )
}
