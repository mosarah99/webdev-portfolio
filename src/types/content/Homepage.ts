/**
 * @deprecated Use IPageContent
 */
export interface IHomePageContent {
  id: string;
  slug: string;
  sections: string[];
  contents: ISection[];
}

/**
 * @deprecated Use ISection
 */
export interface ISection {
  id: string;
  name: string;
  content?: ISectionContent;
}

/**
 * @deprecated Use ISectionContent
 */
export interface ISectionContent {
  header?: string;
  subheader?: string;
  preheader?: string;
  body?: string;
}

export type { IHomePageContent as default };
