import React, {FC, RefObject, useRef} from 'react';
import { TooltipPlacement } from './Tooltip.types';
import { TooltipContent } from './Tooltip.style';
import TooltipPortal from './TooltipPortal';
import {useTooltipPosition} from "./useTooltipPosition";

interface TooltipBodyProps {
    title: string;
    content: string;
    position: TooltipPlacement;
    wrapperRef: RefObject<HTMLDivElement>;
}
const TooltipBody: FC<TooltipBodyProps> = (props) => {
    const { title, content, position, wrapperRef } = props;
    const tooltipRef = useRef<HTMLDivElement>(null);
    const {coordinates} = useTooltipPosition(position, tooltipRef, wrapperRef);

    return (
        <TooltipPortal top={coordinates?.top || 0} left={coordinates?.left || 0}>
            <TooltipContent ref={tooltipRef} position={coordinates?.placement || 'top'}>
                <div>
                    <div>{title}</div>
                    <div>{content}</div>
                    <button>Click me</button>
                </div>
                </TooltipContent>
        </TooltipPortal>
    );
};
export default TooltipBody;
