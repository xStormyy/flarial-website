type ButtonProps = {
    href: string,
    variant: "primary" | "secondary" | "ghost",
    children: ReactNode,
}

export default function Button(props: ButtonProps) {
    const filledStyles = "w-fit p-2 pl-[1em] pr-[1em] rounded-[0.9em] transition duration-250 ease-in-out active:scale-110"
    const variants = {
        primary: "bg-primary " + filledStyles,
        secondary: "bg-secondary " + filledStyles,
        ghost: "bg-none " + "w-fit" + " hover:decoration-style-solid decoration-1",
    }
    return (
        <a className={`${variants[props.variant]}`} href={props.href}>
            {props.children}
        </a>
    )
}
