interface IBtn {
    className?: string;
    children: React.ReactNode;
}
type ConditionalProps = {
    as: "link";
    href: string;
} | {
    as: "button";
    href?: string;
} | {
    as: "submit";
    href?: string;
}

export type ButtonProps = IBtn & ConditionalProps;