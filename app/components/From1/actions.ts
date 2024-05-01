"use server";

import { sleep } from "openai/core.mjs";

export async function submit(fd: FormData) {
  console.log("first", fd);

  await sleep(5000);
  return true;
  // ...
}
