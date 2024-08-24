'use client'
import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const useRoute = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const router = useRouter()

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      // this is the logout sidebar button, supposed to direct to "/"
      {
          label: "Logout",
          href: "/",
          onClick: async () => {
            await signOut({redirect: false});
            router.push("/")
          },
          icon: HiArrowLeftOnRectangle,
        },
    // this is the logout sidebar button, supposed to direct to "/"
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoute;
