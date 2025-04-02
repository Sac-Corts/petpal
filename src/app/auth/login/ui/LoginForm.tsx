"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from "clsx";

export const LoginForm = () => {
    const router = useRouter();
    const [state, setState] = useState(""); // Replace useActionState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState("Pending");
        setError("");

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            const result = await authenticate(state, formData);
            if (result === "Success") {
                setState("Success");
            } else if (result === "CredentialsSignin") {
                setState("CredentialsSignin");
                setError("Credenciales no son correctas");
            }
        } catch (err) {
            setState("Error");
            setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
        }
    };

    useEffect(() => {
        if (state === "Success") {
            router.replace("/");
        }
    }, [state, router]);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email">Correo electrónico</label>
            <input
                id="email"
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="password">Contraseña</label>
            <input
                id="password"
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {error && (
                    <div className="flex flex-row mb-2">
                        <IoInformationOutline className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{error}</p>
                    </div>
                )}
            </div>

            <LoginButton pending={state === "Pending"} />

            {/* Divisor */}
            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link href="/auth/new-account" className="btn-secondary text-center">
                Crear una nueva cuenta
            </Link>
        </form>
    );
};

function LoginButton({ pending }: { pending: boolean }) {
    return (
        <button
            type="submit"
            className={clsx({
                "btn-primary": !pending,
                "btn-disabled": pending,
            })}
            disabled={pending}
        >
            Ingresar
        </button>
    );
}