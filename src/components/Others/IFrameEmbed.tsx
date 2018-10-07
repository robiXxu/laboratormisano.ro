import * as React from 'react';
import { Embed } from 'semantic-ui-react';
import { IFrameEmbedProps } from '../../types';

class IFrameEmbed extends React.PureComponent<IFrameEmbedProps> {
  public render() {
    return (
      <Embed
        icon=""
        placeholder={this.props.placeholder}
        url={this.props.url}
        style={{
          display:"inline-block",
          width: this.props.width,
          height: this.props.height,
          padding: 0
        }}
      />
    );
  }
}

export default IFrameEmbed;
