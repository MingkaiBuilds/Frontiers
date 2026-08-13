---
title: "The Atlantis Capability Map"
description: "A systems-level allocation of the scientific, human, robotic, logistical, and safety capabilities required for a permanent deep-ocean institution."
frontier: "Deep Ocean"
published: 2026-08-13
lastReviewed: 2026-08-13
readingTime: "16 min"
reportNo: "PX-OC-002"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Intermediate"
evidenceStatus: "Modeled"
readinessLevel: 1
reviewStatus: "Author reviewed"
references:
  - title: "National Deep Submergence Facility Use Cases"
    url: "https://ndsf.whoi.edu/ndsf-use-cases/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Regional Cabled Array"
    url: "https://oceanobservatories.org/regional-cabled-array/"
    publisher: "Ocean Observatories Initiative"
  - title: "Environmental Control and Life Support Systems"
    url: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/"
    publisher: "NASA"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-resources/RuleManager2/notices/january-2026/7-uwvs_nandgi-jan26.pdf"
    publisher: "American Bureau of Shipping"
  - title: "Jason Capabilities"
    url: "https://ndsf.whoi.edu/jason/capabilities-jason/"
    publisher: "Woods Hole Oceanographic Institution"
openProblems:
  - id: "select-first-atlantis-science-program"
    title: "Select the first Atlantis science program"
    question: "Which ten-year scientific program gains enough from persistent local presence to justify the first crew-capable underwater institution?"
    status: "Open"
    disciplines: ["Oceanography", "Science policy", "Operations research"]
    nextStep: "Compare candidate programs using sample stability, event response time, instrument service demand, robotic workload, and the cost of equivalent ship-based access."
  - id: "close-capability-interface-budgets"
    title: "Close the first capability interface budgets"
    question: "Can the proposed capability allocation be reconciled across power, heat, data, mass transport, maintenance hours, and emergency endurance?"
    status: "Open"
    disciplines: ["Systems engineering", "Thermal systems", "Reliability engineering"]
    nextStep: "Create a first-pass interface control model for one crewed node, one uncrewed laboratory, one surface gateway, and three vehicle classes."
prerequisites:
  - "deep-ocean/project-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>The first Project Atlantis report defined a permanent deep-ocean institution as a network rather than a habitat. This paper turns that premise into a capability map. I identify ten capabilities that the network must possess, then allocate them among terrestrial facilities, surface gateways, crewed nodes, uncrewed nodes, and mobile machines. The allocation is governed by locality: a function belongs underwater only when proximity to the ocean creates enough value to justify pressure, corrosion, maintenance, logistics, redundancy, and risk. The resulting architecture concentrates time-sensitive science, human judgment, repair, and local command at selected crewed nodes while distributing sensing, manipulation, transport, power, data, and industrial support across the wider network. The map establishes the functional boundary for the next stage of Project Atlantis, which must identify the scientific program capable of justifying the first institution.</p>
</section>

## Capability before component

The first report left the shape of the station deliberately unresolved. That choice now creates a useful constraint: before I draw a pressure hull, select a dock, or size a battery, I need to know what the surrounding civilization must be able to accomplish.

Components have meaning only inside a chain of purpose. A manipulator arm may collect a sample, service an observatory, mate a cable, clear a blocked interface, or assist in construction. Each task places different demands on reach, force, sensing, control, reliability, and tool exchange. Selecting the arm before selecting the task would produce a precise answer to an undefined question.

I will therefore work from civilizational purpose toward physical hardware.

<figure class="architecture-figure" aria-labelledby="traceability-caption">
  <div class="architecture-figure__grid">
    <div><small>Purpose</small><strong>Objective and capability</strong><p>What the network exists to achieve and what it must be able to do.</p></div>
    <div><small>Allocation</small><strong>Institutional function</strong><p>Where the work belongs and which node carries responsibility.</p></div>
    <div><small>Realization</small><strong>System and component</strong><p>The machinery, interfaces, and operating procedures that perform the work.</p></div>
  </div>
  <figcaption id="traceability-caption">Figure 1. The traceability chain used to prevent premature component selection.</figcaption>
</figure>

The network has to generate knowledge, remain present long enough to observe change, act on what it discovers, support people where their presence is useful, extend itself through machines, move resources, distribute energy, exchange information, repair itself, and survive failure. I reduce those needs to ten foundational capabilities.

| Capability | Civilizational purpose |
| --- | --- |
| Scientific inquiry | Produce knowledge that temporary access cannot obtain as effectively |
| Persistent observation | Capture long-duration, rare, and transient phenomena |
| Local intervention | Manipulate experiments, samples, instruments, and infrastructure |
| Human habitation | Sustain researchers and operators where locality is justified |
| Robotic reach | Extend sensing and action beyond habitable territory |
| Transportation and logistics | Move crews, machines, samples, consumables, and waste |
| Energy and thermal control | Sustain biological, mechanical, and computational processes |
| Communication and coordination | Make distributed nodes behave as one network |
| Maintenance and construction | Preserve, repair, assemble, expand, and decommission assets |
| Safety and continuity | Prevent a local failure from ending the institution |

No individual node needs all ten capabilities in equal measure. The complete network does.

## Locality as an allocation rule

Every function has at least five possible homes: a terrestrial facility, a surface vessel or platform, a crewed underwater institution, an uncrewed underwater institution, or a mobile machine. Depth carries no automatic prestige. Moving a capability underwater adds pressure, corrosion, difficult access, constrained rescue, and expensive logistics.

The allocation decision can be represented as

$$
\Delta V_{\mathrm{local}}
>
C_{\mathrm{pressure}}
+ C_{\mathrm{maintenance}}
+ C_{\mathrm{logistics}}
+ C_{\mathrm{risk}}
+ C_{\mathrm{redundancy}}.
$$

$\Delta V_{\mathrm{local}}$ is the additional scientific or operational value created by performing the function near the site. The right side contains the penalties inherited from the environment. If the inequality cannot be supported with evidence, the function belongs on a ship or on land.

<aside class="working-thesis" aria-label="Allocation rule">
  <span>Allocation rule</span>
  <p>Submerge a capability only when locality creates more value than the oceanic environment removes.</p>
</aside>

This rule keeps the project selective. The underwater institution should not reproduce a university, shipyard, hospital, and data center at depth. It should carry the capabilities whose value depends on local time, local context, pressure preservation, short response loops, or direct access to resident machines.

## Sensing, inquiry, and intervention

Scientific inquiry gives the institution its reason to exist. The network must formulate hypotheses, deploy experiments, collect and preserve samples, measure physical and chemical conditions, observe organisms and geological processes, adapt its methods, and return results to the wider scientific community.

Only part of that work benefits from being underwater. Routine computation, literature review, long-term archiving, and many forms of analysis have access to more space, energy, equipment, and expertise on land. Local facilities become valuable when ascent changes the subject, when an event demands an immediate response, when an experiment needs repeated adjustment, or when a distributed observatory requires frequent service.

Persistent observation extends that value across time. An instrument that remains on the seafloor is useful only if it can keep sensing, timestamp its measurements, detect drift or faults, preserve data, and communicate its status. Calibration, power quality, biofouling, storage, mechanical wear, and environmental disturbance all affect the integrity of a time series. The Ocean Observatories Initiative demonstrates part of this chain through a cabled array that provides continuous power and two-way communication to seafloor and water-column instruments. An Atlantis node would add local repair and intervention to that persistent backbone.

Intervention closes the loop between observation and experiment. The work may involve collecting a sample, placing an instrument, injecting a tracer, coring sediment, moving a package, repairing a connector, or recovering a failed vehicle. Human judgment can guide these actions without placing an unprotected person in the water. ROVs, AUVs, crawlers, landers, and specialized manipulators should perform most external work.

<figure class="process-figure" aria-labelledby="science-loop-caption">
  <div class="process-figure__steps">
    <span><small>Observe</small><strong>Detect change</strong></span>
    <span><small>Interpret</small><strong>Form a local judgment</strong></span>
    <span><small>Intervene</small><strong>Deploy or modify</strong></span>
    <span><small>Evaluate</small><strong>Measure the result</strong></span>
  </div>
  <figcaption id="science-loop-caption">Figure 2. A local scientific loop that can operate without waiting for the next expedition.</figcaption>
</figure>

The National Deep Submergence Facility already shows the value of differentiated machines. The AUV *Sentry* performs repeatable mapping and sensing over broad areas. The ROV *Jason* provides long-duration imaging, sampling, manipulation, and heavy-lift support. The human-occupied vehicle *Alvin* enables direct observation and selective sampling. Their combined use is more capable than any attempt to make one vehicle perform every role. Project Atlantis should treat this fleet logic as an institutional principle.

## Habitation and continuity

Human habitation is the most demanding local capability because it must maintain a narrow physiological envelope continuously. Atmospheric pressure, oxygen, carbon dioxide, humidity, trace contaminants, water, sanitation, food, temperature, noise, lighting, medical care, and psychological health all become controlled variables.

NASA's Environmental Control and Life Support System provides a useful functional precedent. It divides crew support into atmosphere management, water recovery, oxygen generation, fire response, ventilation, and waste handling. An underwater institution would operate in a different environment, but it inherits the same requirement: human survival depends on several coupled systems whose failures cannot be treated independently.

For a one-atmosphere node, the pressure differential is

$$
\Delta p = p_{\mathrm{external}} - p_{\mathrm{internal}}.
$$

At the 4,000-meter reference condition established in the first report,

$$
\Delta p \approx 40.3\ \mathrm{MPa} - 0.1\ \mathrm{MPa}
\approx 40.2\ \mathrm{MPa}.
$$

The calculation explains why volume and interfaces matter. A simple sphere or cylinder can carry external pressure efficiently, but an institution needs hatches, cables, viewports, docks, pipes, internal circulation, and useful rooms. Manufacturing quality, buckling resistance, fatigue, inspection, and damage tolerance will determine whether a theoretically strong geometry becomes a credible habitat.

Continuity begins where prevention ends. The station has to detect a fault, isolate it, preserve a habitable refuge, and retain enough energy and atmosphere for repair or evacuation. I use a simple timing condition:

$$
T_{\mathrm{survivable}} > T_{\mathrm{repair\ or\ rescue}}.
$$

If severe weather or distance can delay external assistance for several days, the local system must remain survivable longer than that delay. Pressure-isolated compartments, distributed life support, independent communications, emergency energy, refuge volume, and more than one recovery path follow from this condition.

Safety standards for underwater vehicles and hyperbaric systems already address structural design, machinery, life support, testing, and classification. The institutional challenge is to extend that discipline across a network whose nodes must remain occupied, maintainable, and expandable for years.

## Robotic reach and physical transport

Robots create most of the network's geographic reach. I expect the fleet to include high-power ROVs for supervised intervention, AUVs for mapping and inspection, gliders for energy-efficient basin-scale measurement, crawlers for persistent seafloor work, landers for simple vertical missions, inspection robots for structures and cables, and cargo or construction vehicles for moving and assembling hardware.

The machines should share docks, navigation references, communications, energy interfaces, payload conventions, and maintenance methods. Their internal designs should remain specialized. An AUV optimized for a long survey should not carry the same machinery as a vehicle built to lift a cable termination.

Water imposes a strong speed penalty. For a body moving through a fluid, drag can be approximated by

$$
F_D = \frac{1}{2}\rho C_D A v^2,
$$

and the corresponding propulsive power is

$$
P_D = F_Dv = \frac{1}{2}\rho C_D A v^3.
$$

Under similar conditions, doubling speed can require about eight times the power used to overcome drag. Long-range vehicles therefore benefit from low speed, streamlined form, buoyancy-driven motion, and periods of inactivity. The institutional network should reduce unnecessary travel by keeping vehicles, tools, and energy close to the territory they serve.

Logistics divides naturally into surface-to-station transport, movement between institutions, and local movement within a node's territory. Crew vehicles require human-rating, life support, redundant control, and credible rescue. Cargo can use different pressure and risk architectures. Food, medical supplies, reagents, pressure-sensitive electronics, flooded structural components, and seafloor samples should not all travel in the same kind of container.

The difficulty of descent is not simply the work required to move downward. A negatively buoyant vehicle can descend under gravity. Routine infrastructure depends on controlled buoyancy, navigation, docking, turnaround, and guaranteed recovery. Mission success is already demonstrated at abyssal depth. Repeatable, high-capacity transport remains immature.

## Energy, heat, and communication

Every capability consumes energy. Life support, laboratories, computation, lighting, communications, pumps, robotics, manufacturing, heating, and emergency systems all draw from the same institutional budget. A mature node may combine a shore cable, local generation, electrochemical storage, delivered fuel, emergency batteries, and vehicle-to-station exchange. The mix will vary by geography.

Electrical consumption eventually appears as heat. Cold seawater is a large thermal reservoir, but heat still has to pass through internal air or coolant, exchangers, pressure boundaries, coatings, fouling layers, and the surrounding flow. A first approximation is

$$
\dot{Q} = UA\Delta T,
$$

where $U$ is the overall heat-transfer coefficient, $A$ is transfer area, and $\Delta T$ is the temperature difference. Corrosion, condensation, biofouling, and stagnant boundary layers can reduce the performance suggested by the simple equation. Power and thermal design must therefore be closed together.

Communication has the same need for a mixed architecture. Fiber provides high bandwidth and low latency along fixed routes. Acoustic systems support mobile and longer-range underwater links at lower bandwidth and higher latency. Optical links can move data quickly over short paths when alignment and water clarity permit. Physical transport can carry large stored datasets when delay is acceptable. Conventional radio is severely attenuated by seawater except over limited ranges or at very low frequencies.

| Medium | Best use | Principal constraint |
| --- | --- | --- |
| Fiber-optic cable | Fixed backbone, power control, scientific data, and telepresence | Installation, repair, and route vulnerability |
| Acoustic link | Mobile command, status, navigation, and emergency messaging | Bandwidth, latency, multipath, and noise |
| Optical link | Docking, local offload, and short-range high-rate transfer | Alignment, absorption, and scattering |
| Physical transport | Bulk data from isolated vehicles or outposts | Delay and vehicle dependence |

No known medium simultaneously provides long range, high bandwidth, low latency, low power, and mobility underwater. The network has to route information according to urgency and available infrastructure.

## Maintenance and construction

Permanent infrastructure assumes component failure. Seals age, connectors corrode, batteries lose capacity, sensors drift, coatings degrade, pumps wear, software changes, and vehicles collide with the world they are trying to observe. The useful design target is recoverability.

An institution whose lifetime exceeds the lifetime of its components needs inspection access, fault isolation, replaceable modules, bypass paths, configuration records, cleaning systems, spare capacity, and tools that work in the actual environment. Maintenance is therefore a capability of the architecture, not a schedule applied after construction.

Construction extends the same logic to growth. The network must survey sites, prepare foundations, lower modules, control descent, position structures, mate interfaces, lay cables, install anchors, verify seals, and eventually decommission damaged assets. Offshore industry demonstrates that large subsea structures can be installed and serviced. Atlantis requires those operations to become more modular, more instrumented, and progressively less dependent on unique surface campaigns.

<aside class="working-thesis working-thesis--quiet" aria-label="Lifetime condition">
  <span>Lifetime condition</span>
  <p>The institution can outlive its components only when inspection, isolation, replacement, and bypass are designed into every critical system.</p>
</aside>

Local workshops should concentrate diagnosis, tool adaptation, pressure-tolerant repair, and the replacement of standardized modules. Heavy overhaul and most manufacturing should remain on the surface or on land until underwater production creates a measurable advantage.

## Allocating the complete network

The capability map produces a layered architecture. Terrestrial facilities retain work that benefits from abundant space, energy, personnel, specialized equipment, and industrial access. Surface gateways manage the air-sea boundary, heavy logistics, deployment, recovery, and external rescue. Crewed nodes concentrate time-sensitive science, human judgment, local maintenance, refuge, and robotic command. Uncrewed nodes provide persistent laboratories, power conversion, data, docking, and regional coordination. Mobile machines perform most sensing, collection, transport, inspection, and intervention.

| Function | Crewed node | Uncrewed node | Mobile machine | Surface or terrestrial layer |
| --- | --- | --- | --- | --- |
| Scientific judgment | Local interpretation and experiment control | Bounded autonomous decisions | Contextual sensing | Global analysis and peer collaboration |
| Persistent sensing | Supervision and calibration | Regional coordination | Primary field collection | Archiving and model integration |
| Sample handling | Time-sensitive processing | Automated preservation | Collection and transport | Advanced analysis |
| Robotic operations | Local command and maintenance | Scheduling and docking | Execution | Strategic planning and overhaul |
| Computation and storage | Edge analysis and resilient cache | Regional processing and cache | Mission-level processing | Primary compute and archive |
| Energy | Local distribution and emergency supply | Regional conversion and storage | Consumer and carrier | Generation, fuel, and grid support |
| Maintenance | Diagnosis, repair, and tool adaptation | Self-monitoring and modular safing | Inspection and intervention | Heavy overhaul and manufacture |
| Emergency response | Isolation, refuge, and local action | Autonomous safing | Search and recovery assistance | Rescue coordination and medical depth |

This allocation is provisional, but it is specific enough to expose interfaces. A sample moving from a robot to an uncrewed processor and then to a human laboratory needs compatible containers, metadata, pressure control, chain of custody, and timing. A vehicle moving between nodes needs shared navigation, docking, power, identity, and traffic rules. The boundaries between capabilities may prove harder than the capabilities themselves.

## Feasibility and the next investigation

I have not found a foundational capability in this map that conflicts with known physics. Human-rated submersibles reach extreme depth. ROVs perform complex manipulation. AUVs survey large regions. Cables carry power and data. Seafloor observatories operate over long periods. Closed environmental systems sustain people in isolated settings. Offshore industries install and maintain large subsea structures.

These examples establish ingredients, not an underwater civilization. The unresolved problem is whether the capabilities can be integrated into a system that remains safe, maintainable, scientifically productive, and economically durable across decades.

The capability map also makes the next question unavoidable. A location cannot be selected responsibly until I know what scientific work gains the most from persistent local presence. Depth, crew size, laboratories, vehicles, power, data, and maintenance demand will all follow from that program.

The next Project Atlantis report will therefore compare candidate scientific missions. It will ask which phenomena need persistent observation, which samples must remain at pressure, which experiments benefit from rapid local intervention, and which robotic workloads justify a resident maintenance and command node.

I now have a functional boundary for the institution. The next task is to give that boundary a scientific purpose.
