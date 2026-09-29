import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfilePhoto({ size = 96 }: { size?: number }) {
  return (
    <Image
      src={profile.photo}
      alt={profile.name}
      width={size}
      height={size}
      priority
      className="rounded-full border-2 border-accent object-cover shadow-sm"
      style={{ width: size, height: size }}
    />
  );
}
