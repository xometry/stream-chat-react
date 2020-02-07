React Select allows you to select a reaction. Here's how to use it:

```js
import { ReactionSelector } from '../ReactionSelector';

const data = require('./data');

function handleReaction(reaction) {
  console.log('reaction', reaction);
}
<div className="str-chat" style={{ height: '100px' }}>
  <ReactionSelector
    detailedView={true}
    handleReaction={handleReaction}
    message={data.message}
  />
</div>;
```

Align to the right:

```js
import { ReactionSelector } from '../ReactionSelector';

const data = require('./data');

function handleReaction(reaction) {
  console.log('reaction', reaction);
}

<div className="str-chat" style={{ height: '100px' }}>
  <ReactionSelector
    detailedView={true}
    handleReaction={handleReaction}
    message={data.message}
    direction={'right'}
  />
</div>;
```
