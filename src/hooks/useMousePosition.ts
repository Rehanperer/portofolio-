import { useEffect, useState } from 'react';

interface MousePosition {
    x: number;
    y: number;
    normalizedX: number;
    normalizedY: number;
}

export function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
        normalizedX: 0.5,
        normalizedY: 0.5,
    });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
                normalizedX: e.clientX / window.innerWidth,
                normalizedY: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
}

export function useMousePositionElement(ref: React.RefObject<HTMLElement>) {
    const [position, setPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setPosition({ x, y });
        };

        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, [ref]);

    return position;
}
