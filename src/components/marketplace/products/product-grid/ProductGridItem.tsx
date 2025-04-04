"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/interfaces"

interface Props {
    product: Product;
}

export const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]);
    
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`}>
                    <Image
                        src={`${displayImage}`}
                        alt={product.title}
                        className="object-cover rounded"
                        width={550}
                        height={500}
                        onMouseEnter={() => setDisplayImage(product.images[1])}
                        onMouseLeave={() => setDisplayImage(product.images[0])}
                    />
            </Link>

            <div className="p-4 flex flex-col">
                <Link
                    className="hover:text-blue-500"
                    href={`/product/${product.slug}`}>
                    {product.title}
                </Link>
                <span className="font-bold">${product.price}</span>
            </div>
        </div>
    )
}
