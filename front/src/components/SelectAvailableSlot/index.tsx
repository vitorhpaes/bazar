import React from 'react'
import { FormControl, Autocomplete, TextField } from '@mui/material'
import { useAvailableSlots } from '@/services/queries/booking/booking.hooks'
import { formatTime } from '@/utils/date'

type CustomChangeEvent = {
  target: {
    value?: string
    name?: string
  }
}

type SelectAvailableSlotProps = {
  name: string
  onChange: (event: CustomChangeEvent) => void
  onBlur: (event: React.FocusEvent<unknown>) => void
  label: string
  value: Date
  error?: boolean
  helperText?: string
  date: Date
}

const SelectAvailableSlot: React.FC<SelectAvailableSlotProps> = ({
  name,
  onChange,
  onBlur,
  label,
  value,
  error,
  helperText,
  date,
  ...fieldProps
}) => {
  const { data: availableSlots, isLoading: isLoadingAvailableSlots } =
    useAvailableSlots(date)

  const handleChange = (newDate: Date | null) => {
    const event: CustomChangeEvent = {
      target: {
        value: newDate?.toISOString(),
        name: name
      }
    }

    onChange(event)
  }

  return (
    <FormControl fullWidth error={error}>
      <Autocomplete
        autoComplete
        disablePortal
        loading={isLoadingAvailableSlots}
        options={availableSlots?.map(slot => slot.startTime) || []}
        onChange={(_e, newDate) => handleChange(newDate)}
        onBlur={onBlur}
        value={value}
        getOptionLabel={option => (option ? formatTime(option) : '')}
        renderInput={params => (
          <TextField
            {...params}
            name={name}
            label={label}
            error={error}
            helperText={error ? helperText : ''}
          />
        )}
        {...fieldProps}
      />
    </FormControl>
  )
}

export default SelectAvailableSlot
