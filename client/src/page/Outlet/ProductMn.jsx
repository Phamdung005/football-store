import { useState, useEffect } from 'react';

function ProductMn() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            setLoading(true);
            setError(null);
            fetch("http://localhost:3000/api/product")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Loi lay san pham");
                    }
                    return response.json();
                })
                .then(data => setProduct(data))
                .catch(error =>
                    setError(error.message)
                )
                .finally(() => setLoading(false));
        };

        fetchProduct();
    }, []);
    return (
        <>
            {loading ? (
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Dang tai...</span>
                </div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                    <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    STT
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Ten
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Gia
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Mo ta
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Anh
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Kich thuoc
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Mau sac
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    So luong
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Tinh trang
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium">
                                    Ngay tao
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((item, index) => (
                                <tr key={item._id} className="bg-neutral-primary border-b border-default">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {index + 1}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.variants.map((variant, index) => (
                                            <div key={index}>
                                                {variant.size}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.variants.map((variant, index) => (
                                            <div key={index}>
                                                {variant.color}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.variants.map((variant, index) => (
                                            <div key={index}>
                                                {variant.stock}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.isDeleted ? 'Da xoa' : 'Chua xoa'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.createdAt}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default ProductMn;