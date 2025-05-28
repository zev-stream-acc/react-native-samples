import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider, StreamChatProvider } from 'stream-chat-react-native';
import { connectUser } from './utils/streamClient';
import { mockUsers } from './constants/users';
import { ChannelListTestView } from './ChannelListTestView';
import { UserSwitcher } from './UserSwitcher';

const apiKey = 'YOUR_STREAM_API_KEY';
const client = StreamChat.getInstance(apiKey);

export default function TestWrapper() {
  const [userIndex, setUserIndex] = useState(0);
  const currentUser = mockUsers[userIndex];

  useEffect(() => {
    connectUser(client, currentUser);
    return () => {
      client.disconnectUser();
    };
  }, [userIndex]);

  return (
    <OverlayProvider>
      <StreamChatProvider client={client}>
        <Chat client={client}>
          <UserSwitcher currentIndex={userIndex} setUserIndex={setUserIndex} />
          <ChannelListTestView currentUser={currentUser} />
        </Chat>
      </StreamChatProvider>
    </OverlayProvider>
  );
}