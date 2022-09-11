import {RefObject, useLayoutEffect, useState} from "react";
import {Coordinates, TooltipPlacement} from "./Tooltip.types";

export const useTooltipPosition = (position: TooltipPlacement, tooltipRef: RefObject<HTMLDivElement>,  wrapperRef: RefObject<HTMLDivElement>) => {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

    useLayoutEffect(() => {
        const tooltipHeight = tooltipRef?.current?.getBoundingClientRect().height || 0;
        const tooltipWidth = tooltipRef?.current?.getBoundingClientRect().width || 0;
        const wrapperHeight = wrapperRef?.current?.getBoundingClientRect().height || 0;
        const wrapperWidth = wrapperRef?.current?.getBoundingClientRect().width || 0;

        const wrapperWindowTop = wrapperRef?.current?.getBoundingClientRect().top || 0;
        const wrapperAbsoluteTop = wrapperWindowTop + window.scrollY;
        const wrapperBottom = wrapperRef?.current?.getBoundingClientRect().bottom || 0;
        const wrapperLeft = wrapperRef?.current?.getBoundingClientRect().left || 0;

        const spaceOnTop = wrapperWindowTop - tooltipHeight >= 0;
        const spaceOnTheBottom = wrapperBottom + tooltipHeight <= window.innerHeight;

        if (position === 'top') {
            setCoordinates({
                placement: spaceOnTop ? 'top' : 'bottom',
                top: spaceOnTop
                    ? wrapperAbsoluteTop - tooltipHeight
                    : wrapperAbsoluteTop + wrapperHeight,
                left: wrapperLeft + Math.abs(tooltipWidth - wrapperWidth) / 2,
            });
        }
        if (position === 'bottom') {
            setCoordinates({
                placement: spaceOnTheBottom ? 'bottom' : 'top',
                top: spaceOnTheBottom
                    ? wrapperAbsoluteTop + wrapperHeight
                    : wrapperAbsoluteTop - tooltipHeight,
                left: wrapperLeft + Math.abs(tooltipWidth - wrapperWidth) / 2,
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wrapperRef.current, tooltipRef.current]);

    return {
        coordinates
    }
}