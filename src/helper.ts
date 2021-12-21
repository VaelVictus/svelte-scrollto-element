export const $ = (selector: HTMLElement) => {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }
  return selector;
};

export const extend = (...args: any) => {
  return Object.assign({}, ...args);
}

export const cumulativeOffset = (element: HTMLElement | any) => {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
}

export const directScroll = (element: HTMLElement | any) => {
  return element && element !== document && element !== document.body;
}

export const scrollTop = (element: HTMLElement | any, value?: number) => {
  let inSetter = value !== undefined;
  if (directScroll(element)) {
    return inSetter ? (element.scrollTop = value) : element.scrollTop;
  } else {
    return inSetter
      ? (document.documentElement.scrollTop = document.body.scrollTop = value)
      : window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }
}

export const scrollLeft = (element: HTMLElement, value?: number) => {
  let inSetter = value !== undefined;
  if (directScroll(element)) {
    return inSetter ? (element.scrollLeft = value) : element.scrollLeft;
  } else {
    return inSetter
      ? (document.documentElement.scrollLeft = document.body.scrollLeft = value)
      : window.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft ||
      0;
  }
}