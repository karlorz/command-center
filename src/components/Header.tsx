import Link from "next/link";
import { Burger } from "@mantine/core";

type Props = {
  isNavbarOpened: boolean;
  toggle: () => void;
};

export const Header = ({ isNavbarOpened, toggle }: Props) => {
  return (
    <div className="w-full h-full px-4 md:px-4 flex flex-row flex-nowrap justify-between content-center items-center border-b border-zinc-100">
      <div className="mr-2 md:mr-0 flex justify-center items-center justify-items-center h-full hover:scale-110 transition duration-200">
        <Burger
          opened={isNavbarOpened}
          onClick={toggle}
          size="md"
          aria-label="Navigation"
          hiddenFrom="sm"
        />
      </div>
      <Link href="/" className="mr-auto">
        <div className="flex flex-row items-center py-4">
          <div className="font-semibold text-xl">Командный центр</div>
        </div>
      </Link>
    </div>
  );
};
