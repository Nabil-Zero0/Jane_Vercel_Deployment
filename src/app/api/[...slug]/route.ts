import { NextRequest, NextResponse } from "next/server";
import {
  mockMacroStats,
  mockCommodities,
  mockActors,
  mockInvestigations,
  mockOnionPages,
  mockStylometry,
  mockGlobalGraph,
  mockLocksmith,
  mockSanctions,
  mockEvidence,
  mockTimeline,
  mockWarehouse,
} from "@/lib/mock-data";

function getEndpoint(request: NextRequest): string {
  const url = new URL(request.url);
  // Match path after /api/
  const match = url.pathname.match(/\/api\/(.+)$/);
  if (!match) return "";
  return match[1].replace(/\/$/, "");
}

export async function GET(request: NextRequest) {
  const endpoint = getEndpoint(request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Route: /api/stats/macro
  if (endpoint === "stats/macro") {
    return NextResponse.json(mockMacroStats);
  }

  // Route: /api/commodities
  if (endpoint === "commodities") {
    if (id) {
      const decodedId = decodeURIComponent(id).toLowerCase().trim();
      const product =
        mockCommodities.find(
          (c) =>
            c.id === id ||
            c.name.toLowerCase().includes(decodedId) ||
            decodedId.includes(c.id.toLowerCase())
        ) || mockCommodities[0];

      return NextResponse.json({
        product,
        actors: product.actor_handles.map((h, i) => ({
          id: `act_${i}`,
          primary_handle: h,
          relationship: "Observed Vendor / Seller",
          confidence: 0.94 - i * 0.02,
          first_seen: product.first_seen,
          evidence_quote: `Verified listing on darknet marketplace for ${product.name}. PGP multi-sig escrow agreement observed.`,
        })),
        marketplaces: product.marketplaces.map((m) => ({
          name: m,
          onion: `${m.toLowerCase().replace(/[^a-z0-9]/g, "")}xyz...onion`,
          vendor_rating: "4.9 / 5.0",
          first_seen: product.first_seen,
        })),
        observations: [
          {
            timestamp: product.last_seen,
            marketplace: product.marketplaces[0],
            unit_price_usd: 1250,
            currency: "XMR / BTC",
            purity: "98% HPLC Lab-Certified",
            stock_status: "IN_STOCK",
          },
          {
            timestamp: product.first_seen,
            marketplace: product.marketplaces[1] || product.marketplaces[0],
            unit_price_usd: 1300,
            currency: "BTC",
            purity: "98% HPLC Lab-Certified",
            stock_status: "IN_STOCK",
          },
        ],
      });
    }

    return NextResponse.json({
      products: mockCommodities,
      commodities: mockCommodities,
      metrics: {
        products_count: mockCommodities.length,
        observations_count: 1420,
        actors_count: 14,
        marketplaces_count: 8,
        investigations_count: 6,
      },
    });
  }

  // Route: /api/actors
  if (endpoint === "actors") {
    if (id) {
      const actor = mockActors.find((a) => a.id === id) || mockActors[0];
      return NextResponse.json({
        actor,
        aliases: [
          `${actor.primary_handle}_Sec`,
          `${actor.primary_handle}_Vendor`,
          `VX_${actor.primary_handle.slice(0, 4)}`,
        ],
        marketplaces: [
          { name: "Nexus Market v3", onion: "nexus3vmkt...onion", role: "Verified Tier-1 Vendor" },
          { name: "HydraEscrow Portal", onion: "hydraescrow...onion", role: "Escrow Partner" },
          { name: "DarkArmory Onion", onion: "armoryiron...onion", role: "Direct Supplier" },
        ],
        products: mockCommodities.filter((c) =>
          c.actor_handles.includes(actor.primary_handle)
        ),
        identifiers: [
          { type: "bitcoin_address", value: "bc1q9x...7v8k", confidence: 0.96 },
          { type: "monero_address", value: "888tNk...3qLm", confidence: 0.94 },
          { type: "telegram_handle", value: `@${actor.primary_handle.toLowerCase()}_support`, confidence: 0.92 },
          { type: "pgp_key_id", value: "0x4A81BF0D22F091A4", confidence: 0.95 },
          { type: "clearnet_ip", value: "185.220.101.44", confidence: 0.92 },
        ],
        stylometry_summary:
          "High function-word correlation with European Eastern timezone operating hours. Strong technical lexicon and standardized escrow templates.",
        trust_links: [
          { trusted_handle: "CipherNode_HQ", confidence: 0.94, basis: "Vouched escrow multi-sig deposit" },
          { trusted_handle: "SilkRoad_Remnant", confidence: 0.91, basis: "Cross-marketplace endorsement" },
        ],
      });
    }

    return NextResponse.json({
      actors: mockActors,
      total_count: mockActors.length,
    });
  }

  // Route: /api/investigations
  if (endpoint === "investigations") {
    return NextResponse.json({
      investigations: mockInvestigations,
      total_count: mockInvestigations.length,
    });
  }

  // Route: /api/investigation/intelligence
  if (endpoint === "investigation/intelligence") {
    return NextResponse.json({
      investigation_id: id || "inv_sih_demo_01",
      assessments: [
        {
          actor_handle: "Vortex_Op",
          assessment: "Primary developer for VortexLocker RaaS payload and dark web distributor.",
          confidence: 0.96,
          supporting_evidence: "Multiple forum escrow deposit addresses match on-chain cluster.",
        },
        {
          actor_handle: "SilkRoad_Remnant",
          assessment: "High-volume distributor of bulk chemical and pharmaceutical contraband.",
          confidence: 0.94,
          supporting_evidence: "PGP fingerprint match across 3 separate onion marketplace listings.",
        },
      ],
      products: mockCommodities,
      stylometry: mockStylometry.profiles,
      opsec: [
        { finding: "Apache mod_status leak confirmed origin server in Netherlands.", confidence: 0.92 },
        { finding: "SSH hostkey correlation linked hidden service to Clearnet staging VPS.", confidence: 0.89 },
      ],
    });
  }

  // Route: /api/investigation
  if (endpoint === "investigation") {
    const inv = mockInvestigations.find((i) => i.id === id) || mockInvestigations[0];
    return NextResponse.json({
      investigation: inv,
      pages: mockOnionPages,
      identifiers: mockMacroStats.recent_leads,
      timeline: mockTimeline.events,
    });
  }

  // Route: /api/graph/index
  if (endpoint === "graph/index") {
    return NextResponse.json({
      investigations: mockInvestigations.map((inv, idx) => ({
        id: inv.id,
        name: inv.name,
        query: inv.query,
        status: inv.status,
        node_count: 24 + idx * 8,
        edge_count: 48 + idx * 16,
        created_at: inv.created_at,
        completed_at: inv.completed_at,
      })),
      totals: {
        total_nodes: 148,
        total_edges: 382,
        total_investigations: mockInvestigations.length,
      },
    });
  }

  // Route: /api/graph/global
  if (endpoint === "graph/global") {
    return NextResponse.json(mockGlobalGraph);
  }

  // Route: /api/graph/investigation
  if (endpoint === "graph/investigation") {
    return NextResponse.json(mockGlobalGraph);
  }

  // Route: /api/locksmith
  if (endpoint === "locksmith") {
    return NextResponse.json(mockLocksmith);
  }

  // Route: /api/stylometry
  if (endpoint === "stylometry") {
    return NextResponse.json({
      stylometry_profiles: mockStylometry.profiles,
      profiles: mockStylometry.profiles,
    });
  }

  // Route: /api/compare
  if (endpoint === "compare") {
    return NextResponse.json({
      actors: mockActors,
      actor_pairs: [
        {
          actor1: "Vortex_Op",
          actor2: "SilkRoad_Remnant",
          similarity_score: 0.88,
          stylometry_distance: 0.12,
          shared_identifiers: 4,
          shared_infrastructure: ["185.220.101.44"],
          common_marketplaces: ["Nexus Market v3"],
        },
        {
          actor1: "IronArmory_HQ",
          actor2: "Vortex_Op",
          similarity_score: 0.76,
          stylometry_distance: 0.24,
          shared_identifiers: 2,
          shared_infrastructure: ["194.26.29.112"],
          common_marketplaces: ["Nexus Market v3"],
        },
      ],
    });
  }

  // Route: /api/sanctions
  if (endpoint === "sanctions") {
    return NextResponse.json(mockSanctions);
  }

  // Route: /api/evidence
  if (endpoint === "evidence") {
    return NextResponse.json(mockEvidence);
  }

  // Route: /api/timeline
  if (endpoint === "timeline") {
    return NextResponse.json(mockTimeline);
  }

  // Route: /api/warehouse
  if (endpoint === "warehouse") {
    return NextResponse.json(mockWarehouse);
  }

  // Route: /api/onions
  if (endpoint === "onions") {
    if (id) {
      const page = mockOnionPages.find((p) => p.id === id) || mockOnionPages[0];
      return NextResponse.json({
        page,
        identifiers: mockMacroStats.recent_leads,
        links: mockOnionPages.slice(1),
      });
    }
    return NextResponse.json({
      pages: mockOnionPages,
      total_count: mockOnionPages.length,
    });
  }

  // Route: /api/logs
  if (endpoint === "logs") {
    return NextResponse.json({
      logs: mockTimeline.events.map((e, idx) => ({
        id: `log_${idx}`,
        timestamp: e.timestamp,
        level: "INFO",
        source: "JANE_OSINT_PIPELINE",
        message: `[${e.category}] ${e.actor}: ${e.action}`,
      })),
    });
  }

  // Route: /api/snapshot
  if (endpoint === "snapshot") {
    return NextResponse.json({
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>JANE Passive OSINT Snapshot</title></head>
<body style="background:#09090b;color:#f4f4f5;font-family:monospace;padding:32px;">
<div style="border:1px solid #eab308;padding:16px;border-radius:8px;background:#18181b;">
<h2 style="color:#eab308;margin:0 0 8px 0;">[JANE PASSIVE OSINT SNAPSHOT ARCHIVE]</h2>
<p style="color:#a1a1aa;margin:0 0 16px 0;">Target: Nexus Market v3 (Verified Darknet Onion Mirror)</p>
<hr style="border:0;border-top:1px solid #27272a;margin:16px 0;" />
<p><strong>Extraction Timestamp:</strong> 2026-10-04T12:00:00Z</p>
<p><strong>Verification Hash:</strong> sha256:8f4e2b01c9a44ee789901d8a233da44e</p>
<p><strong>Mandate:</strong> Smart India Hackathon 2026 (SIH 26) Passive Evidence Preservation</p>
</div>
</body>
</html>`,
      captured_at: "2026-10-04T12:00:00Z",
      status: 200,
    });
  }

  // Route: /api/query/sessions
  if (endpoint === "query/sessions") {
    return NextResponse.json({
      sessions: [
        {
          id: "sess_01",
          title: "Investigation: DR*GS & F*REARMS Supply Networks",
          created_at: "2026-10-04T10:00:00Z",
          query_count: 8,
        },
        {
          id: "sess_02",
          title: "Attribution: VortexLocker RaaS Infrastructure",
          created_at: "2026-10-04T08:30:00Z",
          query_count: 5,
        },
      ],
    });
  }

  // Route: /api/query/session/:id/history
  if (endpoint.startsWith("query/session/") && endpoint.endsWith("/history")) {
    return NextResponse.json({
      history: [
        {
          query: "SELECT handle, category, confidence FROM actors WHERE category LIKE '%R*NSOMWARE%'",
          timestamp: "2026-10-04T10:05:00Z",
          results_count: 8,
          execution_ms: 4.2,
        },
        {
          query: "SELECT product_name, marketplaces, observation_count FROM commodities WHERE observation_count > 100",
          timestamp: "2026-10-04T10:02:00Z",
          results_count: 12,
          execution_ms: 3.8,
        },
      ],
    });
  }

  // Route: /api/sql/sessions
  if (endpoint === "sql/sessions") {
    return NextResponse.json({
      sessions: [
        {
          id: "sql_01",
          name: "Global Threat Actor Correlation Session",
          created_at: "2026-10-04T09:00:00Z",
        },
      ],
    });
  }

  // Route: /api/sql/schema
  if (endpoint === "sql/schema") {
    return NextResponse.json({
      tables: [
        {
          name: "canonical_actors",
          columns: ["id", "primary_handle", "designated_id", "category", "attribution_confidence"],
        },
        {
          name: "observed_commodities",
          columns: ["id", "name", "category", "actor_count", "observation_count"],
        },
        {
          name: "extracted_identifiers",
          columns: ["id", "type", "value", "confidence", "actor_handle"],
        },
        {
          name: "onion_snapshots",
          columns: ["id", "url", "title", "status", "page_size", "category"],
        },
      ],
      total_tables: 4,
    });
  }

  // Route: /api/query/plan
  if (endpoint === "query/plan") {
    return NextResponse.json({
      queries: [
        { query: "nexus market dr*gs escrow", fanout: 3 },
        { query: "iron armory f*rearms ball*stics", fanout: 3 },
        { query: "vortex locker raas infrastructure", fanout: 2 },
      ],
    });
  }

  // Fallback
  return NextResponse.json({
    status: "ok",
    message: "Jane Vercel Demo Serverless Route",
    endpoint,
  });
}

export async function POST(request: NextRequest) {
  const endpoint = getEndpoint(request);

  if (endpoint === "query/session" || endpoint === "sql/sessions") {
    return NextResponse.json({
      session: {
        id: `sess_${Date.now()}`,
        title: "New Forensic Investigation Session",
        created_at: new Date().toISOString(),
      },
    });
  }

  if (endpoint === "query/run" || endpoint === "sql/execute") {
    return NextResponse.json({
      columns: ["actor_handle", "threat_category", "confidence", "status", "primary_commodity"],
      rows: [
        ["Vortex_Op", "R*NSOMWARE OPERATOR", "0.96", "ACTIVE", "V*RTEXLOCKER v4.2"],
        ["SilkRoad_Remnant", "DR*G ESC-R0W VENDOR", "0.94", "ACTIVE", "DR*GS (C*caine 98%)"],
        ["IronArmory_HQ", "F*REARMS & WE*PONS", "0.93", "MONITORED", "GL*CK-19 UN-SER*ALIZED"],
        ["ShadowBroker_26", "CR*DENTIAL & C*RDING", "0.91", "MONITORED", "REDLINE STE*LER LOGS"],
        ["CipherNode_HQ", "INFRASTRUCTURE & ESC-R0W", "0.95", "ACTIVE", "CRYPTO M*XER CONTRACTS"],
      ],
      row_count: 5,
      latency_ms: 8.6,
    });
  }

  return NextResponse.json({ success: true, message: "Action recorded in mock environment." });
}
