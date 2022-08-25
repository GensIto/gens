import Link from "next/link";
import styled from "styled-components";
import { Layout } from "../components/Layout/Layout";
import { WorkGenre } from "../components/parts/WorkGenre";
import { client } from "../lib/client";
import { sp, md, pc } from "../hooks/media";
import ScrollAnimation from "../hooks/ScrollAnimation";

export default function Works({ works }: any) {
  console.log(works);
  return (
    <Layout title='Works'>
      <div className='w-11/12 mx-auto'>
        <ul className='mx-auto flex flex-wrap gap-6 justify-items-start justify-between'>
          {works.map((works: any) => {
            return (
              <StyledList key={works.id}>
                <ScrollAnimation>
                  <div>
                    <p className='text-white text-lg'>{works.title}</p>
                    {works.img ? (
                      <img
                        className='my-2'
                        src={works.img.url}
                        width='	1440'
                        height='1080'
                        alt={`${works.title}の画像`}
                      />
                    ) : (
                      ""
                    )}
                    <p className='text-white'>担当業務:{works.jobs}</p>
                    <ul className='flex flex-wrap gap-2'>
                      {works.skills.map((skill: any, index: number) => {
                        return <WorkGenre key={index} skill={skill} />;
                      })}
                    </ul>
                    <Link href={works.url}>
                      <a
                        className='text-xs text-white'
                        target='_blank'
                        rel='noreferrer'>
                        goto site
                      </a>
                    </Link>
                  </div>
                </ScrollAnimation>
              </StyledList>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
const StyledList = styled.li`
  ${sp`
    width: 100%;
  `}
  ${md`
    width: 100%;
  `}
  ${pc`
    width: 30%;
  `}
`;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works", queries: { limit: 100 } });
  console.log(data);
  return {
    props: {
      works: data.contents,
    },
    revalidate: 10,
  };
};
