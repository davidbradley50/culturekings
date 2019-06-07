const asset = (path) => {
  if (process.env.ASSET_PREFIX) {
    return `${process.env.ASSET_PREFIX}/${path}`;
  }

  return `/static/${path}`;
};

const img = (path, alt) => ({ src: asset(path), alt });

export {
  asset,
  img,
};
