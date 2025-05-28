import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react-native';

export const ChannelListTestView = ({ currentUser }) => {
  const filters = { members: { $in: [currentUser.id] } };
  const sort = { last_message_at: -1, unread_count: -1 };

  return (
    <ChannelList
      filters={filters}
      sort={sort}
      onSelect={(channel) => {
        console.log('Channel selected:', channel.id);
      }}
    />
  );
};