import { useState } from 'react'

const CheckboxToggle = ({
  label = '',
  showLabel = false,
  checked,
  onChange,
  variant = '1',
}) => {
  const isControlled = typeof checked === 'boolean' && typeof onChange === 'function'
  const [internalChecked, setInternalChecked] = useState(false)

  const isChecked = isControlled ? checked : internalChecked

  const toggle = () => {
    if (isControlled) {
      onChange(!checked)
    } else {
      setInternalChecked((prev) => !prev)
    }
  }

  const variantMap = {
    '1': {
      on: 'bg-green-500',
      off: 'bg-gray-300',
      knob: 'bg-white',
    },
    '2': {
      on: 'bg-blue-600',
      off: 'bg-gray-400',
      knob: 'bg-white shadow-md',
    },
    '3': {
      on: 'bg-purple-500',
      off: 'bg-zinc-300',
      knob: 'bg-white border border-purple-500',
    },
    '4': {
      on: 'bg-black',
      off: 'bg-zinc-500',
      knob: 'bg-white',
    },
  }
  const selected = variantMap[variant] || variantMap['1']
  return (
    <div className="flex items-center justify-between gap-2">
      {showLabel && <span className="text-sm font-medium text-dark">{label}</span>}
      <button
        onClick={toggle}
        className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${isChecked ? selected.on : selected.off
          }`}
      >
        <div
          className={`w-4 h-4 ${selected.knob} rounded-full absolute top-1/2 transition-all duration-300 transform -translate-y-1/2 ${isChecked ? 'left-9 -translate-x-full' : 'left-1'
            }`}
        ></div>
      </button>
    </div>
  )
}

export default CheckboxToggle