import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/cart" className="nav-link">
                Cart
                <span className="cart-badge">0</span>
            </a>
            <a href="/login" className="nav-link">Login</a>
        </nav>
    );
}

export default Navigation;