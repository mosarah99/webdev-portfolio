/**
 * Dictates what each section content might look like
 */
export interface IHomepageSection {
  pretitle?: string;
  title?: string;
  subtitle?: string;
  body?: string;
}

/**
 * Describes homepage content using a caller-provided set of section names.
 *
 * @template SectionName - The allowed section names, usually a union of string
 * literals such as "hero" | "about" | "projects".
 */
export type THomepage<SectionName extends string> = {
  sections: SectionName[];
} & Partial<Record<SectionName, IHomepageSection>>;

export type { THomepage as default };
