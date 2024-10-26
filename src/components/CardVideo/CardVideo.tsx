import { CardVideoContainer } from "./style";
import { Play } from "@phosphor-icons/react";

interface Category {
    id: string;
    title: string;
    site_id: number;
}

interface CardVideoProps {
    categories: Category[]; // Ajuste o nome para minúsculas para consistência
    videoID: string;
    videoTitle: string;
    videoThumbnail: string;
    categoryId: number;
}

export default function CardVideo({
    videoID,
    videoTitle,
    videoThumbnail,
    categoryId,
    categories,
}: CardVideoProps) {
    const categoriesName =
        categories.find((category) => Number(category.id) === categoryId)
            ?.title || "N/A";

    return (
        <CardVideoContainer href={videoID}>
            <div className="image">
                <img
                    src={videoThumbnail}
                    alt="Thumbnail video"
                />
                <Play
                    size={16}
                    weight="bold"
                />
            </div>
            <div className="info">
                <h2 className="category">{categoriesName}</h2>
                <h4 className="title">{videoTitle}</h4>
            </div>
        </CardVideoContainer>
    );
}