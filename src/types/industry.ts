/**
 * 業種関連の型定義
 */

/**
 * 業種
 */
export interface Industry {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  keywords: string[];
  color: string;
  order: number;
}

/**
 * 業種カテゴリー
 */
export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    name: '製造業',
    nameEn: 'Manufacturing',
    icon: '🏭',
    description: '製造業向けの営業メールテンプレート',
    keywords: ['歩留まり改善', 'リードタイム短縮', '品質管理', '生産効率'],
    color: '#3B82F6',
    order: 1,
  },
  {
    id: 'it-saas',
    name: 'IT・SaaS',
    nameEn: 'IT & SaaS',
    icon: '💻',
    description: 'IT・SaaS業界向けの営業メールテンプレート',
    keywords: ['導入期間', 'API連携', 'ROI', 'DX推進'],
    color: '#8B5CF6',
    order: 2,
  },
  {
    id: 'retail',
    name: '小売・EC',
    nameEn: 'Retail & E-commerce',
    icon: '🛍️',
    description: '小売・EC業界向けの営業メールテンプレート',
    keywords: ['客単価', 'リピート率', '在庫最適化', 'OMO'],
    color: '#EC4899',
    order: 3,
  },
  {
    id: 'finance',
    name: '金融・保険',
    nameEn: 'Finance & Insurance',
    icon: '🏦',
    description: '金融・保険業界向けの営業メールテンプレート',
    keywords: ['コンプライアンス', 'セキュリティ', '自動化', 'リスク管理'],
    color: '#10B981',
    order: 4,
  },
  {
    id: 'real-estate',
    name: '不動産',
    nameEn: 'Real Estate',
    icon: '🏢',
    description: '不動産業界向けの営業メールテンプレート',
    keywords: ['反響率', '来場率', '成約率', '集客'],
    color: '#F59E0B',
    order: 5,
  },
  {
    id: 'healthcare',
    name: '医療・ヘルスケア',
    nameEn: 'Healthcare',
    icon: '🏥',
    description: '医療・ヘルスケア業界向けの営業メールテンプレート',
    keywords: ['電子カルテ', '予約管理', '患者満足度', 'DX'],
    color: '#06B6D4',
    order: 6,
  },
];

/**
 * 業種別テンプレート
 */
export interface IndustryTemplate {
  id: string;
  industryId: string;
  name: string;
  subject: string;
  content: string;
  preview: string;
  scenario: string;
  targetRole: string[];
  keywords: string[];
  stats: TemplateStats;
}

/**
 * テンプレート統計
 */
export interface TemplateStats {
  usageCount: number;
  averageOpenRate: number;
  averageClickRate: number;
  averageReplyRate: number;
}

/**
 * 業種別法人リスト
 */
export interface CompanyList {
  industryId: string;
  totalCount: number;
  companies: Company[];
}

/**
 * 法人情報
 */
export interface Company {
  id: string;
  name: string;
  industryId: string;
  employees?: number;
  revenue?: number;
  established?: Date;
  location?: {
    prefecture: string;
    city: string;
  };
  website?: string;
  description?: string;
}

/**
 * ターゲット選択条件
 */
export interface TargetCriteria {
  industryIds: string[];
  employeeRange?: {
    min?: number;
    max?: number;
  };
  revenueRange?: {
    min?: number;
    max?: number;
  };
  locations?: string[];
  keywords?: string[];
}

/**
 * 業種別キーワード
 */
export interface IndustryKeywords {
  industryId: string;
  painPoints: string[];
  solutions: string[];
  metrics: string[];
  commonTerms: string[];
}
