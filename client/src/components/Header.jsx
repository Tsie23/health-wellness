import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiUser }from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount, setIsCartOpne } = useCart();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <>
            <header style={StyleSheet.header}>
                <div className="container" style={styles.container}>
                    <Link to="/" style={styles.logo}>
                        Ekunene Herbs
                    </Link>

                    <nav style={styles.nav}
    )
}