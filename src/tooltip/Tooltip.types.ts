export type TooltipPlacement = 'top' | 'bottom';

export interface Coordinates {
    placement: TooltipPlacement;
    top: number;
    left: number;
}
