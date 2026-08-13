---
title: "Where Atlantis Should Begin"
description: "A regional selection doctrine for locating the first underwater institution where scientific density, operational access, safety, and infrastructure can compound."
frontier: "Deep Ocean"
published: 2026-08-13T14:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "18 min"
reportNo: "PX-OC-004"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Intermediate"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Cabled Axial Seamount Array"
    url: "https://oceanobservatories.org/array/cabled-axial-seamount-array/"
    publisher: "Ocean Observatories Initiative"
  - title: "Cabled Network"
    url: "https://interactiveoceans.washington.edu/technology/cabled-network/"
    publisher: "University of Washington Regional Cabled Array"
  - title: "Axial Caldera"
    url: "https://interactiveoceans.washington.edu/research-sites/axial-caldera/"
    publisher: "University of Washington Regional Cabled Array"
  - title: "Axial Base"
    url: "https://interactiveoceans.washington.edu/research-sites/axial-base/"
    publisher: "University of Washington Regional Cabled Array"
  - title: "Submarine Volcanism: Time-Series Studies"
    url: "https://www.pmel.noaa.gov/eoi/pmel-theme/submarine-volcanism"
    publisher: "NOAA Pacific Marine Environmental Laboratory"
  - title: "Observation and Sampling Approach"
    url: "https://oceanobservatories.org/wp-content/uploads/2018/05/1102-00200_Observation_and_Sampling_Approach_OOI_2018-01-22_ver_1-04.pdf"
    publisher: "Ocean Observatories Initiative"
openProblems:
  - id: "compare-first-atlantis-regions"
    title: "Compare the first Atlantis candidate regions"
    question: "Which three real regions survive the hard constraints and remain competitive when science, infrastructure, logistics, hazard, constructability, governance, and expansion are scored together?"
    status: "Open"
    disciplines: ["Marine geology", "Decision analysis", "Ocean engineering"]
    nextStep: "Build a traceable comparison of the Juan de Fuca observatory region, a continental-margin region, and one non-Pacific alternative using common public datasets and uncertainty ranges."
  - id: "survey-axial-offset-sites"
    title: "Identify credible Axial offset sites"
    question: "Does stable, constructable terrain exist within useful robotic range of the Axial scientific targets and existing cabled infrastructure?"
    status: "Open"
    disciplines: ["Marine geotechnics", "Volcanology", "Robotic operations"]
    nextStep: "Screen bathymetry, sub-bottom data, mapped lava extent, faulting, sediment cover, currents, cable routes, and vehicle travel time before proposing any human-rated location."
prerequisites:
  - "deep-ocean/scientific-case-for-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>The first underwater institution should not occupy the deepest or most dramatic point available. It should occupy the region that produces the highest rate of scientific and engineering learning while remaining accessible enough to build, service, repair, and expand. I develop a regional selection doctrine based on scientific density, depth, hazard, constructability, logistics, cabled utilities, robotic reach, governance, and institutional support. The method combines hard feasibility constraints with a weighted comparison and sensitivity analysis. I then use the Juan de Fuca observatory region, particularly Axial Seamount, as a real-world benchmark. Axial combines active geology, hydrothermal systems, established vehicle operations, and existing power and communication at representative deep-ocean depths. Its volcanic summit is not an automatic habitat site. It is evidence that a protected institutional node, offset from hazards but connected to them through robots and cables, is a credible first-generation architecture.</p>
</section>

## Optimize the first site for learning

The first Atlantis institution should not be a monument to depth. It should be a machine for learning how to build the second institution better.

A remote abyssal site may appear to embody the ambition of the project while forcing every unresolved problem into the first deployment. Extreme pressure, long transit, weak rescue capacity, new utility infrastructure, uncertain foundations, and narrow scientific access would all arrive at once. That combination does not prove resolve. It makes failure difficult to diagnose and expensive to correct.

I need a site where ambitious science and frequent engineering iteration reinforce one another. Construction crews must be able to return. Vehicles must accumulate missions rather than demonstrations. Failed modules must be recovered, understood, and redesigned. Scientific programs must remain valuable long enough to justify the support network.

The selection objective is therefore

$$
s^* = \arg\max_s
\frac{
V_{\mathrm{science}}
+ V_{\mathrm{engineering}}
+ V_{\mathrm{network}}
+ V_{\mathrm{expansion}}
}{
C_{\mathrm{construction}}
+ C_{\mathrm{operations}}
+ C_{\mathrm{risk}}
+ C_{\mathrm{environment}}
}.
$$

No single term can decide the result. Scientific richness cannot excuse an indefensible rescue architecture. Low pressure cannot compensate for weak scientific purpose. An existing cable matters only if the institution can lawfully connect to it and survive its failure.

<aside class="working-thesis" aria-label="First-site doctrine">
  <span>First-site doctrine</span>
  <p>Place the first institution where each year of operation teaches us the most about building the next ten institutions.</p>
</aside>

## Choose a territory, not a coordinate

An underwater institution operates across a region. The pressure hull does not need to rest beside the vent, fault, seep, canyon, or unstable slope that gives the science its value.

The relevant unit of selection contains three linked spaces: a protected location for durable infrastructure, a distributed scientific territory within robotic reach, and a surface corridor connecting the network to ports and terrestrial institutions.

<figure class="architecture-figure" aria-labelledby="regional-architecture-caption">
  <div class="architecture-figure__grid">
    <div><small>Protected node</small><strong>Stable institutional ground</strong><p>Human-rated modules, workshops, docks, refuge, and utility distribution occupy characterized terrain.</p></div>
    <div><small>Service territory</small><strong>Scientific targets</strong><p>Robots reach vents, faults, seeps, ecosystems, observatories, and experiments without exposing the institution directly.</p></div>
    <div><small>Utility network</small><strong>Power, data, and relay nodes</strong><p>Cables and uncrewed hubs extend energy, navigation, communication, and sample handling through the region.</p></div>
    <div><small>Surface corridor</small><strong>Ports and research institutions</strong><p>Vessels, fabrication, medicine, laboratories, operators, and emergency response sustain the underwater system.</p></div>
  </div>
  <figcaption id="regional-architecture-caption">Figure 1. The first-site problem is regional because scientific proximity does not require direct hazard exposure.</figcaption>
</figure>

This distinction changes the design question. I am not asking whether a habitat can survive inside an active caldera. I am asking whether stable terrain exists close enough for vehicles, cables, and sample transport to connect a protected node to an active caldera.

The usable separation must satisfy two conditions:

$$
d_{\mathrm{institution,target}} < R_{\mathrm{robotic\ service}},
$$

and

$$
P(\text{hazard reaches institution}) < P_{\mathrm{allowable}}.
$$

The first protects scientific access. The second protects institutional continuity. The feasible region lies between them.

## A coupled selection doctrine

I evaluate a region through eight categories: scientific density, depth and pressure, geological and environmental hazard, seafloor constructability, surface logistics, power and communications, robotic accessibility, and political and institutional support.

The categories are coupled. Moving offshore changes cable length, ship transit, weather exposure, rescue delay, and jurisdiction at the same time. Increasing depth changes structural mass, vehicle transit, docking, inspection, buoyancy, and the consequence of flooding. Geological activity can raise scientific value while reducing infrastructure life.

| Criterion | Question the region must answer |
| --- | --- |
| Scientific density | Do several important programs share a compact service territory? |
| Depth and pressure | Does the site reproduce the required deep-ocean regime without unnecessary extremity? |
| Hazard | Can durable infrastructure be separated from credible geological and environmental loads? |
| Constructability | Can foundations, cables, docks, and expansion zones be installed and inspected? |
| Surface logistics | How often can people, cargo, vehicles, and emergency support actually reach the site? |
| Power and communication | Is a resilient, expandable utility path technically and institutionally available? |
| Robotic reach | Can the fleet service the scientific territory with useful endurance and reserve? |
| Governance and support | Is there a lawful, durable coalition capable of operating for decades? |

These questions prevent the selection process from becoming a map of attractive phenomena. A region is valuable only when the scientific targets can become an operating program.

## Scientific density and compounding value

The first institution should support several major questions without requiring several independent logistics systems. A strong region might combine volcanism, hydrothermal circulation, chemosynthetic ecosystems, seismicity, water-column processes, sediment environments, and technology-testing terrain.

I define scientific density conceptually as

$$
D_{\mathrm{science}}
=
\frac{
\sum_i w_i V_i + \sum_{i\ne j} S_{ij}
}{
A_{\mathrm{service\ territory}}
}.
$$

$V_i$ is the value of target $i$, $w_i$ reflects its strategic priority, and $S_{ij}$ captures the additional value created when programs share instruments, samples, vehicles, or context. The denominator represents the territory that must be navigated, powered, and maintained.

The synergy term matters more than a long inventory of species or geological features. A hydrothermal change can be measured by geophysical sensors, sampled by a robot, analyzed for chemistry and microbial activity, and compared with material degradation on nearby test articles. The same event then serves geology, biology, chemistry, and engineering.

A candidate region should therefore be tested for active processes, unresolved questions, long-duration scientific demand, experimental feasibility, ecological sensitivity, and the degree to which persistent access improves the work. Novelty alone is not a mission.

## Deep enough, but not needlessly deep

Hydrostatic pressure is approximately

$$
p \approx p_{\mathrm{atm}} + \rho gh.
$$

Using seawater density of $1025\ \mathrm{kg/m^3}$ gives a useful first comparison:

| Depth | Approximate absolute pressure |
| ---: | ---: |
| $500\ \mathrm{m}$ | $5.1\ \mathrm{MPa}$ |
| $1{,}000\ \mathrm{m}$ | $10.2\ \mathrm{MPa}$ |
| $1{,}500\ \mathrm{m}$ | $15.2\ \mathrm{MPa}$ |
| $2{,}500\ \mathrm{m}$ | $25.2\ \mathrm{MPa}$ |
| $4{,}000\ \mathrm{m}$ | $40.3\ \mathrm{MPa}$ |
| $6{,}000\ \mathrm{m}$ | $60.4\ \mathrm{MPa}$ |
| $11{,}000\ \mathrm{m}$ | $110.7\ \mathrm{MPa}$ |

Pressure is only the first depth penalty. Deeper modules need more demanding structures and interfaces. Vehicles spend longer in vertical transit. Recovery becomes harder. A flooding event has greater consequence. Cable routes from a continental margin may grow. Rescue and refuge requirements become more severe.

The first institution should be deep enough to remove shallow-water shortcuts while avoiding pressure that its mission does not need. At roughly $1{,}000$ to $2{,}500\ \mathrm{m}$, a node already requires one-atmosphere pressure architecture, submersible access, subsea docking, cold and darkness, difficult wireless communication, pressure-sensitive science, and serious rescue planning.

This range is not a requirement. It is a developmental hypothesis. It reproduces most of the institutional problem without forcing every component into abyssal or hadal qualification.

## Hazard belongs in the architecture

The active processes that produce scientific value can also destroy infrastructure. Earthquakes, fault displacement, lava, slope failure, turbidity currents, sediment burial, strong flow, corrosive fluids, fishing, anchoring, and cable damage have different probabilities, footprints, and consequences. They should not be compressed into one vague risk label.

For hazard $j$, expected loss can be represented as

$$
L_j = P_j C_j E_j,
$$

where $P_j$ is probability over the design interval, $C_j$ is consequence, and $E_j$ is exposure. Site selection can reduce probability. Compartmentalization and redundancy can reduce consequence. Spatial separation can reduce exposure.

The most active scientific zone can therefore contain expendable instruments, replaceable cables, and mobile robots while the human-rated node occupies safer ground. Hazard is not an automatic veto on an entire region. It determines topology, setback, redundancy, and which assets are allowed near the source.

An institution must also measure its own ecological hazard. Light, sound, heat, thruster wash, structures, introduced organisms, and repeated traffic can alter the territory. A site with extraordinary science but no credible method for bounding disturbance fails the scientific mission that justified it.

## The ground and the route to it

A visually level seabed is not necessarily constructable. Soft sediment can settle unevenly. Currents can scour foundations. Slopes can fail. Exposed rock can complicate anchors and cable burial. Thruster wash can obscure cameras, contaminate experiments, and damage interfaces.

The submerged weight of a module is

$$
W_{\mathrm{submerged}} = mg - \rho_{\mathrm{water}}gV.
$$

A large one-atmosphere volume displaces enough water to create substantial buoyancy. Ballast, piles, suction caissons, anchors, or prepared foundations must resist that load along with current drag, docking impact, cable tension, seismic motion, and accidental contact.

Current drag follows

$$
F_D = \frac{1}{2}\rho C_D A v^2.
$$

The quadratic speed term means an uncommon current can govern the design. Bathymetry, sub-bottom profiles, sediment cores, strength measurements, visual inspection, and long current records must precede any serious foundation concept.

Constructability extends beyond the node. The cable route, vehicle approaches, cargo touchdown areas, emergency recovery paths, and future module field all need compatible terrain.

## Access is a probability, not a distance

Early Atlantis nodes will depend heavily on ports, vessels, fabrication, hospitals, universities, vehicle crews, and weather forecasting. Offshore distance matters, but nautical miles alone do not describe access.

For a site at distance $d$ and a support vessel traveling at $v_s$, ideal transit time is

$$
T_{\mathrm{transit}} = \frac{d}{v_s}.
$$

Actual response time is closer to

$$
T_{\mathrm{response}}
= T_{\mathrm{mobilization}}
+ T_{\mathrm{weather}}
+ T_{\mathrm{transit}}
+ T_{\mathrm{descent}}
+ T_{\mathrm{docking}}.
$$

A nearby site may be operationally distant if the required vessel is rarely available or seas frequently prevent launch. A farther site with established annual campaigns, predictable seasons, suitable ports, and experienced operators may offer better expected access.

I would therefore score

$$
A_{\mathrm{site}} = P(\text{required access is available within }T).
$$

This probability should be calculated separately for routine cargo, crew rotation, vehicle recovery, medical evacuation, and major repair. Immediate survival can never assume a ship will arrive on schedule. The node must maintain refuge longer than a credible rescue delay even at a favorable site.

## Utilities as strategic terrain

A shore cable changes the institution from an isolated habitat into a networked laboratory. It can provide continuous electrical power, high-bandwidth data, low-latency control, precision timing, remote diagnostics, and access to terrestrial computation.

The Regional Cabled Array demonstrates the scale of that advantage. Approximately 900 kilometers of cable connect the Juan de Fuca plate to a shore station at Pacific City, Oregon. One branch runs roughly 480 kilometers to Axial Seamount. The network supplies high voltage, power conversion, high-rate communication, and two-way control to seafloor and water-column instruments at depths reaching about $2{,}900\ \mathrm{m}$.

Existing infrastructure does not mean unused capacity is available. A habitat-scale node would require investigation of power margin, bandwidth, connectors, ownership, permits, design life, maintenance responsibility, fault protection, and upgrade paths. A shared cable may also create a common-mode failure.

<aside class="working-thesis working-thesis--quiet" aria-label="Utility principle">
  <span>Utility principle</span>
  <p>A shore cable should be treated as the primary utility connection, never as the sole survival system.</p>
</aside>

Local storage, safe shutdown, independent communication, and emergency life support remain necessary. Still, a region with proven cable routes and experienced operators begins several infrastructure layers ahead of an untouched seabed.

## Robotic reach defines the territory

The scientific territory ends where vehicles can no longer travel, work, and return with useful reserve. For a vehicle with usable energy $E_u$,

$$
E_u \geq \int_0^T
\left[
P_h + P_p(v) + P_{\mathrm{sensors}} + P_{\mathrm{compute}}
\right]dt.
$$

Hotel load, propulsion, sensing, computation, currents, terrain, vertical relief, and communication all consume the mission budget. Because propulsive power can grow roughly with the cube of speed, distance cannot be overcome efficiently by commanding the vehicle to move faster.

A candidate region should be mapped as a travel-time and energy surface rather than a circle. A target ten kilometers away across open terrain may be easier to service than one nearby across steep relief or strong current.

Regional charging docks, navigation beacons, acoustic relays, sample handoff nodes, and uncrewed laboratories can expand this surface. The resulting topology is a central institution connected to regional robotic hubs, then to remote observatories and targets.

## Governance is part of site physics

Permanent construction requires jurisdiction, environmental review, cable permissions, scientific permits, navigation coordination, emergency agreements, and durable institutional ownership. Indigenous rights and consultation, protected areas, fisheries, local communities, and cross-border partnerships can determine what the project is allowed to do and whether it retains legitimacy.

These conditions are less visible than pressure or slope, but they can govern the facility's actual lifetime. A technically favorable site without a lawful path, trusted operator, stable funding, or competent surface coalition is not feasible.

I treat institutional durability as a function of legal clarity, funding stability, community support, operator competence, and partnership depth. It must be investigated before design resources converge on a coordinate.

## Axial Seamount as the benchmark

The Juan de Fuca observatory region provides the strongest benchmark I have found for the first-site doctrine. Axial Seamount is more than 500 kilometers offshore at the Juan de Fuca spreading center. Its cabled array spans summit sites near $1{,}500\ \mathrm{m}$ and base sites near $2{,}600\ \mathrm{m}$.

The region combines active volcanism, hydrothermal fields, fluid-rock interaction, chemosynthetic biology, seismicity, open-ocean water-column science, sedimented terrain at the base, and an established scientific community. It has been the subject of long time-series research and repeated vehicle campaigns. The summit erupted in 1998, 2011, and 2015.

Most importantly, Axial already has electro-optical cables delivering power, bandwidth, and two-way communication to seafloor and water-column instruments. The summit and base are not abstract target classes. They are operating sites with known depths, mapped infrastructure, junction boxes, extension cables, and maintenance history. The caldera is reported as roughly one day by ship from the Washington and Oregon coasts.

| Criterion | Axial benchmark assessment |
| --- | --- |
| Scientific density | Very high across geology, chemistry, biology, and water-column processes |
| Representative depth | Strong, with sites from roughly $1{,}500$ to $2{,}600\ \mathrm{m}$ |
| Existing power and data | Exceptional relative to undeveloped deep-ocean sites |
| Vehicle and research precedent | Strong |
| Surface access | Distant, but supported by established campaigns |
| Geological hazard | Substantial at the active summit |
| Constructability | Unknown for a human-rated offset site |
| Institutional foundation | Strong scientific coalition, unresolved habitat authority |

Axial is not automatically the correct coordinate. Its caldera may be exactly where irreplaceable human-rated infrastructure should not be placed. Existing cables may lack available capacity or permission for a new load. A stable foundation within practical robotic range has not been established here. Environmental and governance questions remain open.

That uncertainty is the point. Axial establishes a demanding comparison. Any alternative must explain why the infrastructure, scientific density, operational history, and representative depth already present in this region are outweighed by its hazards and distance.

## Why the deepest point loses the first round

Challenger Deep is a vital exploration target and a poor default for the first institution. Pressure exceeds $100\ \mathrm{MPa}$. Transport and rescue capacity are rare. Large fixed power and communication systems are absent. Every pressure-boundary component and recovery system inherits full-ocean-depth requirements.

The marginal scientific value of continuous human occupancy has not been shown to compensate for those simultaneous penalties. Building there first would make maximum extremity the selection rule, even though the mission is to maximize useful learning.

A later trench-edge node could support full-ocean-depth robots, repeated sample return, and pressure-faithful laboratories without placing people at the deepest point. Challenger Deep should become a capability target for machines before it becomes a habitation target for people.

## A decision model that can reject a winner

I propose a two-stage method. Hard constraints remove regions with no credible rescue architecture, unacceptable foundation instability, no lawful construction path, insufficient scientific purpose, no feasible energy supply, unavoidable catastrophic exposure, or environmental harm inconsistent with the mission.

Surviving regions can then be scored:

$$
S_{\mathrm{site}} = \sum_i w_i q_i,
\qquad \sum_i w_i = 1.
$$

My provisional weights are:

| Criterion | Weight |
| --- | ---: |
| Scientific density | 0.22 |
| Existing power and communication | 0.16 |
| Surface logistics and access | 0.15 |
| Geological and environmental safety | 0.14 |
| Seafloor constructability | 0.10 |
| Robotic reach | 0.09 |
| Institutional and legal support | 0.09 |
| Expansion potential | 0.05 |

Depth is not rewarded independently. Its consequences already appear in structure, science, logistics, robotics, and rescue.

A weighted score can conceal a fatal weakness and can create false precision from uncertain inputs. The model therefore needs sensitivity analysis. Weights, cable cost, ship availability, substrate strength, current extremes, hazard recurrence, scientific demand, and robotic range should all vary across credible bounds. If a small change reverses the winner, the honest conclusion is that the evidence does not yet support selection.

<figure class="process-figure" aria-labelledby="selection-process-caption">
  <div class="process-figure__steps">
    <span><small>Constrain</small><strong>Reject infeasible regions</strong></span>
    <span><small>Compare</small><strong>Score the survivors</strong></span>
    <span><small>Stress</small><strong>Vary weights and evidence</strong></span>
    <span><small>Survey</small><strong>Investigate the finalists</strong></span>
  </div>
  <figcaption id="selection-process-caption">Figure 2. A selection sequence that prevents an attractive average score from concealing a fatal condition.</figcaption>
</figure>

## The site profile that survives

I am not selecting a final region in this paper. I am narrowing the search to a profile that can be challenged with evidence.

The first institution will probably occupy moderate deep-ocean depth, likely within the $1{,}000$ to $2{,}500\ \mathrm{m}$ range unless a mission proves otherwise. It should be reachable by established research vessels, near existing or feasible power and fiber, placed on characterized stable terrain, outside direct fault, lava, and slope-failure zones, and within efficient robotic reach of several valuable environments. It should sit within a clear jurisdiction and beside an oceanographic coalition capable of decades of work.

Its scientific territory can be deeper and more hazardous than the institution itself. That separation is not a compromise of the vision. It is the system architecture that makes persistent access possible.

The next report must turn this regional doctrine into ordinary operations. It will define what the institution does during a normal day, a scientific campaign, a vehicle failure, a loss of power, a medical emergency, and an evacuation. Those scenarios will determine crew size, laboratories, docks, vehicle classes, power, storage, consumables, refuge, and rescue endurance.

I now know the kind of place where Atlantis should begin. To locate it responsibly, I first need to know exactly what Atlantis must do there.
