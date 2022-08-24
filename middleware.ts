import { NextFetchEvent, NextRequest } from "next/server";

export const config = {
  matcher: ['/','/details/1']
}

export function middleware(rq: NextRequest, ev: NextFetchEvent){
  console.log(rq.nextUrl.pathname === "/details/1" ? "hello" : "fuck")
}