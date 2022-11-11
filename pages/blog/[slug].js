import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/nav";
import SidebarList from '../../components/post/sidebar-list'
import { fetchAllBlogPosts, fetchAllPostSlugs, fetchPost } from "../../src/api/api-storyblok";
// import Nav from "../../src/components/nav";


export default function BlogDefail({ post, posts }) {
  // console.log(post);
  return (
    <div>
      <Head>
        <title>Rio Juniyantara Putra Personal Profolio</title>
        <meta
          name="description"
          content="personal website protfolio Oleh Rio Juniyantara Putra"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" container mx-auto">
        <Nav/>
        {/* blog body */}
        <section className="flex md:flex-row flex-col">
          <div className="flex flex-col items-start mt-10 mb-10 md:w-3/4">
            <p className=" text-sm text-gray-400 mb-5">20 Januari 2023</p>
            <p className=" md:text-6xl text-3xl font-bold mb-14 leading-tight">
              {post.story.content.title}
            </p>
            <figure className=" flex h-96 w-full overflow-hidden rounded-lg  justify-start mb-10">
              <Image
                // src="/rio.jpg"
                src={post.story.content.image.filename}
                width={1000}
                height={800}
                className="object-cover"
                alt="no image"
              />
            </figure>
            <div className=" text-gray-600 leading-7 text-justify mx-2 md:mx-0 ">
              {post.story.content.description}
            </div>
          </div>

          {/* sidebar */}
          <SidebarList posts={posts}/>
          {/* sidebar */}
        </section>
        {/* blog body */}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  //   console.log(slug);
  const posts = await fetchAllBlogPosts();
  const post = await fetchPost(slug);
  return {
    props: {
      post,
      posts
    },
  };
}

export async function getStaticPaths() {
  const slug = await fetchAllPostSlugs();
  return {
    paths: slug,
    fallback: false,
  };
}
