import ronaldo_1 from './assets/ronaldo_1.png'
import hero from './assets/hero.png'
import Header from './components/Header'
import ProductCard from './components/ProductCard'

const products = [
  { id: 1, name: 'Áo đấu CR7 MU', price: 1000000, image: hero },
  { id: 2, name: 'Áo đấu CR7 REAL', price: 1200000, image: hero },
  { id: 3, name: 'Giày bóng đá Nike', price: 1500000, image: hero },
  { id: 4, name: 'Giày bóng đá Adidas', price: 1800000, image: hero },
]

function App() {

  return (
    <>
      <Header />
      <section className="grid md:grid-cols-[2fr_3fr]">
        <div className="bg-gray-900 min-h-120 flex flex-col items-start p-12 justify-center gap-10">
          <h2 className="text-2xl font-bold p-2 bg-red-200 border border-red-200 rounded-md text-red-500">Mẫu mới</h2>
          <span className="text-3xl font-bold text-white">CHƠI NHƯ RONALDO</span>
          <span className="text-white">Khám phá bộ sưu tập áo bóng đá mới nhất</span>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 cursor-pointer">MUA NGAY</button>
        </div>
        <div className="bg-black flex items-center justify-center min-h-120">
          <img src={ronaldo_1} alt="Hero"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center gap-4 p-10">
          <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 p-10">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default App