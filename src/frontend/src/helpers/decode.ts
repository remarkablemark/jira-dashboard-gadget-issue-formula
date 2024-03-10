export function decode(text: string) {
  return text.replaceAll('&gt;', '>').replaceAll('&lt;', '<');
}
