"use client";

import { useRouter } from "next/navigation";
import { IconArrowBackUp } from "@tabler/icons-react";
import { getDictionary, Locale } from "@/dictionaries";

export const BackBlock = ({ locale }: { locale: Locale }) => {
  const router = useRouter();
  const { RETURN_BUTTON } = getDictionary(locale);

  return (
    <div className="w-full md:w-auto mx-auto md:mx-0">
      <button
        onClick={() => router.back()}
        className="px-5 py-3 w-full flex flex-row gap-2 justify-center text-base font-normal cursor-pointer bg-zinc-100 hover:bg-zinc-200 hover:scale-95 duration-200 rounded-2xl"
      >
        <IconArrowBackUp stroke={1.5} /> {RETURN_BUTTON}
      </button>
    </div>
  );
};
