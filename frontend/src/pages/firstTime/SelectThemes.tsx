import { Themes } from "@/components/Themes";
import { Button } from "@/components/ui/button";
import type {  SelectThemeTypes } from "@/helper/FirstTimeTypes";
import { FirstTimeWrapper } from "@/layout/FirstTimeWrapper";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SelectThemes = () => {
  const navigate = useNavigate()

  const [selectedTheme, setSelectedTheme] = useState<string>("");

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<SelectThemeTypes>();
  const onSubmit: SubmitHandler<SelectThemeTypes> = data => {
    console.log(data);
  };

  useEffect(() => {
  setValue("theme", selectedTheme);
}, [selectedTheme, setValue]);

  return (
    <FirstTimeWrapper<SelectThemeTypes> handleSubmit={handleSubmit} onSubmit={onSubmit} heading="Select a theme" text="Pick the style that feels right, You can update at any time">
      <Themes setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
      <Button type="submit" variant={"default"} size={"lg"} className="min-w-50 hover:bg-primary hover:text-white">Next</Button>

    </FirstTimeWrapper>
  )
}
