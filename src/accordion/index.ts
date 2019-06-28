import $ from 'jquery';

class Accordion {
  private $trigger = this.$wrapper.find('.jsc-accordion-trigger');
  private $content = this.$wrapper.find('.jsc-accordion-content');
  private isOpen = false;

  constructor(private $wrapper: JQuery) {
    this.bindEvents();
  }

  private bindEvents(): void {
    this.$trigger.on('click', () => this.toggle());
  }

  private toggle(): void {
    if (this.isOpen) {
      this.close();
      return;
    }

    this.open();
  }

  private open(): void {
    const height = this.$content[0].scrollHeight;
    this.$content.height(height);
    this.isOpen = true;
  }

  private close(): void {
    this.$content.height(0);
    this.isOpen = false;
  }
}

$(() => {
  $('.jsc-accordion').each(function(this) {
    new Accordion($(this));
  });
});