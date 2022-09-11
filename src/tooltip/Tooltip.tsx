import React, {FC, ReactNode, useRef, useState} from 'react';
import { TooltipPlacement } from './Tooltip.types';
import { TooltipWrapper } from './Tooltip.style';
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

    const openTooltip = () => {
        setIsOpen(true)
    };

    const closeTooltip = () => {
        setIsOpen(false)
    };
    return (
        <TooltipWrapper ref={tooltipWrapperRef} onMouseEnter={openTooltip} onMouseLeave={closeTooltip}>
            {children}
            {open && (
                <TooltipBody
                    title={title}
                    content={content}
                    position={position}
                    wrapperRef={tooltipWrapperRef}
                />
            )}
        </TooltipWrapper>
    );
};
export default Tooltip;
