import { ReduxAppBase } from 'next-react-redux';
import hotable from 'react-hmr-decorator';

@hotable(module)
export default class extends ReduxAppBase {
  static initialState(inStore) {
    return {
      memory: {
        hasUpdate: false
      }
    };
  }

  eventBus(inName, inData) {
    console.log('*, I am - global event bus center:->', inName, inData);
  }

  render() {
    return <div className="hello">Hello 123!</div>;
  }
}
