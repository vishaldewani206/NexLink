import { socialMedia, type socialMediaType } from '@/helper/socialMedia';
import type { JSX, SetStateAction } from 'react';

type psT = {
  selectedSocials: string[];
  setSelectedSocials: React.Dispatch<SetStateAction<string[]>>;
};

export const PlatformSocials = ({
  selectedSocials,
  setSelectedSocials,
}: psT) => {

  return (
    <div className='grid grid-cols-3 gap-12 my-8'>
      {socialMedia.map(
        (e: socialMediaType, i: number): JSX.Element => (
          <div
            onClick={() =>
              setSelectedSocials((prev) =>
                prev.includes(e.name)
                  ? prev.filter((item) => item !== e.name)
                  : [...prev, e.name],
              )
            }
            className={`${selectedSocials?.includes(e.name) ? 'border-gray-600 bg-purple-100' : ''} flex-col-center gap-4 border-2 px-8 py-2 rounded-2xl`}
            key={i}
          >
            <img className='w-20 h-20 object-contain' src={e.icon} alt='' />
            <p>{e.name}</p>
          </div>
        ),
      )}
    </div>
  );
};
