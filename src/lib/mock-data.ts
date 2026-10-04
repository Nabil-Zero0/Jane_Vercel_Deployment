// Safe Synthetic Mock Dataset for Vercel Demo Deployment
// All entities, indicators, and metrics are 100% fictional for SIH 26 presentation.

export const mockMacroStats = {
  total_pages: 72,
  total_actors: 14,
  total_identifiers: 480,
  sanctioned_count: 6,
  leaked_ips: 8,
  mean_page_size: 28400,
  median_page_size: 21500,
  std_page_size: 9400,
  mean_word_count: 1540,
  median_word_count: 1210,
  category_breakdown: {
    "Ransomware & Malware": 24,
    "Financial & Carding": 18,
    "Credentials & Access": 16,
    "Infrastructure & Botnets": 14
  },
  identifier_type_breakdown: {
    bitcoin_address: 142,
    monero_address: 88,
    telegram_handle: 64,
    pgp_key_id: 52,
    session_id: 41,
    email: 39,
    clearnet_ip: 28,
    cve: 26
  },
  top_actors: [
    { handle: "Vortex_Op", count: 34 },
    { handle: "CipherNode_HQ", count: 27 },
    { handle: "ShadowBroker_26", count: 23 },
    { handle: "DarkHydra_Sec", count: 18 },
    { handle: "ZeroTrace_Team", count: 15 },
    { handle: "Aegis_Network", count: 12 }
  ],
  circular_mean_hour: 15.2,
  investigations_count: 6,
  completed_investigations: 6,
  recent_leads: [
    { title: "Vortex_Op rotated BTC deposit wallet", timestamp: "2 hours ago", severity: "HIGH" },
    { title: "Apache mod_status origin IP leak on ShadowMarket mirror", timestamp: "4 hours ago", severity: "CRITICAL" },
    { title: "Stylometric function-word overlap detected between CipherNode and Aegis", timestamp: "7 hours ago", severity: "MEDIUM" }
  ],
  timeseries: Array.from({ length: 30 }, (_, i) => {
    const day = (i + 1).toString().padStart(2, "0");
    return {
      date: `2026-09-${day}`,
      pages: Math.floor(10 + Math.sin(i / 3) * 6 + (i * 0.4)),
      identifiers: Math.floor(45 + Math.cos(i / 2) * 15 + (i * 1.8)),
      actors: Math.floor(2 + (i % 4 === 0 ? 1 : 0))
    };
  }),
  actors_weekly: [
    { week: "W1", count: 3 },
    { week: "W2", count: 4 },
    { week: "W3", count: 3 },
    { week: "W4", count: 4 }
  ],
  threat_categories: [
    { category: "Ransomware", percentage: 38 },
    { category: "Data Brokerage", percentage: 28 },
    { category: "Access Brokerage", percentage: 20 },
    { category: "Crypto Escrow", percentage: 14 }
  ],
  confidence_distribution: [
    { bin: "0.0 - 0.2", count: 14 },
    { bin: "0.2 - 0.4", count: 36 },
    { bin: "0.4 - 0.6", count: 82 },
    { bin: "0.6 - 0.8", count: 198 },
    { bin: "0.8 - 1.0", count: 150 }
  ],
  evidence_coverage: {
    supported_percentage: 95.8,
    unsupported_percentage: 4.2
  },
  infrastructure_exposure: [
    { type: "Favicon MurmurHash3", count: 18 },
    { type: "Apache /server-status", count: 8 },
    { type: "Asset Template Hash", count: 26 },
    { type: "ETag Tracking", count: 20 }
  ],
  attribution_opportunity: {
    origin_ip_disclosure: 88,
    infrastructure_fingerprints: 92,
    template_code_reuse: 80,
    high_confidence_pivots: 94
  },
  content_clusters: [
    { cluster: "RaaS Affiliate Portals", count: 14 },
    { cluster: "Automated Escrow Bots", count: 10 },
    { cluster: "Stolen Credential Dumps", count: 12 },
    { cluster: "Zero-Day Exploit Exchanges", count: 8 }
  ],
  entity_velocity: {
    daily_rate: 16.4,
    weekly_growth: 24.2
  },
  infrastructure_geography: [
    { id: "643", code: "RU", country: "Russia", value: 5 },
    { id: "840", code: "US", country: "United States", value: 3 },
    { id: "528", code: "NL", country: "Netherlands", value: 4 },
    { id: "276", code: "DE", country: "Germany", value: 3 },
    { id: "688", code: "RS", country: "Serbia", value: 2 },
    { id: "756", code: "CH", country: "Switzerland", value: 2 }
  ]
};

export const mockInvestigations = [
  {
    id: "inv_sih_demo_01",
    query: "Russian Ransomware Syndicates & Monero Escrows",
    max_onions: 6,
    max_depth: 2,
    status: "COMPLETED",
    page_count: 18,
    created_at: "2026-09-28T14:30:00Z",
    updated_at: "2026-09-28T15:15:00Z"
  },
  {
    id: "inv_sih_demo_02",
    query: "Darknet Access Brokers & Corporate VPN Credentials",
    max_onions: 5,
    max_depth: 1,
    status: "COMPLETED",
    page_count: 14,
    created_at: "2026-09-27T10:10:00Z",
    updated_at: "2026-09-27T10:50:00Z"
  },
  {
    id: "inv_sih_demo_03",
    query: "Zero-Day Exploit Vendors & PGP Fingerprint Correlation",
    max_onions: 4,
    max_depth: 1,
    status: "COMPLETED",
    page_count: 12,
    created_at: "2026-09-26T18:00:00Z",
    updated_at: "2026-09-26T18:40:00Z"
  }
];

export const mockActors = [
  {
    id: "actor_vortex",
    primary_handle: "Vortex_Op",
    category: "Ransomware Operator",
    attribution_confidence: 0.96,
    first_seen: "2026-08-12",
    last_seen: "2026-09-28",
    alias_count: 3,
    marketplace_count: 3,
    product_count: 5
  },
  {
    id: "actor_cipher",
    primary_handle: "CipherNode_HQ",
    category: "Cryptocurrency Escrow Broker",
    attribution_confidence: 0.94,
    first_seen: "2026-07-20",
    last_seen: "2026-09-27",
    alias_count: 2,
    marketplace_count: 2,
    product_count: 3
  },
  {
    id: "actor_shadow",
    primary_handle: "ShadowBroker_26",
    category: "Initial Access Broker",
    attribution_confidence: 0.91,
    first_seen: "2026-08-01",
    last_seen: "2026-09-26",
    alias_count: 4,
    marketplace_count: 3,
    product_count: 4
  },
  {
    id: "actor_darkhydra",
    primary_handle: "DarkHydra_Sec",
    category: "Exploit Kit Developer",
    attribution_confidence: 0.89,
    first_seen: "2026-08-25",
    last_seen: "2026-09-28",
    alias_count: 2,
    marketplace_count: 2,
    product_count: 3
  }
];

export const mockCommodities = [
  {
    id: "prod_ransom_v4",
    name: "VortexLocker Ransomware Suite v4.2",
    category: "Malware & Ransomware",
    observation_count: 14,
    actor_count: 2,
    marketplace_count: 3,
    min_price: 1200,
    max_price: 3500,
    currency: "USD",
    first_observed: "2026-08-15",
    last_observed: "2026-09-28",
    created_at: "2026-08-15"
  },
  {
    id: "prod_vpn_pack",
    name: "Enterprise SSL-VPN Access Credentials",
    category: "Credentials & Access",
    observation_count: 10,
    actor_count: 3,
    marketplace_count: 2,
    min_price: 450,
    max_price: 1800,
    currency: "USD",
    first_observed: "2026-08-20",
    last_observed: "2026-09-27",
    created_at: "2026-08-20"
  },
  {
    id: "prod_zero_day",
    name: "RCE Exploit Advisory (CVE-2026-9142)",
    category: "Exploit Payloads",
    observation_count: 6,
    actor_count: 1,
    marketplace_count: 2,
    min_price: 5000,
    max_price: 12000,
    currency: "USD",
    first_observed: "2026-09-01",
    last_observed: "2026-09-26",
    created_at: "2026-09-01"
  }
];

export const mockGlobalGraph = {
  nodes: [
    { id: "actor_vortex", label: "Vortex_Op", node_type: "Actor", community: 1, degree: 7, metadata: { category: "Ransomware Operator", confidence: 0.96 } },
    { id: "actor_cipher", label: "CipherNode_HQ", node_type: "Actor", community: 2, degree: 5, metadata: { category: "Escrow Broker", confidence: 0.94 } },
    { id: "actor_shadow", label: "ShadowBroker_26", node_type: "Actor", community: 1, degree: 6, metadata: { category: "Access Broker", confidence: 0.91 } },
    { id: "market_nexus", label: "Nexus Market v3", node_type: "Marketplace", community: 1, degree: 6, metadata: { onion: "nexus3v...onion" } },
    { id: "market_hydra", label: "HydraEscrow Portal", node_type: "Marketplace", community: 2, degree: 5, metadata: { onion: "hydra7e...onion" } },
    { id: "prod_ransom_v4", label: "VortexLocker v4.2", node_type: "Product", community: 1, degree: 4, metadata: { category: "Malware" } },
    { id: "prod_vpn_pack", label: "Enterprise VPN Credentials", node_type: "Product", community: 1, degree: 3, metadata: { category: "Access" } },
    { id: "btc_wallet_1", label: "bc1q9x...7v8k", node_type: "shared_identifier", community: 1, degree: 4, metadata: { type: "bitcoin_address", sanctioned: true } },
    { id: "xmr_wallet_1", label: "888tNk...3f12", node_type: "shared_identifier", community: 2, degree: 3, metadata: { type: "monero_address", sanctioned: false } },
    { id: "tg_handle_1", label: "@vortex_support", node_type: "clearnet_account", community: 1, degree: 2, metadata: { platform: "Telegram" } },
    { id: "ip_origin_1", label: "185.220.101.44", node_type: "shared_identifier", community: 1, degree: 3, metadata: { type: "clearnet_ip", country: "NL" } }
  ],
  edges: [
    { id: "e1", source: "actor_vortex", target: "market_nexus", edge_type: "OPERATES_ON", confidence: 0.96, evidence_quote: "Verified vendor profile Vortex_Op on Nexus Market v3" },
    { id: "e2", source: "actor_vortex", target: "prod_ransom_v4", edge_type: "SELLS", confidence: 0.98, evidence_quote: "VortexLocker v4.2 official build vendor listing" },
    { id: "e3", source: "actor_vortex", target: "btc_wallet_1", edge_type: "shares_identifier", confidence: 0.95, evidence_quote: "Primary deposit wallet specified in vendor listing" },
    { id: "e4", source: "actor_vortex", target: "tg_handle_1", edge_type: "clearnet_alias", confidence: 0.90, evidence_quote: "Contact handle for support inquiries" },
    { id: "e5", source: "actor_shadow", target: "market_nexus", edge_type: "OPERATES_ON", confidence: 0.92, evidence_quote: "Registered vendor profile ShadowBroker_26" },
    { id: "e6", source: "actor_shadow", target: "prod_vpn_pack", edge_type: "SELLS", confidence: 0.94, evidence_quote: "Active listing for corporate access bundles" },
    { id: "e7", source: "actor_shadow", target: "btc_wallet_1", edge_type: "shares_identifier", confidence: 0.88, evidence_quote: "Escrow deposit recipient overlap" },
    { id: "e8", source: "actor_cipher", target: "market_hydra", edge_type: "OPERATES_ON", confidence: 0.95, evidence_quote: "Lead escrow operator for HydraEscrow Portal" },
    { id: "e9", source: "actor_cipher", target: "xmr_wallet_1", edge_type: "shares_identifier", confidence: 0.96, evidence_quote: "Monero escrow multisig master address" },
    { id: "e10", source: "actor_vortex", target: "actor_cipher", edge_type: "trust", confidence: 0.92, evidence_quote: "Vouched by CipherNode_HQ as trusted escrow partner" },
    { id: "e11", source: "market_nexus", target: "ip_origin_1", edge_type: "shares_identifier", confidence: 0.89, evidence_quote: "Locksmith mmh3 favicon hash correlation to origin IP" }
  ]
};

export const mockLocksmith = {
  findings: [
    {
      id: "lock_1",
      domain: "nexus3v...onion",
      type: "Favicon mmh3 Hash",
      value: "-1284918231",
      clearweb_ip: "185.220.101.44",
      asn: "AS49453",
      country: "Netherlands",
      shodan_dork: "http.favicon.hash:-1284918231",
      confidence: 0.92,
      found_at: "2026-09-28T14:45:00Z"
    },
    {
      id: "lock_2",
      domain: "hydra7e...onion",
      type: "Apache /server-status",
      value: "Mod_Status Disclosure",
      clearweb_ip: "91.215.85.12",
      asn: "AS200052",
      country: "Russia",
      shodan_dork: 'net:91.215.85.0/24 "Apache Server Status"',
      confidence: 0.95,
      found_at: "2026-09-27T10:30:00Z"
    }
  ]
};

export const mockStylometry = {
  profiles: [
    {
      handle: "Vortex_Op",
      sample_size: 1420,
      reliability: "HIGH_CONFIDENCE",
      vocabulary_richness: 0.74,
      sentence_length: 16.8,
      punctuation_entropy: 2.45,
      casing_ratio: 0.08,
      exclamation_freq: 0.03,
      sentiment_score: -0.15,
      estimated_timezone: "UTC+3 (MSK)"
    },
    {
      handle: "CipherNode_HQ",
      sample_size: 980,
      reliability: "MODERATE_CONFIDENCE",
      vocabulary_richness: 0.68,
      sentence_length: 14.2,
      punctuation_entropy: 2.12,
      casing_ratio: 0.12,
      exclamation_freq: 0.01,
      sentiment_score: 0.05,
      estimated_timezone: "UTC+2 (EET)"
    }
  ],
  comparisons: [
    {
      pair: "Vortex_Op vs ShadowBroker_26",
      burrows_delta: 0.62,
      assessment: "High stylistic similarity. Strong likelihood of shared author or template reuse.",
      confidence: 0.88
    }
  ]
};

export const mockEvidence = {
  admissibility_score: 91.5,
  custody_chain: [
    { id: "doc_1", title: "Nexus Market Index HTML", sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", retrieved_at: "2026-09-28T14:35:00Z" },
    { id: "doc_2", title: "HydraEscrow Deposit Page", sha256: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", retrieved_at: "2026-09-27T10:15:00Z" }
  ]
};
