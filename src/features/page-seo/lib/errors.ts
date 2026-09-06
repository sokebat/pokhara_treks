export class PageSeoPersistenceError extends Error {
  constructor(message = "Could not persist page SEO.") {
    super(message);
    this.name = "PageSeoPersistenceError";
  }
}
