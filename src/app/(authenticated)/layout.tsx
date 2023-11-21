import React from "react";
import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { GetLocale, GetNavigationMenu } from "@/client/api";

export const metadata: Metadata = {
  title: "Command Center",
  description: "Management of all Business Entities",
};

type Props = {
  children: React.ReactNode;
};

export default async function AuthenticatedLayout({ children }: Props) {
  const [menu, locale] = await Promise.all([GetNavigationMenu(), GetLocale()]);

  return (
    <Shell menu={menu} locale={locale}>
      {children}
    </Shell>
  );
}
