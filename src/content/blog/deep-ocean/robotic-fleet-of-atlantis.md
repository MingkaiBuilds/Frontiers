---
title: "The Robotic Fleet of Atlantis"
description: "A heterogeneous robotic labor system that turns survey vehicles, intervention machines, crawlers, landers, inspection robots, and cargo tugs into persistent institutional reach."
frontier: "Deep Ocean"
published: 2026-08-14T02:30:00-07:00
lastReviewed: 2026-08-14
readingTime: "24 min"
reportNo: "PX-OC-013"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "What Is the Difference Between an AUV and a ROV?"
    url: "https://oceanservice.noaa.gov/facts/auv-rov.html"
    publisher: "NOAA National Ocean Service"
  - title: "Autonomous Underwater Vehicles"
    url: "https://oceanexplorer.noaa.gov/technology/subs-auvs/"
    publisher: "NOAA Ocean Exploration"
  - title: "Jason Capabilities"
    url: "https://ndsf.whoi.edu/jason/capabilities-jason/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Jason Systems, Sensors and Sampling"
    url: "https://ndsf.whoi.edu/jason/systems-jason/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "AUV Sentry"
    url: "https://ndsf.whoi.edu/sentry/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "HROV Nereid Under Ice"
    url: "https://www.whoi.edu/what-we-do/explore/underwater-vehicles/hybrid-vehicles/nereid-under-ice/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Benthic Rover"
    url: "https://www.mbari.org/technology/benthic-rover/"
    publisher: "Monterey Bay Aquarium Research Institute"
  - title: "Hadal Exploration Technology"
    url: "https://hadex.whoi.edu/technology/"
    publisher: "Woods Hole Oceanographic Institution"
openProblems:
  - id: "close-atlantis-robotic-workload-model"
    title: "Close the Atlantis robotic workload model"
    question: "What fleet composition, spares, chargers, tools, workshop capacity, and crew attention are required to satisfy the institution's actual survey, inspection, intervention, transport, construction, and recovery workload?"
    status: "Open"
    disciplines: ["Fleet systems engineering", "Operations research", "Reliability engineering"]
    nextStep: "Build a year-long discrete-event model from mission arrivals, vehicle capabilities, transit time, charging, maintenance, common-mode failures, dock occupancy, weather-limited surface support, and human supervisory load, then test whether the provisional 22-asset fleet meets explicit service targets."
  - id: "demonstrate-atlantis-mutual-recovery"
    title: "Demonstrate mutual robotic recovery"
    question: "Can two dissimilar Atlantis vehicles locate, secure, tow, power, communicate with, or recover one another after realistic loss of navigation, propulsion, tether, docking, or software functions?"
    status: "Open"
    disciplines: ["Marine robotics", "Mechanical interfaces", "Fault recovery"]
    nextStep: "Create a common recovery fixture and emergency identity protocol, then conduct repeated two-robot exercises with dead batteries, disabled thrusters, severed tethers, blocked docks, corrupted mission state, and poor visibility."
prerequisites:
  - "deep-ocean/positioning-architecture-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>The territory of Atlantis will be measured less by the walls around its crew than by the volume in which its machines can observe, sample, inspect, manipulate, transport, repair, and recover one another. No single underwater vehicle can perform all of those functions efficiently. A long-range survey body gains endurance by giving up heavy tools. A work-class intervention robot gains dexterity and continuous power by accepting a tether. A crawler gains persistence by using the seafloor for support. A lander reaches extreme depth by surrendering lateral mobility. I propose a heterogeneous first fleet of approximately 22 major robotic assets across intervention, survey, local response, inspection, persistence, cargo, and construction roles. The number is provisional. The lasting architecture is a common institutional layer of docking, charging, navigation, communication, tools, sample custody, maintenance records, traffic control, and recovery interfaces. Availability calculations show why redundancy matters, but common components and shared facilities prevent simple independence assumptions. The fleet should therefore be designed as a maintainable labor system whose service continues while individual machines fail.</p>
</section>

## Territory begins where the machines can work

The human crew may occupy a small collection of pressure vessels. The institution becomes geographically significant only when it can act beyond them.

I define robotic reach as the region in which Atlantis can repeatedly complete useful work, return evidence, recover from ordinary faults, and restore the machines that make the work possible. A vehicle that crosses 100 kilometers once but cannot be serviced, localized, or recovered does not establish territory. It performs an expedition.

The first fleet must provide six kinds of labor:

| Function | Institutional outcome |
| --- | --- |
| Survey | Map large regions and detect physical or biological change |
| Observe | Remain near a phenomenon long enough to resolve its behavior |
| Intervene | Collect samples, place instruments, and manipulate objects |
| Inspect | Detect degradation before it becomes a system failure |
| Transport | Move samples, tools, supplies, waste, and modules |
| Construct | Install, connect, recover, and expand infrastructure |

A machine can cover more than one function, but every added role creates compromise in shape, energy, payload, control, pressure rating, cost, and maintenance.

<aside class="working-thesis" aria-label="Robotic fleet principle">
  <span>Robotic fleet principle</span>
  <p>Atlantis should standardize how machines connect, exchange work, and recover one another without forcing every machine to move the same way.</p>
</aside>

This shifts the design question. I am not looking for the best underwater robot. I am looking for the smallest portfolio that covers the workload with acceptable availability, energy, redundancy, maintenance, environmental disturbance, and human attention.

## The universal robot is an expensive contradiction

A universal machine would need long range, high speed, precise hovering, heavy lifting, fine manipulation, high-rate communication, long endurance, low cost, full-ocean-depth survival, easy docking, and simple repair.

Those properties conflict. Heavy manipulators increase mass, frontal area, hydraulic or electrical demand, and control complexity. Streamlined survey bodies reduce drag while limiting hover authority and tool geometry. Full-ocean-depth structure increases qualification burden for vehicles that may spend their entire life near a moderate-depth institution. Large batteries extend endurance while increasing charging demand, handling difficulty, stored energy hazard, and replacement cost.

Propulsive power for a streamlined vehicle is often approximated as increasing with the cube of speed:

$$
P_{\mathrm{prop}}\propto v^3.
$$

When propulsion dominates, energy per unit distance is

$$
\frac{E}{d}=\frac{P}{v}\propto v^2.
$$

Doubling speed can therefore require roughly four times the propulsion energy per distance under the simplified relationship. A vehicle built to map efficiently should not carry a manipulator system and structure that it rarely uses.

Specialization does not mean unrelated machines. Atlantis should standardize power negotiation, data transfer, acoustic identity, navigation messages, emergency beacons, mechanical capture, tool registration, sample containers, software deployment, and maintenance history. Common interfaces create a fleet. A common body merely creates inventory.

## Intervention robots provide the hands

The work-class remotely operated vehicle should perform high-consequence contact work: sample collection, connector mating, instrument installation, cutting, cleaning, cable inspection, tool use, emergency intervention, and recovery of other assets.

NOAA distinguishes an ROV by its continuous cable connection to operators, while an AUV performs its mission without that tether. The cable can provide electrical power, command, high-rate video, and a physical recovery path. It also creates drag, entanglement, range limits, tether-management hardware, and possible contact with sensitive habitat.

For local manipulation, I accept that compromise. Live perception and abundant power are most valuable when the machine is touching infrastructure whose damage would threaten the institution.

WHOI's Jason provides a useful scale reference. In its two-body arrangement, a ship cable reaches the Medea tether-management vehicle and a roughly 70-meter neutrally buoyant tether connects Medea to Jason. The system is designed for operation to 6,500 meters. Jason carries two manipulators, imaging and sonar, sampling systems, and a closed-loop positioning system. WHOI reports a longest dive exceeding 216 hours.

The important lesson is not to copy a surface-deployed vehicle. It is to separate the long umbilical from the agile working machine. Atlantis can replace the ship with a protected seafloor garage:

<figure class="process-figure" aria-labelledby="rov-chain-caption">
  <div class="process-figure__steps">
    <span><small>Supply</small><strong>Institutional power and fiber</strong></span>
    <span><small>Manage</small><strong>Protected winch and tether node</strong></span>
    <span><small>Intervene</small><strong>Agile two-arm working ROV</strong></span>
    <span><small>Recover</small><strong>Automated return and cartridge service</strong></span>
  </div>
  <figcaption id="rov-chain-caption">Figure 1. A station-based ROV shortens the main tether and removes surface heave, while creating a new obligation to manage, inspect, and replace the tether without deck crew.</figcaption>
</figure>

The garage needs tension and angle sensing, automatic retraction, a protected spool, cable inspection, replaceable tether cartridges, a robotic connector, emergency release, and an intentional cutting point. Local control should stabilize vehicle pose, manipulator contact, collision clearance, and tether tension. A human operator commands intent. The machine handles millisecond-scale balance.

I would provision two principal intervention ROVs with nonidentical tether paths. One must remain available while the other is in maintenance, entangled, damaged, or in need of rescue. A single work vehicle produces an obvious contradiction: the machine required for recovery becomes unrecoverable when it is the machine that fails.

## Survey AUVs create regional awareness

Autonomous survey vehicles should perform multibeam bathymetry, side-scan sonar, sub-bottom profiling, magnetics, water-column measurement, photography, search, and change detection. They operate without a continuous tether and preserve large datasets onboard.

WHOI's Sentry demonstrates the relevant physics. It is rated to 6,000 meters and combines inertial navigation, Doppler velocity, acoustic navigation, mapping sonar, cameras, and modular science payload. Published operational examples include roughly 23 hours of multibeam survey at $1\ \mathrm{m/s}$ and more than 30 hours of camera survey at $0.6\ \mathrm{m/s}$, depending on mission configuration.

Mission energy is

$$
E_{\mathrm{mission}}
=
\int_0^T
\left(
P_{\mathrm{prop}}
+P_{\mathrm{hotel}}
+P_{\mathrm{sensors}}
+P_{\mathrm{compute}}
\right)dt.
$$

The survey plan should choose speed from required resolution, current, terrain clearance, acoustic schedule, and available energy. Distance traveled is not the scientific objective. Useful, georeferenced coverage is.

I provisionally assign three long-range AUVs. That number supports simultaneous mapping, event response, and maintenance rotation while preserving an independent search asset when another vehicle is missing. The three should share dock and data standards without depending on the same battery lot, software image, navigation firmware, or pressure-critical component everywhere.

## Hover-capable autonomy closes the response gap

A streamlined survey vehicle is efficient because it prefers forward motion. It is poorly shaped for stopping beside a connector, holding pose in current, inspecting high-relief terrain, or making a delicate close pass.

Hover-capable AUVs fill the space between long-range surveys and tethered intervention. They can launch quickly, navigate to an event, hold position, produce close sonar and optical inspection, take limited samples, and send a summary before a heavier ROV is committed.

WHOI's Nereid Under Ice demonstrates how boundaries can blur. It uses onboard power with a thin fiber-optic tether for real-time data and control, can travel kilometers laterally from its support ship, and can release the tether to operate autonomously if required. I do not assume that one hybrid replaces the rest of the fleet. I treat it as evidence that supervision, autonomy, tethering, and intervention can be selected by mission phase rather than frozen into one vehicle identity.

The first institution should carry two hover-capable vehicles. Their strongest role is rapid local response:

$$
\text{launch}
\rightarrow
\text{inspect}
\rightarrow
\text{report}
\rightarrow
\text{intervene only if justified}.
$$

This sequence preserves the work-class fleet for tasks that truly require its power and tools.

## Small robots should perform frequent inspections

Atlantis should not send a five-tonne intervention vehicle to examine every fastener, cable clip, heat-exchanger surface, and docking seal. Small inspection robots reduce energy, collision impulse, replacement cost, and the consequence of loss. They can also enter confined or geometrically awkward spaces.

The inspection population may include free-swimming camera vehicles, micro-ROVs, magnetic or suction crawlers, pipe crawlers, and tethered sensor heads. Their task is not only to stream pictures. They should compare current geometry and surface condition with prior inspections, localize corrosion or fouling, measure change, and open a traceable maintenance finding.

I assign four small inspection robots because external inspection should continue after multiple losses and because separate geometries may require different mobility. Losing one should be inconvenient, not institution-threatening.

Inspection coverage must be designed into the station. Surfaces need accessible sightlines, fiducial markers, known scale, crawl paths, lighting provisions, and safe zones around intakes and moving machinery. A wall that cannot be examined without a large intervention is not a passive structure. It is deferred robotic work.

## Persistence belongs to landers and crawlers

A lander accepts limited mobility in exchange for simplicity and endurance. It descends under negative buoyancy, performs a measurement, releases ballast, and returns under positive buoyancy. It can carry cameras, chemical sensors, seismometers, samplers, acoustic receivers, or temporary navigation references.

The architecture scales well toward hadal work because it avoids a large propulsion system. WHOI's hadal program has operated landers across trench depths and is developing small modular full-ocean-depth robotic platforms to reduce dependence on catastrophic single-point assets.

Landers remain vulnerable to poor landing orientation, failed release, uncertain placement, difficult recovery, and almost no ability to escape a bad site. I would keep six reusable units so several can form a distributed experiment while others are in service, transit, or reserve.

A crawler makes the opposite mobility choice from a hovering vehicle. It uses the seafloor for support and moves slowly without continuously spending energy to remain suspended. Submerged weight is

$$
W_s=mg-\rho gV,
$$

and an idealized traction limit is

$$
F_t\leq\mu_fW_s.
$$

Too much buoyancy removes traction. Too little increases ground pressure and the chance of sinking into soft sediment. Wheels or tracks that work on rock may fail on mud.

MBARI's Benthic Rover proves the persistence available from this approach. It works autonomously around 4,000 meters depth for nearly a year, taking photographs and measurements as it moves. Its tracks distribute load across soft bottom, while buoyant foam reduces a mass of more than a tonne in air to roughly 45 kilograms of submerged weight.

I would begin with two crawlers, each configured for the actual candidate terrain. They should handle persistent observation, slow instrument movement, repetitive sampling, and selected cable or utility inspection. They are not small AUVs with wheels. Their entire energy and mobility logic depends on contact with the bottom.

## Cargo deserves purpose-built transport

Tools, food, gases, spares, batteries, samples, waste, and construction parts should not consume intervention hours simply because the ROV can carry a basket.

I divide cargo by environmental requirement. Pressure-insensitive hardware can travel flooded or pressure-balanced. Pressure-sensitive cargo needs a one-atmosphere vessel or a qualified pressure-preserving container. Hazardous materials require isolation and monitored handling. Some scientific samples need pressure, temperature, or chemical conditions preserved throughout the route.

That distinction reduces expensive dry transport volume. A structural bracket, flooded cable spool, or ballast mass should not occupy a pressure vessel designed for medicine and conventional electronics.

The regional cargo vehicle can be a slow autonomous tug that carries standardized containers between surface descent systems, storage yards, laboratories, cargo locks, and construction sites. It should prioritize stability, recoverability, efficient transit, load verification, and reliable docking. Speed is secondary.

I provision two cargo tugs so one can preserve supply movement or recover the other. Their containers should be recognized automatically, including mass properties, pressure class, hazards, custody, destination, and handling limits.

## Construction is a coordinated machine, not one vehicle

Expansion requires foundation survey, limited terrain preparation, anchors, cable laying, module positioning, connector mating, protective structures, and recovery of failed infrastructure. The forces and viewpoints involved make a single universal constructor implausible.

The first construction system should combine a surface heavy-lift or controlled descent system, a robotic tug, a work-class ROV, and a surveyed seafloor fixture. The surface asset carries the major vertical load. Underwater robots manage orientation, local translation, inspection, and connection.

<figure class="architecture-figure" aria-labelledby="fleet-roles-caption">
  <div class="architecture-figure__grid">
    <div><small>Reach</small><strong>Survey AUVs and landers</strong><p>Extend maps, observations, and event detection across the regional and hadal ocean.</p></div>
    <div><small>Attend</small><strong>Hover vehicles and inspectors</strong><p>Respond quickly, revisit local assets, and convert degradation into maintenance evidence.</p></div>
    <div><small>Act</small><strong>ROVs and crawlers</strong><p>Manipulate, sample, repair, and perform persistent contact work near the institution.</p></div>
    <div><small>Expand</small><strong>Cargo and construction systems</strong><p>Move mass, place infrastructure, support recovery, and create the next operating node.</p></div>
  </div>
  <figcaption id="fleet-roles-caption">Figure 2. The fleet covers institutional work through complementary movement and energy strategies. Overlap preserves service when a specialized asset is unavailable.</figcaption>
</figure>

Construction machinery should be mobilized by project rather than counted as a permanently identical vehicle. Atlantis needs one primary integrated set, compatible recovery fixtures, and shore access to exceptional lifting assets.

## A provisional fleet of twenty-two assets

My first workload hypothesis is:

| Vehicle class | Quantity | Primary role |
| --- | ---: | --- |
| Work-class intervention ROV | 2 | Manipulation, repair, sampling, recovery |
| Long-range survey AUV | 3 | Mapping, regional monitoring, search |
| Hover-capable AUV | 2 | Rapid response, close inspection, local sampling |
| Small inspection robot | 4 | Hull, cable, connector, dock, and exchanger inspection |
| Seafloor crawler | 2 | Persistent local observation and transport |
| Reusable lander | 6 | Distributed sensing and extreme-depth access |
| Cargo tug | 2 | Material and sample movement |
| Heavy construction system | 1 set | Installation and expansion |
| **Total major robotic assets** | **22** | Persistent institutional labor |

This is not a shopping list. Some classes can share modules. Landers can remain simple. Construction may depend on chartered surface equipment. The count exists to make dock demand, charging energy, spares, workshop space, software support, and human supervision visible.

A six-person institution may oversee several times as many machines as people. That ratio is plausible only if the fleet performs routine transit, health monitoring, data custody, docking, charging, and fault response without continuous piloting.

## Availability comes from fleet depth and repair speed

For vehicle $i$, a simple steady-state availability model is

$$
A_i=\frac{MTBF_i}{MTBF_i+MTTR_i},
$$

where $MTBF$ is mean time between failures and $MTTR$ is mean time to repair.

If each of three survey vehicles has availability $A=0.70$ and failures are independent, the probability that all three are unavailable is

$$
P_{\mathrm{none}}=(1-A)^3=0.3^3=0.027.
$$

At least one vehicle would then be available 97.3 percent of the time. The number is illustrative because real failures are not independent. Shared batteries, charging systems, software, seals, maintenance procedures, navigation services, and operator errors create common modes.

The more useful design objective is continuous mission coverage after a credible fault. Atlantis can improve it by increasing reliability, reducing repair time, carrying replaceable modules, providing mission substitution, and keeping recovery capability outside the failed system.

For a permanent institution, reducing repair time may create more value than attempting to make every vehicle immortal. A swapped propulsion pod can return a machine to service while a shore specialist diagnoses the failed unit. A pressure hull that requires dry factory work should not contain an otherwise routine thruster repair.

## The shared layer turns vehicles into labor

Every class should participate in a common service system:

| Shared service | Minimum common behavior |
| --- | --- |
| Identity | Authenticate vehicle, mission authority, configuration, and emergency state |
| Navigation | Exchange frames, position, covariance, integrity, maps, and approach messages |
| Docking | Acquire, capture, restrain, retry, and release safely |
| Energy | Negotiate voltage, power, charge priority, battery condition, and isolation |
| Data | Reconcile mission records, raw evidence, software, clocks, and custody |
| Tools | Register geometry, calibration, load limits, contamination, and maintenance |
| Samples | Preserve provenance, environment, container state, and chain of custody |
| Recovery | Expose fixtures, homing, tow points, safe states, and independent release |

A future vehicle from another institution should be able to identify itself, request an approach slot, negotiate basic power, transfer records, declare a fault, and receive limited service. That is the underwater equivalent of shared ports, roads, charts, and fuel standards.

The first dock should prioritize mechanical capture, electrical charging, high-rate data, and vehicle health. Automated sample or tool exchange can follow. Coolant and fluid exchange should be added only where its mission value exceeds the sealing, contamination, and maintenance burden.

Wet-mate contacts offer efficient high power and compact packaging while introducing corrosion, cleanliness, alignment, sealing, and finite-cycle concerns. Inductive charging removes exposed electrical contacts while adding heat, alignment sensitivity, and lower efficiency. Battery exchange shortens turnaround but requires heavy automated handling and strict pack standardization.

Different classes may justify different choices. The institution should still resist a unique charger for every vehicle.

## Energy, docks, and crew attention are scheduled resources

If vehicle $i$ needs energy $E_i$ before deadline $t_i$, its charging allocation must satisfy

$$
\int_{t_0}^{t_i}P_i(t)\eta_i\,dt\geq E_i,
$$

while the institution remains within

$$
\sum_iP_i(t)+P_{\mathrm{station}}(t)\leq P_{\mathrm{available}}(t).
$$

Charging several large packs simultaneously can create a station peak large enough to matter to Unit 9's power architecture and Unit 10's heat rejection. Rescue readiness should outrank discretionary survey turnaround. A nominal deadline does not authorize consumption of the emergency reserve.

Docks are also queues. A healthy vehicle waiting to unload can block a damaged vehicle that needs power. Fleet management should reserve emergency capacity, predict return times, assign alternate docks, and treat failed capture attempts as operational state.

Human attention is the scarcest shared resource. Direct teleoperation suits delicate contact and unexpected repair. Stabilized teleoperation lets the robot hold pose while the operator commands motion. Supervised execution lets a person request tasks such as follow this cable or inspect this connector. Full mission autonomy lets a machine survey, return, dock, and report exceptions.

Atlantis should rely heavily on supervised tasks and autonomous missions. Coordinated fleet autonomy can emerge later. Twenty-two machines cannot each require one dedicated pilot.

## A sample is more than its container

Scientific robots do not only move matter. They establish the context that makes matter evidence.

Every sample container should preserve identity, location, time, pressure where required, temperature, contamination state, handling events, and custody. Tool records should include geometry, calibration, force limits, cleanliness, configuration, and maintenance history.

A laboratory should never receive an unexplained object labeled only as container 4. The fleet, dock, laboratory, and archive need one provenance model:

$$
\text{sample record}
=
\text{material}
+\text{mission context}
+\text{environment}
+\text{handling history}.
$$

The same principle applies to maintenance. An image of a crack needs camera calibration, viewing geometry, scale, location, lighting state, prior comparison, and the robot's navigation uncertainty. Robotic abundance becomes scientifically useful only when observations remain interpretable.

## Every launch begins with recovery

I would require a recovery plan before mission authorization. The hierarchy can include autonomous return, alternate dock, acoustic homing, ballast release and ascent, tow by another vehicle, intervention ROV recovery, surface-vessel recovery, and deliberate abandonment.

Not every asset needs every method. A high-value vehicle needs at least two credible paths that do not depend on the same failed subsystem. A robot whose recovery radio, release, and return logic all share one power bus has three recovery features and one actual failure mode.

Tethers, cables, fishing gear, terrain, and other vehicles create entanglement. Atlantis needs tension and angle sensing, installed-cable maps, controlled approach corridors, weak links, sacrificial tether sections, cutting tools, and automated retreat. Recovery fixtures should be visible to sonar and cameras, operable by more than one vehicle class, and accessible after a loss of ordinary power.

Two ROVs are useful only if one can safely reach, grasp, isolate, and tow the other. Mutual recovery must be physically demonstrated rather than inferred from payload ratings.

## Underwater traffic control protects science and machines

Multiple vehicles can compete for a dock, cross tethers, saturate acoustic channels, enter a narrow corridor from opposite directions, illuminate a sensitive experiment, or resuspend the same sediment.

The fleet manager should assign mission authority, operating volume, depth band, communication window, dock slot, energy allocation, environmental budget, and emergency priority. Unit 12's positioning integrity becomes the basis for separation and permitted behavior. Unit 11's communication schedule becomes part of traffic control.

The least-disturbing capable vehicle should receive the task. A crawler avoids hover energy but contacts the ground. A survey AUV can pass quietly but creates wake and active sonar. An intervention ROV may produce intense light, sound, and thruster wash. Disturbance belongs in mission planning beside energy and time.

The controller must also know when to stop. Mission utility never automatically outranks vehicle loss, infrastructure damage, sample contamination, habitat disturbance, or risk to crewed operations. Bounded autonomy means a machine can refuse a task whose required state, clearance, energy reserve, or positioning integrity is no longer available.

## Maintenance must be a native vehicle behavior

The fleet should use replaceable battery, propulsion, compute, navigation, communication, payload, pressure, and manipulator modules where physical interfaces allow. The workshop needs facilities for module exchange, seal inspection, connector cleaning, fluid service, battery isolation, software recovery, leak testing, tool repair, and contamination control. Major pressure-hull work can remain a surface function.

Not every machine needs an 11,000-meter rating:

| Vehicle class | Provisional pressure strategy |
| --- | ---: |
| Local inspection robots | $3{,}000\ \mathrm{m}$ |
| Work-class intervention ROVs | $3{,}000$ to $4{,}000\ \mathrm{m}$ |
| Regional survey and hover AUVs | Up to $6{,}000\ \mathrm{m}$ where justified |
| Crawlers and cargo vehicles | Site depth plus qualification margin |
| Hadal landers | Full-ocean-depth class |
| Specialized hadal AUVs | Later mission-specific fleet |

This tiering allows a moderate-depth institution to project selected instruments through the full ocean without imposing hadal structure and qualification on every local camera robot.

Maintenance telemetry should shape future design. Mean repair time, recurring connector faults, battery fade, seal condition, software recovery, tool damage, and docking retries belong in the engineering archive. A persistent fleet learns from its own wear.

## Prototype the commons before the flagship

I would not begin by building the largest intervention ROV. I would build the interfaces that allow a succession of imperfect robots to become useful together.

<figure class="process-figure" aria-labelledby="fleet-prototype-caption">
  <div class="process-figure__steps">
    <span><small>Connect</small><strong>Common target, identity, power, and data</strong></span>
    <span><small>Exchange</small><strong>Tools, samples, batteries, and custody</strong></span>
    <span><small>Coordinate</small><strong>Two vehicles, one dock, bounded autonomy</strong></span>
    <span><small>Recover</small><strong>Faulted vehicle without human exposure</strong></span>
  </div>
  <figcaption id="fleet-prototype-caption">Figure 3. Shared infrastructure compounds across every later vehicle. A spectacular body without service and recovery remains an expedition asset.</figcaption>
</figure>

The practical sequence is a standardized docking target, small inspection vehicle, autonomous capture, power and data exchange, a modular tool, sample-container transfer, two-robot recovery, remote charging, crawler mobility, cargo-container handling, and then the larger intervention system.

The prototype should measure capture probability, charging efficiency, thermal load, data reconciliation, human attention, maintenance time, mission substitution, environmental disturbance, and recovery success. Those results should feed a year-long workload model before the final fleet count is accepted.

## Turn isolated vehicles into persistent labor

Every major class in this proposal has a demonstrated precedent. Work-class ROVs conduct multiday manipulation and sampling. Deep AUVs map for a day on stored energy. Hybrid vehicles cross between supervision and autonomy. Crawlers remain on the seafloor for months. Landers and modular robots reach hadal depths.

The open frontier is institutional, not magical. Atlantis must transform vehicles launched for isolated cruises into a labor force that can live at depth, share infrastructure, preserve evidence, recover from faults, accept maintenance, and cooperate without consuming the crew's full attention.

My provisional fleet contains approximately 22 assets because intervention, survey, local response, inspection, persistence, transport, and construction each need depth and redundancy. The number will change when the workload model becomes real. The governing architecture should not:

$$
\text{available fleet capability}
>
\text{institutional workload}.
$$

The institution becomes powerful when its robots stop behaving like isolated expeditions and begin operating as persistent labor.

The next report will define the physical ports that make this possible. It will examine how robots, cargo vehicles, crew-transfer submersibles, and future modules mate underwater to exchange power, data, samples, people, and structural loads without turning misalignment, contamination, leakage, or one failed connector into an institutional failure.
