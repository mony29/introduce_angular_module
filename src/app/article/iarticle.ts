import { ICategory } from "./icategory";

export interface IArticle {
    id : number;
    title : string;
    description : string;
    author_name : string;
    categories : ICategory
}
