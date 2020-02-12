The Thread renders a parent message with a list of replies.

The threadHasMore={false} disables pagination for this example.

```js
import { Chat } from '../Chat';
import { Channel } from '../Channel';
import { Thread } from '../Thread';
import { MessageTeam } from '../MessageTeam';

const data = require('./data');

<Chat client={data.client}>
  <Channel channel={data.channel}>
    <Thread
      thread={data.thread}
      Message={MessageTeam}
      threadMessages={data.threadMessages}
      threadHasMore={false}
      fullWidth
      autoFocus={false}
    />
  </Channel>
</Chat>;
```
