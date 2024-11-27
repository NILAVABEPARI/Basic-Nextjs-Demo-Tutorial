"use client";

import { notFound } from "next/navigation";
import { use } from "react";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function Reviews({ params }:
    {
        params: Promise<{
            productId: string,
            reviewId: string
        }>
    }) {

    const resolvedParams = use(params);
    const { productId, reviewId } = resolvedParams;

    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review");
    }

    // const { productId, reviewId } = await params;
    console.log('params inside review id page -> ', params);

    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return <h1>Product {productId} Reviews page -- {reviewId}</h1>
}