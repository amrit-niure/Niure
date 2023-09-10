import { Icon } from "@/components/Icons/svg";

interface Options {
    id: number
    name: string,
    href: string,
    Icon: Icon,
}
interface Posts  {
    _id: string;
    category: string[];
    title: string;
    description: string[];
    tags: string[];
    image: string[];
    code: string[];
    quote: string[];
    createdAt : string;
    updatedAt : string;
}