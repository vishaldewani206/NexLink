
type linksType = {
    text: string,
    icon: string
}

export type themesTypes = {
  name: string,
  bgColor: string,
  wallpaper: string,
  textColor: string,
  btnColor: string,
  btnTextColor?: string,
  links: linksType[]
}

export const themes : themesTypes[] = [
  {
    name: "black",
    bgColor: "#000000",
    textColor: "#ffffff",
    wallpaper: "plain",
    btnColor: "#444444",
    btnTextColor: "#ffffff",
    links:[
      {
      text: "instagram",
      icon: "/images/icons/instagram.png"
    },
    {
      text: "whatsapp",
      icon: "/images/icons/whatsapp.png"
    }
    ]
  },
  {
    name: "red",
    bgColor: "#f23333",
    wallpaper: "dots",
    textColor: "#ffffff",
    btnColor: "#780000",
    btnTextColor: "#ffffff",
    links:[
      {
      text: "instagram",
      icon: "/images/icons/instagram.png"
    },
    {
      text: "whatsapp",
      icon: "/images/icons/whatsapp.png"
    }
  ]
  },
  {
    name: "blue",
    bgColor: "#33aff2",
    wallpaper: "grid",
    textColor: "#0e0e0e",
    btnColor: "#004e70",
    btnTextColor: "#ffffff",
    links:[
      {
      text: "instagram",
      icon: "/images/icons/instagram.png"
    },
    {
      text: "whatsapp",
      icon: "/images/icons/whatsapp.png"
    }
    ]
  }
]