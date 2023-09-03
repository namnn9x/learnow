import { HomeAction } from "./HomeAction"
import { HomeTitle } from "./HomeTitle"
import { HomeIntro } from "./HomeIntro"

export const Home = () => {
  return (
    <div className='flex items-center h-full mx-32 justify-between'>
      <div>
        <HomeTitle/>
        <HomeAction/>
      </div>
      <HomeIntro/>
    </div>
  )
}
