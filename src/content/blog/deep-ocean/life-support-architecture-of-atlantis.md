---
title: "The Life-Support Architecture of Atlantis"
description: "A fault-tolerant environmental-control architecture for air, water, waste, heat, fire response, and refuge survival inside the first institution."
frontier: "Deep Ocean"
published: 2026-08-13T18:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "19 min"
reportNo: "PX-OC-008"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Environmental Control and Life Support Systems"
    url: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/"
    publisher: "NASA Marshall Space Flight Center"
  - title: "Life Support Subsystems"
    url: "https://www.nasa.gov/reference/jsc-life-support-subsystems/"
    publisher: "NASA Johnson Space Center"
  - title: "SpaceCraft Oxygen Recovery"
    url: "https://www.nasa.gov/spacecraft-oxygen-recovery-scor/"
    publisher: "NASA"
  - title: "NASA Achieves Water Recovery Milestone on International Space Station"
    url: "https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/"
    publisher: "NASA"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/special_service/7-rules-for-building-and-classing-underwater-vehicles%2C-systems-and-hyperbaric-facilities-2025/7-uwvs-rules-jan25.pdf"
    publisher: "American Bureau of Shipping"
openProblems:
  - id: "close-atlantis-life-support-mass-balance"
    title: "Close the Atlantis life-support mass balance"
    question: "Can one integrated model account for every atmospheric, water, waste, thermal, filter, storage, and discharge flow during a 30-day rotation and a seven-day refuge interval?"
    status: "Open"
    disciplines: ["Life support", "Chemical engineering", "Thermal systems"]
    nextStep: "Build an hourly process model for six nominal occupants and eight temporary occupants, then reconcile each stored, recovered, consumed, and discharged stream under nominal and failed configurations."
  - id: "test-isolated-module-life-support"
    title: "Test isolated-module life support"
    question: "Can an occupied Atlantis module preserve a safe atmosphere and thermal state after losing the central regenerative plant, one sensor channel, and normal intermodule circulation?"
    status: "Open"
    disciplines: ["Controls engineering", "Human factors", "Fire safety"]
    nextStep: "Run full-scale chamber tests with metabolic simulators, carbon dioxide release, controlled smoke, condensation, sensor faults, and single-train failures before any underwater qualification campaign."
prerequisites:
  - "deep-ocean/human-envelope-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>Atlantis must continually manufacture a safe human environment inside pressure vessels that cannot be abandoned casually. I propose a partially regenerative life-support architecture for a six-person nominal crew, an eight-person temporary load, and a seven-day isolated refuge. The central plant generates oxygen from purified water, removes carbon dioxide through regenerable beds, controls trace contaminants, recovers humidity condensate and selected wastewater, produces potable water from seawater, and transfers heat to the ocean. Independent module survival kits provide stored oxygen, chemical carbon dioxide removal, local circulation, fire response, water, sensing, and power when the central plant or distribution network fails. This arrangement rejects perfect closure as a first-generation objective. It treats regeneration as a logistics system and reserves as a safety system. A corrected six-person metabolic load requires approximately 4.92 kilograms of oxygen and produces 6.24 kilograms of carbon dioxide per day before leakage, exercise variation, or contingency occupancy. The central engineering problem is therefore not whether each process exists. It is whether all processes can remain measurable, repairable, and survivable when integrated under pressure.</p>
</section>

## A machine that rebuilds the environment

The pressure hull keeps the ocean out. Life support makes the volume inside worth protecting.

Every occupied module begins with a finite inventory of gases, water, thermal capacity, filters, and clean surfaces. People immediately transform that inventory. They consume oxygen and food, release carbon dioxide, heat, humidity, microorganisms, and trace chemicals, and create liquid and solid waste. Laboratories add solvents, reagents, particles, biological material, and equipment heat. Airlocks and maintenance lose gas. Cold walls invite condensation. A fire can convert a breathable atmosphere into a contaminated one within minutes.

I therefore treat life support as a resource refinery rather than a collection of appliances. Its job is to accept variable, contaminated streams and return air and water whose composition is known. Anything it cannot recover must be stored, discharged through an approved boundary, or replaced from the surface.

The accounting principle is simple:

$$
m_{\mathrm{input}}
=
m_{\mathrm{recovered}}
+m_{\mathrm{stored}}
+m_{\mathrm{discharged}}
+\Delta m_{\mathrm{institution}}.
$$

This equation is less glamorous than an underwater city, but it is closer to the work that makes one possible. No scrubber destroys matter. No purifier makes contamination vanish. Every claimed closed loop ends in another stream that must be measured.

<aside class="working-thesis" aria-label="Life-support principle">
  <span>Life-support principle</span>
  <p>No regenerative system may be the crew's only means of survival.</p>
</aside>

## Close the useful loops first

A fully open system stores every consumable and removes every waste product. It is simple to understand but expensive to resupply. A regenerative system recovers selected materials through physical and chemical processing. A bioregenerative system adds organisms such as plants, algae, or microbial reactors.

The first Atlantis institution should use all three ideas in different roles:

| Layer | Role in the first institution |
| --- | --- |
| Regenerative | Normal oxygen generation, carbon dioxide removal, humidity recovery, water processing, and thermal control |
| Open loop | Stored gases, chemical scrubbers, potable reserves, replacement filters, packaged food, and contained waste |
| Bioregenerative | Research payloads that may improve later institutions but do not determine immediate survival |

Perfect closure is not the objective. A closed loop can reduce logistics while increasing energy demand, maintenance, contamination pathways, software dependence, and common-mode failure. Atlantis has access to surface resupply and an immense external water reservoir. It should close a loop only when the complete recovery train is safer and more useful than the material it replaces.

<figure class="process-figure" aria-labelledby="resource-loop-caption">
  <div class="process-figure__steps">
    <span><small>Receive</small><strong>Seawater, food, gases, filters</strong></span>
    <span><small>Transform</small><strong>Air, water, heat, and waste</strong></span>
    <span><small>Recover</small><strong>Useful oxygen and clean water</strong></span>
    <span><small>Account</small><strong>Reserve, store, or discharge</strong></span>
  </div>
  <figcaption id="resource-loop-caption">Figure 1. Atlantis closes selected loops while keeping every material boundary visible.</figcaption>
</figure>

## Circulation comes before purification

Air quality cannot be controlled if air does not reach the control equipment.

Nominal ventilation must move oxygen into berths and work areas, carry metabolic carbon dioxide and humidity toward removal equipment, prevent stagnant pockets, distribute heat, and preserve acoustic comfort. Air changes per hour provide one coarse measure:

$$
N_{\mathrm{ACH}}
=
\frac{\dot V_{\mathrm{air}}}{V_{\mathrm{module}}}.
$$

The value alone does not prove adequate mixing. A module can report acceptable average composition while a sleeping alcove, exercise station, equipment cavity, or temporary work enclosure accumulates carbon dioxide or heat. Full-scale tracer-gas tests, computational fluid dynamics, metabolic simulators, and distributed sensing must reveal those local conditions.

Each pressure module should have local fans, return paths, isolation dampers, and independent environmental sensors. Intermodule circulation may improve normal efficiency, but it must stop rapidly during smoke, contamination, or pressure isolation. A fire damper that protects one module while starving another of essential circulation is not a complete safety design. The station control model must understand both outcomes.

## Oxygen is a water and hydrogen problem

The nominal oxygen source should be electrolysis of purified water:

$$
2H_2O \rightarrow 2H_2 + O_2.
$$

NASA uses this process aboard the International Space Station, but the chemical equation hides the equipment around it. Water must be purified, pumped, electrolyzed, separated, dried, metered, and delivered. Oxygen concentration and partial pressure must be measured independently. The hydrogen stream must be consumed, stored, or discharged without entering an occupied volume.

The human envelope established a standard mission-day estimate of $0.82\ \mathrm{kg}$ of oxygen consumption per person. For six people,

$$
\dot m_{O_2} = 6(0.82) = 4.92\ \mathrm{kg/day}.
$$

Stoichiometry then gives a theoretical water feed of approximately

$$
\dot m_{H_2O} = 4.92\left(\frac{36}{32}\right)
\approx 5.54\ \mathrm{kg/day},
$$

and hydrogen production of

$$
\dot m_{H_2} = 4.92\left(\frac{4}{32}\right)
\approx 0.62\ \mathrm{kg/day}.
$$

Over 30 days, the crew metabolically consumes about $148\ \mathrm{kg}$ of oxygen. Real hardware must exceed this theoretical scale because it must support exercise peaks, leakage, purging, maintenance, medical demand, temporary eight-person occupancy, control margin, and downtime.

I would not connect one electrolyzer to one station-wide oxygen line. Two independently powered trains should feed a sectionalized distribution system with module shutoffs. Stored oxygen should survive loss of both trains. Chemical oxygen generation and portable breathing equipment provide further diversity, not routine capacity.

Oxygen injection must respond to partial pressure, total pressure, sensor agreement, and fire state. A controller should never correct a questionable low reading by creating a flammability hazard. Crew members must be able to inspect the raw measurements and isolate injection manually.

## Carbon dioxide has two lives

The crew produces approximately $1.04\ \mathrm{kg}$ of carbon dioxide per person-day. For six people,

$$
\dot m_{CO_2} = 6(1.04) = 6.24\ \mathrm{kg/day},
$$

or about $187\ \mathrm{kg}$ over a 30-day rotation.

Regenerable sorbent beds should handle the nominal load. At least two trains must be arranged so the remaining train or trains can carry the maximum credible crew production after one is unavailable:

$$
(n-1)\dot m_{s}
>
\dot m_{CO_2,\mathrm{maximum}}.
$$

Chemical cartridges remain valuable because they are passive, legible, replaceable, and independent of much of the central machinery. Their mass should be sized by tested breakthrough under representative temperature, humidity, airflow, and carbon dioxide loading, not by nominal sorbent chemistry alone.

Captured carbon dioxide can be treated as waste or feedstock. When combined with electrolyzer hydrogen in a Sabatier reactor,

$$
CO_2 + 4H_2 \rightarrow CH_4 + 2H_2O.
$$

The water can return to oxygen production, reducing resupply. NASA reports that the International Space Station's Sabatier architecture recovers roughly half of the oxygen available in metabolic carbon dioxide because hydrogen leaves in methane. That is useful closure, but it also illustrates why recovery percentage is not the whole decision. A Sabatier unit adds reactors, heat, gas handling, methane management, controls, and maintenance.

The first station should reserve interfaces for carbon dioxide reduction without making it essential to safe occupation. Carbon dioxide can initially be stored or released only through a monitored environmental-discharge path. Discharge location, rate, mixing, local pH response, and interference with nearby experiments must be evaluated. An observatory cannot contaminate the water it claims to observe.

## Trace contaminants begin at the source

Electronics, polymers, cleaning products, food preparation, laboratories, batteries, human metabolism, and maintenance compounds can release contaminants at rates too small to notice and large enough to matter after weeks of recirculation.

For contaminant $i$ in a module volume $V$,

$$
\frac{dC_i}{dt}
=
\frac{G_i-R_i-L_i}{V},
$$

where $G_i$ is generation, $R_i$ active removal, and $L_i$ controlled loss or discharge. In a tight institution, $L_i$ may be small. Persistent low generation can therefore become a chronic exposure.

The first defense is source control: screened materials, restricted chemical inventories, segregated battery rooms, enclosed laboratory processes, local extraction, spill capture, and replacement of unnecessary volatile products. The treatment train then combines particulate filtration, activated carbon, selective sorbents, catalytic oxidation, and condensate management.

No universal cartridge can be assumed to remove an unknown laboratory accident. Every chemical brought into Atlantis needs an exposure limit, sensor strategy, filter compatibility, spill procedure, isolation volume, and disposal path. Broad-spectrum periodic analysis should complement continuous sensors for high-consequence gases such as carbon monoxide, hydrogen, methane, oxygen, and carbon dioxide.

## Humidity becomes water

People, cooking, hygiene, laboratories, and wet equipment add vapor to the atmosphere. In a closed module,

$$
\frac{dm_v}{dt}
=
\dot m_{v,\mathrm{generated}}
-\dot m_{v,\mathrm{condensed}}
-\dot m_{v,\mathrm{removed}}.
$$

Condensing heat exchangers become the primary water-removal mechanism. Their surfaces and drains must resist biofilm, hidden corrosion, freezing, carryover, and poor drainage. Condensate is not automatically potable. It may contain dissolved atmospheric contaminants and must enter a verified water-treatment path.

Habitable-air conditioning should not share every dependency with electronics cooling, battery thermal management, laboratories, and external heat rejection. Separate local loops can exchange heat through controlled interfaces without turning one leak, contaminant, or pump fault into a station-wide event.

The ocean is the final heat sink, but it is not a passive guarantee. Fouling, blocked flow, corrosion, pump loss, valve failure, and loss of a heat exchanger can still remove the cooling path. Refuge endurance must account for stored heat as carefully as stored oxygen.

## The ocean is a water source, not a tap

Atlantis can draw make-up water from the surrounding sea. The boundary should be designed as a pressure system:

<figure class="process-figure" aria-labelledby="water-train-caption">
  <div class="process-figure__steps">
    <span><small>Intake</small><strong>Isolate and reduce pressure</strong></span>
    <span><small>Treat</small><strong>Filter and desalinate</strong></span>
    <span><small>Verify</small><strong>Disinfect, polish, and test</strong></span>
    <span><small>Protect</small><strong>Store in separated reserves</strong></span>
  </div>
  <figcaption id="water-train-caption">Figure 2. Abundant seawater becomes useful only after the high-pressure boundary and the product quality are controlled.</figcaption>
</figure>

Deep seawater already has hydrostatic pressure relative to the one-atmosphere interior. Reverse-osmosis water flux is often approximated by

$$
J_w = A_m(\Delta P-\Delta\pi),
$$

where $A_m$ is membrane permeability, $\Delta P$ the hydraulic pressure difference, and $\Delta\pi$ the osmotic-pressure difference. The pressure environment may therefore offer a useful desalination opportunity. It does not provide free potable water. Membrane support, pressure regulation, brine rejection, fouling, cleaning, energy recovery, and flood-safe isolation still determine whether the concept is practical.

Wastewater should be separated before treatment. Humidity condensate and hygiene water are high-priority recovery streams. Urine requires salt and microbial management. Food water contains particles, oils, and nutrients. Laboratory and medical streams must remain isolated unless their contents are characterized and the potable train is qualified to accept them.

A plausible treatment sequence uses particulate removal, multifiltration, membrane or phase separation, catalytic oxidation, disinfection, quality verification, and storage. NASA's station system demonstrates the recovery of urine-derived water and humidity condensate using filtration, catalytic oxidation, conductivity checks, reprocessing, and storage. Its established recovery system processes about 90 percent of station water, while later demonstrations have reached 98 percent total recovery.

Those achievements prove high closure is possible. They do not require Atlantis to begin at the maximum. Seawater desalination and delivered reserve may be more forgiving than forcing difficult waste streams through one highly coupled processor.

Potable storage should be divided into active-use, operational-reserve, and physically isolated emergency inventories. At an emergency allowance of $3\ \mathrm{L}$ per person-day, six people for seven days need at least

$$
V_{\mathrm{emergency}} = 6(3)(7) = 126\ \mathrm{L}.
$$

That figure excludes medical use, contingency occupants, and margin. It is a lower bound, not a final tank size.

## Waste remains inside the design

Normal gravity makes toilets and liquid separation easier than in orbit, but containment remains essential. Waste plumbing must prevent aerosols, odor, backflow, atmosphere leakage, and cross-contamination with potable water. It must remain cleanable and usable during partial power loss.

Early Atlantis rotations should stabilize and store fecal waste, contaminated filters, medical materials, laboratory disposables, food remnants, damaged components, and packaging for controlled return or approved treatment. Drying, compaction, chemical stabilization, digestion, and thermal processing can reduce volume or hazards, but each method creates heat, gas, residue, maintenance, or biological risk.

Waste volume may constrain the mission before waste mass does. Reducing packaging, standardizing containers, repairing hardware, and choosing washable equipment are life-support decisions made before deployment.

## Fire changes the ventilation map

Fire is especially dangerous because the crew cannot step outside. Detection must combine smoke or particulate sensing, carbon monoxide, temperature, gas analysis, cameras, and electrical-fault telemetry. A single detector type cannot identify every slow, hidden, or chemically unusual event.

When combustion is suspected, the system should locate the event, isolate electrical power where appropriate, stop ventilation paths that spread smoke, preserve local sensing, protect escape routes, and support suppression. Portable breathing equipment allows crew members to fight or escape the fire without trusting the affected atmosphere.

Suppression agents must be compatible with the station's oxygen concentration, electronics, cleanup capability, crew exposure, and discharge rules. Post-fire air should not be returned to nominal circulation until particles, carbon monoxide, volatile products, oxygen state, and filter condition are understood.

This response must be tested with controlled smoke in a full-scale module. A ventilation model that works only in software has not yet shown whether the crew can see, communicate, locate the source, operate a damper, or reach refuge.

## Divide efficiency from survival

The normal plant benefits from shared processors, large regenerable beds, laboratory-grade analysis, and efficient thermal equipment. Survival benefits from separation.

<figure class="architecture-figure" aria-labelledby="survival-layers-caption">
  <div class="architecture-figure__grid">
    <div><small>Central plant</small><strong>Regenerate efficiently</strong><p>Dual oxygen, carbon dioxide, water, contaminant, and thermal trains serve normal operations.</p></div>
    <div><small>Occupied modules</small><strong>Control locally</strong><p>Fans, sensors, isolation, emergency oxygen, chemical scrubbing, fire response, and local power preserve each pressure volume.</p></div>
    <div><small>Refuge</small><strong>Survive independently</strong><p>Physically separated gas, water, cooling endurance, sanitation, medicine, communication, and power sustain the rescue interval.</p></div>
    <div><small>External boundary</small><strong>Exchange deliberately</strong><p>Seawater intake, heat exchangers, brine, approved discharge, and robotic service points remain isolatable.</p></div>
  </div>
  <figcaption id="survival-layers-caption">Figure 3. Central systems reduce repeated logistics; local systems prevent central failure from becoming immediate loss of life.</figcaption>
</figure>

Duplicating boxes is not enough. Two scrubbers can share a failed power bus, cooling loop, controller, valve design, filter batch, software error, or maintenance mistake. For every vital function, I want five explicit lines of defense: a primary method, an independently supplied redundant method, a backup based on a different principle, a stored reserve, and a manual procedure.

The refuge is the strictest expression of that rule. It should not depend on the utility module for oxygen, carbon dioxide removal, essential water, communication, critical sensing, or the thermal endurance required for rescue. Its emergency inventory must be physically separated so the same flood, fire, contamination event, or operator error cannot consume both nominal and refuge capability.

## Endurance is the shortest clock

For resource $r$, remaining endurance is

$$
T_r
=
\frac{Q_{r,\mathrm{available}}}
{\dot Q_{r,\mathrm{net\ consumption}}}.
$$

The station's survival horizon is set by the first critical resource to expire:

$$
T_{\mathrm{survival}}
=
\min(
T_{O_2},
T_{CO_2},
T_{\mathrm{water}},
T_{\mathrm{power}},
T_{\mathrm{thermal}},
T_{\mathrm{food}},
T_{\mathrm{waste}},
T_{\mathrm{medical}}
).
$$

Seven days of oxygen is not seven days of survival if a carbon dioxide cartridge saturates in twelve hours or cooling fails after six. The control system should continuously estimate the limiting resource, its uncertainty, and its sensitivity to crew load and repair actions.

I would use five operational states: nominal, reduced redundancy, degraded, refuge, and evacuation required. Transition logic should consider both present measurements and predicted rescue time:

$$
T_{\mathrm{remaining}}
<
T_{\mathrm{credible\ rescue}}
+\Delta T_{\mathrm{margin}}.
$$

The crew may need to begin evacuation while the atmosphere still looks normal. Trend and future margin matter more than a green status light.

Automation should regulate routine flows, compare redundant sensors, isolate faults, shed noncritical loads, calculate endurance, preserve logs, and communicate with the surface. Crew authority remains local. Essential valves, fans, oxygen injection, backup scrubbers, and raw sensor readings must remain accessible during network loss, database corruption, or a failed software deployment.

## Prove the integrated room

The physics behind oxygen electrolysis, carbon dioxide adsorption, catalytic oxidation, condensation, desalination, filtration, disinfection, thermal exchange, and chemical backup is demonstrated. The engineering frontier lies in operating them together while components are dirty, filters age, sensors disagree, loads vary, and repairs occur inside an occupied pressure vessel.

I would qualify the architecture in five stages:

1. Test every processor, valve, sensor, cartridge, and heat exchanger across its environmental range.
2. Operate the complete system in a sealed terrestrial chamber with metabolic simulators for carbon dioxide, heat, humidity, and trace contaminants.
3. Conduct occupied trials lasting 24 hours, 72 hours, 7 days, and 30 days.
4. Inject failures, including blocked airflow, scrubber loss, contaminated water, sensor drift, bus loss, smoke, communication loss, and module isolation.
5. Qualify seawater intake, discharge, cooling, and pressure-boundary equipment under representative hydrostatic pressure.

The American Bureau of Shipping already treats normal, reserve, and emergency life support as distinct conditions and requires underwater-system plans to address breathing gas, gas storage, carbon dioxide removal, emergency life support, instrumentation, and temperature control. Atlantis extends that discipline from a vehicle mission to an inhabited institution.

The test program succeeds only when the crew remains safe while equipment fails. A nominal run confirms performance. A faulted run reveals architecture.

## The first environmental constitution

The first institution should use regenerative systems to reduce logistics without confusing efficiency with safety. It should generate oxygen from purified water, remove carbon dioxide with regenerable beds, control trace contaminants at their sources, recover humidity and selected wastewater, desalinate seawater, contain solid waste, and reject heat through redundant boundaries.

Stored gases, chemical scrubbers, isolated water, breathing equipment, local fans, manual controls, and independent power should remain ready even when they are rarely used. Bioregenerative systems can be studied without asking a crop or microbial reactor to keep the crew alive.

This architecture is physically credible. It is not yet operationally proven. Its next evidence must come from an integrated mass-balance model and a sealed full-scale room that can be deliberately damaged without endangering anyone.

The next report will ask how much continuous and peak power this environmental machine requires, how that power should cross the seafloor, and how long Atlantis can survive the loss of its primary supply. Life support defines the loads. The power system must now prove that it can carry them.
