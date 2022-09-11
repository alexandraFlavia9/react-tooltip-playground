
 import { FC, memo, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface TooltipPortalProps {
    top: number;
    left: number;
    children: ReactNode;
}
const TooltipPortal: FC<TooltipPortalProps> = ({ children, top, left }) => {
    const id = 'tooltip-portal';
    const el = useRef(document.createElement('div'));
    useEffect(() => {
        el.current.id = id;
        document.body.appendChild(el.current);

        return () => {
            if (el.current.parentElement) {
                el.current.parentElement.removeChild(el.current);
            }
        };
    }, []);

    useEffect(() => {
        el.current.style.zIndex = '10000';
        el.current.style.position = 'absolute';
        el.current.style.top = `${top}px`;
        el.current.style.left = `${left}px`;
    }, [top, left]);
    return createPortal(children, el.current);
};
export default memo(TooltipPortal);
