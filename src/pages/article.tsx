import { Layout } from "../components/Layout/Layout";
import { client } from "../lib/client";
import Link from "next/link";

export default function Article({ article }: any) {
  console.log(article);
  return (
    <Layout title='Article'>
      <ul className='mx-auto w-4/5 max-w-md flex flex-col gap-4 mt-5'>
        {article.map((article: any) => {
          return (
            <li key={article.id}>
              <Link href={`/article/${article.id}`}>
                <a className='text-white'>{article.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "article",
    queries: { limit: 100 },
  });
  return {
    props: {
      article: data.contents,
    },
  };
};
