import Head from "next/head";
import Image from "next/image";
import DateFormat from "../../components/Date/date-format";
import Nav from "../../components/nav";
import SidebarList from '../../components/post/sidebar-list'
import { fetchAllBlogPosts, fetchAllPostSlugs, fetchPost } from "../../src/api/api-storyblok";
// import Nav from "../../src/components/nav";


export default function BlogDefail({ post, posts }) {
  console.log(post);
  const {title, image} = post.story.content;
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta
          name="title"
          content={title}
        />
        <meta
          name="description"
          content={title}
        />
        <link rel="icon" href="/favicon.ico" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://rio-juniyantara-putra.yhotie.com"
        />

        <meta
          property="twitter:title"
          content={
            title
          }
        />
        <meta
          property="twitter:description"
          // content="Turut berduka atas wafatnya syaikh ali jaber (Syaikh Ali Saleh Muhammed Ali Jaber)"
          content={
            title
          }
        />
        <meta
          property="twitter:image"
          content={image.filename}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rio-juniyantara-putra.yhotie.com"
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={
            title
          }
        />

        <meta
          property="og:image"
          content={image.filename}
        />
      </Head>


      <main className=" container mx-auto">
        <Nav/>
        {/* blog body */}
        <section className="flex md:flex-row flex-col">
          <div className="flex flex-col items-start mt-10 mb-10 md:w-3/4">
            {/* <p className=" text-sm text-gray-400 mb-5">20 Januari 2023</p> */}
            {/* <DateFormat date={post.story.created_at}/> */}
            <DateFormat date={new Date(post.story.created_at)}/>
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
