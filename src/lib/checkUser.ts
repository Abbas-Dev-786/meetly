import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    const loggedUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedUser) {
      return loggedUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const username = `${name.split(" ").join("-")}-${user.id.slice(-4)}`;

    (await clerkClient()).users.updateUser(user.id, { username });

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        username,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (err) {
    console.error(err);
  }
};
