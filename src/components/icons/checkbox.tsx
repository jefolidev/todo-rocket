import checkedIcon from '../../assets/icons/checkbox-checked-empty.svg'
import uncheckedIcon from '../../assets/icons/checkbox-empty.svg'

interface CheckBoxProps {
  isChecked: boolean
}

export function CheckBoxIcon({ isChecked }: CheckBoxProps) {
  return isChecked ? (
    <img src={checkedIcon} alt="" />
  ) : (
    <img src={uncheckedIcon} alt="" />
  )
}
