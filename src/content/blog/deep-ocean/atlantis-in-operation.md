---
title: "Atlantis in Operation"
description: "An operational concept for deriving the first institution from uncrewed continuity, rotating occupation, scientific surge, and compound emergency response."
frontier: "Deep Ocean"
published: 2026-08-13T15:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "18 min"
reportNo: "PX-OC-005"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Intermediate"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Environmental Control and Life Support Systems"
    url: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/"
    publisher: "NASA"
  - title: "Carbon Dioxide Technical Brief"
    url: "https://www.nasa.gov/ochmo-tb-004-carbon-dioxide-2/"
    publisher: "NASA Office of the Chief Health and Medical Officer"
  - title: "About FIU Aquarius"
    url: "https://environment.fiu.edu/aquarius/about/"
    publisher: "Florida International University"
  - title: "Jason Capabilities"
    url: "https://ndsf.whoi.edu/jason/capabilities-jason/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-resources/RuleManager2/notices/january-2026/7-uwvs_nandgi-jan26.pdf"
    publisher: "American Bureau of Shipping"
  - title: "Cabled Network"
    url: "https://interactiveoceans.washington.edu/technology/cabled-network/"
    publisher: "University of Washington Regional Cabled Array"
openProblems:
  - id: "simulate-atlantis-crew-workload"
    title: "Simulate the Atlantis crew workload"
    question: "Can a six-person rotation execute nominal science, two-vehicle surge operations, maintenance, watchkeeping, medical contingencies, and protected sleep without chronic overload?"
    status: "Open"
    disciplines: ["Human factors", "Operations research", "Ocean engineering"]
    nextStep: "Build a discrete-event task model for a 30-day rotation, including role qualifications, automation, remote support, failures, handovers, and circadian constraints."
  - id: "close-atlantis-emergency-endurance"
    title: "Close the Atlantis emergency endurance budget"
    question: "What refuge duration, survival load, atmosphere inventory, water inventory, thermal capacity, and communication redundancy follow from a credible rescue-time distribution?"
    status: "Open"
    disciplines: ["Life support", "Safety engineering", "Marine operations"]
    nextStep: "Model weather, vessel mobilization, descent, docking, and medical transfer for the candidate region, then size consumables and energy to the resulting rescue-time percentile."
prerequisites:
  - "deep-ocean/where-atlantis-should-begin"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>The first Atlantis institution cannot be defined responsibly by selecting a hull, room count, or vehicle fleet. It must be derived from the operations it has to perform. I develop a provisional concept of operations around four states: uncrewed continuity, nominal crewed occupation, scientific surge, and emergency survival. The model assumes a permanently installed node at moderate deep-ocean depth, rotating six-person crews, autonomous intervals, two simultaneous major vehicle missions, a 72-hour scientific surge, and refuge sized for the maximum temporary occupancy. These numbers are hypotheses that expose requirements rather than final commitments. The scenarios imply a modular functional architecture with separated habitation, operations, laboratory, workshop, utilities, refuge, docking, and robotic-yard functions. The governing requirement is that the institution remain scientifically useful without people and become substantially more capable when they arrive.</p>
</section>

## Derive the institution from work

A station is not defined by what it contains. It is defined by what it can do repeatedly, safely, and under degraded conditions.

If I begin with a pressure hull, I will be tempted to fill the available volume with rooms and equipment. That sequence creates a coherent object before it creates a coherent mission. Crew size, power demand, laboratory zoning, vehicle interfaces, storage, refuge, and docking should instead emerge from the work performed during ordinary and extraordinary days.

My design sequence is

$$
\text{operations}
\rightarrow \text{functional requirements}
\rightarrow \text{performance requirements}
\rightarrow \text{system architecture}.
$$

I will examine four operating states. Uncrewed continuity establishes what must persist autonomously. Nominal occupation establishes continuous human and scientific loads. A scientific surge reveals peak power, data, vehicle, laboratory, and labor demands. A compound emergency reveals isolation, refuge, redundancy, communication, and rescue requirements.

<aside class="working-thesis" aria-label="Operational design rule">
  <span>Operational design rule</span>
  <p>Do not design the habitat and then invent its work. Define the work, including failure, and allow the institution to take shape around it.</p>
</aside>

## A permanently present, intermittently crewed node

The first institution should be permanently installed but not permanently occupied from its first day. It should maintain a regional observatory, support robots, respond to approved triggers, preserve experiments, exchange data, and protect itself between crew rotations. People should arrive for the work that benefits from local judgment, repair, sample handling, training, and scientific improvisation.

This hybrid operating model is

$$
\text{permanent infrastructure}
+ \text{continuous robotic operation}
+ \text{periodic human occupation}.
$$

It permits the network to accumulate evidence before continuous habitation becomes a requirement. It also creates an unforgiving test of system quality. A component that needs a person nearby every week is not compatible with a ninety-day autonomous interval. A laboratory that produces no value while empty may not deserve to occupy pressure-resistant volume.

The institution must transition safely between states rather than operate as four separate facilities.

<figure class="process-figure" aria-labelledby="state-cycle-caption">
  <div class="process-figure__steps">
    <span><small>Continuity</small><strong>Uncrewed and productive</strong></span>
    <span><small>Occupation</small><strong>Crewed nominal work</strong></span>
    <span><small>Surge</small><strong>Elevated scientific tempo</strong></span>
    <span><small>Protection</small><strong>Safe degraded operation</strong></span>
  </div>
  <figcaption id="state-cycle-caption">Figure 1. Four operating states that must share one architecture and controlled transitions.</figcaption>
</figure>

The station should receive a crew, verify its pressure boundary and atmosphere, commission dormant systems, conduct a productive rotation, hand experiments back to autonomous control, and return to uncrewed continuity without losing the scientific record.

## Provisional operating envelope

I need numerical assumptions before requirements can be calculated. The following values are deliberately provisional.

| Parameter | Initial planning target |
| --- | ---: |
| Installation depth | $1{,}500$ to $2{,}500\ \mathrm{m}$ |
| Nominal crew | 6 people |
| Maximum temporary occupancy | 8 people |
| Standard rotation | 30 days |
| Uncrewed interval | Up to 90 days |
| Refuge endurance | At least 7 days |
| Local operation after shore-link loss | At least 72 hours without mission-critical interruption |
| Primary scientific territory | Initially within $25\ \mathrm{km}$ |
| Extended robotic territory | Initially within $100\ \mathrm{km}$ using remote docks |
| Simultaneous major vehicle missions | 2 |
| Installed backbone design life | At least 20 years |

Six people offer a useful starting balance. Two can supervise a vehicle operation, two can perform science or maintenance, one can coordinate station systems, and one can remain available for support, rest, or contingency. The crew can contain several disciplines without forcing the life-support and rescue architecture to scale around a large population.

The number is not yet justified. A two-person crew has little resilience if one person is injured. A larger crew can divide watches and specialties but increases habitable volume, metabolic loads, food, water, sanitation, refuge, transfer-vehicle capacity, and evacuation demand. The optimum can only emerge from task and failure simulation.

## Human time is a consumable

Six people provide

$$
6\times24 = 144\ \text{person-hours per day}.
$$

After eight hours of protected sleep per person, the waking budget is

$$
144 - 6(8) = 96\ \text{person-hours}.
$$

A provisional ordinary day might allocate 18 hours to science, 10 to vehicle operations, 8 to maintenance, 6 to station monitoring, 6 to exercise and medical routines, 6 to food and cleaning, 2 to emergency training, and 4 to personal communication. These organized activities consume 60 hours, leaving 36 waking hours for meals, hygiene, task transitions, informal collaboration, uncertainty, and rest.

The remaining time is not inefficiency. It is operating margin.

$$
H_{\mathrm{available}}
>
H_{\mathrm{nominal}}
+ H_{\mathrm{contingency}}.
$$

A station that requires every crew member to work near exhaustion during nominal operations is already in an emergency. Human time must be budgeted like electrical energy, with reserve and a credible peak profile.

## Keeping the human environment ordinary

The station must first make breathing, sleeping, eating, sanitation, exercise, medical care, and private communication unremarkable enough for the crew to perform complex work.

NASA's Environmental Control and Life Support System provides a relevant functional precedent. It divides the problem into atmosphere monitoring and revitalization, oxygen generation, water recovery, ventilation, contaminant control, fire response, and waste management. An underwater habitat has a different exterior environment, but human metabolism imposes the same continuous internal loads.

Atmospheric safety depends on partial pressure:

$$
p_i = x_i p_{\mathrm{total}},
$$

where $x_i$ is the mole fraction of gas $i$. Oxygen percentage alone is not enough if total pressure changes. Carbon dioxide, carbon monoxide, humidity, trace contaminants, smoke, particulates, temperature, pressure, and microbial conditions must be monitored continuously and with enough diversity to distinguish a real event from one failed sensor.

NASA planning data place average metabolic oxygen consumption near $0.82\ \mathrm{kg}$ per person-day and carbon dioxide production near $1.04\ \mathrm{kg}$ per person-day for a standard day with exercise. For six people over thirty days, the corresponding baseline loads are approximately

$$
m_{O_2} \approx 148\ \mathrm{kg},
\qquad
m_{CO_2} \approx 187\ \mathrm{kg}.
$$

These values exclude leakage, purging, transfer losses, reserve, and changes in activity. They do not imply that all oxygen must be stored or all carbon dioxide stored. Regenerable systems, electrolysis, chemical sorbents, catalytic processes, and controlled discharge produce different mass, power, heat, reliability, and maintenance trades.

The operational requirement is more important than the selected chemistry: no single active air-processing failure should force immediate evacuation. Average removal capacity is also insufficient. The system must process activity peaks while another unit is isolated or maintained.

## Science inside a constrained volume

The local laboratory should perform work that loses value with delay, decompression, chemical alteration, or separation from the next robotic decision. Large-scale computation, routine analysis, long-term archives, and specialized terrestrial instruments should remain ashore.

The crew must receive samples from vehicles, establish provenance, transfer pressure-retained material, conduct microscopy and imaging, measure fluid chemistry, filter and preserve material, run short incubations, prepare instruments, and decide what the next mission should collect.

These operations imply functional zones even if they do not each receive a pressure module:

| Zone | Principal separation requirement |
| --- | --- |
| Pressure-faithful sample handling | Shield stored energy and contain rupture |
| Wet biology and chemistry | Control water, reagents, waste, and contamination |
| Clean preparation | Isolate trace contamination from general laboratory work |
| Imaging and microscopy | Control vibration, lighting, temperature, and cleanliness |
| Instrument preparation | Separate tools and mechanical work from samples |
| Cold and frozen storage | Preserve samples through power disturbances |
| Hazardous material storage | Isolate fire, toxicity, incompatibility, and leakage |

An undifferentiated laboratory saves partitions while coupling hazards. Volatile chemicals should not enter habitation air. Seawater should not threaten station electronics. High-pressure vessels should not expose the complete crew. Local ventilation, secondary containment, drainage, shielding, and fire isolation follow directly from the work.

## Robots create the institution's reach

A nominal day may include one local intervention mission, one autonomous survey, a lander recovery, another vehicle charging, and maintenance on a returned machine. The complete chain is

$$
\text{plan}
\rightarrow \text{configure}
\rightarrow \text{launch}
\rightarrow \text{work}
\rightarrow \text{return}
\rightarrow \text{dock}
\rightarrow \text{download}
\rightarrow \text{service}.
$$

The dock is therefore a transfer system rather than a parking fixture. Depending on vehicle class, it may exchange mechanical loads, power, data, samples, tools, navigation references, or fluids. Every additional exchange increases interface complexity and creates another opportunity for misalignment, fouling, leakage, or connector failure.

Long-duration ROV operations are demonstrated. The National Deep Submergence Facility reports that *Jason* has completed more than 1,200 dives and that its longest dive exceeded 216 hours. Atlantis changes the support topology by moving power, docking, data, tools, and maintenance closer to the seafloor.

One required vehicle cannot be supported by one owned vehicle. Availability is

$$
A_k =
\frac{T_{\mathrm{operational}}}
{T_{\mathrm{operational}} + T_{\mathrm{maintenance}} + T_{\mathrm{repair}}}.
$$

The loss of one principal vehicle should reduce capacity without eliminating external inspection, urgent sample recovery, or assistance to another vehicle. That suggests at least two general intervention paths, a smaller inspection machine, autonomous survey vehicles, and mission substitution across the fleet. The exact mix must follow workload and common-mode failure analysis.

## Maintenance is daily science

Permanent infrastructure degrades continuously. Pumps wear, sensors drift, seals age, connectors corrode, batteries lose capacity, software changes, optics foul, and vehicles accumulate damage.

I divide maintenance into four levels:

| Level | Work | Intended location |
| --- | --- | --- |
| 1 | Inspection, cleaning, reset, consumable replacement | In situ |
| 2 | Module exchange and minor repair | Atlantis workshop |
| 3 | Major overhaul | Surface support facility |
| 4 | Structural recertification or replacement | Specialized industrial facility |

Common failures should remain at Levels 1 and 2. An inexpensive component that regularly requires recovery of an entire module is expensive at the institutional level.

Condition monitoring must preserve a continuously updated record of configuration, inspection, faults, work performed, parts consumed, and deferred risk. During uncrewed periods, that record becomes the crew's first briefing. During an emergency, it becomes evidence about what can still be trusted.

## Scientific surge reveals the peak

Suppose the regional network detects an abrupt hydrothermal change. The station verifies the anomaly, retasks AUVs, launches an intervention vehicle, collects fluids and imagery, receives samples, begins pressure-faithful analysis, modifies the sampling plan, prepares an instrument, and deploys a time-series experiment while terrestrial collaborators participate.

Vehicle power, communication, laboratory load, cooling, data storage, crew workload, dock use, consumables, and workshop demand peak together. Installed capacity for resource $r$ must satisfy

$$
C_{r,\mathrm{installed}}
\geq
\max_t D_r(t) + M_r,
$$

where $M_r$ is operating margin.

I adopt a provisional requirement: sustain 72 hours of elevated scientific operations with two simultaneous major vehicle missions, continuous sample processing, and high-bandwidth collaboration without immediate resupply.

The crew cannot meet that requirement by suspending sleep. Two people on each of three continuous watches would consume all six people before laboratory work, maintenance, medicine, or contingency. The system must combine automation, remote surface support, limited unattended intervals, task prioritization, or temporary crew augmentation.

<aside class="working-thesis working-thesis--quiet" aria-label="Automation principle">
  <span>Automation principle</span>
  <p>Automation is not simply a labor-saving feature. It determines whether a small crew can preserve safety while the scientific tempo rises.</p>
</aside>

## Data must survive the link

Local storage has to preserve scientific observations, vehicle logs, high-resolution imagery, station telemetry, structural records, maintenance history, and emergency evidence when the external connection is degraded.

For sources producing rates $r_i(t)$, an outage buffer requires

$$
D_{\mathrm{buffer}}
>
\int_0^{T_{\mathrm{outage}}}
\sum_i r_i(t)\,dt
+ D_{\mathrm{reserve}}.
$$

Not all bits have equal value. Life-safety telemetry, structural faults, and unique event observations have near-zero loss tolerance. Routine measurements have low tolerance. Replicable tests can be reacquired. Entertainment traffic can disappear first.

This priority must govern bandwidth, storage, and power shedding. A safe mode that preserves empty video buffers while discarding the only record of a structural event is technically operational and scientifically failed.

## Uncrewed continuity is an active state

Between rotations, the node must monitor pressure boundaries, isolate electrical faults, manage humidity and temperature, operate observatories, supervise docks, execute approved robotic work, protect batteries, store data, detect leaks, request intervention, and enter progressively deeper safe modes.

The absence of people removes metabolic loads but creates stagnant air, condensation, microbial growth, dormant-system degradation, and faults that cannot receive immediate hands-on repair.

| Load class | Examples | Shedding rule |
| --- | --- | --- |
| 0: containment | Leak detection, pressure monitoring, fault isolation | Never voluntarily shed |
| 1: continuity | Core computing, communication, thermal protection | Shed only at extreme depletion |
| 2: asset preservation | Battery conditioning, dock protection, corrosion systems | Reduced operation permitted |
| 3: priority science | Event sensors and irreplaceable time series | Select selectively |
| 4: discretionary science | Active imaging and nonessential experiments | Shed first |

The hierarchy must be enforced locally. A severed shore link cannot be allowed to prevent the station from deciding which loads keep it alive.

## A compound emergency defines the safety architecture

I use a demanding but credible scenario. During a crewed rotation, the shore-power cable fails, the primary communication path disappears, an electrical cabinet begins emitting smoke, and severe surface weather delays rescue.

The correct priority sequence is

$$
\text{protect life}
\rightarrow \text{stop escalation}
\rightarrow \text{preserve refuge}
\rightarrow \text{restore communication}
\rightarrow \text{repair or evacuate}.
$$

Detection should combine smoke, temperature, gas products, electrical behavior, and cameras rather than trust one sensor type. Isolation should open breakers, stop cross-compartment ventilation, close fire and pressure boundaries, and transfer control. One compromised compartment must not contaminate every habitable volume.

The refuge must support the maximum temporary occupancy because an emergency may occur during crew handover. It needs independent atmosphere monitoring, oxygen, carbon dioxide removal, cooling, power, communication, food, water, sanitation, and medical equipment.

After shore-power loss, endurance is calculated against survival loads, not nominal loads:

$$
T_{\mathrm{emergency}}
=
\frac{E_{\mathrm{usable}}}{P_0 + P_1}.
$$

If survival and continuity loads total $20\ \mathrm{kW}$, seven days require

$$
E_{\mathrm{usable}}
= (20\ \mathrm{kW})(168\ \mathrm{h})
= 3.36\ \mathrm{MWh}.
$$

This is not a battery selection. It reveals the consequence of refuge duration and survival load. Reducing emergency power demand may be more valuable than adding storage. An independent generator, separate energy store, or several protected utility zones may change the trade.

Backup communication can use a physically separate cable, acoustic path, releasable buoy, messenger vehicle, or emergency beacon. It does not need to carry continuous video. It must transmit station identity, crew condition, failure state, remaining endurance, requested response, and acknowledgement.

Evacuation also needs more than one path. A docked crew vehicle may be absent, damaged, or blocked. One option may be ascent, another relocation into an independent refuge while rescue approaches. Every crewed state should retain two independent paths to continued survival.

## Requirements produced by the scenarios

The operating states now produce a first set of requirements.

| Domain | Derived requirement |
| --- | --- |
| Human operations | Support six people for 30 days and eight temporarily, with protected sleep, medical capability, and labor margin |
| Science | Receive and preserve samples, perform pressure-faithful local analysis, prepare instruments, and sustain a 72-hour surge |
| Robotics | Supervise two major missions, service several vehicle classes, inspect the exterior, and retain intervention after one vehicle failure |
| Utilities | Accept external power, isolate faults by load and module, reject peak heat, buffer critical data, and preserve independent survival energy |
| Maintenance | Enable protected internal replacement, robotic exterior inspection, minor repair, tool modification, and configuration tracking |
| Safety | Tolerate one active life-support failure, isolate one compromised compartment, shelter maximum occupancy, and preserve two survival paths |

These functions imply that the institution should not be one undivided room. A first-pass architecture contains habitation, operations, laboratory, workshop, utility, refuge, docking, and external robotic-yard functions.

<figure class="architecture-figure" aria-labelledby="functional-architecture-caption">
  <div class="architecture-figure__grid">
    <div><small>Human core</small><strong>Habitation and refuge</strong><p>Sleep, food, hygiene, exercise, medicine, privacy, and independent emergency survival.</p></div>
    <div><small>Mission core</small><strong>Operations and laboratory</strong><p>Vehicle command, communications, time-sensitive analysis, and instrument preparation.</p></div>
    <div><small>Service core</small><strong>Workshop and utilities</strong><p>Repair, atmosphere processing, water, power conversion, storage, and thermal control.</p></div>
    <div><small>Ocean interface</small><strong>Docking and robotic yard</strong><p>Crew, cargo, vehicles, samples, tools, charging, data exchange, and external inspection.</p></div>
  </div>
  <figcaption id="functional-architecture-caption">Figure 2. Functional groupings derived from operations before pressure-hull geometry is selected.</figcaption>
</figure>

Not every function needs its own pressure vessel. Some may share a hull with compartmentalization. Others may remain at ambient pressure. What matters now is preserving hazard separation, alternate control, maintainability, and a route from the dock to refuge that does not depend on every other function remaining healthy.

## The first complete mission cycle

The operational cycle begins before people arrive. Autonomous systems inspect boundaries, charge vehicles, verify the dock, and prepare experiments. A one-atmosphere transfer vehicle docks and the connection is checked before crew and cargo cross. The arriving crew commissions life support, laboratories, vehicles, stored consumables, and emergency systems.

Nominal research follows: observation, robotic missions, sample processing, maintenance, technology testing, and collaboration. A planned campaign or transient event may raise the station into surge. Before departure, the crew returns experiments to autonomous control, packages samples and failed components, records condition and deferred work, and verifies that no hazardous process remains incorrectly configured.

Only then does the station return to uncrewed continuity.

This cycle is the first practical definition of Atlantis. It leaves important assumptions unresolved: whether six people are enough, whether a 30-day rotation is useful, whether seven days of refuge matches credible rescue, whether two simultaneous missions are supportable, and whether modularity produces enough safety and maintenance value to repay its interfaces.

Those are now visible engineering questions rather than hidden properties of a sketch.

The next report will compare one large pressure hull, several interconnected pressure modules, and a hybrid system combining atmospheric compartments with pressure-balanced and ambient-pressure machinery. That comparison must address buckling, structural scaling, implosion consequences, compartmentalization, docking, expansion, maintenance, and the architectural cost of every cubic meter kept at one atmosphere.

The first Atlantis institution will remain useful without people and become substantially more capable when people arrive. Its physical form must now prove that it can support that promise.
