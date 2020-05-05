import fakeTimer from "@sinonjs/fake-timers";

// https://github.com/storybooks/storybook/issues/2356
global.window = global;
const now = new Date("2020-04-26T07:11:23Z").getTime();
fakeTimer.install({
  now,
});
