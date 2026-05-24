import { PlatformSocials } from "@/components/PlatformSocials";
import { Button } from "@/components/ui/button";
import type { PlatformsTypes } from "@/helper/FirstTimeTypes";
import { FirstTimeWrapper } from "@/layout/FirstTimeWrapper";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Platforms = () => {
  const navigate = useNavigate()

  const [selectedSocials, setSelectedSocials] = useState<string[]>([]);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<PlatformsTypes>();
  const onSubmit: SubmitHandler<PlatformsTypes> = data => {
    console.log(data);
    navigate("/firsttime/two");
  };

  useEffect(() => {
  setValue("platforms", selectedSocials);
}, [selectedSocials, setValue]);

  return (
    <FirstTimeWrapper<PlatformsTypes> handleSubmit={handleSubmit} onSubmit={onSubmit} heading="which platforms are you on?" text="Pick up to five to get started, You can update at any time">
      <PlatformSocials selectedSocials={selectedSocials} setSelectedSocials={setSelectedSocials} />
      <Button variant={"default"} size={"lg"} className="min-w-50 hover:bg-primary hover:text-white">Next</Button>

    </FirstTimeWrapper>
  )
}
