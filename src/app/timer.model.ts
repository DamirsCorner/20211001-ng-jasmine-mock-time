export class Timer {
  private endTime: number;

  public get secondsRemaining(): number {
    if (!this.active) {
      return this.duration;
    }

    return Math.max(0, Math.floor((this.endTime - Date.now()) / 1000));
  }

  constructor(
    private readonly duration: number,
    private readonly active: boolean
  ) {
    this.endTime = Date.now() + duration * 1000;
  }
}
