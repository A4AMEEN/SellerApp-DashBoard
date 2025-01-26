
export const BASE_URL = "http://localhost:3000";

export interface StatMetric {
    value: number;
    percentage: number;
}

export interface SalesData {
    month: string;
    revenue: number;
    target: number;
}

export interface RegionData {
    region: string;
    value: number;
}

export interface UserRegistration {
    total: number;
    premium: number;
    basic: number;
}

export interface Integration {
    name: string;
    logo: string;
    type: string;
    rate: number;
    profit: number;
}

export interface CountryDashboardData {
    stats: {
        income: StatMetric;
        profit: StatMetric;
        views: StatMetric;
        conversion: StatMetric;
    };
    salesData: SalesData[];
    regionData: RegionData[];
    userRegistration: UserRegistration;
    integrations: Integration[];
}

export interface Country {
    code: string;
    name: string;
    flag: string;
}

export interface NavItem {
    label: string;
    path: string;
    icon?: string;
    svgIcon?: string;
    active?: boolean;
}

export interface Integration {
    id: string;
    name: string;
    logo: string;
    type: string;
    rate: number;
    profit: number;
}

export interface Stat {
    title: string;
    value: number;
    percentage: number;
}

export interface StatsData {
    income: Stat;
    profit: Stat;
    views: Stat;
    conversion: Stat;
}

export interface Registration {
    total: number;
    premium: number;
    basic: number;
}

export interface AppState {
    country: {
        selectedCountry: Country;
    };
}

export interface RegionData {
    region: string;
    value: number;
}

export interface SalesData {
    month: string;
    revenue: number;
    target: number;
}

export interface Integration {
    logo: string;
    name: string;
    profit: number;
    rate: number;
    type: string;
  }
  