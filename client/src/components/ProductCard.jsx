function ProductCard({ product }) {
    return (
        <>
            <article className="w-full max-w-sm self-start p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:-translate-y-2 transition-transform duration-300">
                <div className="grid grid-rows-[3fr_2fr] gap-10">
                    <div className="h-56 w-full">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-lg font-semibold text-red-500">{product.price.toLocaleString('vi-VN')} VNĐ</p>
                        <div className="flex gap-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer w-full">Xem chi tiết</button>
                            <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 cursor-pointer w-full">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ProductCard;