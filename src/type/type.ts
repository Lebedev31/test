export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

 export interface CardProps {
    post: IPost;
}