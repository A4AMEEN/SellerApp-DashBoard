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
    id?: string | null
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

export const COUNTRY_DATA: Record<string, CountryDashboardData> = {
    USA: {
        stats: {
            income: { value: 18000.25, percentage: 10.3 },
            profit: { value: -9000.12, percentage: 8.5 },
            views: { value: 15234.67, percentage: 4.1 },
            conversion: { value: 3.45, percentage: 1.2 },
        },
        salesData: [
            { month: "Apr", revenue: 2000, target: 8000 },
            { month: "May", revenue: 4000, target: 10000 },
            { month: "Jun", revenue: 4000, target: 10500 },
            { month: "Jul", revenue: 13000, target: 11500 },
            { month: "Aug", revenue: 11500, target: 11000 },
            { month: "Sep", revenue: 14000, target: 12000 },
            { month: "Oct", revenue: 12500, target: 13000 },
            { month: "Nov", revenue: 15000, target: 14000 },
            { month: "Dec", revenue: 17000, target: 15000 },
            { month: "Jan", revenue: 10500, target: 16000 },
        ],
        regionData: [
            { region: "Asia", value: 2331 },
            { region: "Europe", value: 2903 },
            { region: "Pacific", value: 1922 },
            { region: "Americas", value: 2445 },
            { region: "Middle East", value: 1400 },
            { region: "Africa", value: 2100 },
        ],
        userRegistration: {
            total: 2800,
            premium: 1980,
            basic: 401,
        },
        integrations: [
            { name: "Stripe", logo: "assets/stripe.svg", type: "Finance", rate: 68, profit: 10098.28 },
            { name: "Zapier", logo: "assets/zapier.svg", type: "CRM", rate: 47, profit: 8995.99 },
            { name: "Shopify", logo: "assets/shopify.svg", type: "Marketplace", rate: 38, profit: 13331.24 },
        ],
    },
    IND: {
        stats: {
            income: { value: 14000.45, percentage: 7.8 },
            profit: { value: -8500.67, percentage: -10.2 },
            views: { value: 12834.56, percentage: 3.2 },
            conversion: { value: 3.23, percentage: 1.0 },
        },
        salesData: [
            { month: "Apr", revenue: 7000, target: 6000 },
            { month: "May", revenue: 9500, target: 8000 },
            { month: "Jun", revenue: 8500, target: 7500 },
            { month: "Jul", revenue: 10500, target: 9000 },
            { month: "Aug", revenue: 9500, target: 8500 },
            { month: "Sep", revenue: 11500, target: 10000 },
            { month: "Oct", revenue: 10500, target: 9500 },
            { month: "Nov", revenue: 12000, target: 11000 },
            { month: "Dec", revenue: 13000, target: 12000 },
            { month: "Jan", revenue: 11500, target: 12500 },
        ],
        regionData: [
            { region: "Asia", value: 2500 },
            { region: "Europe", value: 1600 },
            { region: "Pacific", value: 1300 },
            { region: "Americas", value: 2900 },
            { region: "Middle East", value: 1900 },
            { region: "Africa", value: 2200 },
        ],
        userRegistration: {
            total: 3100,
            premium: 2645,
            basic: 455,
        },
        integrations: [
            { name: "Stripe", logo: "assets/stripe.svg", type: "Finance", rate: 13, profit: 9998.28 },
            { name: "Zapier", logo: "assets/zapier.svg", type: "CRM", rate: 49, profit: 7995.99 },
            { name: "Shopify", logo: "assets/shopify.svg", type: "Marketplace", rate: 48, profit: 11331.24 },
        ],
    },
    DEU: {
        stats: {
            income: { value: 19000.75, percentage: 12.3 },
            profit: { value: -9500.89, percentage: 12.1 },
            views: { value: 15345.78, percentage: 4.8 },
            conversion: { value: 4.78, percentage: 1.8 },
        },
        salesData: [
            { month: "Apr", revenue: 5000, target: 8000 },
            { month: "May", revenue: 8500, target: 9000 },
            { month: "Jun", revenue: 10500, target: 9500 },
            { month: "Jul", revenue: 12000, target: 10000 },
            { month: "Aug", revenue: 11000, target: 10500 },
            { month: "Sep", revenue: 13000, target: 11000 },
            { month: "Oct", revenue: 12000, target: 11500 },
            { month: "Nov", revenue: 13500, target: 12000 },
            { month: "Dec", revenue: 14500, target: 13000 },
            { month: "Jan", revenue: 13000, target: 13500 },
        ],
        regionData: [
            { region: "Asia", value: 2532 },
            { region: "Europe", value: 2899 },
            { region: "Pacific", value: 2177 },
            { region: "Americas", value: 2260 },
            { region: "Middle East", value: 2699 },
            { region: "Africa", value: 1890 },
        ],
        userRegistration: {
            total: 2700,
            premium: 2250,
            basic: 450,
        },
        integrations: [
            { name: "Stripe", logo: "assets/stripe.svg", type: "Finance", rate: 53, profit: 12998.28 },
            { name: "Zapier", logo: "assets/zapier.svg", type: "CRM", rate: 17, profit: 8595.99 },
            { name: "Shopify", logo: "assets/shopify.svg", type: "Marketplace", rate: 78, profit: 16331.24 },
        ],
    },

    CAN: {
        stats: {
            income: { value: 15000.65, percentage: 8.9 },
            profit: { value: -7500.33, percentage: -3.2 },
            views: { value: 13245.76, percentage: 3.7 },
            conversion: { value: 2.67, percentage: 0.8 },
        },
        salesData: [
            { month: "Apr", revenue: 4000, target: 7000 },
            { month: "May", revenue: 1000, target: 8500 },
            { month: "Jun", revenue: 9500, target: 9000 },
            { month: "Jul", revenue: 11000, target: 9500 },
            { month: "Aug", revenue: 10500, target: 9700 },
            { month: "Sep", revenue: 12000, target: 10000 },
            { month: "Oct", revenue: 11000, target: 10500 },
            { month: "Nov", revenue: 13000, target: 11000 },
            { month: "Dec", revenue: 14000, target: 11500 },
            { month: "Jan", revenue: 10500, target: 15000 },
        ],
        regionData: [
            { region: "Asia", value: 1200 },
            { region: "Europe", value: 2762 },
            { region: "Pacific", value: 1267 },
            { region: "Americas", value: 2199 },
            { region: "Middle East", value: 2883 },
            { region: "Africa", value: 2458 },
        ],
        userRegistration: {
            total: 2800,
            premium: 2400,
            basic: 400,
        },
        integrations: [
            { name: "Stripe", logo: "assets/stripe.svg", type: "Finance", rate: 13, profit: 8998.28 },
            { name: "Zapier", logo: "assets/zapier.svg", type: "CRM", rate: 87, profit: 18995.99 },
            { name: "Shopify", logo: "assets/shopify.svg", type: "Marketplace", rate: 48, profit: 16331.24 },
        ],
    },
}