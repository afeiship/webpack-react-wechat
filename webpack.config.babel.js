import NxWebpack from 'next-webpack';

export default (inEnv) => {
  NxWebpack.global(null);
  const NODE_ENV = process.env.NODE_ENV;
  const type = inEnv ? inEnv.type : null;
  const file = type || NODE_ENV;
  nx.$webpack = { type, NODE_ENV, file };
  return require(`./build/webpack.${file}.js`).default(inEnv);
};
