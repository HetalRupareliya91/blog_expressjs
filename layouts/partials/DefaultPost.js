import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import Link from "next/link";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";

const DefaultPost = ({ post }) => {
  const { summary_length, blog_folder } = config.settings;
  const { meta_author } = config.metadata;
  const author = post.frontmatter.author ? post.frontmatter.author : meta_author;
  return (
    <div className="post relative mb-[95px]">
      <div className="">
        {post.frontmatter.image && (
          <ImageFallback
            className="rounded-lg"
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            width={405}
            height={208}
          />
        )}
      </div>
      <div className="defaultpost_content w-[42rem]">
      {author}
      <h3 className="h5 mb-2 mt-4">
        <Link
          href={`/${blog_folder}/${post.slug}`}
          className="block hover:text-primary"
        >
          {post.frontmatter.title}
        </Link>
      </h3>
      <p className="mb-8">{post.content.slice(0, Number(summary_length))}</p>     
      
      <ul className="flex items-center space-x-4 list-disc">
        <li className="inline-flex items-center font-secondary text-xs leading-3">
          <Link href="/about">  
              {dateFormat(post.frontmatter.date)} 
          </Link>
        </li>
        <li>
          <Link className="inline-flex items-center font-secondary text-xs leading-3" href={`/${blog_folder}/${post.slug}`} >
             10 min read
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default DefaultPost;
