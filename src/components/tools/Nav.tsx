import {
  GiftIcon,
  HomeIcon,
  DocumentTextIcon,
  BookmarkIcon,
  ChatIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

export const Nav = () => {
  return (
    <ul className='flex text-center justify-end gap-4 py-2'>
      <li>
        <Link href='/'>
          <a>
            <HomeIcon className='h-6 md:h-10 text-white' />
          </a>
        </Link>
      </li>
      {/* <li>
        <Link href='/donation'>
          <a>
            <GiftIcon className='h-6 md:h-10 text-white' />
          </a>
        </Link>
      </li> */}
      <li>
        <Link href='/contact'>
          <a>
            <ChatIcon className='h-6 md:h-10 text-white' />
          </a>
        </Link>
      </li>
      <li>
        <Link href='/article'>
          <a>
            <DocumentTextIcon className='h-6 md:h-10 text-white' />
          </a>
        </Link>
      </li>
      <li>
        <Link href='/memo'>
          <a>
            <BookmarkIcon className='h-6 md:h-10 text-white' />
          </a>
        </Link>
      </li>
      <li>
        <Link href='/works'>
          <a>
            <DesktopComputerIcon className='h-6 md:h-10 text-white' />
          </a>
        </Link>
      </li>
    </ul>
  );
};
