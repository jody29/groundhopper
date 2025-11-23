import twoDigits from "@2digits/eslint-config";

export default twoDigits(
  {
    ignores: {
      ignores: ["src/db/migrations/**"],
    },
  },
  {
    rules: {
      "unicorn/prefer-single-call": "off",
    },
  }
);
