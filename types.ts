// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Change type literal for changelog entries
export type ChangeType = 'New' | 'Improved' | 'Fixed' | 'Deprecated' | 'Removed' | 'Security';

export interface Section extends CosmicObject {
  type: 'sections';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    display_order?: number;
  };
}

export interface Article extends CosmicObject {
  type: 'articles';
  metadata: {
    title?: string;
    content?: string;
    code_sample?: string;
    section?: Section;
    order_in_section?: number;
    featured?: boolean;
    last_updated?: string;
  };
}

export interface ChangelogEntry extends CosmicObject {
  type: 'changelog-entries';
  metadata: {
    version?: string;
    release_date?: string;
    change_type?: ChangeType | { key: string; value: string } | string;
    release_notes?: string;
  };
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_title?: string;
    tagline?: string;
    current_version?: string;
    github_url?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isSection(obj: CosmicObject): obj is Section {
  return obj.type === 'sections';
}

export function isArticle(obj: CosmicObject): obj is Article {
  return obj.type === 'articles';
}