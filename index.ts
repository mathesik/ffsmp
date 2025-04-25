export interface NavItem {
  label: string;
  href: string;
}

export interface Rank {
  id: string;
  name: string;
  price: number;
  permissions: string[];
  description: string;
  featured?: boolean;
  additionalPerks?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
}

export interface PlayerStat {
  username: string;
  avatar: string;
  score: number;
  rank: string;
}
