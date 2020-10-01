function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context("./favicon", true, /\.(ico|png|xml|svg)$/i));
