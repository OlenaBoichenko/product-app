import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

function LikeButton() {
    // Инициализация состояния с проверкой в localStorage
    const [liked, setLiked] = useState(() => {
        // Получаем состояние из localStorage
        const saved = localStorage.getItem('liked');
        // Если оно существует, преобразуем его в boolean
        return saved === 'true';
    });

    // Обновление localStorage при изменении liked
    useEffect(() => {
        localStorage.setItem('liked', liked);
    }, [liked]);

    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <FaHeart 
            onClick={handleClick} 
            style={{ color: liked ? 'red' : 'black', cursor: 'pointer', fontSize: '24px' }} 
        />
    );
}

export default LikeButton;
