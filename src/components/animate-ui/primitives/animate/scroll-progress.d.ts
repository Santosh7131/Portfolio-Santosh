import * as React from 'react';
import { type MotionValue, type HTMLMotionProps, type SpringOptions } from 'motion/react';
import { type WithAsChild } from '@/components/animate-ui/primitives/animate/slot';
type ScrollProgressDirection = 'horizontal' | 'vertical';
type ScrollProgressContextType = {
    containerRef: React.RefObject<HTMLDivElement | null>;
    progress: MotionValue<number>;
    scale: MotionValue<number>;
    direction: ScrollProgressDirection;
    global: boolean;
};
declare const useScrollProgress: () => ScrollProgressContextType;
type ScrollProgressProviderProps = {
    children: React.ReactNode;
    global?: boolean;
    transition?: SpringOptions;
    direction?: ScrollProgressDirection;
};
declare function ScrollProgressProvider({ global, transition, direction, ...props }: ScrollProgressProviderProps): import("react/jsx-runtime").JSX.Element;
type ScrollProgressMode = 'width' | 'height' | 'scaleY' | 'scaleX';
type ScrollProgressProps = WithAsChild<HTMLMotionProps<'div'> & {
    mode?: ScrollProgressMode;
}>;
declare function ScrollProgress({ style, mode, asChild, ...props }: ScrollProgressProps): import("react/jsx-runtime").JSX.Element;
type ScrollProgressContainerProps = WithAsChild<HTMLMotionProps<'div'>>;
declare function ScrollProgressContainer({ ref, asChild, ...props }: ScrollProgressContainerProps): import("react/jsx-runtime").JSX.Element;
export { ScrollProgressProvider, ScrollProgress, ScrollProgressContainer, useScrollProgress, type ScrollProgressProviderProps, type ScrollProgressProps, type ScrollProgressContainerProps, type ScrollProgressDirection, type ScrollProgressMode, type ScrollProgressContextType, };
