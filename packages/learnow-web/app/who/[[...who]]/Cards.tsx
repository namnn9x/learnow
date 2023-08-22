import Image from "next/image"
import { cards } from "./type"

export const Cards = () => {
  return (
    <>
      {(cards.map((card) => (
        <div className="w-80 h-80 flex justify-center items-center">
          <Image
            width={100}
            height={100}
            src={`${card.src}`}
            alt={`${card.alt}`}
          />
        </div>
      )))}
    </>
  )
}
