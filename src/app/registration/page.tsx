import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Registration } from 'modules/Registration'
import { getCsrfToken } from 'next-auth/react'

export default async function RegistrationPage() {
  const session = await getServerSession(authOptions);
  const token = await getCsrfToken();

  if (session) {
    redirect("/");
  }

  return (
    <Registration token={token} />
  );
}
