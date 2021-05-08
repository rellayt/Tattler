import React from 'react';
import { LoadingMessage, LoadingWrapper } from './PublicMessagesLoading.styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { random } from '../../../helpers/random';

const PublicMessagesLoading = () => (
  <LoadingWrapper>
    {Array(7)
      .fill(0)
      .map((_, index) => (
        <Skeleton key={index} animation={'wave'} style={random(0, 3) === 0 ? { marginLeft: 'auto' } : { marginLeft: '0' }}>
          <LoadingMessage width={random(20, 30)} height={random(50, 70)} />
        </Skeleton>
      ))}
  </LoadingWrapper>
);

export default PublicMessagesLoading;
