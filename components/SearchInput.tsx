'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { formUrlQuery } from '@jsmastery/utils'
import { removeKeysFromUrlQuery } from '@jsmastery/utils';
const SearchInput = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const currentQuery = searchParams.get("topic");

    if (searchQuery && searchQuery !== currentQuery) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "topic",
        value: searchQuery,
      });

      router.push(newUrl, { scroll: false });

    } else if (!searchQuery && pathName === '/companions' && currentQuery) {
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["topic"],
      });

      router.push(newUrl, { scroll: false });
    }

  }, [searchQuery]);
  return (
    <div className='relative relative border-black rounded-lg items-center flex gap-2
    px-2 py-1 h-fit'>
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        placeholder="Search companions..."
        className="outline-none border-black"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

    </div>
  )
}

export default SearchInput
