import { client } from "../../lib/client";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "../../components/Layout/Layout";
import Image from "next/image";

export default function ArticlePost({ article }: any) {
  if (!article) {
    return <div>Loading...</div>;
  }
  console.log(article.img);

  return (
    <Layout title={`Article | ${article.title}`}>
      <div className='w-4/6 mx-auto'>
        <p className='text-white text-lg'>{article.title}</p>
        {article.img ? (
          <img
            className='my-3'
            src={article.img.url}
            width='	1440'
            height='1080'
            alt={`${article.title}の画像`}
          />
        ) : (
          ""
        )}
        <div
          className='text-white'
          dangerouslySetInnerHTML={{
            __html: `${article.content}`,
          }}
        />
      </div>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "article" });
  const paths = data.contents.map((content: any) => `/article/${content.id}`); // ここである分の[id]ファイルを展開
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "article", contentId: id });

  return {
    props: {
      article: data,
    },
    revalidate: 10,
  };
};
