import config from './config';
import { loaders, plugins, configs, inputs, outputs } from 'webpack-app-kits';
import 'next-flatten';

const { file, type, NODE_ENV } = nx.$webpack;

export default (inEnv) => {
  const mode = process.env.NODE_ENV;
  const { libs, publicPath } = config[ file ];

  return {
    mode,
    entry: inputs.spa(),
    output: outputs.spa({
      publicPath
    }),
    resolve: {
      alias: configs.alias({
        'react-dom': ['@hot-loader/react-dom', process.env.NODE_ENV === 'development']
      }),
      extensions: configs.extensions()
    },
    module: {
      rules: nx.flatten([
        loaders.babel(),
        loaders.environment(),
        loaders.css(),
        loaders.sass(),
        loaders.mp34(),
        loaders.image({ limit: 10 }),
        loaders.font()
      ])
    },
    optimization: configs.optimization(),
    performance: configs.performance(),
    plugins: nx.flatten([
      plugins.moduleConcatenation(),
      plugins.singleHtml({ libs }),
      plugins.htmlBanner(),
      plugins.extractText(),
      plugins.dllRefrence({ publicPath }),
      plugins.loaderOptions(),
      plugins.provide()
    ])
  };
};
