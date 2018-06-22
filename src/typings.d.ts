/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Campaign {
  canvas: {
    display_height: number;
    display_width: number;
    diagonal: number;
    height: number;
    width: number;
    orientation: string;
  };
  title: string;
  slides: Array<Slide>;
  token: string;
}

interface Slide {
  delay: number;
  elements: Array<SlideElement>;
  token: string;
}

interface SlideElement {
  name?: string;
  media?: {
    token: string;
    mime: string;
    meta?: {
      width: number;
      height: number;
    },
  };
  html?: {
    text: string;
  };
  style: {
    'background-color': string;
    color: string;
  };
  layout: {
    bottom: number;
    right: number;
    top: number;
    left: number;
  };
  type: string;
  token: string;
}
