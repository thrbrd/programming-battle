import $ from 'jquery';

class Drawer {
  private $drawer = $('#jsi-drawer');
  private $openTrigger = $('#jsi-drawer-open');
  private $closeTrigger = $('#jsi-drawer-close');
  private $filter = $('#jsi-drawer-filter');

  constructor() {
    this.bindEvents();
  }

  private bindEvents(): void {
    this.$openTrigger.on('click', () => this.open());
    this.$closeTrigger.on('click', () => this.close());
    this.$filter.on('click', () => this.close());
  }

  private open(): void {
    this.$drawer.addClass('is-opened');
    this.$filter.addClass('is-displayed');
    setTimeout(() => this.$filter.addClass('is-opened'));
  }

  private close(): void {
    this.$drawer.removeClass('is-opened');
    this.$filter.removeClass('is-opened');
    this.$filter.on('transitionend', () => {
      this.$filter.removeClass('is-displayed');
      this.$filter.off('transitionend');
    });
  }
}

$(() => new Drawer());