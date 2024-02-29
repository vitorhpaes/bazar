import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  SelectProps
} from '@mui/material'
import { useAvailableDays } from '@/services/queries/booking/booking.hooks'
import { getDayLabel } from '@/utils/date'

type SelectAvailableDayProps = SelectProps

const SelectAvailableDay: React.FC<SelectAvailableDayProps> = ({
  ...selectProps
}) => {
  const { data: availableDays } = useAvailableDays()

  return (
    <FormControl fullWidth>
      <InputLabel id="available-days-label">{selectProps.label}</InputLabel>
      <Select labelId="available-days-label" {...selectProps}>
        {availableDays?.map((day, index) => (
          <MenuItem key={index} value={day.toISOString()}>
            {getDayLabel(new Date(day))}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectAvailableDay
