import { Posts } from '@/types/types';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/navigation'
import { CornerRightUp, Dot } from 'lucide-react';
interface PostCardProps {
  content : Posts
};

const PostCard: FC<PostCardProps> = ({content}) => {
  const router = useRouter()
  console.log('content',content)
  return (
  <div className="flex gap-8 flex-col  items-center cursor-pointer" key={content._id} onClick={() => router.push(`/posts/${content._id}`)}>
      <Image
          width={400}
          height={300}
          src={content.image[0]}
          alt="laptop photo"
          className="rounded-md md:max-w-[300px]"
      />
      <div className="text-primary dark:text-primary-light flex flex-col gap-2 w-[400px] md:max-w-[300px]">
          <span className="bg-primary dark:bg-light-dark-background text-primary-light px-4 py-2 rounded-md w-fit text-sm">
              {content.category}
          </span>
          <h1 className="text-2xl font-semibold">
              {content.title}
          </h1>
          <p className="text-lg text-p-text dark:text-p-text-dark text-justify">
              {content.description[0].split(' ').slice(0, 20).join(' ')}...
          </p>
          <div className="flex items-center text-slate-500">
              <span>{content.createdAt.substring(0, 10)}</span>
              <Dot size={35} />
              <span className="pr-2">5 min read</span>
              <CornerRightUp size={20} />
          </div>
      </div>
  </div>
  )
};

export default PostCard;