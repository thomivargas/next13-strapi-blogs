import CardImage from "@/components/CardImage";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interface/post";


const getData = async (page = 1, pageSize = 2) => {

  const path = "/posts";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc"
    },
    pagination: {
      page,
      pageSize
    }
  }

  const {data, meta} = await fetchApi(path, urlParamsObject, )
  return {
    data,
    pagination: meta.pagination,
  };
}
interface Props {
  searchParams: {
    page?: string;
  };
}

const Blog = async({searchParams}: Props) => {
  const {page} = searchParams;
  let pageNumber = page ? parseInt(page) : 1;
  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 5) {
    pageNumber = 1;
  }
   const {data, pagination} = await getData(pageNumber);

  return (
    <div className="space-y-8">
        <Header text='Latest Posts'/>
        <Pagination pagination={pagination} />
        <div className="grid gap-4">
          {data.map((post: Post) => (
            <CardImage 
              key={post.id} 
              post={post}
            />
          ))}
        </div>
    </div>
  )
}

export default Blog
