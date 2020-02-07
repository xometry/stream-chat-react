import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from './Avatar';

export class TypingIndicator extends React.PureComponent {
  static propTypes = {
    /** @see See [chat context](https://getstream.github.io/stream-chat-react/#chatcontext) doc */
    client: PropTypes.object,
    /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channelcontext) doc */
    typing: PropTypes.object,
  };

  render() {
    // if (Object.keys(this.props.typing).length <= 0) {
    //   return null;
    // }

    const typing = Object.values(this.props.typing);
    let show;
    if (
      typing.length === 0 ||
      (typing.length === 1 && typing[0].user.id === this.props.client.user.id)
    ) {
      show = false;
    } else {
      show = true;
    }
    return (
      <div
        className={`str-chat__typing-indicator ${
          show ? 'str-chat__typing-indicator--typing' : ''
        }`}
      >
        <div className="str-chat__typing-indicator__avatars">
          {typing
            .filter(({ user }) => user.id !== this.props.client.user.id)
            .map(({ user }) => (
              <Avatar
                image={user.image}
                size={32}
                name={user.name || user.id}
                key={user.id}
              />
            ))}
        </div>
        <div className="str-chat__typing-indicator__dots">
          <span className="str-chat__typing-indicator__dot" />
          <span className="str-chat__typing-indicator__dot" />
          <span className="str-chat__typing-indicator__dot" />
        </div>
      </div>
    );
  }
}
