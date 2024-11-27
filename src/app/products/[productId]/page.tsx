import { Metadata } from "next";

type Props = {
    params: { productId: string }
}

export const generateMetaData = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params;
    const title = await new Promise(resolve =>
        setTimeout(() => {
            resolve(`iphone ${productId}`)
        }, 100)
    )
    return {
        title: `Product ${productId}`
    }
}

export default async function ProductDetails({ params }: Props) {
    const { productId } = await params;
    console.log('params -> ', params);
    return <h1>Product Details page -- {productId}</h1>
}