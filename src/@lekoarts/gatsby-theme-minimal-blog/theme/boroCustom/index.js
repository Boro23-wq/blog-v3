var theme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "rgb(10,16,22)",
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "attr-name"],
    style: {
      color: "rgb(110, 125, 154)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "rgb(110, 125, 154)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(214, 222, 235)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(44, 223, 255)"
    }
  }, {
    // This was manually added after the auto-generation
    // so that punctuations are not italicised
    types: ["punctuation"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["selector", "doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(255, 203, 25)"
    }
  }, {
    types: ["tag", "operator", "keyword"],
    style: {
      color: "rgb(255, 0, 106)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["property"],
    style: {
      color: "rgb(255, 0, 106)"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }]
};

export default theme;

// pink: #ff006a
// blue: #44dfff
// green: #aaed36
// yellow: #f5af19
// gray: #6e7d9a
// dark blue: #0e141a