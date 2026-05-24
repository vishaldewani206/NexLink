import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FirstTimeWrapper } from "@/layout/FirstTimeWrapper";
import { useState, type ChangeEvent } from "react";
import { FaUser } from "react-icons/fa";
import { useForm, type SubmitHandler, } from "react-hook-form";
import { type ProfileTypes } from "@/helper/FirstTimeTypes";
import { useNavigate } from "react-router-dom";

export const ProfileDetails = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState<string | null>(null)
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ProfileTypes>();
  const onSubmit: SubmitHandler<ProfileTypes> = data => {
    console.log(data);
    navigate("/firsttime/two");
  };

  return (
    <FirstTimeWrapper<ProfileTypes> handleSubmit={handleSubmit} onSubmit={onSubmit} heading="Add profile Details" text="Add your profile name, image and bio.">
      <label
        htmlFor="pic"
        className="bg-gray-400 w-25 h-25 rounded-full flex items-center justify-center mt-6 overflow-hidden cursor-pointer"
      >
        {image ? (
          <img
            src={image}
            alt="avatar"
            className="w-full h-full object-center object-cover"
          />
        ) : (
          <FaUser className="text-gray-200" size={52} />
        )}
      </label>

      <input
        id="pic"
        type="file"
        className="hidden"
        accept="image/*"
        {...register("file")}
        onChange={(e) => {
          handleImage(e); 
          register("file").onChange(e); 
        }}
      /> 
      <Input {...register("name")} className="max-w-90 my-4" placeholder="Your name" />
      <Textarea {...register("bio")} className="max-w-90 mb-4" placeholder="bio"/>
      <Button variant={"default"} size={"lg"} className="min-w-50 hover:bg-primary hover:text-white">Next</Button>

    </FirstTimeWrapper>
  )
}
