import { TagIcon } from "../../assets/icons/tag";
import { Tag } from "./styled";

interface TagProps {
    content: string;
}
export function TagComponent({content}: TagProps) {
    return (
        <Tag>
            <div className="icon">
                <TagIcon/>
            </div>
            <div className="line"></div>
            <div className="content">
                <p>{content}</p>
            </div>
        </Tag>
    );
}