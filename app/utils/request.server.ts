import { json } from "@remix-run/node";

export const badRequeset = <T>(data: T) => json<T>(data, { status: 400 });
