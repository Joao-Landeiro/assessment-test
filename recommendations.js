// =============================================================================
//  RECOMMENDATION DATA — Edit texts here
//  
//  Structure: RECS[dimension][tier].interventions[]
//  Each intervention has: practicalName, name, source, mechanism, and guidance.
//  
//  Fields per intervention:
//    practicalName  — friendly name (placeholder for now)
//    name           — academic intervention name
//    source         — authors / citations
//    mechanismName  — colloquial pattern name ("The Silent Consensus", etc.)
//    mechanismDesc  — plain-English explanation of what's going wrong
//    correctHow     — how to fix it now       (Tiers 1-2)
//    preventHow     — how to avoid it          (Tiers 1-2)
//    maintainHow    — how to protect what works (Tier 3)
// =============================================================================

const RECS = {


// =============================================================================
//  DIMENSION: TRUTH
// =============================================================================

truth: {

  // -----------------------------------------------------------
  //  Truth — Tier 1 — Crisis
  // -----------------------------------------------------------
  1: { label: "Tier 1 — Crisis", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Anonymous Signal Aggregation / Delphi Method`,
      source:        `Westphal & Bednar; Dalkey`,

      mechanismName: `The Silent Consensus`,
      mechanismDesc: `Almost everyone in the room privately doubts the strategy but assumes they are the only one who doesn't "get it." Public agreement masks private scepticism — suppression of private doubts leads to the expression of false public support, preventing the identification of critical flaws. The strategy persists long past the point where it should have been questioned.`,

      correctHow: `The real opinion of the room is the opposite of the stated consensus. People agree publicly because they think everyone else agrees. Break this immediately: run an anonymous survey, a blind poll, or confidential 1-on-1s this week. Aggregate the results and present them back to the group. The room often discovers it was in violent agreement about the problem all along — they just needed a safe channel to say it.`,

      preventHow: `Build anonymous signal collection into the engagement structure from day one. Don't wait for signs of false consensus — assume it's there. Include a Delphi round or anonymous pulse check at every major decision gate.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Truth — Tier 2 — Friction
  // -----------------------------------------------------------
  2: { label: "Tier 2 — Friction", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Reference Class Forecasting (RCF)`,
      source:        `Flyvbjerg`,

      mechanismName: `The Proposal Fiction`,
      mechanismDesc: `Estimates are systematically optimistic because actors take an "inside view" of their plan — focusing on its specific components while ignoring the actual outcomes of similar past ventures. Sometimes this is genuine cognitive bias (optimism); sometimes it's deliberate distortion to win approval or budget. Either way, initial commitment is based on unrealistic projections, and the system is under-resourced for what the execution actually requires.`,

      correctHow: `The estimates feel optimistic and the forecasts keep slipping. Stop asking "how long will this take?" and start asking "how long did it take the last ten times someone tried this?" Find 10-20 comparable past projects, look at what actually happened, and anchor your forecast to that distribution. Present the reference class data to the sponsor — the client's plan isn't special, and the numbers will say so.`,

      preventHow: `Make reference class forecasting a standard step in your scoping process. Before any timeline is committed, require a comparison to at least five analogous engagements. Build the outside view into the proposal, not just the inside view.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Truth — Tier 3 — Mastery
  // -----------------------------------------------------------
  3: { label: "Tier 3 — Mastery", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Premortem / Prospective Hindsight`,
      source:        `Klein`,

      mechanismName: `The Silence of the Lambs`,
      mechanismDesc: `The culture handles bad news by suppressing or rewriting it before it reaches decision-makers, creating an illusion of implementation success. Blocker information is actively hidden to avoid punishment. Risks are never mitigated until they cause systemic failure — not because no one saw them, but because no one felt safe saying it out loud.`,

      maintainHow: `The team has good instincts about what can go wrong — they just don't voice them. Run a premortem before every major launch: "Imagine it's six months from now and this has failed. Write down what went wrong." This legitimises pessimism in a structured way and surfaces the risks that no one would raise unprompted.`,
    },
  ]},

},


// =============================================================================
//  DIMENSION: COHERENCE
// =============================================================================

coherence: {

  // -----------------------------------------------------------
  //  Coherence — Tier 1 — Crisis
  // -----------------------------------------------------------
  1: { label: "Tier 1 — Crisis", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Group Model Building (GMB)`,
      source:        `Hovmand et al.; Scott`,

      mechanismName: `The Tower of Babel`,
      mechanismDesc: `Different departments have fundamentally different mental models of what the strategy means, but nobody realises it because each group assumes their interpretation is the shared one. The same words — "customer-centric," "agile," "value" — mean different things to different teams. Without a forcing mechanism to surface these differences, the organisation executes multiple contradictory versions of the strategy simultaneously.`,

      correctHow: `Different departments have fundamentally different mental models of what the strategy means, and talking isn't fixing it. Stop the regular meetings. Get the key stakeholders in one room with a whiteboard and build a single shared system diagram — together, out loud, drawing the connections and arguing about them in real time. The disagreements surface in the drawing, not six months later in a failed deliverable.`,

      preventHow: `Build a GMB session into the first two weeks of every engagement. Before any strategy is finalised, make the stakeholders co-create the system map. If they can't draw it together, they don't share a model — and anything you deliver will be interpreted differently by each group.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Coherence — Tier 2 — Friction
  // -----------------------------------------------------------
  2: { label: "Tier 2 — Friction", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Visual Representation Boundary Objects (VRBOs)`,
      source:        `Black; Andersen`,

      mechanismName: `The Locked Map`,
      mechanismDesc: `The strategic artifacts delivered — playbooks, dashboards, tools — are too rigid to allow for the local interpretation needed to make them work. When a template or model strips away the nuance that different groups need to do their jobs, they reject the official tool and revert to "feral" spreadsheets and unofficial workarounds.`,

      correctHow: `Cross-team conversations are getting personal or circular. Create a shared artifact — a process map, a system diagram, a dashboard — and make it the focal point of every meeting. When people argue about an object on the wall instead of arguing about each other's intent, the conversation becomes productive. The artifact depersonalises the conflict.`,

      preventHow: `Design your key deliverables as boundary objects from the start. Ask: "Will this artifact mean the same thing to Sales, Product, and Engineering?" If not, redesign it until it bridges the interpretive gap rather than widening it.`,
    },
    {
      practicalName: `[Practical name TBD]`,
      name:          `Reflexive Monitoring`,
      source:        `May & Finch`,

      mechanismName: `The Sense-Making Void`,
      mechanismDesc: `The clarity provided by the consultant vanishes 30 days after they leave. Actors within the organisation lose their grip on what the new strategy means and revert to old habits because the new path is too ambiguous. Shared understanding was never stabilised through ongoing sense-making rituals, so it simply decayed.`,

      correctHow: `Coherence is drifting. Ask five people "why are we doing it this way?" and compare answers. If they've diverged, it's not because they stopped caring — it's because no one kept the shared understanding alive. Start a recurring ritual: a short monthly session where people re-articulate what the strategy means and how they're applying it.`,

      preventHow: `Build coherence check-ins into the engagement cadence from the start. Don't assume that agreement at launch equals alignment at month three. Schedule the reflexive monitoring before you need it.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Coherence — Tier 3 — Mastery
  // -----------------------------------------------------------
  3: { label: "Tier 3 — Mastery", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Boundary Infrastructure`,
      source:        `Bowker & Star`,

      mechanismName: `The Slow Fade`,
      mechanismDesc: `Alignment is currently strong, but shared understanding is perishable. As people rotate, new hires arrive without the original context, and institutional memory erodes. Without durable scaffolding — templates, glossaries, onboarding materials — today's coherence silently degrades into tomorrow's confusion.`,

      maintainHow: `Coherence is working. The job now is to make it durable. Build templates, shared glossaries, onboarding materials, and standard operating procedures that carry the shared understanding forward as people leave and join. Think of it as pouring concrete around what everyone already agrees on.`,
    },
  ]},

},


// =============================================================================
//  DIMENSION: VELOCITY
// =============================================================================

velocity: {

  // -----------------------------------------------------------
  //  Velocity — Tier 1 — Crisis
  // -----------------------------------------------------------
  1: { label: "Tier 1 — Crisis", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Set-Based Design / Set-Based Concurrent Engineering`,
      source:        `Ward et al.; Sobek`,

      mechanismName: `The Premature Lock-In`,
      mechanismDesc: `The organisation committed to a single approach too early — before it had enough information to know whether it was the right one. Now the team feels invested, sunk costs feel real, and the instinct under pressure is to double down rather than revisit the decision. The narrowing of options happened before the uncertainty was resolved, and the system is stuck executing a choice it cannot validate.`,

      correctHow: `The project locked into one approach too early and it's not working, but the team feels committed. Reopen the option space deliberately: identify 2-3 viable alternatives to the current path, run cheap experiments on each in parallel, and set a concrete decision date. The instinct under pressure is to double down — resist it. Premature convergence is what got you here.`,

      preventHow: `Design the engagement so that early phases explicitly carry multiple options forward. Don't converge until you have real data — not opinions — telling you which path to take. Budget time and resources for parallel exploration. Toyota does this systematically; you can too.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Velocity — Tier 2 — Friction
  // -----------------------------------------------------------
  2: { label: "Tier 2 — Friction", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Media Richness Matching`,
      source:        `Daft & Lengel`,

      mechanismName: `The Wrong Conversation`,
      mechanismDesc: `The organisation is using the wrong communication channels for the type of problem it faces. Data problems — where the answer exists but hasn't been found — are being discussed in lengthy workshops. Meaning problems — where people genuinely disagree about what the situation means — are being handled over email or in status reports. The mismatch between channel richness and problem ambiguity generates noise instead of clarity.`,

      correctHow: `Miscommunication is scaling and nobody knows why. Check whether data problems (we need numbers) are being handled in workshops and meaning problems (we need alignment) are being handled over email. If so, flip them: dashboards and reports for data; face-to-face conversation for meaning. Match the richness of the channel to the ambiguity of the problem.`,

      preventHow: `At engagement kickoff, categorise the major workstreams by problem type (uncertainty vs. equivocality) and assign communication channels accordingly. Don't let the default be "everything in Slack" or "everything in a weekly status meeting."`,
    },
    {
      practicalName: `[Practical name TBD]`,
      name:          `Inverse Conway Maneuver (Organizational Realignment)`,
      source:        `Colfer & Baldwin`,

      mechanismName: `The Structural Grinding`,
      mechanismDesc: `The organisation's internal structure — reporting lines, budgets, physical locations — is fundamentally unaligned with the collaboration the strategy requires. The strategy demands tight cross-functional interdependence, but the org chart enforces silos. Coordination load increases exponentially because the interdependence required by the strategy has no corresponding organisational interface.`,

      correctHow: `The strategy demands that teams collaborate tightly, but they report to different VPs, sit on different floors, and have different bonus structures. The org chart is winning. Escalate to the sponsor: either create a cross-functional team with shared reporting and shared incentives, or rescope the strategy to fit the structure that actually exists. Don't just ask people to "collaborate better."`,

      preventHow: `Before recommending a strategy that requires cross-silo collaboration, map the organisational structure against the interdependence the strategy demands. If there's a mismatch, make the structural change part of the recommendation — not an afterthought.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Velocity — Tier 3 — Mastery
  // -----------------------------------------------------------
  3: { label: "Tier 3 — Mastery", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Design Structure Matrix (DSM) / Modularization`,
      source:        `Steward; Browning`,

      mechanismName: `The Meeting Trap`,
      mechanismDesc: `The strategy requires so much collaboration between so many people that the organisation spends all its time coordinating and none of its time executing. Communication pathways grow exponentially with team size, and the cognitive limit is exceeded — leading to decision paralysis and the "meeting about the meeting" syndrome.`,

      maintainHow: `Things are moving well. Now optimise the flow. Map the real dependencies between teams and workstreams — not the org chart version, the actual version. Then restructure so that tightly coupled work sits under one roof and loosely coupled work can proceed independently. The goal is to minimise the number of handoffs that require synchronisation.`,
    },
  ]},

},


// =============================================================================
//  DIMENSION: MATERIAL ADOPTION
// =============================================================================

adoption: {

  // -----------------------------------------------------------
  //  Adoption — Tier 1 — Crisis
  // -----------------------------------------------------------
  1: { label: "Tier 1 — Crisis", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Decommissioning / Circuit Breaker`,
      source:        `Rentrop & Felden; Houghton & Kerr`,

      mechanismName: `The Parallel Track`,
      mechanismDesc: `The old system is still running alongside the new one, and people are quietly using it. Legacy spreadsheets, shadow workflows, and unofficial tools compete directly with the new process — and they're winning, because they're familiar and frictionless. As long as the old path exists, the new one is optional in practice, regardless of what was announced.`,

      correctHow: `Identify the one or two legacy systems, spreadsheets, or workflows that compete directly with the new process. Revoke access, sunset the template, retire the old dashboard — this week, not "eventually." People will use the path of least resistance, and right now that path leads backward.`,

      preventHow: `Design the rollout so the old system is decommissioned as part of the launch, not after it. Build the circuit breaker into the implementation plan from day one. The client should never have the option to run both in parallel.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Adoption — Tier 2 — Friction
  // -----------------------------------------------------------
  2: { label: "Tier 2 — Friction", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Interessement Devices`,
      source:        `Callon; Latour`,

      mechanismName: `The Drift Back`,
      mechanismDesc: `People initially engaged with the new approach, but the structural incentives still favour the old way of working. Without devices that lock actors into the new network — visible KPIs, embedded workflows, public status for early adopters — the gravitational pull of existing habits and relationships slowly draws people back to their previous routines.`,

      correctHow: `Look for what's making the old network stickier than the new one. Then flip it: embed the new workflow into the tool everyone already uses, tie a visible KPI to adoption, give the early adopters public status. Make staying in the new network easier and more rewarding than leaving it.`,

      preventHow: `Design interessement into the engagement from the start. Before launch, map out what structural incentives will lock actors into the new network — don't rely on goodwill or training alone.`,
    },
    {
      practicalName: `[Practical name TBD]`,
      name:          `Absorptive Capacity Building (Prior Knowledge Development)`,
      source:        `Cohen & Levinthal`,

      mechanismName: `The Empty Vessel`,
      mechanismDesc: `The client lacks the prerequisite knowledge or mental frameworks to understand and act on the recommendation. The organisation treats expert knowledge as a commodity to be purchased rather than a capability to be built. New information cannot be "hooked" onto existing knowledge structures, so it slides off — not because of resistance, but because of incomprehension.`,

      correctHow: `When recommendations bounce off, it's often not resistance — it's incomprehension. The client's team lacks the prior knowledge to even parse the strategy. Bridge the gap now: run targeted workshops, use analogies to what they already know, build progressive exposure into the next sprint. You're building the scaffolding so the recommendation has something to land on.`,

      preventHow: `Assess the client's absorptive capacity before scoping the engagement. If there's a knowledge gap between where they are and what you're recommending, budget time to close it. The recommendation is only as good as the team's ability to receive it.`,
    },
    {
      practicalName: `[Practical name TBD]`,
      name:          `Implementation Climate Alignment`,
      source:        `Klein & Sorra`,

      mechanismName: `The Priority Mirage`,
      mechanismDesc: `Leadership says the strategy is important, but the rest of the organisation doesn't see any changes in rewards, support, or expectations. Employees default to legacy behaviours because they perceive that the "old ways" are still what get them promoted and paid. The announcement happened; the incentive shift didn't.`,

      correctHow: `Audit the reward structures right now. Are bonuses, performance reviews, and resource allocations still rewarding the old behaviour? People read signals from what gets measured, promoted, and funded — not from what gets announced. Find the misalignment and escalate it to the sponsor.`,

      preventHow: `Make incentive alignment a prerequisite in your implementation plan. Before launch, get explicit sponsor commitment to adjust at least one formal reward mechanism (KPI, bonus structure, resource allocation) so it signals the new behaviour.`,
    },
  ]},

  // -----------------------------------------------------------
  //  Adoption — Tier 3 — Mastery
  // -----------------------------------------------------------
  3: { label: "Tier 3 — Mastery", interventions: [
    {
      practicalName: `[Practical name TBD]`,
      name:          `Obligatory Passage Point (OPP) Defense / System Hardening`,
      source:        `Callon; Star`,

      mechanismName: `The Quiet Erosion`,
      mechanismDesc: `The strategy is adopted and working, but it is not yet structurally defended. Without formal governance — access controls, audit trails, clear ownership — new initiatives and workarounds will slowly route around the established process. The risk at this stage isn't active resistance; it's passive decay as the organisation's attention moves on to the next priority.`,

      maintainHow: `The strategy is adopted and working. Now make sure it stays that way. Institutionalise governance: access controls, audit trails, formal ownership. The risk at this stage isn't resistance — it's erosion, as new initiatives or workarounds slowly route around the established process.`,
    },
  ]},

},


}; // end RECS
