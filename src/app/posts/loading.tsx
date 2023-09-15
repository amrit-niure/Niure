import { FC } from 'react';

interface loadingProps {};

const loading: FC<loadingProps> = ({}) => {
  return <div className='h-100vh flex items-center justify-center'> Loading...... </div>;
};

export default loading;