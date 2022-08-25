import {
  GiftIcon,
  HomeIcon,
  DocumentTextIcon,
  BookmarkIcon,
  ChatIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

export const HomeNav = () => {
  return (
    <ul className='flex text-center justify-center flex-wrap mt-4 gap-6 py-2'>
      <li>
        <Link href='/'>
          <a className='flex flex-col justify-center'>
            <HomeIcon className='h-6 md:h-10 text-white' />
            <p className='text-white'>Home</p>
          </a>
        </Link>
      </li>
      {/* <li>
        <Link href='/donation'>
          <a className='flex flex-col justify-center'>
            <GiftIcon className='h-6 md:h-10 text-white' />
            <p className='text-white'>Gift</p>
          </a>
        </Link>
      </li> */}
      <li>
        <Link href='/contact'>
          <a className='flex flex-col justify-center'>
            <ChatIcon className='h-6 md:h-10 text-white' />
            <p className='text-white'>Contact</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/article'>
          <a className='flex flex-col justify-center'>
            <DocumentTextIcon className='h-6 md:h-10 text-white' />
            <p className='text-white'>Article</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/memo'>
          <a className='flex flex-col justify-center'>
            <BookmarkIcon className='h-6 md:h-10 text-white' />
            <p className='text-white'>Memo</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/works'>
          <a className='flex flex-col justify-center'>
            <DesktopComputerIcon className='h-6 md:h-10 text-white' />
            <p className='text-white'>Works</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};
