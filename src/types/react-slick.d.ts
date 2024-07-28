declare module 'react-slick' {
    import * as React from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      responsive?: Array<{
        breakpoint: number;
        settings: Settings;
      }>;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  