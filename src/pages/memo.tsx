import Link from "next/link";
import { Layout } from "../components/Layout/Layout";
import { client } from "../lib/client";

export default function Memo({ memo }: any) {
  return (
    <Layout title='memo'>
      <h2 className='text-white text-center text-md md:text-lg'>
        仕事用に使えるようなメモや技術に関すること興味がある記事など
      </h2>
      <ul className='mx-auto w-4/5 max-w-md flex flex-col gap-4 mt-5'>
        {memo.map((memo: any) => {
          return (
            <li key={memo.id} className='flex items-center flex-wrap gap-2'>
              <Link href={memo.url}>
                <a target='_blank' rel='noreferrer'>
                  <p className='text-white text-md md:text-lg'>{memo.title}</p>
                </a>
              </Link>
              {memo.genre == "仕事" ? (
                <p className='text-white text-xs md:text-sm bg-pink-600 px-2'>
                  {memo.genre}
                </p>
              ) : memo.genre == "技術" ? (
                <p className='text-white  text-xs md:text-sm bg-indigo-600 px-2'>
                  {memo.genre}
                </p>
              ) : memo.genre == "興味事" ? (
                <p className='text-white  text-xs md:text-sm bg-blue-600 px-2'>
                  {memo.genre}
                </p>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "memo", queries: { limit: 100 } });
  console.log(data);
  return {
    props: {
      memo: data.contents,
    },
    revalidate: 10,
  };
};
