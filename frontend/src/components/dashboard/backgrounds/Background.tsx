import DotField from "@/components/DotField"
import Aurora from "./Aurora"
import Grid from "./Grid"

type BgType = {
  t : string,
  bg? : string,
  dgColor? : string
}

export const Background = ({t, bg, dgColor} : BgType) => {

  const setBg = ()=>{
    if(t == "aurora"){
      return <Aurora amplitude={1} />
    }else if(t == "dots"){
      return <DotField dotColor={dgColor ? dgColor : "white"}  />
    }else if( t == "grid"){
      return <Grid gridColor={dgColor ? dgColor : "white"} gridSize={30} lineWidth={0.3}/>
    }else{
      return <></>
    }
  }

  return (
    <div style={{backgroundColor: bg ? bg : "white"}} className="absolute inset-0 top-0 left-0 w-full h-full  ">
      {setBg()}
    </div>
  )
}
