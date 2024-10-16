type AsType = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextProps = {
    as?: AsType;
    children: React.ReactNode;
    className?: string;
}