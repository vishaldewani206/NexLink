
type bhType = {
  t: "classic" | "hero",
  layout: "classic" | "hero",
  setLayout:  React.Dispatch<React.SetStateAction<"classic" | "hero">>
}

export const HeaderBox = ({t, layout, setLayout}: bhType) => {
  return (
    <div onClick={()=> setLayout(t)} className={`${t == layout && "border-gray-600 border-2"} border relative overflow-hidden rounded-2xl w-30 flex-col-center space-y-3 mt-4 ${t == "classic" ? "p-4" : ""}`}>
      {t != "classic" ? (
        <img className='w-full h-full scale-110 rounded-b-full' src="/images/profile-photo.png" alt="" />
      ): (
        <img className="w-12 h-12 rounded-full" src="/images/profile-photo.png" alt="" />
      )}
      <p className="capitalize">{t}</p>
    </div>
  )
}
