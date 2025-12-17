import { type HTMLMotionProps } from 'motion/react';
import { type WithAsChild } from '@/components/animate-ui/primitives/animate/slot';
type RippleButtonProps = WithAsChild<HTMLMotionProps<'button'> & {
    hoverScale?: number;
    tapScale?: number;
}>;
declare function RippleButton({ ref, onClick, hoverScale, tapScale, asChild, style, ...props }: RippleButtonProps): import("react/jsx-runtime").JSX.Element;
type RippleButtonRipplesProps = WithAsChild<HTMLMotionProps<'span'> & {
    color?: string;
    scale?: number;
}>;
declare function RippleButtonRipples({ color, scale, transition, asChild, style, ...props }: RippleButtonRipplesProps): import("react/jsx-runtime").JSX.Element[];
export { RippleButton, RippleButtonRipples, type RippleButtonProps, type RippleButtonRipplesProps, };
