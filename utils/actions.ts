"use server";
import { getIronSession } from "iron-session";
import { defaultSession, SessionData, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "Archit";
let email = "ag213@snu.edu.in";
let isPro = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // CHECK THE USER IN THE DB
  //   session.isBlocked = isBlocked;
  //   session.isPro = isPro;

  return session;
};
export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string;
  const formPassword = formData.get("password") as string;

  console.log(formEmail, formPassword);

  // CHECK USER IN THE DB
  // const user = await db.getUser({username,password})

  if (formEmail !== email) {
    return { error: "Wrong Credentials!" };
  }

  session.userId = "1";
  session.username = username;
  session.isPro = isPro;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/signin");
};
