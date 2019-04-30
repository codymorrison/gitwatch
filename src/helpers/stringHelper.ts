/**
 * String Helper Functions
 * @module stringHelper
 */

/**
 * Removes instances of "Awesome-" and "awesome-".
 * Replaces hyphens with spaces for each word and
 * capitalize first letter of every word.
 *
 * @param {string} value - The string to parse
 * @returns {string} The filtered string
 */
export function awesomeCleanup(value: string): string {
  return languageTranslate(
    value
      .replace(/awesome-/i, "")
      .replace(/-/g, " ")
      //.toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ")
  );
}

/**
 * Finds known misspellings or incorrect capitalization
 * on language names and replaces them with correct name.
 *
 * @param {string} value - The string to parse
 * @returns {string} The translated string
 */
export function languageTranslate(value: string): string {
  const languageTypes = {
    ui: "UI",
    ios: "iOS",
    selfhosted: "Self-Hosted",
    nodejs: "Node.js",
    php: "PHP",
    macos: "MacOS",
    "mac os": "MacOS",
    cpp: "C++",
    vscode: "VSCode",
    css: "CSS",
    htaccess: ".htaccess",
    awesome_: "",
    graphql: "GraphQL",
    dotnet: ".NET",
    bigdata: "Big Data",
  };

  for (var key in languageTypes) {
    value = value.replace(new RegExp(key, "ig"), languageTypes[key]);
  }

  return value;
}
