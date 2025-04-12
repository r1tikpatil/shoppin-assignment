import React from 'react';
import { ImageContainer, Image, ImageTitle, SourceContainer, TimeText } from './NewsCard.style';
import { getTimeAgo } from '../../utils/utils';

const NewsCard = ({ item, index, onImageError }) => {
    if (!item.urlToImage) return null;

    return (
        <ImageContainer
            key={index}
            onClick={() => window.open(item.url, "_blank")}
            style={{ cursor: 'pointer' }}
        >
            <Image
                src={item.urlToImage}
                alt={item.author || "News Image"}
                onError={() => onImageError(index)}
            />
            <ImageTitle>{item.title}</ImageTitle>
            <SourceContainer>
                {item.source?.name}
                <TimeText>
                    · {getTimeAgo(item.publishedAt)}
                </TimeText>
            </SourceContainer>
        </ImageContainer>
    );
};

export default NewsCard;
