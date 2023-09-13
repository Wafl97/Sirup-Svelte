const impacts = ["insignificant", "minor", "significant", "major", "sever"] as const;
const likelyhoods = ["almost certain", "likely", "possible", "unlikely", "rare"] as const;

export type Impact = typeof impacts[number];
export type Likelyhood = typeof likelyhoods[number];

export type Risk = {
    name: string;
    likelyhood: Likelyhood;
    impact: Impact;
}

export {impacts, likelyhoods};