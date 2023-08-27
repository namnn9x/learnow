import { listIntro } from "./type"

export const HomeIntro = () => {
  return (
    <div className="grid gap-x-4 grid-cols-[250px_250px]">
      {listIntro.map((item) => (
        <div className="card mb-5 h-[9rem]">
          <div className="card-body text-primary font-semibold">{item.title}</div>
        </div>
      ))}
    </div>
  )
}
