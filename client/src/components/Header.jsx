import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <header className="bg-gray-800 p-4">
                <nav className="flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold text-white">FOOTBALL <span className="text-red-500">STORE</span></h1>
                    </a>
                    <ul className="flex items-center justify-between gap-10 text-white">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/ao-dau">Áo đấu</a></li>
                        <li><a href="/giay-bong-da">Giày bóng đá</a></li>
                        <li><a href="/phu-kien">Phụ kiện</a></li>
                    </ul>
                    {user ? (
                        <div>
                            <span>{user.name}</span>
                            <button
                                className="text-white hover:text-red-500 cursor-pointer"
                                onClick={() => {
                                    logout();
                                    navigate("/");
                                }}
                            >
                                Đăng xuất
                            </button>
                        </div>
                    ) : (
                        <ul className="flex items-center justify-between gap-4 text-white">
                            <li>
                                <Link
                                    to="/dang-nhap"
                                    className="text-white hover:text-red-500"
                                >
                                    Đăng nhập
                                </Link>
                            </li>
                            |
                            <li>
                                <Link
                                    to="/dang-ky"
                                    className="text-white hover:text-red-500"
                                >
                                    Đăng ký
                                </Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Header;