class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    const regEx = /[^A-Za-z\d-' ]/g;
    return string.replaceAll(regEx, "");
  }

  static titleize(string) {
    // define deny-list
    const denyList = [
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
      "the",
    ];

    return string
      .split(" ")
      .map((word, index) => {
        //  if word is not on deny-list or first word of sentence
        if (!denyList.includes(word) || index === 0) {
          //caplitalize then return
          return Formatter.capitalize(word);
        }
        // else return string
        return word;
      })
      .join(" ");
  }
}
