import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit, AfterViewInit {
  transition: string; // 过度动画
  lastOffsetY: number; // 上次滚动偏移位置
  offsetY = 0; // 滚动距离
  touchStartY: number; // 触摸开始的位置

  // 回弹
  maxOffsetY: number; // 视图最大滚动距离

  // 惯性
  moveStartTime: number; // 惯性开始时间
  moveStartOffsetY: number; // 惯性开始位置

  constructor(private ele: ElementRef) { }

  ngOnInit() {}
  ngAfterViewInit() {
    const container: HTMLElement = this.ele.nativeElement;
    const content: HTMLElement = [].filter.call(container.childNodes, c => c.nodeType === 1)[0];
    this.maxOffsetY = content.clientHeight - container.clientHeight;
  }
  touchStartHandle(event: TouchEvent) {
    const pageY = event.touches[0].pageY;
    this.lastOffsetY = this.offsetY;
    this.touchStartY = pageY;
    this.transition = 'none';
    this.moveStartOffsetY = pageY;
    this.moveStartTime = Date.now();
  }
  touchMoveHandle(event: TouchEvent) {
    const pageY = event.touches[0].pageY; // 当前手指位置
    const distance = pageY - this.touchStartY; // 手指移动距离
    let scrollTo = distance + this.lastOffsetY; // 视图移动位置
    // 边缘阻力
    if (scrollTo > 0) {
      scrollTo /= 3;
    } else if (Math.abs(scrollTo) > this.maxOffsetY) {
      scrollTo = - (Math.abs(scrollTo) - this.maxOffsetY) / 3 - this.maxOffsetY;
    }

    this.offsetY = scrollTo;

    // 更新时间和位置
    const now = Date.now();
    if (now - this.moveStartTime > 300) {
      this.moveStartTime = now;
      this.moveStartOffsetY = pageY;
    }
  }
  touchEndHandle(event: TouchEvent) {
   const pageY = event.changedTouches[0].pageY;
    if (this.offsetY > 0 || Math.abs(this.offsetY) > Math.abs(this.moveStartOffsetY)) {
      // 回弹
      this.transition = 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)';
      return this.offsetY > 0 ? this.offsetY = 0 : this.offsetY = -this.maxOffsetY;
    } else {
      // 惯性运动
      const now = Date.now();
      const v = (pageY - this.moveStartOffsetY) / (now - this.moveStartTime);
      const duration = Math.abs(v / 0.0006);
      const scrollTo = this.offsetY + duration * v * 0.5;
      if (scrollTo > 0 || Math.abs(scrollTo) > this.moveStartOffsetY) {
        this.transition = 'all 500ms cubic-bezier(0.25, 0.46, 0.44, 0.94)';
        return scrollTo > 0 ? this.offsetY = 0 : this.offsetY = - this.moveStartOffsetY;
      } else {
        this.transition = 'all ' + duration + 'ms cubic-bezier(0.23, 1, 0.32, 1)';
        this.offsetY = scrollTo;
      }
    }
  }

}
