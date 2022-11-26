export interface ButtonType {
    name: string;
    href?: string | null;
    to?: string | null;
    onClick?: () => void;
}

export interface IconButtonType extends ButtonType {
    icon: JSX.Element;
}

export interface TextButtonType extends ButtonType {
    content: string;
}

export interface TextIconButtonType extends ButtonType {
    content?: string;
    icon?: JSX.Element;
}

export interface ButtonPropType {
    href?: string;
    to?: string;
    onClick?: () => void;
}
