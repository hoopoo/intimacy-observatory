export function getArticleHref(article: { slug: string; href?: string }): string {
  return article.href ?? `/articles/${article.slug}`;
}
