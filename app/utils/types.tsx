export type RootLayoutProps = {
    children: React.ReactNode
}

export type MetadataProps = {
    title: string
    description: string
}

export type PartBoxProps = {
    icon: string
    iconGray: string
    title: string
    subTitle: string
    isNextBox: boolean
    visited: boolean
    onclick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
