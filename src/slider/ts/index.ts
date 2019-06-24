import $ from 'jquery';

const ITEM_WIDTH = 280;
const ITEM_MARGIN = 20;
const CSS_CLASSNAME_CURRENT = 'is-current';

export class Slider {

  private currentIndex = 0;

  private $slider = $('#jsi-slider');
  private $container = this.$slider.find('.jsc-slider-container');
  private $items = this.$container.find('li');
  private $next = $('#jsi-next');
  private $prev = $('#jsi-prev');

  private itemSize = this.$items.length;
  private maxIndex = Math.floor(this.itemSize / 2);
  private minIndex = (this.itemSize % 2) === 0 ? -(this.maxIndex - 1) : -this.maxIndex; 

  constructor() {
    this.bindEvents();
    this.setCurrent();
    this.setLeftPosition();
  }



  private bindEvents(): void {
    this.$next.on('click', () => this.next());
    this.$prev.on('click', () => this.prev());
  }

  private prev(): void {
    if (this.currentIndex === this.minIndex) {
      this.currentIndex = this.maxIndex;
    } else {
      this.currentIndex--;
    }
    
    this.slide();
  }

  private next(): void {
    if (this.currentIndex === this.maxIndex) {
      this.currentIndex = this.minIndex;
    } else {
      this.currentIndex++;
    }
    this.slide();
  }

  private slide(): void {
    const marginLeft = -((ITEM_WIDTH + ITEM_MARGIN) * 2) * this.currentIndex;
    this.$container.css({marginLeft});
    this.setCurrent();
  }

  private setCurrent(): void {
    this.$items.removeClass(CSS_CLASSNAME_CURRENT);
    this.$items.eq(this.currentIndex + 1).addClass(CSS_CLASSNAME_CURRENT);
  }

  private setLeftPosition(): void {
    let left: string;
    if ((this.itemSize % 2) === 0) {
      left = `calc(50% + ${(ITEM_WIDTH + ITEM_MARGIN) / 2}px)`;
    } else {
      left = '50%';
    }

    this.$slider.css({ left });
  }
}

$(() => {
  new Slider();
})
