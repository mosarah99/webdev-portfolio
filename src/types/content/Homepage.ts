export interface IHomePageContent {
  id: string;
  slug: string;
  sections: string[];
  contents: ISection[];
}

export interface ISection {
  id: string;
  name: string;
  content?: ISectionContent;
}

export interface ISectionContent {
  header?: string;
  subheader?: string;
  preheader?: string;
  body?: string;
}

export type { IHomePageContent as default };
