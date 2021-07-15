import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('c2haffg3cpbd');
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYW1hbiJ9.qxYFp9IDpl7NEI87gjwBehxOd5c2DP-JQgXtVvLXZWo';



chatClient.connectUser(
  {
    id: 'aman',
    name: 'aman',
    image: 'https://getstream.io/random_png/?id=weathered-king-9&name=weathered',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'crypto', {
  image: 'https://goo.gl/Zefkbx',
  name: 'Crypto',
});

const App = () => (
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader live />
        <VirtualizedMessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
);

export default App;