module.exports = {
//FORMAT DATE & TIME STAMP//
  format_date: (date) => {
      return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
      });
  },
//FORMAT LENGTH OF POSTS --> POST SUMMARY VIEW//
  format_summary: (content) => {
      if (content.length > 300) {
          return content.substring(0, 300) + "...";
      } else {
          return content;
      }
    },
    format_summary: (image) => {
      if (image.length > 300) {
          return image.substring(0, 300) + "...";
      } else {
          return image;
      }
    },
  };
