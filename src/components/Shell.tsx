"use client";

import React from "react";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MenuItem } from "@/types";

type Props = {
  menu: MenuItem[];
  children: React.ReactNode;
};

export const Shell = ({ menu, children }: Props) => {
  const [isNavbarOpened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 64, sm: 72, md: 72 } }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !isNavbarOpened, desktop: false },
      }}
      aside={{
        width: 300,
        breakpoint: "lg",
        collapsed: { mobile: true, desktop: false },
      }}
      layout="default"
    >
      <AppShell.Header withBorder={false}>
        <Header isNavbarOpened={isNavbarOpened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
        <Navigation menu={menu} toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main onClick={close}>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};
