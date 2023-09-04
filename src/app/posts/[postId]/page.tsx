import { FC } from 'react';

interface PostProps {
    params: {
        postId: string;
      };
};

const Post: FC<PostProps> = ({params}) => {
    const {postId} = params
  return <div> Post - {params.postId}</div>;
};

export default Post;