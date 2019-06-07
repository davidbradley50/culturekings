import {
  path, split, prop, compose,
} from 'ramda';

const theme = path_ => compose(path(split('.', path_)), prop('theme'));

export default theme;
