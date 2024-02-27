import masks from '@/utils/mask.json'
import { TextFieldProps } from '@mui/material/TextField'
import { TextField } from '@mui/material'
import InputMask from 'react-input-mask'

type MaskOption = keyof typeof masks

type MaskedTextFieldProps = TextFieldProps & {
  mask: MaskOption
  value: string
}

const MaskedTextField: React.FC<MaskedTextFieldProps> = ({ mask, ...rest }) => {
  const maskPattern = masks[mask]
  return (
    <InputMask
      mask={maskPattern}
      {...rest}
      value={rest.value}
      onChange={rest.onChange}
    >
      {props => <TextField {...props} />}
    </InputMask>
  )
}

export default MaskedTextField
