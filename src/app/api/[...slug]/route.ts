import { NextRequest, NextResponse } from "next/server";
import {
  mockMacroStats,
  mockInvestigations,
  mockActors,
  mockCommodities,
  mockGlobalGraph,
  mockLocksmith,
  mockStylometry,
  mockEvidence,
} from "@/lib/mock-data";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await context.params;
  const path = slug.join("/");
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Route: /api/stats/macro
  if (path === "stats/macro") {
    return NextResponse.json(mockMacroStats);
  }

  // Route: /api/investigations
  if (path === "investigations") {
    return NextResponse.json(mockInvestigations);
  }

  // Route: /api/investigation/intelligence
  if (path === "investigation/intelligence") {
    return NextResponse.json({
      investigation_id: id || "inv_sih_demo_01",
      assessments: [
        {
          actor_handle: "Vortex_Op",
          assessment: "Primary vendor for VortexLocker RaaS payload suite.",
          confidence: 0.96,
          supporting_evidence: "Multiple forum escrow deposit addresses match on-chain cluster.",
        },
      ],
      products: mockCommodities,
      stylometry: mockStylometry.profiles,
      opsec: [
        { finding: "Apache mod_status leak confirmed origin server in Netherlands.", confidence: 0.92 },
      ],
    });
  }

  // Route: /api/investigation
  if (path === "investigation") {
    const inv = mockInvestigations.find((i) => i.id === id) || mockInvestigations[0];
    return NextResponse.json({
      investigation: inv,
      pages: [
        { id: "page_1", url: "http://nexus3v...onion/index.html", title: "Nexus Market", status: 200 },
        { id: "page_2", url: "http://hydra7e...onion/escrow", title: "HydraEscrow Portal", status: 200 },
      ],
      actors: mockActors,
      indicators: [
        { type: "bitcoin_address", value: "bc1q9x...7v8k", confidence: 0.95, is_sanctioned: 1 },
        { type: "monero_address", value: "888tNk...3f12", confidence: 0.96, is_sanctioned: 0 },
        { type: "telegram_handle", value: "@vortex_support", confidence: 0.90, is_sanctioned: 0 },
      ],
      commodities: mockCommodities,
      graph_nodes: mockGlobalGraph.nodes,
      graph_edges: mockGlobalGraph.edges,
    });
  }

  // Route: /api/actors
  if (path === "actors") {
    if (id) {
      const actor = mockActors.find((a) => a.id === id) || mockActors[0];
      return NextResponse.json({
        actor,
        aliases: ["Vortex_Dev", "VX_Operator"],
        marketplaces: [
          { name: "Nexus Market v3", onion: "nexus3v...onion", role: "Verified Vendor" },
          { name: "HydraEscrow Portal", onion: "hydra7e...onion", role: "Escrow Partner" },
        ],
        products: mockCommodities,
        identifiers: [
          { type: "bitcoin_address", value: "bc1q9x...7v8k", confidence: 0.95 },
          { type: "telegram_handle", value: "@vortex_support", confidence: 0.90 },
        ],
        stylometry_summary: "High function-word correlation with European Eastern timezone operating hours.",
        trust_links: [
          { trusted_handle: "CipherNode_HQ", confidence: 0.92, basis: "Vouched escrow provider" },
        ],
      });
    }
    return NextResponse.json(mockActors);
  }

  // Route: /api/commodities
  if (path === "commodities") {
    if (id) {
      const comm = mockCommodities.find((c) => c.id === id || c.name === id) || mockCommodities[0];
      return NextResponse.json({
        product: comm,
        observations: [
          { marketplace: "Nexus Market v3", vendor: "Vortex_Op", price: 1200, currency: "USD", date: "2026-09-28" },
          { marketplace: "HydraEscrow Portal", vendor: "ShadowBroker_26", price: 1350, currency: "USD", date: "2026-09-26" },
        ],
        vendors: ["Vortex_Op", "ShadowBroker_26"],
        price_history: [
          { date: "2026-08-15", price: 1100 },
          { date: "2026-09-01", price: 1200 },
          { date: "2026-09-28", price: 1250 },
        ],
      });
    }
    return NextResponse.json(mockCommodities);
  }

  // Route: /api/graph/global
  if (path === "graph/global") {
    return NextResponse.json(mockGlobalGraph);
  }

  // Route: /api/graph/investigation
  if (path === "graph/investigation") {
    return NextResponse.json(mockGlobalGraph);
  }

  // Route: /api/graph/index
  if (path === "graph/index") {
    return NextResponse.json(
      mockInvestigations.map((inv) => ({
        id: inv.id,
        query: inv.query,
        node_count: mockGlobalGraph.nodes.length,
        edge_count: mockGlobalGraph.edges.length,
      }))
    );
  }

  // Route: /api/locksmith
  if (path === "locksmith") {
    return NextResponse.json(mockLocksmith);
  }

  // Route: /api/stylometry
  if (path === "stylometry") {
    return NextResponse.json(mockStylometry);
  }

  // Route: /api/compare
  if (path === "compare") {
    return NextResponse.json({
      actor_pairs: [
        {
          actor1: "Vortex_Op",
          actor2: "ShadowBroker_26",
          similarity_score: 0.88,
          shared_identifiers: ["bc1q9x...7v8k"],
          shared_marketplaces: ["Nexus Market v3"],
        },
      ],
    });
  }

  // Route: /api/sanctions
  if (path === "sanctions") {
    return NextResponse.json({
      sanctioned_wallets: [
        {
          address: "bc1q9x...7v8k",
          type: "Bitcoin",
          program: "OFAC Cyber-Related Sanctions",
          associated_actor: "Vortex_Op",
          balance_usd: 485000,
          detected_at: "2026-09-28T14:40:00Z",
        },
      ],
    });
  }

  // Route: /api/evidence
  if (path === "evidence") {
    return NextResponse.json(mockEvidence);
  }

  // Route: /api/timeline
  if (path === "timeline") {
    return NextResponse.json({
      heatmap: Array.from({ length: 90 }, (_, i) => ({
        date: `2026-0${Math.floor(i / 30) + 7}-${((i % 30) + 1).toString().padStart(2, "0")}`,
        count: Math.floor(Math.sin(i / 5) * 8 + 12),
      })),
      alerts: [
        { date: "2026-09-28", type: "INFRASTRUCTURE_CHURN", note: "Server status banner changed on Nexus Market" },
      ],
    });
  }

  // Route: /api/warehouse
  if (path === "warehouse") {
    return NextResponse.json({
      drops: [
        { id: "batch_sih_demo_01", total_records: 18, size_kb: 420, verified: true, timestamp: "2026-09-28T15:10:00Z" },
      ],
    });
  }

  // Route: /api/onions
  if (path === "onions") {
    return NextResponse.json([
      { id: "page_1", url: "http://nexus3v...onion", title: "Nexus Market v3", server_banner: "Apache/2.4.52 (Unix)", created_at: "2026-09-28" },
      { id: "page_2", url: "http://hydra7e...onion", title: "HydraEscrow Portal", server_banner: "nginx/1.22.1", created_at: "2026-09-27" },
    ]);
  }

  // Route: /api/logs
  if (path === "logs") {
    return NextResponse.json([
      { timestamp: "2026-09-28 15:10:02", stage: "GRAPH", message: "Canonical graph synthesized with 11 nodes, 11 edges." },
      { timestamp: "2026-09-28 15:08:45", stage: "STYLOMETRY", message: "Burrows delta z-scores computed across 20 function words." },
      { timestamp: "2026-09-28 15:05:12", stage: "LOCKSMITH", message: "Favicon mmh3 hash -1284918231 matched Shodan origin IP 185.220.101.44." },
      { timestamp: "2026-09-28 15:00:20", stage: "SCOUT", message: "Air-gapped Whonix crawler received 18 batch pages." },
    ]);
  }

  // Route: /api/snapshot
  if (path === "snapshot") {
    return new NextResponse(
      "<!DOCTYPE html><html><body style='font-family:sans-serif;padding:24px;background:#0f172a;color:#f8fafc'><h2>[Jane Defanged Sandbox Viewport]</h2><p>Preserved DOM representation rendered securely without external execution.</p><hr/><p>Nexus Market v3 - Authorized Forensic Snapshot</p></body></html>",
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  // Route: /api/sql/sessions
  if (path === "sql/sessions") {
    return NextResponse.json([
      { id: "sess_demo", title: "Default Forensic Session", created_at: "2026-09-28" },
    ]);
  }

  // Route: /api/sql/schema
  if (path === "sql/schema") {
    return NextResponse.json([
      { name: "actors", columns: ["id", "primary_handle", "category", "attribution_confidence", "first_seen"] },
      { name: "marketplaces", columns: ["id", "onion_domain", "display_name", "category"] },
      { name: "products", columns: ["id", "name", "category", "created_at"] },
      { name: "canonical_identifiers", columns: ["id", "type", "value", "actor_id"] },
    ]);
  }

  // Route: /api/query/plan
  if (path === "query/plan") {
    return NextResponse.json({
      plan: {
        fanout: [
          "Target darknet escrow providers and PGP key blocks",
          "Identify ransomware affiliate portals and payment mirrors",
          "Correlate Russian initial access brokers and corporate VPN leaks",
        ],
      },
    });
  }

  // Default fallback
  return NextResponse.json({
    status: "ok",
    message: "Jane Vercel Demo Endpoint",
    path,
  });
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await context.params;
  const path = slug.join("/");

  if (path === "query/run" || path === "sql/execute") {
    return NextResponse.json({
      columns: ["actor", "category", "confidence", "status"],
      rows: [
        ["Vortex_Op", "Ransomware Operator", "0.96", "ACTIVE"],
        ["ShadowBroker_26", "Access Broker", "0.91", "MONITORED"],
        ["CipherNode_HQ", "Escrow Partner", "0.94", "ACTIVE"],
      ],
      row_count: 3,
      latency_ms: 12.4,
    });
  }

  return NextResponse.json({ success: true, message: "Simulated action executed successfully." });
}
