export class Draw {
  constructor(public ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  static create(ctx: CanvasRenderingContext2D) {
    return new Draw(ctx)
  }


  render() {

  }

  resize() {
  }

  animate() {
  }
}
