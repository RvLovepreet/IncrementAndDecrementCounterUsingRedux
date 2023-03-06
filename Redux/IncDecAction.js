export const increment = para => {
  return {
    type: 'INCREMENT',
    payload: para,
  };
};

export const decrement = para => {
  return {
    type: 'DECREMENT',
    payload: para,
  };
};

export const setText = para => {
  return {
    type: 'CHANGETEXT',
    payload: para,
  };
};
