import { CardContainer, Image, Title } from "./card-styles"

type CardProps = {
    img:  string
    title: string
}

export const Card = ({img, title}: CardProps) => {
    return (
        <CardContainer>
            <Image src={img}/>
            <Title>
                {title}
            </Title>
        </CardContainer>
    )
}