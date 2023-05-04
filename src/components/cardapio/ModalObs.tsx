import React, { ChangeEvent } from 'react'

interface IModalObsProps {
  handleChange(e: ChangeEvent<HTMLTextAreaElement>): void
}

function ModalObs({ handleChange }: IModalObsProps) {
  return (
    <textarea
      onChange={(e) => handleChange(e)}
      className="w-full h-full text-sm resize-none font-normal textarea textarea-bordered"
    />
  )
}

export default ModalObs
