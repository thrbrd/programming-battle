import * as $ from 'jquery';

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
  }

  private open(): void {
    this.$drawer.addClass('is-opened');
    this.$filter.stop().fadeIn(600);
  }

  private close(): void {
    this.$drawer.removeClass('is-opened');
    this.$filter.stop().fadeOut(600);
  }
}

$(() => new Drawer());