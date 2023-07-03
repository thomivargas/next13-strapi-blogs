import Header from "@/components/Header";
import { fetchApi } from "@/helpers/fetch-api";
import { formatDate } from "@/helpers/format-date-helper";
import { Post } from "@/interface/post";
import Image from "next/image";
import { notFound } from 'next/navigation'

const getData = async (slug = '') => {
    const path = `/posts`;
    const urlParamsObject = {
        populate: "image",
        filters: {
            slug,  
        },
    }
    const {data} = await fetchApi(path, urlParamsObject);
    return data[0];
}

interface Props {
    params: {
        slug: string;
    }
}

const Slug = async ({params}: Props) => {
    const { slug } = params;
    const post: Post = await getData(slug);

    if (!post) {
        notFound();
    }
    const { title, body, description, createdAt, image } = post.attributes;
    const { url, width, height } = image.data.attributes.formats.medium;

  return (
    <div className="space-y-8">
        <Header text={title}/>
        <p className="text-gray-500">
            {formatDate(createdAt)}
        </p>
        <Image 
            className="h-auto rounded-lg"
            src={url}
            alt={title}
            width={width}
            height={height}
        />
        <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            {description}
        </p>
        <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            {body}
        </p>
    </div>
  )
}

export default Slug
