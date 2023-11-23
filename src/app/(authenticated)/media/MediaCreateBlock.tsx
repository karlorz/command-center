"use client";

import { IconPhotoPlus } from "@tabler/icons-react";
import { Button } from "@/components/Button";
import { getDictionary, Locale } from "@/dictionaries";
import { useModalStore } from "@/store/modal";
import { CreateBlock } from "@/components/CreateBlock";

type MediaCreateBlockProps = {
  locale: Locale;
  countNow: number;
};

export const MediaCreateBlock = ({
  locale,
  countNow,
}: MediaCreateBlockProps) => {
  const toggle = useModalStore((state) => state.toggleCreateMedia);

  const { CREATE_MEDIA_LABEL } = getDictionary(locale);

  return (
    <CreateBlock locale={locale} countNow={countNow}>
      <Button onClick={toggle}>
        <IconPhotoPlus stroke={1.5} /> {CREATE_MEDIA_LABEL}
      </Button>
    </CreateBlock>
  );
};
