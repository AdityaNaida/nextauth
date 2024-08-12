"use server";

import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";

const secretKey = process.env.JWTKEY as string;
const key = new TextEncoder().encode(secretKey);
