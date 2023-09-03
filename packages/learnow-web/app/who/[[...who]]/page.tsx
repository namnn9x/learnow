import { WhoCards } from "./WhoCards"
import { WhoTitle } from "./WhoTitle"

export default function Page() {
  return (
    <div className="h-screen relative">
      <div className=" px-20 h-2/4 bg-primary" >
        <WhoTitle/>
      </div>
      <WhoCards />
    </div>
  )
}

