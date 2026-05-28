import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fonts = [
  "Inter",
  "Poppins",
  "Roboto",
  "Montserrat",
  "Open Sans",
];

export default function FontSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select Font" />
      </SelectTrigger>

      <SelectContent>
        {fonts.map((font) => (
          <SelectItem
            key={font}
            value={font}
            style={{ fontFamily: font }}
          >
            {font}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}