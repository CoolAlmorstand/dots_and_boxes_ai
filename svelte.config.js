import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: adapter({
      // Optional settings here—leave default for most cases
    })
  }
};

export default config;
