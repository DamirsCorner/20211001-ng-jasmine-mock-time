import { Timer } from './timer.model';

describe('Timer', () => {
  const startingTime = Date.now();

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(startingTime));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  describe('secondsRemaining', () => {
    describe('when active', () => {
      it('should return full duration when created', () => {
        const timer = new Timer(5, true);
        expect(timer.secondsRemaining).toBe(5);
      });

      it('should return decremented duration as time passes', () => {
        const timer = new Timer(5, true);

        jasmine.clock().mockDate(new Date(startingTime + 1000));

        expect(timer.secondsRemaining).toBe(4);
      });

      it('should return 0 when timer is past its duration', () => {
        const timer = new Timer(5, true);

        jasmine.clock().mockDate(new Date(startingTime + 10000));

        expect(timer.secondsRemaining).toBe(0);
      });
    });

    describe('when not active', () => {
      it('should return full duration when created', () => {
        const timer = new Timer(5, false);
        expect(timer.secondsRemaining).toBe(5);
      });

      it('should return full duration as time passes', () => {
        const timer = new Timer(5, false);

        jasmine.clock().mockDate(new Date(startingTime + 1000));

        expect(timer.secondsRemaining).toBe(5);
      });

      it('should return full duration when timer is past its duration', () => {
        const timer = new Timer(5, false);

        jasmine.clock().mockDate(new Date(startingTime + 10000));

        expect(timer.secondsRemaining).toBe(5);
      });
    });
  });
});
