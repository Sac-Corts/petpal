"use server";

import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        if (!name || !email || !password) {
            throw new Error('Missing required fields');
        }

        const hashedPassword = bcryptjs.hashSync(password);

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email.toLowerCase(),
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        return {
            ok: true,
            user: user,
            message: 'Usuario creado'
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            message: error instanceof Error ? error.message : 'No se pudo crear el usuario'
        };
    }
};