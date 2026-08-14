---
title: "The Power Architecture of Atlantis"
description: "A shore-connected, fault-isolated energy architecture for continuous operation, scientific surges, seven-day refuge endurance, and black start."
frontier: "Deep Ocean"
published: 2026-08-13T20:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "20 min"
reportNo: "PX-OC-009"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Primary Nodes"
    url: "https://interactiveoceans.washington.edu/technology/primary-nodes/"
    publisher: "OOI Regional Cabled Array, University of Washington"
  - title: "Primary Infrastructure V17"
    url: "https://interactiveoceans.washington.edu/primary-infrastructure-v17/"
    publisher: "OOI Regional Cabled Array, University of Washington"
  - title: "Advanced Transmission Technologies"
    url: "https://www.energy.gov/sites/prod/files/2021/02/f82/Advanced%20Transmission%20Technologies%20Report%20-%20final%20as%20of%2012.3%20-%20FOR%20PUBLIC.pdf"
    publisher: "U.S. Department of Energy"
  - title: "Marine Energy Basics"
    url: "https://www.energy.gov/cmei/water/marine-energy-basics"
    publisher: "U.S. Department of Energy"
  - title: "Fuel Cell Basics"
    url: "https://www.energy.gov/cmei/fuels/fuel-cell-basics"
    publisher: "U.S. Department of Energy"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/special_service/7-rules-for-building-and-classing-underwater-vehicles%2C-systems-and-hyperbaric-facilities-2025/7-uwvs-rules-jan25.pdf"
    publisher: "American Bureau of Shipping"
openProblems:
  - id: "close-atlantis-time-series-power-budget"
    title: "Close the Atlantis time-series power budget"
    question: "What continuous capacity, peak capacity, conversion margin, and thermal rejection follow from an hourly model of life support, laboratories, vehicles, workshops, and emergency transitions?"
    status: "Open"
    disciplines: ["Power systems", "Operations research", "Thermal systems"]
    nextStep: "Replace every provisional load with a duty cycle, starting profile, heat output, criticality class, and degraded-mode schedule, then simulate a full 30-day rotation with scientific campaigns and vehicle sorties."
  - id: "demonstrate-atlantis-black-start"
    title: "Demonstrate the Atlantis black start"
    question: "Can a fully de-energized institution restore sensing, circulation, communication, emergency generation, and regenerative life support without relying on the failed shore bus or central software?"
    status: "Open"
    disciplines: ["Power protection", "Controls engineering", "Life support"]
    nextStep: "Build a representative zonal DC microgrid and repeatedly recover it from cable loss, bus faults, failed converters, depleted battery segments, and corrupted supervisory control."
prerequisites:
  - "deep-ocean/life-support-architecture-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>Electricity is the common dependency beneath almost every Atlantis capability. I construct a provisional power budget for a six-person institution and use it to select an initial energy architecture. Routine institutional loads total approximately 180 kilowatts before sustained robotic charging. A realistic operating range of 220 to 280 kilowatts and a short-duration peak near 550 kilowatts define the first design hypothesis, not a final equipment schedule. The strongest primary source is a dedicated shore-connected direct-current cable feeding a seafloor substation and zonal microgrid. Distributed batteries provide ride-through, peak buffering, fault isolation, and black start. A physically independent emergency generator extends endurance after cable failure. If refuge survival requires 20 kilowatts for seven days, the battery alone would require about 5.6 megawatt-hours after discharge limits, losses, and margin. That scale makes aggressive load shedding and crew consolidation essential. The governing design distinction is between capability power and survival energy: the primary system operates the institution, while the emergency system buys time to repair, rescue, or evacuate.</p>
</section>

## Electricity is the hidden life-support fluid

Atlantis can store oxygen, water, food, sorbent, and medical supplies. It still needs electricity to circulate air, read the atmosphere, move valves, reject heat, communicate, illuminate refuge, and understand which reserve will expire first.

A station-wide loss of power therefore does not create one failure. It starts several clocks at once. Carbon dioxide rises. Airflow becomes local and uncertain. Heat moves toward new equilibria. Water treatment stops. Battery-backed sensors begin consuming their finite reserve. Laboratories may lose samples. Vehicles may remain away from their docks. The institution becomes progressively less observable just as its condition becomes more dangerous.

I treat electrical energy as a routed survival resource. It must be transmitted, converted, stored, isolated, prioritized, and restored with the same care given to breathing gas.

Power and energy answer different questions:

$$
P = \frac{dE}{dt},
\qquad
E = \int_0^T P(t)\,dt.
$$

Power determines whether a compressor can start, a vehicle can charge, or several laboratories can operate together. Energy determines how long a refuge can keep circulating air after the cable goes dark. A large battery can satisfy the second condition and still fail the first if its converter cannot deliver the required current.

<aside class="working-thesis" aria-label="Power-system principle">
  <span>Power-system principle</span>
  <p>The primary system provides capability. The emergency system preserves time.</p>
</aside>

## Build the budget from behavior

Adding every nameplate rating assumes every load reaches maximum power at once. Adding only average consumption hides motor starts, charging peaks, sterilization cycles, pump transients, and scientific campaigns. Neither sum represents an operating institution.

I divide demand into four classes:

| Class | Electrical behavior | Representative loads |
| --- | --- | --- |
| Continuous | Runs almost constantly | Air circulation, sensing, controls, communication |
| Intermittent | Runs on a duty cycle | Water processing, sanitation, cooking, workshop tools |
| Surge | Creates bounded high demand | Vehicle charging, pumps, actuators, scientific campaigns |
| Survival | Preserves life and containment | Refuge ventilation, gas monitoring, thermal control, medical equipment |

For a load $i$ with duty factor $d_i$,

$$
P_{\mathrm{average},i} = P_{\mathrm{rated},i}d_i.
$$

The station average and credible peak are then different calculations:

$$
P_{\mathrm{average}} = \sum_i P_{\mathrm{rated},i}d_i,
$$

$$
P_{\mathrm{peak}}
=
\max_t\left[\sum_i P_i(t)\right].
$$

The second expression requires an operating timeline. Two vehicle chargers matter only if the mission plan permits them to run together. An oxygen generator may be deferrable for an hour when gas inventory is high and nondeferrable when storage is low. A useful budget must know both the load and the deadline attached to it.

## A first institutional load model

The following values establish scale for a rotating six-person crew. They are allocations to be replaced by selected hardware, measured duty cycles, and heat balances.

| System group | Provisional average power |
| --- | ---: |
| Atmospheric circulation and monitoring | $10\ \mathrm{kW}$ |
| Carbon dioxide and contaminant removal | $12\ \mathrm{kW}$ |
| Oxygen generation and gas processing | $8\ \mathrm{kW}$ |
| Water and wastewater processing | $10\ \mathrm{kW}$ |
| Habitable-space thermal control | $20\ \mathrm{kW}$ |
| Electronics and laboratory cooling | $15\ \mathrm{kW}$ |
| Computing, storage, and controls | $12\ \mathrm{kW}$ |
| Communication and timing | $5\ \mathrm{kW}$ |
| Lighting and habitation services | $10\ \mathrm{kW}$ |
| Food, sanitation, and exercise | $8\ \mathrm{kW}$ |
| Scientific laboratories | $25\ \mathrm{kW}$ |
| Workshop and maintenance | $8\ \mathrm{kW}$ |
| External observatories and sensors | $12\ \mathrm{kW}$ |
| Docking and local infrastructure | $8\ \mathrm{kW}$ |
| Conversion and distribution loss allowance | $17\ \mathrm{kW}$ |
| **Routine planning total** | **$180\ \mathrm{kW}$** |

At this rate, daily energy use is

$$
E_{\mathrm{day}}
=
180(24)
=
4.32\ \mathrm{MWh/day}.
$$

Thirty days would require $129.6\ \mathrm{MWh}$. The institution is not a battery-powered habitat in ordinary operation. It requires continuous transmission or generation.

Robotic work changes the operating range. A vehicle with a $300\ \mathrm{kWh}$ battery recharged over six hours requires an average battery-side power of

$$
P_{\mathrm{charge}}
=
\frac{300\ \mathrm{kWh}}{6\ \mathrm{h}}
=
50\ \mathrm{kW}.
$$

At 90 percent charging efficiency, input power is approximately $55.6\ \mathrm{kW}$. Two major vehicles charging together draw more than $110\ \mathrm{kW}$ before smaller autonomous vehicles, dock conditioning, and thermal management. This moves the probable operating range toward $220$ to $280\ \mathrm{kW}$.

A scientific campaign could combine the 180 kW core, two large chargers, smaller docks, laboratory and workshop surges, and pump starts. With operating margin, I use

$$
P_{\mathrm{continuous,design}} \approx 300\ \mathrm{kW},
$$

$$
P_{\mathrm{short\ peak}} \approx 500\text{ to }600\ \mathrm{kW}.
$$

These are service-envelope hypotheses. The institution must earn them through a time-series model rather than defend them because they are convenient round numbers.

<figure class="architecture-figure" aria-labelledby="power-classes-caption">
  <div class="architecture-figure__grid">
    <div><small>180 kW</small><strong>Routine institution</strong><p>Life support, habitation, laboratories, controls, cooling, communication, and local infrastructure.</p></div>
    <div><small>220 to 280 kW</small><strong>Operational range</strong><p>Normal station demand combined with sustained robotic work and scheduled charging.</p></div>
    <div><small>500 to 600 kW</small><strong>Short peak</strong><p>Concurrent charging, laboratory work, machinery starts, and retained operating margin.</p></div>
    <div><small>20 kW</small><strong>Refuge floor</strong><p>Consolidated survival loads after laboratories, vehicles, and most occupied volume are shed.</p></div>
  </div>
  <figcaption id="power-classes-caption">Figure 1. A single nameplate value cannot describe routine operation, scientific surges, and emergency survival.</figcaption>
</figure>

## Observatory precedent, institutional gap

The Ocean Observatories Initiative Regional Cabled Array demonstrates shore-to-seafloor power and fiber at relevant depth and distance. Its 900-kilometer backbone operates at 10 kV DC and connects seven primary nodes. The University of Washington reports 8 kW of available power and 10 GbE communication at each primary node, including nodes near 2,900 meters depth and more than 500 kilometers offshore. The nodes convert backbone voltage to 375 V DC and distribute it through wet-mateable science ports.

This is powerful evidence for the topology: shore station, long DC backbone, seafloor conversion, protected switching, fiber, secondary cables, and remotely serviceable interfaces.

It is not enough power for Atlantis. A 300 kW continuous institution represents roughly

$$
\frac{300}{8} = 37.5
$$

times the delivered power of one current primary node. A 550 kW peak is almost 69 times that node output. Atlantis cannot be attached to an ordinary science port and treated as another instrument.

The gap is developmental, not physical. U.S. Department of Energy transmission examples include submarine HVDC links rated in hundreds of megawatts. Atlantis occupies a middle scale far above an observatory node and far below utility interconnection. Its challenge is to make medium-power converters, wet interfaces, protection, and repair economical at human-rated reliability.

## Choose a shore-connected primary source

I compare five families of primary supply: a dedicated shore cable, locally delivered fuel, subsea nuclear generation, marine renewables, and a hybrid.

A shore cable offers access to diverse terrestrial generation, places much of the maintainable plant on land, avoids nominal underwater combustion, carries fiber alongside power, and can grow with later nodes. Its disadvantages are route cost, permitting, shore dependence, and exposure to anchors, fishing, cable defects, slope failure, seismic movement, and slow repair.

For a first institution within a feasible cable corridor, those disadvantages are more manageable than maintaining a primary fuel or reactor installation on the abyssal seafloor. I therefore select a dedicated shore connection as the normal source.

This choice does not allow the institution to depend on the cable for immediate survival. One route can be lost in one event. The complete architecture must pair it with local storage, independent emergency generation, and a credible rescue interval.

## Move power at high voltage

For delivered electrical power,

$$
P = VI,
\qquad
I = \frac{P}{V}.
$$

Conductor loss is approximately

$$
P_{\mathrm{loss}} = I^2R
=
\left(\frac{P}{V}\right)^2R.
$$

For fixed power and resistance, loss decreases with the square of voltage. Delivering $500\ \mathrm{kW}$ at $10\ \mathrm{kV}$ requires $50\ \mathrm{A}$. At $1\ \mathrm{kV}$ it requires $500\ \mathrm{A}$, producing one hundred times the resistive loss in the same conductor.

Long submarine AC cables also carry capacitive charging current. DC avoids that steady-state charging burden and leaves more cable capacity available for useful power. This makes a direct-current backbone attractive for an institution hundreds of kilometers offshore.

The word high-voltage is relative to the station, not a commitment to copy a utility-scale HVDC converter. A 300 to 600 kW institution is small beside commercial HVDC projects. Cable voltage, insulation, conductor area, converter topology, grounding, fault current, and future expansion need a dedicated optimization study.

The provisional hierarchy is:

<figure class="process-figure" aria-labelledby="power-path-caption">
  <div class="process-figure__steps">
    <span><small>Shore</small><strong>Grid and conversion</strong></span>
    <span><small>Backbone</small><strong>High-voltage DC and fiber</strong></span>
    <span><small>Seafloor</small><strong>Protection and conversion</strong></span>
    <span><small>Institution</small><strong>Isolated zonal buses</strong></span>
  </div>
  <figcaption id="power-path-caption">Figure 2. The backbone transports energy efficiently; the seafloor substation turns it into controllable local zones.</figcaption>
</figure>

The primary substation should terminate the backbone, convert voltage, monitor insulation, isolate faults, route fiber, feed independent module branches, and preserve unused expansion ports. It should be physically separated from inhabited pressure volumes and designed for robotic inspection and replaceable converter assemblies.

## Redundancy is geographic

Two conductors laid together protect against some electrical faults and remain exposed to the same anchor, landslide, or cable-route event. Two cables on separated routes offer stronger resilience but can dominate the cost of a first institution.

I would begin with one dedicated route, distributed station batteries, and a truly independent emergency generator. A later Atlantis network can add a second shore landing or connect neighboring institutions into a subsea grid.

This is a staged decision, not a claim that one cable is intrinsically sufficient. The rescue-time model from Unit 5 and the survival loads from Units 7 and 8 determine whether stored energy and local generation can cover a route-level repair. If they cannot, a second route becomes a habitation requirement rather than an expansion feature.

## Why local combustion is not simple

A seafloor generator cannot breathe the surrounding water. Diesel, methanol, ammonia, hydrogen, or another fuel requires an oxidizer, a surface air path, or an electrochemical conversion process. Drawing oxygen from the habitat would exchange electrical endurance for atmospheric endurance and intensify fire risk.

A conventional engine also creates exhaust, vibration, noise, heat, maintenance, fuel transfer, and environmental-discharge problems. It may be useful at a surface gateway, but placing it beside the institution does not automatically create independence.

Hydrogen and oxygen fuel cells are more attractive for emergency generation:

$$
2H_2 + O_2 \rightarrow 2H_2O + \text{electricity} + \text{heat}.
$$

They produce DC power, water, and heat as long as reactants are supplied. The life-support plant already creates hydrogen and oxygen through electrolysis, so there are useful technical interfaces. The emergency inventory must nevertheless remain separate. A fuel cell should never consume the crew's breathing reserve without an explicit, visible decision.

Hydrogen mass, oxygen mass, tank pressure, usable electrical efficiency, stack output, product-water handling, heat rejection, leakage, and start reliability require separate balances. A fuel cell extends time. It does not create energy.

## Nuclear belongs to a later geography

A compact fission source could provide years of weather-independent energy at far greater density than stored chemical fuel. It may become decisive for polar, hadal-support, or remote abyssal nodes where cable installation is unreasonable.

For the first institution, nuclear generation adds licensing, security, shielding, decay-heat removal, accident containment, specialized maintenance, decommissioning, abandonment planning, and political consent. Its physical capability is not in doubt. Its institutional burden arrives before Atlantis has demonstrated the simpler station.

I would preserve nuclear power as a later architecture branch, not a first-node dependency.

## Marine energy should earn trust locally

Currents, tides, waves, thermal gradients, and hydrothermal heat are all real energy resources. Their presence near a station does not make them dependable baseload.

The kinetic power available to a current turbine is

$$
P_{\mathrm{out}}
=
\frac{1}{2}\rho A C_Pv^3.
$$

If current velocity falls by half, available power falls to one eighth. Site-specific duration curves, turbulence, fouling, maintainability, environmental interaction, and array spacing matter more than a single measured velocity.

Wave devices operate near the surface, where storms, mooring loads, fatigue, vessels, and biofouling shape availability. They may suit a surface gateway and send supplementary power downward.

Ocean thermal energy uses the temperature difference between warm surface and cold deep water. With $T_h=298\ \mathrm{K}$ and $T_c=277\ \mathrm{K}$, the Carnot ceiling is

$$
\eta_{\mathrm{Carnot}}
=
1-\frac{277}{298}
\approx 7\%.
$$

Real efficiency is lower, demanding large seawater flows and heat exchangers. Hydrothermal systems face mineral deposition, corrosion, geologic activity, and the risk of disturbing the very research site Atlantis exists to study.

Marine sources should enter the institution as measured contributors behind isolation equipment. They should not determine crew survival until multi-year site data and maintainability trials establish their dependable capacity.

## Survival begins by turning things off

Trying to maintain a 250 kW institution for seven days would require

$$
E = 250(168) = 42\ \mathrm{MWh}
$$

before losses or reserve. That is the wrong emergency objective.

On loss of shore power, the station should stop vehicle charging, workshops, noncritical laboratories, discretionary imaging, and energy-intensive experiments. During an extended outage, the crew should consolidate into the refuge, isolate unused modules, and reduce full-volume heating, water recovery, lighting, computing, and external science.

A provisional refuge budget is:

| Survival function | Provisional power |
| --- | ---: |
| Air circulation | $3\ \mathrm{kW}$ |
| Carbon dioxide removal | $4\ \mathrm{kW}$ |
| Atmosphere sensing and control | $1\ \mathrm{kW}$ |
| Thermal survival | $6\ \mathrm{kW}$ |
| Communication and navigation beacon | $2\ \mathrm{kW}$ |
| Water and sanitation | $2\ \mathrm{kW}$ |
| Medicine and lighting | $1\ \mathrm{kW}$ |
| Distribution loss allowance | $1\ \mathrm{kW}$ |
| **Refuge planning total** | **$20\ \mathrm{kW}$** |

The value depends strongly on refuge volume, insulation, seawater temperature, crew load, passive carbon dioxide removal, and equipment selection. It must be verified in the integrated chamber, not assumed from the table.

## Seven days becomes megawatt-hours

At $20\ \mathrm{kW}$ for 168 hours, energy delivered to refuge loads is

$$
E_{\mathrm{load}}
=
20(168)
=
3.36\ \mathrm{MWh}.
$$

If discharge efficiency is $\eta_b=0.90$ and usable depth of discharge is $DOD=0.80$,

$$
E_{\mathrm{installed}}
=
\frac{3.36}{0.90(0.80)}
\approx
4.67\ \mathrm{MWh}.
$$

Adding 20 percent design margin produces approximately

$$
E_{\mathrm{installed,margin}}
\approx
5.6\ \mathrm{MWh}.
$$

If a complete installed battery system achieved $100$ to $150\ \mathrm{Wh/kg}$ before its subsea structural allowance, this energy corresponds to roughly 56 to 37 tonnes. A stationary seafloor institution can tolerate mass more readily than a vehicle, but deployment, support, buoyancy, thermal runaway, replacement, and pressure housing remain substantial.

The calculation clarifies the architecture. Batteries should bridge immediate interruptions, carry peak loads, preserve local buses, and initiate recovery. Independent generation should prevent the full seven-day interval from depending on one electrochemical storage bank.

## Distribute stored energy by fault domain

One large battery creates one large consequence. Storage should be divided among the utility module, operations module, refuge, docking infrastructure, and replaceable external pods.

Each occupied module needs enough local energy to ride through isolation, preserve sensing and communication, and operate the hardware required to reach the next safe state. The refuge bank must not share every converter, cooling path, controller, or battery defect with the main station bank.

Chemistry selection should prioritize thermal stability, calendar life, inspectability, fault behavior, low-temperature performance, and predictable degradation ahead of maximum specific energy. Lithium iron phosphate, lithium titanate, sodium-ion, flow systems, and other candidates deserve comparison. No chemistry should be selected by a single pack-level energy-density number.

External batteries might use rigid one-atmosphere pressure vessels, oil-filled pressure-compensated enclosures, or qualified ambient-pressure designs. Every choice alters structural mass, buoyancy, leakage paths, heat transfer, cell compression, insulation, gas handling, and robotic replacement.

Pressure qualification must occur at cell, module, pack, converter, and connector levels. Capacity retention alone is insufficient. The test program must include internal gas generation, electrolyte release, isolation loss, external short circuit, thermal propagation, cycling, dormant storage, and recovery after fault.

## Use a zonal DC microgrid

The station distribution system should preserve the direct-current advantages of the shore backbone, batteries, fuel cells, electronics, and variable-speed machines where practical. AC conversion remains available for loads that require it.

Each pressure module should receive an isolated feeder and contain a local converter, protection, ride-through battery, prioritized load controller, fault monitor, and manual disconnect. A vehicle charger, laboratory supply, or flooded external connector must be unable to trip refuge circulation.

Protection should detect overcurrent, short circuit, ground fault, insulation degradation, arc fault, abnormal leakage, water intrusion, converter instability, and overheating. The design objective is temporal:

$$
t_{\mathrm{isolate\ fault}}
<
t_{\mathrm{propagate\ damage}}.
$$

Selectivity matters. The smallest affected zone should open first while healthy modules remain energized. Protection coordination must be tested across shore power, batteries, and emergency generation because each source contributes different fault current.

## Schedule flexibility instead of buying every peak

Vehicle charging, electrolysis, water processing, sterilization, workshop machinery, and thermal-storage charging do not always need to run together. The station can minimize its highest demand:

$$
\min \max_t P_{\mathrm{total}}(t)
$$

subject to vehicle departure times, minimum oxygen and water inventories, laboratory deadlines, crew needs, equipment duty limits, and thermal conditions.

Staggering two 60 kW vehicle chargers reduces the coincident peak by about 60 kW. Deferring electrolysis for an hour may be harmless with adequate oxygen inventory. Deferring circulation is not.

Scheduling software can find efficient combinations, but safety priority must remain deterministic. An optimization service should never be able to deny refuge power, conceal a reserve threshold, or prevent manual shedding.

## Every kilowatt becomes a thermal question

Most electrical energy consumed inside or near the institution eventually becomes heat. At a steady $250\ \mathrm{kW}$ electrical load,

$$
\dot Q_{\mathrm{reject}} \approx 250\ \mathrm{kW}
$$

unless a meaningful fraction leaves as stored chemical, mechanical, or transmitted energy. A 550 kW electrical surge can create a similarly sharp thermal demand, even if thermal mass delays its arrival at the seawater boundary.

The cable, converters, batteries, fuel cell, laboratories, life-support equipment, and people all occupy the same coupled heat budget. A power system that can deliver 550 kW is not useful if converters overheat, batteries exceed their safe temperature, or the institution can reject only 250 kW.

This is why the next report cannot treat thermal control as an auxiliary calculation. Energy delivery establishes the heat that Atlantis must move.

## Restore from darkness

A total shutdown must be recoverable without the energized grid, central network, or cloud software. I propose this black-start sequence:

1. The refuge battery energizes local deterministic control.
2. Atmosphere sensing, refuge circulation, and emergency communication restart.
3. The controller and crew verify that the main bus is isolated and safe.
4. Healthy distributed battery segments establish a protected DC bus.
5. Independent emergency generation starts and stabilizes.
6. Selected module feeders are energized one at a time.
7. Regenerative carbon dioxide removal, thermal control, and oxygen generation resume.
8. Noncritical loads remain locked out until reserves recover.

Each step needs local indication, manual authority, and a known rollback state. A backup source that depends on the failed bus to actuate its valves or boot its controller is not independent.

Black start should be rehearsed under degraded conditions: one failed battery segment, one bad insulation reading, one unavailable converter, interrupted communication, and a crew member unable to reach the utility module. The goal is not a theatrical restart. It is repeatable recovery without creating a second fault.

<figure class="process-figure" aria-labelledby="black-start-caption">
  <div class="process-figure__steps">
    <span><small>Survive</small><strong>Refuge battery and local air</strong></span>
    <span><small>Inspect</small><strong>Find and isolate the fault</strong></span>
    <span><small>Rebuild</small><strong>Establish protected DC zones</strong></span>
    <span><small>Recover</small><strong>Restart regenerative systems</strong></span>
  </div>
  <figcaption id="black-start-caption">Figure 3. Recovery begins from a small trusted island and expands only after each electrical zone is proven safe.</figcaption>
</figure>

## Prove the middle scale

The power requirement of Atlantis is modest beside commercial submarine transmission and large beside present scientific nodes. That middle scale is feasible but underdeveloped.

The architecture should be verified through a complete load inventory, 30-day time-series simulation, motor-start and charging analysis, cable-loss study, converter tests, protection coordination, battery pressure and fire testing, emergency-reactant accounting, heat-rejection integration, black-start demonstrations, and a seven-day refuge trial.

A representative microgrid should experience cable loss, short circuits, ground faults, converter failure, battery isolation, false sensor data, emergency-generator failure to start, and recovery with partial equipment. A digital model can explore thousands of sequences. Hardware must demonstrate the sequences that determine life.

The first institution should therefore use a dedicated shore-connected DC cable sized around a 300 kW continuous hypothesis and a 500 to 600 kW short peak, with expansion margin established by actual cable economics. A seafloor substation should feed isolated module zones. Distributed batteries should manage ride-through, power quality, peak buffering, and black start. The refuge should retain physically independent storage. A separately supplied fuel cell or other qualified generator should extend survival through prolonged cable loss.

During failure, Atlantis should become smaller. It should shed science, vehicles, workshops, and empty volume until the remaining electrical island is simple enough to trust.

The next report will follow the energy after it has done useful work. It must show how hundreds of kilowatts of heat move from people, processors, converters, laboratories, and batteries into cold seawater without creating condensation, corrosion, fouling, or unacceptable thermal disturbance.
