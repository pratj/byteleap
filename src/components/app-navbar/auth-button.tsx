"use client";

import { Button } from "@heroui/react";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  // if (status === "loading") {
  //   return <CircularProgress aria-label="Loading authentication status..." />;
  // }

  // if (status === "authenticated") {
  //   const signOutClick = () =>
  //     signOut({
  //       callbackUrl: "/",
  //     });
  //   if (minimal) {
  //     return (
  //       <Button onPress={signOutClick} color="danger" variant="ghost">
  //         <IconBrandGoogle />
  //         Sign Out
  //       </Button>
  //     );
  //   }

  //   return (
  //     <Dropdown placement="bottom-end">
  //       <DropdownTrigger>
  //         <Avatar
  //           isBordered
  //           as="button"
  //           className="transition-transform"
  //           showFallback={!data.user?.image}
  //           src={data.user?.image || ""}
  //         />
  //       </DropdownTrigger>
  //       <DropdownMenu aria-label="Profile Actions" variant="flat">
  //         <DropdownItem key="profile" className="h-14 gap-2">
  //           <p className="font-semibold">Signed in as</p>
  //           <p className="font-semibold">{data.user?.email}</p>
  //         </DropdownItem>
  //         <DropdownItem key="sign-out" color="danger" onClick={signOutClick}>
  //           Sign Out
  //         </DropdownItem>
  //       </DropdownMenu>
  //     </Dropdown>
  //   );
  // }

  return (
    <Button onPress={() => {}} color="danger" variant="ghost">
      <IconBrandGoogle />
      Sign In
    </Button>
  );
}
