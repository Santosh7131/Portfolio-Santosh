import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/animate-ui/components/buttons/button';
import { type RippleButtonProps as RippleButtonPrimitiveProps, type RippleButtonRipplesProps as RippleButtonRipplesPrimitiveProps } from '@/components/animate-ui/primitives/buttons/ripple';
type RippleButtonProps = RippleButtonPrimitiveProps & VariantProps<typeof buttonVariants>;
declare function RippleButton({ className, variant, size, ...props }: RippleButtonProps): import("react/jsx-runtime").JSX.Element;
type RippleButtonRipplesProps = RippleButtonRipplesPrimitiveProps;
declare function RippleButtonRipples(props: RippleButtonRipplesProps): import("react/jsx-runtime").JSX.Element;
export { RippleButton, RippleButtonRipples, type RippleButtonProps, type RippleButtonRipplesProps, };
