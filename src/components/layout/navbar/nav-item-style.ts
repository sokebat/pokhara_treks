/**
 * Top-level bar item, shared by the dropdown triggers and the plain links so
 * every item in the bar sits on the same baseline.
 *
 * Taken from the signed-off homepage design: display face at 14.5px, sentence
 * case rather than uppercase, no hover fill, and a 3px brand rule that grows
 * along the bottom of the header on hover and while the panel is open. The
 * `bg-transparent` overrides cancel the muted fill that the shadcn trigger and
 * link presets ship with; the dropdown behaviour itself is untouched.
 */
export const navBarItemClass = [
  "font-heading inline-flex h-[80px] w-max cursor-pointer items-center justify-center gap-0",
  "rounded-none border-b-[3px] border-transparent px-0 py-0",
  "text-[14.5px] font-semibold whitespace-nowrap text-foreground transition-colors",
  "hover:border-primary hover:bg-transparent hover:text-primary",
  "focus:bg-transparent",
  "data-popup-open:border-primary data-popup-open:bg-transparent data-popup-open:text-primary data-popup-open:hover:bg-transparent",
  "data-open:border-primary data-open:bg-transparent data-open:text-primary data-open:hover:bg-transparent data-open:focus:bg-transparent",
  "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent",
].join(" ");
