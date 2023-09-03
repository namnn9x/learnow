import Image from "next/image"
import { CardType, cards } from "./type"

export const WhoCards = () => {
  return (
    <div className="flex absolute w-full top-[40%] justify-center">
      {(cards.map((card) => {
        const isStudent = card.type === CardType.STUDENT
        return (
          <div className={`${isStudent ? 'bg-emerald-100' : 'bg-sky-100'} mr-8 rounded-md w-80 h-80 flex justify-center items-center`}>
            <Image
              width={100}
              height={100}
              src={`${card.src}`}
              alt={`${card.alt}`}
            />
          </div>
        )
      }))}
    </div>
  )
}
