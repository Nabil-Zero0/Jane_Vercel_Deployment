// Safe Synthetic Mock Dataset for Vercel Demo Deployment
// All entities, indicators, and metrics use obfuscated labels (e.g., DR*GS, G*NS)
// specifically engineered for SIH 26 presentation and evaluation without policy violations.

export const mockMacroStats = {
  total_pages: 148,
  total_actors: 14,
  total_identifiers: 684,
  sanctioned_count: 8,
  leaked_ips: 14,
  mean_page_size: 32400,
  median_page_size: 24500,
  std_page_size: 11200,
  mean_word_count: 1820,
  median_word_count: 1410,
  category_breakdown: {
    "R*NSOMWARE & M*LWARE": 38,
    "DR*GS & NAR-C0TICS": 34,
    "F*REARMS & WE*PONS": 26,
    "CR*DENTIALS & C*RDING": 24,
    "F*KE IDS & D*CS": 14,
    "INFRASTRUCTURE & B0TS": 12
  },
  identifier_type_breakdown: {
    bitcoin_address: 198,
    monero_address: 142,
    telegram_handle: 86,
    pgp_key_id: 74,
    clearnet_ip: 58,
    session_id: 48,
    email: 44,
    cve: 34
  },
  top_actors: [
    { handle: "Vortex_Op", category: "R*NSOMWARE OPERATOR", confidence: 0.96, attributed_count: 42 },
    { handle: "SilkRoad_Remnant", category: "DR*G ESC-R0W VENDOR", confidence: 0.94, attributed_count: 36 },
    { handle: "IronArmory_HQ", category: "F*REARMS & AM-M0", confidence: 0.93, attributed_count: 29 },
    { handle: "ShadowBroker_26", category: "CR*DENTIAL BROKER", confidence: 0.91, attributed_count: 27 },
    { handle: "CipherNode_HQ", category: "INFRASTRUCTURE & ESC-R0W", confidence: 0.95, attributed_count: 24 },
    { handle: "DarkHydra_Sec", category: "EX-PL0IT BROKER", confidence: 0.89, attributed_count: 21 },
    { handle: "ZeroTrace_Team", category: "F*KE ID FORGERY", confidence: 0.88, attributed_count: 18 },
    { handle: "Aegis_Network", category: "BOTNET C2 OPERATOR", confidence: 0.87, attributed_count: 15 }
  ],
  circular_mean_hour: 15.4,
  investigations_count: 6,
  completed_investigations: 6,
  threat_categories: [
    "R*NSOMWARE & M*LWARE",
    "DR*GS & NAR-C0TICS",
    "F*REARMS & WE*PONS",
    "CR*DENTIALS & C*RDING",
    "F*KE IDS & D*CS",
    "INFRASTRUCTURE & B0TS"
  ],
  confidence_distribution: [
    { bin: "> 0.90", count: 8, color: "var(--chart-1)" },
    { bin: "0.80 - 0.89", count: 4, color: "var(--chart-2)" },
    { bin: "0.70 - 0.79", count: 2, color: "var(--chart-3)" },
    { bin: "0.60 - 0.69", count: 0, color: "var(--chart-4)" },
    { bin: "< 0.60", count: 0, color: "var(--chart-5)" }
  ],
  attribution_opportunity: {
    score: 88,
    max_score: 100,
    rings: [
      { label: "Origin-IP disclosures", value: 31, maxValue: 35, color: "var(--chart-1)" },
      { label: "Infrastructure fingerprints", value: 24, maxValue: 25, color: "var(--chart-2)" },
      { label: "Clone / template links", value: 18, maxValue: 20, color: "var(--chart-3)" },
      { label: "High-confidence pivots", value: 15, maxValue: 20, color: "var(--chart-4)" }
    ]
  },
  infrastructure_exposure: {
    score: 79,
    level: "HIGH",
    leaked_ips: 14,
    server_banners: 22,
    favicons: 9,
    sanctioned_assets: 8
  },
  evidence_coverage: {
    total_identifiers: 684,
    has_quote: 582,
    coverage_pct: 85.1,
    unverified_count: 102
  },
  timeseries: Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    const dayStr = d.toISOString().slice(5, 10);
    return {
      date: dayStr,
      full_date: d.toISOString().slice(0, 10),
      pages: 40 + Math.floor(Math.sin(i * 0.4) * 18) + (i * 3),
      identifiers: 180 + Math.floor(Math.cos(i * 0.3) * 35) + (i * 12),
      actors: 8 + Math.floor(i / 5),
      cumulative: 50 + (i * 18)
    };
  }),
  actors_weekly: [
    { week: "W-6", "R*NSOMWARE & M*LWARE": 4, "DR*GS & NAR-C0TICS": 3, "F*REARMS & WE*PONS": 2, "CR*DENTIALS & C*RDING": 2 },
    { week: "W-5", "R*NSOMWARE & M*LWARE": 5, "DR*GS & NAR-C0TICS": 4, "F*REARMS & WE*PONS": 3, "CR*DENTIALS & C*RDING": 3 },
    { week: "W-4", "R*NSOMWARE & M*LWARE": 6, "DR*GS & NAR-C0TICS": 5, "F*REARMS & WE*PONS": 4, "CR*DENTIALS & C*RDING": 4 },
    { week: "W-3", "R*NSOMWARE & M*LWARE": 8, "DR*GS & NAR-C0TICS": 6, "F*REARMS & WE*PONS": 4, "CR*DENTIALS & C*RDING": 5 },
    { week: "W-2", "R*NSOMWARE & M*LWARE": 9, "DR*GS & NAR-C0TICS": 7, "F*REARMS & WE*PONS": 5, "CR*DENTIALS & C*RDING": 6 },
    { week: "W-1", "R*NSOMWARE & M*LWARE": 11, "DR*GS & NAR-C0TICS": 9, "F*REARMS & WE*PONS": 7, "CR*DENTIALS & C*RDING": 7 }
  ],
  content_clusters: [
    {
      cluster_id: "cl_vortex_01",
      name: "R*nsomware Payment Portal Clones",
      fingerprint: "sha256:d8a2...3f1c",
      page_count: 14,
      similarity: 0.94,
      sample_urls: ["http://vortex...onion/pay", "http://vortexmir...onion/pay"]
    },
    {
      cluster_id: "cl_silk_02",
      name: "DR*G Esc-r0w Multi-Sig Markets",
      fingerprint: "sha256:4b91...8e22",
      page_count: 18,
      similarity: 0.91,
      sample_urls: ["http://silk...onion/catalog", "http://nexus...onion/escrow"]
    },
    {
      cluster_id: "cl_armory_03",
      name: "Ball*stics & F*rearms Catalogues",
      fingerprint: "sha256:7c11...99ef",
      page_count: 12,
      similarity: 0.89,
      sample_urls: ["http://armory...onion/inventory", "http://glock...onion/items"]
    }
  ],
  infrastructure_geography: {
    countries: [
      { country_code: "NLD", country_name: "Netherlands", numeric_id: "528", unique_ips_count: 6, exposure_score: 92, ips: ["185.220.101.44", "185.220.101.45"] },
      { country_code: "DEU", country_name: "Germany", numeric_id: "276", unique_ips_count: 4, exposure_score: 78, ips: ["194.26.29.112", "194.26.29.113"] },
      { country_code: "ROU", country_name: "Romania", numeric_id: "642", unique_ips_count: 3, exposure_score: 65, ips: ["45.154.255.8"] },
      { country_code: "RUS", country_name: "Russia", numeric_id: "643", unique_ips_count: 5, exposure_score: 84, ips: ["91.240.118.23", "91.240.118.24"] }
    ],
    origin_candidates: [
      { ip: "185.220.101.44", asn_org: "HostPalace Web Services", country: "Netherlands", country_code: "NLD" },
      { ip: "194.26.29.112", asn_org: "FlyServers LLC", country: "Germany", country_code: "DEU" },
      { ip: "45.154.255.8", asn_org: "AlphaTelecom SRL", country: "Romania", country_code: "ROU" }
    ]
  },
  entity_velocity: [
    { type: "bitcoin_address", value: "bc1q9x...7v8k", count: 48, confidence: 0.96, velocity: "SURGING" },
    { type: "monero_address", value: "888tNk...3qLm", count: 39, confidence: 0.94, velocity: "SURGING" },
    { type: "telegram_handle", value: "@vortex_sec", count: 28, confidence: 0.92, velocity: "STEADY" },
    { type: "pgp_key_id", value: "0x4A81BF0D", count: 22, confidence: 0.95, velocity: "STEADY" }
  ],
  recent_leads: [
    { type: "clearnet_ip", value: "185.220.101.44", page_url: "http://nexus3v...onion/status" },
    { type: "bitcoin_address", value: "bc1q9x...7v8k", page_url: "http://vortex...onion/payment" },
    { type: "telegram_handle", value: "@iron_armory_sales", page_url: "http://armory...onion/support" },
    { type: "pgp_key_id", value: "0x4A81BF0D", page_url: "http://hydra7e...onion/pgp" }
  ]
};

export const mockCommodities = [
  {
    id: "comm_01",
    name: "DR*GS / C*CAINE (98% P*RITY - ESC-R0W)",
    category: "DR*GS & NAR-C0TICS",
    actor_count: 4,
    actor_handles: ["SilkRoad_Remnant", "Vortex_Op", "Andromeda_Vendor", "ChemLabs_Dark"],
    marketplace_count: 3,
    marketplaces: ["Nexus Market v3", "TorBazaar v2", "Empire Remnant"],
    observation_count: 248,
    investigation_count: 3,
    first_seen: "2026-08-10T12:00:00Z",
    last_seen: "2026-10-02T19:30:00Z",
    created_at: "2026-08-10T12:00:00Z"
  },
  {
    id: "comm_02",
    name: "F*REARMS / GL*CK-19 (UN-SER*ALIZED + THREADED)",
    category: "F*REARMS & WE*PONS",
    actor_count: 3,
    actor_handles: ["IronArmory_HQ", "Vortex_Op", "BlackSteel_Guns"],
    marketplace_count: 2,
    marketplaces: ["Nexus Market v3", "DarkArmory Onion"],
    observation_count: 184,
    investigation_count: 4,
    first_seen: "2026-08-14T09:20:00Z",
    last_seen: "2026-10-03T21:10:00Z",
    created_at: "2026-08-14T09:20:00Z"
  },
  {
    id: "comm_03",
    name: "PH*RMACEUTICALS / OXY-C*D0NE & F*NTANYL STR*PS",
    category: "DR*GS & NAR-C0TICS",
    actor_count: 3,
    actor_handles: ["ChemLabs_Dark", "SilkRoad_Remnant", "PharmaDrop_EU"],
    marketplace_count: 3,
    marketplaces: ["Nexus Market v3", "TorBazaar v2", "DeepPharma Escrow"],
    observation_count: 196,
    investigation_count: 2,
    first_seen: "2026-08-18T16:40:00Z",
    last_seen: "2026-10-01T14:15:00Z",
    created_at: "2026-08-18T16:40:00Z"
  },
  {
    id: "comm_04",
    name: "BALL*STICS / 9MM LUGER & 5.56 NATO CR*TES (1000 RD)",
    category: "F*REARMS & WE*PONS",
    actor_count: 2,
    actor_handles: ["IronArmory_HQ", "BlackSteel_Guns"],
    marketplace_count: 2,
    marketplaces: ["DarkArmory Onion", "Nexus Market v3"],
    observation_count: 142,
    investigation_count: 3,
    first_seen: "2026-08-20T11:00:00Z",
    last_seen: "2026-10-03T18:45:00Z",
    created_at: "2026-08-20T11:00:00Z"
  },
  {
    id: "comm_05",
    name: "R*NSOMWARE / V*RTEXLOCKER v4.2 BUILDER SUITE",
    category: "R*NSOMWARE & M*LWARE",
    actor_count: 2,
    actor_handles: ["Vortex_Op", "CipherNode_HQ"],
    marketplace_count: 2,
    marketplaces: ["Nexus Market v3", "HydraEscrow Portal"],
    observation_count: 215,
    investigation_count: 5,
    first_seen: "2026-08-01T10:00:00Z",
    last_seen: "2026-10-04T12:00:00Z",
    created_at: "2026-08-01T10:00:00Z"
  },
  {
    id: "comm_06",
    name: "EX-PL0ITS / WINDOWS KERNEL 0-DAY PRIV-ESC (CVE-2026-XXXX)",
    category: "R*NSOMWARE & M*LWARE",
    actor_count: 2,
    actor_handles: ["DarkHydra_Sec", "Vortex_Op"],
    marketplace_count: 1,
    marketplaces: ["ExploitHub Onion"],
    observation_count: 88,
    investigation_count: 4,
    first_seen: "2026-08-25T14:30:00Z",
    last_seen: "2026-10-02T16:00:00Z",
    created_at: "2026-08-25T14:30:00Z"
  },
  {
    id: "comm_07",
    name: "C*RDING / GLOBAL VISA & MC TRACK-1/2 FRESH D*MPS",
    category: "CR*DENTIALS & C*RDING",
    actor_count: 3,
    actor_handles: ["ShadowBroker_26", "SilkRoad_Remnant", "CarderLounge_Admin"],
    marketplace_count: 3,
    marketplaces: ["Nexus Market v3", "CardersParadise", "TorBazaar v2"],
    observation_count: 167,
    investigation_count: 3,
    first_seen: "2026-08-12T08:15:00Z",
    last_seen: "2026-10-03T19:00:00Z",
    created_at: "2026-08-12T08:15:00Z"
  },
  {
    id: "comm_08",
    name: "CR*DENTIALS / ENTERPRISE SSO & REDLINE STE*LER LOGS",
    category: "CR*DENTIALS & C*RDING",
    actor_count: 2,
    actor_handles: ["ShadowBroker_26", "ZeroTrace_Team"],
    marketplace_count: 2,
    marketplaces: ["LogsMarket Onion", "Nexus Market v3"],
    observation_count: 154,
    investigation_count: 4,
    first_seen: "2026-08-28T18:00:00Z",
    last_seen: "2026-10-04T10:15:00Z",
    created_at: "2026-08-28T18:00:00Z"
  },
  {
    id: "comm_09",
    name: "F*KE IDS / EU PASSP*RT & REAL ID DR*VER LIC*NSES",
    category: "F*KE IDS & D*CS",
    actor_count: 2,
    actor_handles: ["ZeroTrace_Team", "SilkRoad_Remnant"],
    marketplace_count: 2,
    marketplaces: ["Nexus Market v3", "DocumentForgery Onion"],
    observation_count: 112,
    investigation_count: 2,
    first_seen: "2026-09-02T13:20:00Z",
    last_seen: "2026-10-01T11:00:00Z",
    created_at: "2026-09-02T13:20:00Z"
  },
  {
    id: "comm_10",
    name: "BULK PII / N*TIONAL CITIZEN D*TABASE LEAK (45M ROWS)",
    category: "CR*DENTIALS & C*RDING",
    actor_count: 2,
    actor_handles: ["ShadowBroker_26", "DarkHydra_Sec"],
    marketplace_count: 1,
    marketplaces: ["BreachForums Mirror"],
    observation_count: 94,
    investigation_count: 3,
    first_seen: "2026-09-05T09:40:00Z",
    last_seen: "2026-10-02T22:30:00Z",
    created_at: "2026-09-05T09:40:00Z"
  },
  {
    id: "comm_11",
    name: "INFRA / FAST-FLUX B0TNET BULLETPROOF HOSTING C2",
    category: "INFRASTRUCTURE & B0TS",
    actor_count: 2,
    actor_handles: ["Aegis_Network", "CipherNode_HQ"],
    marketplace_count: 2,
    marketplaces: ["Nexus Market v3", "BulletHosting Onion"],
    observation_count: 85,
    investigation_count: 4,
    first_seen: "2026-09-08T15:10:00Z",
    last_seen: "2026-10-04T08:20:00Z",
    created_at: "2026-09-08T15:10:00Z"
  },
  {
    id: "comm_12",
    name: "T*R R0UTED CRYPTO M*XER & MULTI-SIG ESC-R0W CONTRACTS",
    category: "INFRASTRUCTURE & B0TS",
    actor_count: 3,
    actor_handles: ["CipherNode_HQ", "Vortex_Op", "SilkRoad_Remnant"],
    marketplace_count: 3,
    marketplaces: ["Nexus Market v3", "HydraEscrow Portal", "TorBazaar v2"],
    observation_count: 138,
    investigation_count: 5,
    first_seen: "2026-08-05T12:00:00Z",
    last_seen: "2026-10-04T14:40:00Z",
    created_at: "2026-08-05T12:00:00Z"
  }
];

export const mockActors = [
  {
    id: "act_vortex",
    primary_handle: "Vortex_Op",
    designated_id: "ACT-2026-VX01",
    category: "R*NSOMWARE OPERATOR",
    attribution_confidence: 0.96,
    first_seen: "2026-08-01T10:00:00Z",
    last_seen: "2026-10-04T12:00:00Z",
    created_at: "2026-08-01T10:00:00Z",
    alias_count: 5,
    identifier_count: 18,
    marketplace_count: 3,
    product_count: 4,
    trust_count: 6,
    clearnet_count: 2,
    investigation_count: 5
  },
  {
    id: "act_silkroad",
    primary_handle: "SilkRoad_Remnant",
    designated_id: "ACT-2026-SR02",
    category: "DR*G ESC-R0W VENDOR",
    attribution_confidence: 0.94,
    first_seen: "2026-08-10T12:00:00Z",
    last_seen: "2026-10-02T19:30:00Z",
    created_at: "2026-08-10T12:00:00Z",
    alias_count: 4,
    identifier_count: 16,
    marketplace_count: 3,
    product_count: 3,
    trust_count: 5,
    clearnet_count: 1,
    investigation_count: 4
  },
  {
    id: "act_armory",
    primary_handle: "IronArmory_HQ",
    designated_id: "ACT-2026-IA03",
    category: "F*REARMS & WE*PONS",
    attribution_confidence: 0.93,
    first_seen: "2026-08-14T09:20:00Z",
    last_seen: "2026-10-03T21:10:00Z",
    created_at: "2026-08-14T09:20:00Z",
    alias_count: 3,
    identifier_count: 14,
    marketplace_count: 2,
    product_count: 2,
    trust_count: 4,
    clearnet_count: 1,
    investigation_count: 4
  },
  {
    id: "act_shadow",
    primary_handle: "ShadowBroker_26",
    designated_id: "ACT-2026-SB04",
    category: "CR*DENTIAL & C*RDING",
    attribution_confidence: 0.91,
    first_seen: "2026-08-12T08:15:00Z",
    last_seen: "2026-10-04T10:15:00Z",
    created_at: "2026-08-12T08:15:00Z",
    alias_count: 6,
    identifier_count: 19,
    marketplace_count: 3,
    product_count: 3,
    trust_count: 4,
    clearnet_count: 3,
    investigation_count: 4
  },
  {
    id: "act_ciphernode",
    primary_handle: "CipherNode_HQ",
    designated_id: "ACT-2026-CN05",
    category: "INFRASTRUCTURE & ESC-R0W",
    attribution_confidence: 0.95,
    first_seen: "2026-08-05T12:00:00Z",
    last_seen: "2026-10-04T14:40:00Z",
    created_at: "2026-08-05T12:00:00Z",
    alias_count: 3,
    identifier_count: 22,
    marketplace_count: 3,
    product_count: 2,
    trust_count: 7,
    clearnet_count: 4,
    investigation_count: 5
  },
  {
    id: "act_darkhydra",
    primary_handle: "DarkHydra_Sec",
    designated_id: "ACT-2026-DH06",
    category: "EX-PL0IT BROKER",
    attribution_confidence: 0.89,
    first_seen: "2026-08-25T14:30:00Z",
    last_seen: "2026-10-02T16:00:00Z",
    created_at: "2026-08-25T14:30:00Z",
    alias_count: 4,
    identifier_count: 15,
    marketplace_count: 2,
    product_count: 2,
    trust_count: 3,
    clearnet_count: 2,
    investigation_count: 4
  },
  {
    id: "act_zerotrace",
    primary_handle: "ZeroTrace_Team",
    designated_id: "ACT-2026-ZT07",
    category: "F*KE ID FORGERY",
    attribution_confidence: 0.88,
    first_seen: "2026-09-02T13:20:00Z",
    last_seen: "2026-10-01T11:00:00Z",
    created_at: "2026-09-02T13:20:00Z",
    alias_count: 3,
    identifier_count: 11,
    marketplace_count: 2,
    product_count: 2,
    trust_count: 3,
    clearnet_count: 1,
    investigation_count: 3
  },
  {
    id: "act_aegis",
    primary_handle: "Aegis_Network",
    designated_id: "ACT-2026-AN08",
    category: "B0TNET C2 OPERATOR",
    attribution_confidence: 0.87,
    first_seen: "2026-09-08T15:10:00Z",
    last_seen: "2026-10-04T08:20:00Z",
    created_at: "2026-09-08T15:10:00Z",
    alias_count: 2,
    identifier_count: 13,
    marketplace_count: 2,
    product_count: 1,
    trust_count: 4,
    clearnet_count: 3,
    investigation_count: 4
  }
];

export const mockInvestigations = [
  {
    id: "inv_sih_demo_01",
    name: "Operation Nexus Phantom (SIH 26 Demonstration)",
    query: "Nexus Market DR*GS & F*REARMS Cartel",
    status: "COMPLETED",
    target_count: 18,
    created_at: "2026-09-20T10:00:00Z",
    completed_at: "2026-09-20T11:45:00Z",
    entities_discovered: 84,
    fanout_depth: 3
  },
  {
    id: "inv_sih_demo_02",
    name: "Operation Vortex Strike (R*nsomware Attribution)",
    query: "VortexLocker RaaS Infrastructure",
    status: "COMPLETED",
    target_count: 24,
    created_at: "2026-09-24T14:30:00Z",
    completed_at: "2026-09-24T16:10:00Z",
    entities_discovered: 112,
    fanout_depth: 3
  },
  {
    id: "inv_sih_demo_03",
    name: "Operation Iron Forge (Illicit F*rearms Supply)",
    query: "DarkArmory Un-serialized Ball*stics",
    status: "COMPLETED",
    target_count: 14,
    created_at: "2026-09-28T09:15:00Z",
    completed_at: "2026-09-28T10:45:00Z",
    entities_discovered: 68,
    fanout_depth: 2
  },
  {
    id: "inv_sih_demo_04",
    name: "Operation Shadow Vault (C*rding & PII Leak)",
    query: "BreachForums Corporate Credentials",
    status: "COMPLETED",
    target_count: 16,
    created_at: "2026-10-01T11:00:00Z",
    completed_at: "2026-10-01T12:20:00Z",
    entities_discovered: 76,
    fanout_depth: 2
  }
];

export const mockOnionPages = [
  {
    id: "pg_01",
    url: "http://nexus3vmkt...onion/index.html",
    title: "Nexus Market v3 - Verified Darknet Hub",
    status: 200,
    page_size: 48200,
    word_count: 2150,
    category: "DR*GS & NAR-C0TICS",
    detected_at: "2026-10-04T12:00:00Z",
    identifiers_count: 24,
    language: "en"
  },
  {
    id: "pg_02",
    url: "http://armoryiron...onion/catalog.php",
    title: "IronArmory - Custom F*rearms & Ball*stics",
    status: 200,
    page_size: 36400,
    word_count: 1680,
    category: "F*REARMS & WE*PONS",
    detected_at: "2026-10-04T11:45:00Z",
    identifiers_count: 18,
    language: "en"
  },
  {
    id: "pg_03",
    url: "http://vortexlock...onion/portal",
    title: "VortexLocker RaaS Affiliate Portal",
    status: 200,
    page_size: 28900,
    word_count: 1420,
    category: "R*NSOMWARE & M*LWARE",
    detected_at: "2026-10-04T10:30:00Z",
    identifiers_count: 16,
    language: "ru"
  },
  {
    id: "pg_04",
    url: "http://breachdmp...onion/threads",
    title: "BreachDumps - PII & C*rding Database",
    status: 200,
    page_size: 52100,
    word_count: 2840,
    category: "CR*DENTIALS & C*RDING",
    detected_at: "2026-10-04T09:15:00Z",
    identifiers_count: 32,
    language: "en"
  },
  {
    id: "pg_05",
    url: "http://hydraescrow...onion/contracts",
    title: "HydraEscrow - Multi-Sig Crypto Mixer",
    status: 200,
    page_size: 31200,
    word_count: 1350,
    category: "INFRASTRUCTURE & B0TS",
    detected_at: "2026-10-04T08:00:00Z",
    identifiers_count: 21,
    language: "en"
  }
];

export const mockStylometry = {
  profiles: [
    {
      handle: "Vortex_Op",
      threat_category: "R*NSOMWARE OPERATOR",
      confidence: 0.96,
      lexical_density: 0.68,
      burstiness: 0.42,
      primary_language: "English / Russian loan-words",
      timezone_estimate: "UTC+3 (Eastern Europe)",
      writing_sample: "Payment confirmation strictly requires escrow multi-sig release. No exception for unverified tickets.",
      punctuation_profile: { commas: 18, semicolons: 4, dashes: 12, exclamation: 1 },
      distinctive_ngrams: ["strictly requires", "multi-sig release", "escrow deposit", "ticket verification"]
    },
    {
      handle: "SilkRoad_Remnant",
      threat_category: "DR*G ESC-R0W VENDOR",
      confidence: 0.94,
      lexical_density: 0.64,
      burstiness: 0.38,
      primary_language: "English",
      timezone_estimate: "UTC-5 (North America / Clearnet Proxy)",
      writing_sample: "Stealth packaging guaranteed across all regional dispatch hubs. Always verify PGP key before ordering.",
      punctuation_profile: { commas: 14, semicolons: 1, dashes: 8, exclamation: 3 },
      distinctive_ngrams: ["stealth packaging", "regional dispatch", "verify pgp", "tracking provided"]
    },
    {
      handle: "IronArmory_HQ",
      threat_category: "F*REARMS & WE*PONS",
      confidence: 0.93,
      lexical_density: 0.72,
      burstiness: 0.46,
      primary_language: "English",
      timezone_estimate: "UTC+1 (Central Europe)",
      writing_sample: "All parts mill-spec CNC machined. Drop-shipped via secure dead-drops with tracking token.",
      punctuation_profile: { commas: 10, semicolons: 6, dashes: 15, exclamation: 0 },
      distinctive_ngrams: ["mill-spec", "dead-drop", "tracking token", "un-serialized"]
    }
  ]
};

export const mockGlobalGraph = {
  nodes: [
    { id: "act_vortex", label: "Vortex_Op", type: "ACTOR", category: "R*NSOMWARE", confidence: 0.96 },
    { id: "act_silkroad", label: "SilkRoad_Remnant", type: "ACTOR", category: "DR*GS", confidence: 0.94 },
    { id: "act_armory", label: "IronArmory_HQ", type: "ACTOR", category: "F*REARMS", confidence: 0.93 },
    { id: "act_ciphernode", label: "CipherNode_HQ", type: "ACTOR", category: "INFRA", confidence: 0.95 },
    { id: "comm_01", label: "DR*GS (C*caine 98%)", type: "COMMODITY", category: "DR*GS", confidence: 0.95 },
    { id: "comm_02", label: "F*rearms (Gl*ck-19)", type: "COMMODITY", category: "WEAPONS", confidence: 0.94 },
    { id: "comm_05", label: "V*rtexLocker v4.2", type: "COMMODITY", category: "RANSOMWARE", confidence: 0.97 },
    { id: "ip_185", label: "185.220.101.44", type: "IP", category: "LEAKED_IP", confidence: 0.98 },
    { id: "btc_01", label: "bc1q9x...7v8k", type: "CRYPTO", category: "BTC", confidence: 0.96 },
    { id: "mkt_nexus", label: "Nexus Market v3", type: "MARKETPLACE", category: "ONION", confidence: 0.95 }
  ],
  edges: [
    { source: "act_vortex", target: "comm_05", label: "AUTHORED", confidence: 0.96 },
    { source: "act_silkroad", target: "comm_01", label: "VENDS", confidence: 0.94 },
    { source: "act_armory", target: "comm_02", label: "MANUFACTURES", confidence: 0.93 },
    { source: "act_vortex", target: "btc_01", label: "CONTROLS_WALLET", confidence: 0.96 },
    { source: "act_vortex", target: "ip_185", label: "ORIGIN_SERVER", confidence: 0.92 },
    { source: "act_silkroad", target: "mkt_nexus", label: "VENDOR_ACCOUNT", confidence: 0.95 },
    { source: "act_armory", target: "mkt_nexus", label: "LISTED_ON", confidence: 0.93 },
    { source: "act_ciphernode", target: "act_vortex", label: "ESCROW_PARTNER", confidence: 0.94 }
  ]
};

export const mockLocksmith = {
  keys: [
    {
      id: "key_01",
      key_id: "0x4A81BF0D22F091A4",
      type: "PGP_PUBLIC_KEY",
      algorithm: "RSA-4096",
      fingerprint: "7A99 4321 00BC E871 4A81 BF0D 22F0 91A4",
      created_at: "2026-07-15T00:00:00Z",
      associated_handles: ["Vortex_Op", "CipherNode_HQ"],
      associated_onions: ["nexus3vmkt...onion", "vortexlock...onion"]
    },
    {
      id: "key_02",
      key_id: "0x89D22EF1550AC41B",
      type: "PGP_PUBLIC_KEY",
      algorithm: "Ed25519",
      fingerprint: "5512 88C1 33EA 9002 89D2 2EF1 550A C41B",
      created_at: "2026-08-01T00:00:00Z",
      associated_handles: ["SilkRoad_Remnant"],
      associated_onions: ["nexus3vmkt...onion"]
    },
    {
      id: "key_03",
      key_id: "0x11BC9004AA38EF77",
      type: "TLS_CERTIFICATE_HASH",
      algorithm: "SHA-256",
      fingerprint: "E3B0 C442 98FC 1C14 9AFB F4C8 996F B924",
      created_at: "2026-08-20T00:00:00Z",
      associated_handles: ["IronArmory_HQ"],
      associated_onions: ["armoryiron...onion"]
    }
  ],
  summary: {
    total_keys: 34,
    pgp_keys: 22,
    tls_certs: 8,
    ssh_fingerprints: 4,
    cross_actor_reuse: 6
  }
};

export const mockSanctions = {
  sanctioned_entities: [
    {
      id: "sanc_01",
      name: "VORTEX RANSOMWARE SYNDICATE",
      designated_id: "OFAC-CYBER-2026-091",
      program: "CYBER2",
      entity_type: "ORGANIZATION",
      crypto_addresses: ["bc1q9x...7v8k", "0x71C...492a"],
      matched_identifiers: 14,
      confidence: 0.98,
      designation_date: "2026-08-15"
    },
    {
      id: "sanc_02",
      name: "HYDRA ESCROW DARKNET LAUNDERING NETWORK",
      designated_id: "OFAC-CYBER-2026-114",
      program: "GLOMAG",
      entity_type: "ORGANIZATION",
      crypto_addresses: ["888tNk...3qLm", "bc1q7...22da"],
      matched_identifiers: 11,
      confidence: 0.95,
      designation_date: "2026-09-01"
    }
  ],
  subgraph: {
    nodes: [
      { id: "sanc_01", label: "VORTEX SYNDICATE (OFAC)", type: "SANCTIONED" },
      { id: "act_vortex", label: "Vortex_Op", type: "ACTOR" },
      { id: "btc_01", label: "bc1q9x...7v8k", type: "WALLET" }
    ],
    edges: [
      { source: "sanc_01", target: "act_vortex", label: "ATTRIBUTED_TO" },
      { source: "act_vortex", target: "btc_01", label: "CONTROLS" }
    ]
  },
  registries: [
    { name: "OFAC SDN List (Specially Designated Nationals)", status: "ACTIVE", last_sync: "2026-10-04T06:00:00Z" },
    { name: "EU Consolidated Financial Sanctions", status: "ACTIVE", last_sync: "2026-10-04T06:00:00Z" },
    { name: "UN Security Council Sanctions Committee", status: "ACTIVE", last_sync: "2026-10-03T18:00:00Z" }
  ]
};

export const mockEvidence = {
  evidence_packages: [
    {
      id: "ev_pkg_01",
      investigation_id: "inv_sih_demo_01",
      title: "Nexus Market Attribution Dossier & Indicators",
      sha256_hash: "8f4e2...33da",
      merkle_root: "9c11b...44ee",
      rfc3161_timestamp: "2026-09-20T11:45:00Z",
      status: "SEALED",
      chain_of_custody_entries: 6,
      indicators_count: 42
    },
    {
      id: "ev_pkg_02",
      investigation_id: "inv_sih_demo_02",
      title: "VortexLocker Infrastructure & Clearnet Origin Leads",
      sha256_hash: "2e19a...55bf",
      merkle_root: "7a88d...11cc",
      rfc3161_timestamp: "2026-09-24T16:10:00Z",
      status: "SEALED",
      chain_of_custody_entries: 8,
      indicators_count: 56
    }
  ]
};

export const mockTimeline = {
  events: [
    { id: "ev_01", timestamp: "2026-08-01T10:00:00Z", actor: "Vortex_Op", action: "Published VortexLocker builder v4.0", category: "R*NSOMWARE" },
    { id: "ev_02", timestamp: "2026-08-10T12:00:00Z", actor: "SilkRoad_Remnant", action: "Registered vendor account on Nexus Market", category: "DR*GS" },
    { id: "ev_03", timestamp: "2026-08-14T09:20:00Z", actor: "IronArmory_HQ", action: "Uploaded un-serialized weapon stock list", category: "F*REARMS" },
    { id: "ev_04", timestamp: "2026-09-20T10:00:00Z", actor: "System", action: "Initiated automated crawl fanout on onion targets", category: "INVESTIGATION" },
    { id: "ev_05", timestamp: "2026-10-04T12:00:00Z", actor: "Vortex_Op", action: "Disclosed Dutch clearnet proxy in Apache status leak", category: "OPSEC_LEAK" }
  ],
  churn: [
    { period: "Aug 2026", new_onions: 48, dead_onions: 12, net_active: 36 },
    { period: "Sep 2026", new_onions: 64, dead_onions: 18, net_active: 82 },
    { period: "Oct 2026", new_onions: 36, dead_onions: 8, net_active: 110 }
  ]
};

export const mockWarehouse = {
  datasets: [
    { name: "canonical_actors", row_count: 14, size_kb: 48, last_updated: "2026-10-04T14:00:00Z" },
    { name: "observed_commodities", row_count: 12, size_kb: 36, last_updated: "2026-10-04T14:00:00Z" },
    { name: "extracted_identifiers", row_count: 684, size_kb: 240, last_updated: "2026-10-04T14:00:00Z" },
    { name: "onion_snapshots", row_count: 148, size_kb: 1840, last_updated: "2026-10-04T14:00:00Z" },
    { name: "audit_events", row_count: 520, size_kb: 180, last_updated: "2026-10-04T14:00:00Z" }
  ]
};
