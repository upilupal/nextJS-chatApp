import prisma from "@/app/libs/prisma";
import getSession from "./getSession";

const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      // user order by createdAt from descending
      orderBy: {
        createdAt: "desc",
      },

      // find every user when the email is not current user email
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
