import { HeaderBox } from '@/components/dashboard/HeaderBox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef, useState, type ChangeEvent } from 'react';
import { FaUser } from 'react-icons/fa';

export const Header = () => {
  const [layout, setLayout] = useState<'classic' | 'hero'>('classic');

  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null)
    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };

  return (
    <div className='p-4'>
      <h2 className='dash_heading'>Layout</h2>
      <div className='flex space-x-4'>
        <HeaderBox t={'classic'} layout={layout} setLayout={setLayout} />
        <HeaderBox t={'hero'} layout={layout} setLayout={setLayout} />
      </div>
      <h2 className='dash_heading mt-6 mb-2'>Profile</h2>
      <div className='flex items-center space-x-4'>
        <label
          htmlFor='pic'
          className='bg-gray-400 w-20 h-20 rounded-full flex items-center justify-center  overflow-hidden cursor-pointer'
        >
          {image ? (
            <img
              src={image}
              alt='avatar'
              className='w-full h-full object-center object-cover'
            />
          ) : (
            <FaUser className='text-gray-200' size={52} />
          )}
        </label>
        <input
        id="pic"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          handleImage(e); 
        }}
        ref={inputRef}
      /> 
      <Button  onClick={() => inputRef.current?.click()}  variant={"secondary"}>Add</Button>
      </div>

      <div className='my-6'>
        <label className='dash_heading' htmlFor="title">Title</label>
        <br/>
        <Input placeholder='John Doe' className='max-w-60 mt-2' id='title' />
      </div>

      <div>
        <label className='dash_heading' htmlFor="title-color">Title font color</label>
        <br/>
        <input id='title-color' type='color' className='w-10 h-10 ' />
      </div>



    </div>
  );
};
