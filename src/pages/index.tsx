import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/Layout/Layout";
import { HomeNav } from "../components/tools/HomeNav";
import { Nav } from "../components/tools/Nav";

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <div className='mt-8'>
        <div className='text-center'>
          <Image
            className='rounded-full mx-auto'
            src='/images/is-me.jpg'
            width='100'
            height='100'
            alt='Gens Ito'
          />
          <p className='text-white'>Genta Ito</p>
          <ul className='flex gap-2 justify-center mt-2'>
            <li>
              <Link href='https://github.com/GensIto'>
                <a target='_blank' rel='noreferrer'>
                  <Image
                    src='/images/icon/github.png'
                    width='25'
                    height='25'
                    alt='github'
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://zenn.dev/gens'>
                <a target='_blank' rel='noreferrer'>
                  <Image
                    src='/images/icon/zenn.svg'
                    width='25'
                    height='25'
                    alt='github'
                  />
                </a>
              </Link>
            </li>
          </ul>
          <div className='mx-auto w-4/5 max-w-md'>
            <p className='text-white text-justify'>
              web制作会社に勤めています(2021年10月~現在)reactとnextjsの勉強をしています。
              最近はnestJSにも興味があり,Typescriptでフロントからバックまで一任できるエンジニアになりたいです
            </p>
          </div>
          <HomeNav />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
