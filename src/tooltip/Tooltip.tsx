import React, {FC, ReactNode, useRef, useState} from 'react';
import { TooltipPlacement } from './Tooltip.types';
import TooltipBody from './TooltipBody';

interface TooltipProps {
    title: string;
    content: string;
    position: TooltipPlacement;
    children: ReactNode;
}
const Tooltip: FC<TooltipProps> = (props) => {
    const { title, content, position, children } = props;
    const [open, setIsOpen] = useState(false);
    const tooltipWrapperRef = useRef<HTMLDivElement>(null);
    const DELAY = 300;
    const toggleTooltipDelay = useRef<NodeJS.Timeout>();

    const openTooltip = () => {
        clearTimeout(toggleTooltipDelay.current);
        toggleTooltipDelay.current = setTimeout(() => {
            setIsOpen(true);
        }, DELAY)

    };

    const closeTooltip = () => {
        clearTimeout(toggleTooltipDelay.current);
        setIsOpen(false)
    };
    return (
        <span ref={tooltipWrapperRef} onMouseEnter={openTooltip} onMouseLeave={closeTooltip}>
            {children}
            {open && (
                <TooltipBody
                    title={title}
                    content={content}
                    position={position}
                    wrapperRef={tooltipWrapperRef}
                />
            )}
        </span>
    );
};
export default Tooltip;
