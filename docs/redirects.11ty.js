function normalisePath(value) {
  if (!value.startsWith('/')) {
    return `/${value}`;
  }
  return value;
}

export default class RedirectPages {
  data() {
    return {
      pagination: {
        data: 'redirects',
        size: 1,
        alias: 'redirect'
      },
      permalink: (data) => `${normalisePath(data.redirect.from)}index.html`,
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const toPath = normalisePath(data.redirect.to);
    const replacementText = data.redirect.replacementTitle || toPath;

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page moved</title>
  <link rel="canonical" href="${toPath}">
  <meta http-equiv="refresh" content="0; url=${toPath}">
</head>
<body>
  <main>
    <h1>Page moved</h1>
    <p>This guidance has moved to <a href="${toPath}">${replacementText}</a>.</p>
    <p>You should be redirected automatically.</p>
    <p>If you are not redirected, <a href="${toPath}">continue to the new page</a>.</p>
  </main>
  <script>
    window.location.replace("${toPath}");
  </script>
</body>
</html>`;
  }
}
