"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
      <HeroUIProvider
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        navigate={router.push}
        className="flex h-full w-full flex-col"
      >
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </HeroUIProvider>
  );
}
