import Image from "next/image";
import Link from "next/link";
import { fetchAllBlogPosts } from "../../src/api/api-storyblok";

export default function SidebarList({ posts }) {
  return (
    <div className="flex flex-col mx-4 md:w-1/2 md:mt-10 mt-4">
      {/* single card */}
      {posts.stories.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <div
            key={post.id}
            className="flex flex-row my-2 h-1/4 justify-between items-center cursor-pointer hover:bg-primary/10"
          >
            <div className="flex flex-col w-1/2">
              {/* <p className=" font-bold text-md my-3"> {string.substring(0, 100)} {post.content.title}</p> */}
              <p className=" font-bold text-md my-3">
                {post.content.title.substring(0, 20)}
              </p>
              <p className=" text-justify text-gray-500 md:text-sm text-xs ">
                {post.content.description.substring(0, 100)}
              </p>
            </div>

            {/* image */}
            <figure className=" flex flex-row h-full w-1/3 overflow-hidden rounded-lg justify-center items-center p-5 mx-5 xl:my-5 bg-primary/10 hover:bg-transparent">
              <Image
                src={post.content.image.filename}
                width={500}
                height={500}
                className="object-cover "
                alt=""
              />
              {/* <Image src="/rio.jpg" width={500} height={500} className="object-cover " /> */}
            </figure>
            {/* image */}
          </div>
        </Link>
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   const posts = await fetchAllBlogPosts();
//   console.log(posts);
//   return {
//     props: {
//       posts,
//     },
//   };
// }
