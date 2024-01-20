import { FC, memo } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

  interface pro {
    next: () => void
    prev: () => void
  }

const ArrowLR:FC<pro> = ({next,prev}) => {
  
  return (
    <div className="flex items-center justify-center gap-10 mt-8">
    <button onClick={prev} className="flex gap-1 items-center">
      <FiArrowLeft /> Предыдущий
    </button>
    <button onClick={next} className="flex gap-1 items-center">
      Следующий <FiArrowRight />{' '}
    </button>
  </div>
  )
}


export default memo(ArrowLR)

