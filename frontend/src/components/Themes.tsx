import { themes, type themesTypes } from '@/helper/themes';
import type { JSX, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Background } from './dashboard/backgrounds/Background';

type ThemeT = {
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<SetStateAction<string>>;
};

export const Themes = ({selectedTheme, setSelectedTheme}:ThemeT) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 my-8'>
      {themes.map(
        (e: themesTypes): JSX.Element => (
          <div
            onClick={()=> setSelectedTheme(e.name)}
            style={{backgroundColor: e.bgColor, color: e.textColor}}
            className={`${selectedTheme == e.name ? "border-2 border-gray-500 opacity-90" : ""} md:p-4 p-4 md:pt-8 pt-4 flex flex-col items-center   rounded-[30px] z-10 relative overflow-hidden`}
            key={e.name}
          >
            <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
          <img src="/images/profile-photo.png" alt="" />
        </div>
        <h1 className="mt-2">John Doe</h1>
        <p className="text-xs md:text-sm text-amber-100/60 text-center">@johndoe · Creator & Dev</p>
          <Background bg={e.bgColor} t={e.wallpaper} />
        <div className="w-full mt-4 md:mt-4">
          {e.links.map((l, i:number)=>(
            <Link to={"/"} key={i} style={{backgroundColor: e.btnColor, color: e.btnTextColor}} className="w-full md:h-10 h-8 flex-center gap-2  text-black my-2 rounded-sm p-1 md:p-2 hover:bg-transparent   transition-all text-sm">
            <img src={l.icon} alt="" className=" h-full object-contain" />
            <p>{l.text}</p>
          </Link>
        ))}

        <button style={{backgroundColor: e.btnColor, color: e.btnTextColor}} className="  w-full py-1 md:py-3 rounded-sm mt-2 md:mt-4 cursor-pointer hover:scale-105 transition-transform text-sm ">Subscribe to Newsletter</button>
        </div>
          </div>
        ),
      )}
    </div>
  );
};
