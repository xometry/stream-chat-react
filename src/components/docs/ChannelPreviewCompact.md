```js
import { Chat } from '../Chat';
import { ChannelList } from '../ChannelList';
import { ChannelPreviewCompact } from '../ChannelPreviewCompact';
const data = require('./data');
const filters = { type: 'team', example: 1 };
const sort = {
  last_message_at: -1,
  cid: 1,
};
const options = {
  member: true,
  watch: true,
  limit: 3,
};
<div className="str-chat" style={{ height: 'unset' }}>
  <Chat client={data.client}>
    <ChannelList
      Preview={ChannelPreviewCompact}
      filters={filters}
      options={options}
      sort={sort}
    />
  </Chat>
</div>;
```
