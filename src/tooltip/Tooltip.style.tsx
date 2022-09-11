import styled from 'styled-components';
import { TooltipPlacement } from './Tooltip.types';

export const TooltipContent = styled.div<{ position: TooltipPlacement; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6e6e6e;
    padding: 1.25rem;
    border-radius: 4px;
`;