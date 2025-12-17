import { type VariantProps } from 'class-variance-authority';
import { type ButtonProps as ButtonPrimitiveProps } from '@/components/animate-ui/primitives/buttons/button';
declare const buttonVariants: (props?: ({
    variant?: "link" | "outline" | "default" | "secondary" | "accent" | "destructive" | "ghost" | null | undefined;
    size?: "default" | "icon" | "sm" | "lg" | "icon-sm" | "icon-lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ButtonProps = ButtonPrimitiveProps & VariantProps<typeof buttonVariants>;
declare function Button({ className, variant, size, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants, type ButtonProps };
