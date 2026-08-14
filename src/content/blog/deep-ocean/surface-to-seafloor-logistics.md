---
title: "The Surface-to-Seafloor Logistics System"
description: "A multimodal transportation network for moving people, dry cargo, heavy equipment, scientific samples, hazardous material, waste, and emergency resources through two kilometers of ocean."
frontier: "Deep Ocean"
published: 2026-08-14T05:30:00-07:00
lastReviewed: 2026-08-14
readingTime: "23 min"
reportNo: "PX-OC-015"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Alvin Capabilities"
    url: "https://ndsf.whoi.edu/alvin/capabilities/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "2026 ROV Shakedown"
    url: "https://oceanexplorer.noaa.gov/expedition/ex2603/"
    publisher: "NOAA Ocean Exploration"
  - title: "ROV Dunk Test"
    url: "https://oceanexplorer.noaa.gov/multimedia/rov-dunk-test/"
    publisher: "NOAA Ocean Exploration"
  - title: "International Maritime Dangerous Goods Code"
    url: "https://www.imo.org/en/publications/pages/imdg%20code.aspx"
    publisher: "International Maritime Organization"
  - title: "The International Maritime Dangerous Goods Code"
    url: "https://www.imo.org/en/ourwork/safety/pages/dangerousgoods-default.aspx"
    publisher: "International Maritime Organization"
  - title: "International Convention for the Safety of Life at Sea"
    url: "https://www.imo.org/en/about/conventions/pages/international-convention-for-the-safety-of-life-at-sea-%28solas%29%2C-1974.aspx"
    publisher: "International Maritime Organization"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities, January 2026 Notice"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-resources/RuleManager2/notices/january-2026/7-uwvs_nandgi-jan26.pdf"
    publisher: "American Bureau of Shipping"
openProblems:
  - id: "close-atlantis-logistics-resilience-model"
    title: "Close the Atlantis logistics resilience model"
    question: "What inventories, vehicle redundancy, vessel agreements, weather margins, maintenance capacity, and dispatch rules keep crew safety and critical science within limits across realistic delays and common-mode transport failures?"
    status: "Open"
    disciplines: ["Logistics engineering", "Operations research", "Marine operations"]
    nextStep: "Build a year-long discrete-event model using candidate-site weather, vessel mobilization, vehicle reliability, inventory consumption, repair demand, dock availability, crew rotations, construction campaigns, and correlated failures, then publish the probability of each service threshold being breached."
  - id: "demonstrate-atlantis-medical-evacuation"
    title: "Demonstrate the Atlantis medical evacuation chain"
    question: "Can an immobilized patient, attendant, monitoring equipment, and life support move safely from any occupied compartment through the H1 collar, transfer submersible, surface recovery system, support vessel, and onward medical transport within a credible treatment window?"
    status: "Open"
    disciplines: ["Emergency medicine", "Human factors", "Submersible operations"]
    nextStep: "Construct a full-scale geometric mock-up and run timed casualty exercises with power loss, blocked routes, rough handling, reduced staffing, delayed launch, failed primary collar, and continuous clinical monitoring from recognition through shore handoff."
prerequisites:
  - "deep-ocean/ports-of-underwater-civilization"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>An underwater institution is not persistent merely because its pressure hull survives. It becomes persistent when people, food, spares, instruments, samples, waste, and emergency resources move predictably from supplier to end user despite weather, vehicle faults, unavailable berths, and medical urgency. I design Atlantis as the terminal node of a multimodal transportation network rather than a habitat visited by expeditions. Separate systems carry people, routine dry cargo, flooded heavy cargo, pressure-preserved science, hazardous material, and return waste. A one-atmosphere crew-transfer submersible preserves human safety, while reusable pressure pods and autonomous cargo tugs keep routine freight out of passenger volume. Flooded pallets and controlled landers move mass that does not require a pressure hull. The analysis shows that a 2,000-meter descent takes roughly 44 minutes at 0.75 meters per second, while the complete one-way human transfer can require two to three hours. Surface handling may impose a tighter weather limit than submerged travel. I therefore size inventory for delays, separate refuge from evacuation, duplicate human transport paths, and treat every cargo movement as a traceable state from shore acceptance through seafloor receipt and return.</p>
</section>

## Persistence begins before the ship leaves port

The logistics path starts at the supplier and ends only when the intended user accepts the item at depth:

$$
\text{supplier}
\rightarrow
\text{shore base}
\rightarrow
\text{surface vessel}
\rightarrow
\text{vertical transit}
\rightarrow
\text{underwater port}
\rightarrow
\text{institutional store}
\rightarrow
\text{use}.
$$

A missing seal at the supplier, mislabeled chemical at the shore base, unavailable crane at sea, failed cargo beacon in the water column, blocked dock at depth, or inventory error in the habitat can stop the same mission. Logistics is the reliability of the whole chain, not the capacity of its largest vehicle.

I retain a provisional operating depth of 1,500 to 2,500 meters, six nominal occupants, eight temporary occupants, 30-day rotations, seven-day refuge endurance after a major internal failure, shore-connected primary power, and a mixed robotic fleet. I use 2,000 meters for calculations.

The system must support routine operation, weather delay, degraded transport, and emergency evacuation or resupply. Average conditions do not define adequacy. The meaningful cases involve a medical casualty during poor weather, a failed primary collar, one unavailable submersible, a vessel fault, or an extended interruption shortly before a scheduled rotation.

<aside class="working-thesis" aria-label="Logistics principle">
  <span>Logistics principle</span>
  <p>People, dry freight, wet mass, sensitive science, hazards, and waste should share custody rules without being forced through one vehicle or one physical pathway.</p>
</aside>

## Five layers create the transportation network

The shore base receives, inspects, certifies, packages, stores, and tracks every person and payload. It supports medical screening, vehicle and pressure-vessel maintenance, scientific preparation, battery and chemical handling, refrigerated storage, waste reception, weather planning, and emergency coordination.

Its most important product is trustworthy readiness. A pod does not enter the chain because it is closed. The base confirms identity, mass, center of gravity, environmental requirement, hazards, destination, interfaces, inspection, documentation, and remaining service life.

Surface transport then carries people and cargo to the site. A multipurpose support vessel can perform routine missions, while rare construction work uses contracted heavy-lift and cable-laying capacity. Those functions may share a ship initially, but they should remain distinct in planning, certification, and contingency coverage.

The air-water boundary is often the most dynamic layer. Waves create relative motion among ship, crane, suspended vehicle, and sea. The system then traverses two kilometers vertically before the Unit 14 ports receive the vehicle or payload and route it into external storage, dry locks, clean laboratories, workshops, medical stores, hazardous stores, or waste buffers.

<figure class="process-figure" aria-labelledby="logistics-chain-caption">
  <div class="process-figure__steps">
    <span><small>Prepare</small><strong>Inspect, classify, package, and record ashore</strong></span>
    <span><small>Mobilize</small><strong>Load vessel and authorize the weather window</strong></span>
    <span><small>Transit</small><strong>Cross the surface and vertical ocean safely</strong></span>
    <span><small>Receive</small><strong>Dock, inspect, place, and close custody</strong></span>
  </div>
  <figcaption id="logistics-chain-caption">Figure 1. Delivery is complete only when the destination accepts the payload and the inventory system reconciles its state.</figcaption>
</figure>

## Classify cargo by what physics it needs

Pressure hull mass is too expensive to spend on objects that tolerate seawater. I define six logistics classes:

| Class | Payload | Required environment | Principal mode |
| --- | --- | --- | --- |
| L1 | People | One atmosphere, life support, human rating | Crew-transfer submersible |
| L2 | Routine dry cargo | Dry and near one atmosphere | Pressure cargo pod |
| L3 | Wet heavy cargo | Immersed and externally pressurized | Flooded pallet or cargo lander |
| L4 | Sensitive science | Controlled pressure, temperature, or chemistry | Instrumented sample vessel |
| L5 | Hazardous material | Certified isolation and segregation | Dedicated container |
| L6 | Waste and returns | Containment defined by material | Segregated reverse-logistics container |

Steel structures, anchors, cables, qualified batteries, mineral samples, and external tools can often travel wet. Food, clothing, medicines, ordinary electronics, and some reagents need dry volume. People require propulsion, atmosphere, thermal control, navigation, rescue, classification, and trained operation.

This division also controls contamination. A passenger vehicle should not become a routine carrier for experimental chemicals or dirty waste merely because empty seats exist.

## People travel in a transport submersible

I select a free-swimming one-atmosphere submersible for routine personnel movement. Its mission is transport rather than exploration. It carries the nominal crew where practical, operators or highly supervised automation, personal baggage, an emergency medical kit, and limited priority freight.

The design priorities are redundant propulsion and control, precise H1 docking, reserve energy, atmosphere management, surface stability, emergency buoyancy, independent localization, and compatibility with protected surface handling.

At 2,000 meters, routine saturation transfer is not a credible alternative. The habitat and vehicle maintain near-surface atmospheric pressure. People remain isolated from the ambient ocean rather than acquiring a decompression obligation.

At descent speed $v=0.75\ \mathrm{m/s}$,

$$
t=\frac{d}{v}=\frac{2{,}000}{0.75}\approx2{,}667\ \mathrm{s},
$$

or about 44 minutes. At $0.5\ \mathrm{m/s}$, descent takes about 67 minutes. Launch checks, surface handling, descent, local approach, collar verification, vestibule drainage, and hatch transfer make two to three hours a realistic one-way operational allowance.

The water column is therefore not a short elevator ride. A person can be physically beneath the vessel and still remain hours from the habitat or hospital.

## Survival endurance protects the failed mission

The vehicle needs enough energy for descent, more than one docking attempt, diversion to a second collar, undocking, ascent, surface operation, and reserve. Designated ballast must release through independent powered and nonprimary means while remaining protected against inadvertent actuation.

I use 72 hours as a provisional occupant-survival goal. WHOI reports that Alvin normally remains submerged for about 10 hours and carries emergency capability up to 72 hours, which establishes a relevant present-day precedent. The value does not make a three-day rescue acceptable. It creates time to diagnose faults, mobilize surface assets, wait through limited weather change, and recover a vehicle whose nominal mission lasted only hours.

After emergency ascent, the submersible must transmit through radio and satellite, present radar and visual targets, remain stable in expected seas, preserve atmosphere, and accept more than one recovery method. Positive buoyancy reaches the surface. It does not place occupants safely aboard a ship.

The vehicle must be able to abandon the first approach, loiter, use the second H1 collar, return to the surface, or meet a deployed rescue interface. A transport whose only safe endpoint is one collar has converted a local port fault into a crew emergency.

## Surface handling may set the weather limit

A submerged vehicle can experience relatively calm water while its support ship moves strongly above. Crossing the splash zone exposes the submersible to impact, pendulation, line shock, hull collision, and deck hazards.

Crane launch is familiar, portable, and serviceable aboard a conventional support ship. It remains sensitive to sea state and requires trained deck operations. A protected moon pool or recessed handling system reduces direct wave exposure and exterior hull collision while increasing vessel specialization and cost.

For routine human transport, I prefer a protected arrangement if the site and business case support it. A process used every month for people should not inherit an exposed geometry intended for occasional science dives without a deliberate safety case.

NOAA's 2026 ROV shakedown reinforces the operational lesson. Before field work, the team reviewed launch, recovery, and emergency procedures, conducted repeated dunk tests, checked buoyancy, and practiced integration. Handling equipment is a mission system, not an incidental crane.

WHOI lists Alvin launch and recovery through Sea State 4, but Atlantis cannot borrow that limit by analogy. Its own vehicle, vessel, handling geometry, personnel exposure, and passenger procedure must establish certified conditions and abort criteria.

## Dry freight belongs in reusable pressure pods

I place food, clothing, pharmaceuticals, electronics, documents, and ordinary laboratory supplies inside standardized dry pressure pods rather than passenger space.

A first family might contain 1 to 3 cubic meters internally and carry 500 to 2,000 kilograms, depending on geometry, buoyancy, handling, and cargo. Each pod records identity, seal state, humidity, temperature, pressure, shock, orientation, mass, center of gravity, and custody.

Autonomous tugs carry routine pods to the C1 or M1 logistics interface. A crew vehicle may accept one external priority pod when certified. Surface-controlled lowering provides a contingency route if cargo tugs are unavailable.

This creates a hybrid system: several inexpensive passive pods, two reusable tugs, and a slower fallback that does not depend on tug propulsion or software. Pods should remain recoverable and openable by more than one receiving mechanism.

## Heavy mass should travel wet

Foundation components, cable reels, pipe, anchors, robot frames, qualified external batteries, landers, replacement thrusters, and much geological material do not need dry one-atmosphere transport. Flooded pallets and purpose-built landers save pressure-vessel mass and internal volume.

A ballast-controlled lander descends with modest negative buoyancy, controls or bounds its terminal speed, and releases recoverable ballast for ascent after unloading. At $1\ \mathrm{m/s}$, an ideal 2,000-meter descent lasts about 33 minutes. The hard problems are lateral drift, impact energy, landing attitude, tracking, seabed conditions, and recovery.

I will not treat routine discarded ballast as free. It must be recovered, environmentally acceptable, or intentionally designed into useful seafloor infrastructure.

Direct lowering gives positive surface control and introduces cable weight, drag, ship-motion transmission, entanglement, and dropped-object risk. For a 10-tonne payload, static gravitational load is

$$
F=mg=10{,}000(9.81)=98.1\ \mathrm{kN}.
$$

A simple dynamic amplification factor of 1.5 raises that component to about 147 kN before line weight, hydrodynamic drag, shock, abnormal conditions, and formal safety factors.

Heavy installation therefore remains a project-specific marine operation with certified lifting gear, exclusion zones, dynamic analysis, weather criteria, and independent recovery planning. The routine cargo system should not be oversized to imitate it.

## Throughput has a steady stream and an industrial pulse

For a six-person, 30-day rotation, I use an illustrative daily allowance per person of 1.8 kilograms for food and packaging, 0.3 kilograms for hygiene and miscellaneous consumables, 0.5 kilograms for science and maintenance, and 0.4 kilograms for contingency and packaging overhead.

$$
m_{\mathrm{daily}}
=
6(1.8+0.3+0.5+0.4)
=18\ \mathrm{kg/day}.
$$

Thirty days produces 540 kilograms. Irregular spares, filters, instruments, and operational margin raise the provisional dry inbound allocation to 1,000 to 1,500 kilograms per rotation.

These are planning values to replace with measured consumption. Water and breathing oxygen should not dominate routine freight because Units 7 and 8 established local storage, regeneration, and production. A habitat that routinely imports most drinking water or oxygen has not achieved persistence.

Normal wet cargo may be hundreds of kilograms. Construction can require tens or hundreds of tonnes. One system must schedule both without turning every monthly delivery into a heavy-lift campaign.

## Inventory is time stored at depth

I divide stock into life-critical, mission-critical, routine, and expansion categories. Life-critical inventory includes atmosphere-control reserves, emergency food and water, medical supplies, fire response, and pressure-boundary repair. Mission-critical stock includes robot propulsion, seals, wet-mate cartridges, navigation nodes, communication hardware, converters, sensors, and computing.

Routine stock covers food, hygiene, cleaning, clothing, and ordinary science. Expansion stock preserves dormant cable, capped utility branches, foundation interfaces, fasteners, and module connection hardware.

For item $j$, a simple prioritization logic is

$$
S_j\propto\lambda_jC_jT_j,
$$

where $\lambda_j$ is failure or consumption rate, $C_j$ is consequence of shortage, and $T_j$ is credible resupply delay. Small, cheap parts that disable life-critical equipment belong at depth even when they rarely fail. Large low-probability assemblies may remain at the shore base if their loss leaves a safe degraded state.

No repair should fail because the only compatible seal, fuse, fastener, adapter, credential, or recovery image remained on land.

## Weather resilience needs explicit horizons

I define three provisional isolation horizons. A 72-hour routine delay should have negligible effect. A 14-day disruption should preserve normal or moderately reduced operation. A 30-day severe isolation should preserve life through rationing, deferred maintenance, and reduced science.

That 30-day inventory target differs from the seven-day independent refuge requirement. Isolation means the habitat still functions but cannot receive logistics. Refuge means major habitat functions have failed and occupants survive inside a smaller protected system.

The forecast should continuously estimate food days, medical reserve, atmosphere-service capacity, waste capacity, repair capability, vehicle and dock availability, vessel mobilization, and the probability of a suitable weather window before each limit.

Dispatch begins from risk-adjusted lead time. It does not wait for a nearly empty store.

<figure class="architecture-figure" aria-labelledby="resilience-horizons-caption">
  <div class="architecture-figure__grid">
    <div><small>72 hours</small><strong>Absorb ordinary delay</strong><p>Keep safety, science, maintenance, and crew plans substantially unchanged.</p></div>
    <div><small>14 days</small><strong>Enter managed disruption</strong><p>Protect core observatory work while deferring discretionary loads and consumption.</p></div>
    <div><small>30 days</small><strong>Preserve life in isolation</strong><p>Ration selected stores, defer noncritical work, and retain recovery capability.</p></div>
    <div><small>7-day refuge</small><strong>Survive internal system loss</strong><p>Use an independent protected volume while external rescue crosses the logistics chain.</p></div>
  </div>
  <figcaption id="resilience-horizons-caption">Figure 2. Resupply delay and habitat failure are different states. They require different inventories, power assumptions, and rescue plans.</figcaption>
</figure>

## Medical evacuation begins with stabilization

A casualty must travel from habitat treatment through corridor, hatch, H1 vestibule, transfer vehicle, ascent, surface handling, shipboard care, and onward transport to a hospital. Each boundary costs time and can worsen the patient.

The habitat therefore needs telemedicine, oxygen, airway equipment, defibrillation, hemorrhage control, burn and trauma supplies, essential drugs, monitoring, diagnostic ultrasound, and crew members trained beyond basic first aid.

Every segment of the physical route must accept an immobilized patient, attendant, and equipment. A hatch that passes an ambulatory adult can still fail the medical mission if a stretcher cannot turn through it or if monitors must be disconnected during transfer.

A provisional time budget includes 20 to 60 minutes for recognition and stabilization, about 30 minutes to prepare vehicle and berth, 20 minutes for transfer, 45 to 70 minutes to ascend, 20 to 40 minutes for surface recovery, and a site-dependent journey to definitive care. Even in favorable conditions, the total is measured in hours.

Site selection must therefore include vessel base, aviation range, hospital capability, rescue organization, launch limits, and credible door-to-treatment time. Geographic closeness is not clinical access.

## Evacuation and refuge solve different failures

A severe fire, flood, contamination event, or structural concern may make the main habitat untenable before a surface vessel arrives.

An independent refuge provides time and protects against events for which immediate ascent is less safe. A permanently docked lifeboat provides rapid departure while imposing cost, battery and seal maintenance, berth use, and a risk that the same event affects habitat and vehicle.

Individual free ascent from 2,000 meters is not a credible strategy. Pressure, cold, duration, and physiological exposure exclude it.

I combine a seven-day independent refuge with two human-rated transfer paths. As the institution matures, one submersible can remain immediately available at depth as an escape asset. The occupied operating concept must be supported by probabilistic risk analysis, not by an assumption that the scheduled transport vehicle will always be nearby.

Two submersibles are useful only if their rescue readiness survives common maintenance, software, battery, handling, vessel, and collar failures. A second serial number is not automatically an independent escape route.

## Hazardous material gets its own chain

Atlantis will handle lithium batteries, compressed gases, solvents, corrosives, specialized fuels, biological material, calibration sources, contaminated filters, and chemical waste. These do not travel as routine L2 freight.

The IMO International Maritime Dangerous Goods Code governs packaged dangerous goods carried by ships and addresses identification, classification, packaging, marking, documentation, stowage, and segregation. The 2024 Edition incorporating Amendment 42-24 became mandatory on 1 January 2026.

That shipboard framework is necessary and not sufficient for a sealed institution. Atlantis adds receiving criteria, pressure compatibility, thermal and gas monitoring, remote isolation, destination segregation, and an emergency response that does not vent hazards into occupied air.

Hazardous containers carry separate manifests and machine-verifiable identity. Batteries travel at an approved state and in qualified packaging appropriate to their chemistry and condition. Damaged packs remain outside occupied pressure volumes whenever practical. Incompatible materials do not share a pod merely because each package is compliant alone.

Return waste follows the same custody discipline. The ocean is not a disposal route.

## Waste is outbound logistics, not disappearance

Human waste, food residue, packaging, electronics, filters, maintenance fluid, damaged batteries, and laboratory material each need a disposition.

Some streams can be safely treated and discharged under the future site permit. Others are compacted, sterilized, repaired, recycled, or returned ashore. Waste interfaces should be physically and digitally incompatible with food and clean-sample containers. Color is not enough for autonomous handling or low visibility.

Reverse logistics should recover repairable modules and carry their fault history, exposure, contamination, and chain of custody back to the shore workshop. A broken thruster is not generic scrap if its failure can improve the next fleet design.

## Construction mobilizes another scale of logistics

Expansion brings survey vessels, dynamic positioning, seabed preparation, cable laying, heavy lift, construction ROVs, module lowering, structural connection, utility commissioning, and pressure testing.

I would survey and prepare the site robotically, install foundation and references, lower the module in a passive safe condition, capture it mechanically, establish independent support, connect and test utilities, verify the empty pressure volume, then commission the isolated personnel trunk.

The existing institution should not lose pressure integrity or primary stability during the campaign. New construction remains behind closed hatches until its structure, contamination state, utilities, fire behavior, atmosphere, and controls are proven.

Routine support vessels need not carry this entire industrial capability. Atlantis should contract exceptional lift while owning the interface, data, acceptance, and recovery requirements that make contracted equipment usable.

## A small institution still needs redundant transport

My provisional first logistics set contains two H1-compatible crew-transfer submersibles, each able to carry the nominal crew where practical; two autonomous cargo tugs; six reusable dry pods; twelve flooded pallets; specialized sample and hazardous cartridges; a primary support vessel with protected handling; contracted backup-vessel access; and prearranged heavy-lift, cable, aviation, maritime rescue, medical, and classification support.

The institution should not remain occupied if loss of one bespoke vehicle suspends all crew movement. Nor should the second submersible always be located on the same unavailable ship.

A notional 30-day rotation uses Day 0 for incoming crew and cargo, Day 1 for overlap and outgoing departure, Days 2 through 20 for normal work, Days 21 through 23 for final inspection of the next load, Days 24 through 26 as the preferred weather window, and Days 27 through 30 as margin.

Crew departure follows completed handover, received critical cargo, verified return reserves, and safe occupancy. Cargo missions remain separate where possible. A delayed instrument does not delay relief, and a medical passenger does not share a cabin with poorly characterized chemistry.

## The state machine follows every item both ways

Each shipment moves through requested, approved, packed, inspected, accepted, loaded, launch-authorized, in transit, docked, received, quarantined if needed, stored, issued, returned, and closed states.

The record contains owner, destination, mass, geometry, environment, hazards, interfaces, inspection, custody, and exceptions. A physical scan should never override a known conflict. The receiving port can reject a pod that arrives at the right location with the wrong pressure, temperature, seal, or documentation.

Fleet, dock, warehouse, laboratory, and maintenance systems share this state without silently rewriting one another. Offline copies survive communication loss. Reconciliation preserves who made each decision and which version of the manifest controlled the movement.

The same machinery supports emergency dispatch. A rescue load can receive priority while still remaining compatible, weighed, secured, and traceable.

## Test delay, casualty, and failed recovery

The first prototype is a digital logistics model containing consumption, random weather, vessel and submersible faults, dock loss, maintenance demand, rotations, cargo requests, construction campaigns, and emergency events. Its outputs include stockout probability, delayed rotation, lost evacuation coverage, crew overtime, unused cargo capacity, and cost of each resilience measure.

A standard pod prototype should then demonstrate surface acceptance, launch, tracking, underwater transit, off-axis capture, condition reporting, payload receipt, release, and recovery. Instrumentation records internal pressure, humidity, temperature, shock, orientation, leakage, identity, and battery state.

The human system needs a full-scale medical geometry mock-up and then a representative shallow-water transfer. Teams should move an immobilized patient and attendant through corridor, hatch, vestibule, vehicle restraint, recovery, and shipboard treatment while faults remove power, staff, the primary collar, or the preferred route.

<figure class="process-figure" aria-labelledby="logistics-test-caption">
  <div class="process-figure__steps">
    <span><small>Model</small><strong>Expose weather, stock, vehicle, and dock coupling</strong></span>
    <span><small>Move</small><strong>Demonstrate pod custody from shore to store</strong></span>
    <span><small>Disrupt</small><strong>Remove transport, berth, power, and tracking</strong></span>
    <span><small>Rescue</small><strong>Carry a casualty through the entire chain</strong></span>
  </div>
  <figcaption id="logistics-test-caption">Figure 3. Logistics resilience is demonstrated at the transitions where organizations, vehicles, pressure boundaries, and custody change.</figcaption>
</figure>

## Make the habitat an address

People must remain isolated from ambient pressure. Mass requires energy and controlled load paths. Wave motion makes the surface boundary dynamically hazardous. Medical delay changes outcomes. These are physical constraints.

Reliable docking, protected handling, emergency buoyancy, autonomous freight, pressure pods, tracking, and logistics software are engineering constraints. Specialized vessels, duplicate crew vehicles, certified systems, spare inventory, and rescue agreements are economic constraints. Passenger classification, dangerous-goods rules, occupational safety, environmental permits, and rescue jurisdiction are regulatory constraints.

None of these makes the institution impossible. Together they make the institution inseparable from its shore base and transportation network.

I therefore adopt a multimodal system: one-atmosphere submersibles for people, reusable pressure pods for dry freight, flooded pallets and landers for tolerant mass, instrumented vessels for sensitive samples, segregated containers for hazards and waste, protected surface handling, two human transport paths, and one inventory record extending to every critical component.

The two kilometers above Atlantis are not empty water. They are a transportation corridor whose reliability determines whether the habitat is a project or a place.

When that corridor works, the institution ceases to be an expedition. It becomes an address.

The next report will describe how that address is first created. It will design seabed preparation, foundations, buoyancy management, module lowering, installation tolerances, sediment interaction, anchoring, cable protection, robotic assembly, and the sequence that turns an empty patch of seafloor into an operational scientific settlement.
