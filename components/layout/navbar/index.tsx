import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  // custom for portpolio 1
  const shopLive = menu.length ? menu[0] : null;

  return (
    <nav className="relative flex w-full items-center justify-between overflow-hidden bg-white p-1 dark:bg-black sm:p-4 lg:px-6 lg:pt-7">
      <div className="block w-1/3 md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
        <div className="md:mr-4">
          <Link href="/" aria-label="Go back home">
            <div className="flex ">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
              <div className="h-1 w-2"></div>
              <p> Space Odyssey </p>
            </div>
          </Link>
        </div>

        <div className="md:mr-4">
          <Link href="/examples/music" aria-label="Go back home">
            <div className="flex ">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
              <div className="h-1 w-2"></div>
              <p> Listen Now!</p>
            </div>
          </Link>
        </div>

        <div className="md:mr-4">
          <Link href="http://www.userplane.co.kr/" aria-label="Movie">
            <div className="flex ">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
              <div className="h-1 w-2"></div>
              <p> Watch Now!</p>
            </div>
          </Link>
        </div>
        <div className="md:mr-4">
          {shopLive && (
            <Link href={shopLive.path} aria-label="ShopLive">
              <div className="flex ">
                <LogoIcon className="h-8 transition-transform hover:scale-110" />
                <div className="h-1 w-2"></div>
                <p> {shopLive.title} </p>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="hidden w-1/3 md:block">
        <Search />
      </div>

      <div className="flex w-1/3 justify-end">
        <Suspense fallback={<CartIcon className="h-6" />}>
          {/* @ts-expect-error Server Component */}
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
