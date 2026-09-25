// ─── Tier 1: Delhi NCR Core (Home Base — Highest Topical Authority) ───────────
import { delhiData } from './delhi.js';
import { gurgaonData } from './gurgaon.js';
import { noidaData } from './noida.js';
import { greaterNoidaData } from './greater-noida.js';
import { faridabadData } from './faridabad.js';
import { ghaziabadData } from './ghaziabad.js';

// ─── Tier 1: Major Commercial Metros (Pan-India High Volume & High Ticket) ───
import { mumbaiData } from './mumbai.js';
import { naviMumbaiData } from './navi-mumbai.js';
import { thaneData } from './thane.js';
import { bangaloreData } from './bangalore.js';
import { hyderabadData } from './hyderabad.js';
import { puneData } from './pune.js';
import { chennaiData } from './chennai.js';
import { kolkataData } from './kolkata.js';
import { ahmedabadData } from './ahmedabad.js';

// ─── Tier 2: Top Business & Tech Hubs (High Regional Commercial Intent) ──────
import { chandigarhData } from './chandigarh.js';
import { jaipurData } from './jaipur.js';
import { lucknowData } from './lucknow.js';
import { indoreData } from './indore.js';
import { suratData } from './surat.js';
import { kochiData } from './kochi.js';

/**
 * Master Registry — Codenclick High-Authority SEO City Architecture.
 * Curated exclusively for high-intent, commercially viable markets with genuine search volume.
 * Eliminates thin/doorway page dilution while concentrating domain authority on Delhi NCR and Tier-1 hubs.
 */
export const cityRegistry = [
  // Delhi NCR Core (Delhi Base)
  delhiData,
  gurgaonData,
  noidaData,
  greaterNoidaData,
  faridabadData,
  ghaziabadData,

  // Pan-India Major Metros
  mumbaiData,
  naviMumbaiData,
  thaneData,
  bangaloreData,
  hyderabadData,
  puneData,
  chennaiData,
  kolkataData,
  ahmedabadData,

  // High-Growth Commercial & Tech Powerhouses
  chandigarhData,
  jaipurData,
  lucknowData,
  indoreData,
  suratData,
  kochiData
];
