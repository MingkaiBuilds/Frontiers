---
title: "Project Atlantis"
description: "A first-principles proposal for transforming deep-ocean exploration from temporary expeditions into a persistent network of human institutions and robotic territory."
frontier: "Deep Ocean"
published: 2026-08-13
lastReviewed: 2026-08-13
readingTime: "16 min"
reportNo: "PX-OC-001"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Foundational"
evidenceStatus: "Hypothesis"
readinessLevel: 1
reviewStatus: "Author reviewed"
references:
  - title: "Meet Aquarius"
    url: "https://sanctuaries.noaa.gov/missions/2010aquarius/meet_aquarius.html"
    publisher: "NOAA Office of National Marine Sanctuaries"
  - title: "Regional Cabled Array"
    url: "https://oceanobservatories.org/regional-cabled-array/"
    publisher: "Ocean Observatories Initiative"
  - title: "Human Occupied Vehicle Alvin"
    url: "https://www.whoi.edu/what-we-do/explore/underwater-vehicles/hov-alvin/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Arctic and Antarctic Research"
    url: "https://www.nsf.gov/focus-areas/arctic-antarctic"
    publisher: "U.S. National Science Foundation"
openProblems:
  - id: "value-of-local-human-presence"
    title: "Quantify the value of local human presence"
    question: "For which deep-ocean research and maintenance tasks does a resident crew create enough value to exceed the cost and risk of habitation?"
    status: "Open"
    disciplines: ["Systems engineering", "Human factors", "Operations research"]
    nextStep: "Build a mission workload model comparing a crewed node, a surface-supported robotic fleet, and a fully autonomous observatory across the same ten-year science program."
  - id: "minimum-viable-atlantis-node"
    title: "Define the minimum viable Atlantis node"
    question: "What is the smallest network that can sustain science, maintenance, specialization, and expansion across multiple crew rotations?"
    status: "Open"
    disciplines: ["Systems architecture", "Subsea engineering", "Logistics"]
    nextStep: "Produce a functional decomposition and failure-tolerant reference architecture for one surface gateway, one crew-capable node, one uncrewed laboratory, and a mixed robotic fleet."
prerequisites: []
featured: true
draft: false
---

## Abstract

When I imagine a permanent human presence beneath the ocean, I first see a pressure-resistant structure resting on the seafloor. I see laboratories, workshops, living quarters, vehicle docks, and illuminated windows looking into the dark. That image is useful because it makes the ambition tangible. It is also incomplete.

A habitat is a structure. An institution is a persistent organization that can accumulate knowledge, maintain infrastructure, train researchers, coordinate missions, survive changes in personnel, and expand its capabilities over time. Project Atlantis begins with the proposition that the deep ocean should be approached at the scale of an institution and, eventually, at the scale of a civilization.

I am not asking only whether people can survive underwater. That question has already been answered under limited conditions. I am asking what scientific, technical, logistical, economic, and institutional architecture would allow humanity to establish a durable presence throughout the deep ocean.

My answer is not a single habitat. It is a globally connected network of crewed institutions, uncrewed laboratories, robotic outposts, transportation systems, energy infrastructure, and communication links. The proper unit of design is the planetary network.

## 1. The question behind Project Atlantis

Most deep-ocean science still follows the rhythm of an expedition. A vessel travels to a site, deploys an instrument or vehicle, gathers a finite set of observations, and eventually returns to port. This model has produced extraordinary discoveries, but its operating window is narrow. Ship time is costly. Weather interrupts access. Instruments may remain unattended for months. A transient geological or biological event can begin and end while the nearest capable team is still days away.

I want to explore a different relationship with the ocean, one based on persistence.

A permanent institution could observe a hydrothermal system across its natural cycles instead of during a brief visit. It could keep robotic vehicles near the seafloor, recharge them, repair them, exchange data, and send them back into the field without first returning every machine to the surface. It could examine pressure-sensitive samples before decompression alters their chemistry or biology. It could respond to an unexpected event while that event is still unfolding.

The transition I want to investigate is:

$$
\boxed{
\text{temporary access}
\rightarrow
\text{persistent observation}
\rightarrow
\text{local intervention}
\rightarrow
\text{permanent infrastructure}
}
$$

Temporary access already exists. Project Atlantis concerns the remaining three stages.

The analogy I find most useful is the development of permanent Antarctic research stations. Those stations did not replace ships, aircraft, satellites, field camps, or remote instruments. They changed what the whole scientific system could accomplish by adding persistence, local judgment, maintenance capacity, logistics, and institutional memory. The United States Antarctic Program now supports three year-round stations together with vessels and extensive surface infrastructure. That network demonstrates a broader principle: a permanent node can increase the value of every temporary mission connected to it.

## 2. An institution is a node, not an island

A single underwater station, however sophisticated, would not create a new layer of civilization. It could remain an isolated facility that depends completely on a surface organization. The larger transformation begins when specialized institutions cooperate through common systems.

I can imagine an abyssal biology institution operating long-duration observatories across a broad seafloor region. A hydrothermal institution could specialize in geochemistry, extremophile biology, and pressure-preserving sample analysis. A trench-edge institution could command vehicles designed for the hadal zone. A polar institution could study the coupled behavior of ice, circulation, climate, and deep ecosystems. A continental-slope institution could provide training, medicine, repair, and logistics for more remote nodes.

These facilities should not be identical. Civilization does not reproduce the same building everywhere. It creates specialized nodes connected through shared standards and flows.

My initial architectural proposition is:

$$
\boxed{
\text{underwater civilization}
=
\text{specialized institutions}
+
\text{distributed machines}
+
\text{shared flows}
}
$$

A station becomes part of a civilization only when information, energy, people, materials, machines, and trust can move through it. Its ability to exchange data, coordinate robotic missions, receive components, transfer samples, and request emergency assistance may ultimately matter as much as the strength of its pressure hull.

This distinction changes the design process. If I begin with the hull, I will optimize a building. If I begin with the flows, I can discover what the institution must actually do.

## 3. Human occupancy is not the same as human reach

One principle governs nearly every decision in Project Atlantis: humanity does not need to occupy every place it wishes to study or influence.

Humans require a dry, warm, breathable environment maintained near atmospheric pressure. At great depth, that environment demands a pressure boundary, life support, thermal control, fire protection, medical capability, rescue systems, and extensive redundancy. Every cubic meter of habitable volume carries structural and operational cost.

Robots face their own severe engineering constraints, but they allow architectures that would be unacceptable for people. Electronics can be enclosed in small pressure vessels, divided across replaceable modules, immersed in dielectric fluid, or pressure compensated. A failed vehicle can be recovered, repaired, or replaced without turning a technical fault into a human casualty.

For that reason, the physical territory of an underwater institution should be much larger than its habitable volume. I envision three concentric forms of presence:

1. **A human-safe core** containing laboratories, workshops, living quarters, medical spaces, command systems, and emergency refuge.
2. **A locally serviceable robotic zone** in which vehicles can be launched, recovered, repaired, reconfigured, and recharged.
3. **A remotely operated scientific territory** extending across abyssal plains, hydrothermal fields, polar environments, and hadal trenches.

This architecture concentrates human beings where cognition, improvisation, experimentation, maintenance, and community offer unusual leverage. Machines extend that judgment into environments where reproducing the entire human-support system would be inefficient or dangerous.

The governing thesis of this first report is therefore:

$$
\boxed{
\text{A small number of protected human nodes can operate a much larger persistent robotic territory.}
}
$$

This is not a retreat from the ambition of human presence. It is a way to make that ambition physically credible and scientifically useful.

## 4. Why place people underwater at all?

I do not want to assume that a crewed institution is automatically justified. If surface ships and autonomous systems can perform every proposed function more safely and economically, then a deep-ocean habitat would be a monument rather than necessary infrastructure.

The burden of proof belongs to the crewed institution.

Human presence becomes defensible when locality produces enough scientific and operational value to exceed the cost and risk of habitation. That value might arise from rapid scientific judgment, immediate processing of unstable samples, repair of complex machines, response to transient events, continuous interaction with experiments, or coordination of a large robotic fleet.

Existing systems provide pieces of the evidence. NOAA's Aquarius Reef Base showed how a resident crew could spend far more working time in an underwater environment than conventional dive schedules permitted. The human-occupied vehicle *Alvin* has demonstrated direct scientific observation and sample collection at depths reaching 6,500 meters during limited missions. The Ocean Observatories Initiative has demonstrated another piece of the architecture through a 900-kilometer electro-optical cable network that supplies power, high-bandwidth communication, and two-way control to instruments across the Juan de Fuca plate.

Each of these systems proves something important, but none alone proves the need for a permanent abyssal crew. Project Atlantis must determine whether combining local people, resident machines, and persistent infrastructure produces a capability greater than the sum of its parts.

I can state the decision criterion as:

$$
V_{\text{local human presence}}
>
C_{\text{habitation}}
+
C_{\text{transport}}
+
C_{\text{risk}}
+
C_{\text{support}}
$$

This is not yet a predictive equation. It is a declaration of accountability. Every proposed crew role must create value that a remote or autonomous system cannot reproduce at lower cost and risk.

My objective is therefore not to maximize the number of people living underwater. It is to maximize the scientific and operational leverage of every person placed there.

## 5. Pressure is an architectural tax

Pressure is the most visible constraint in deep-ocean design. Hydrostatic pressure can be approximated by

$$
p = p_{\mathrm{atm}} + \rho g h
$$

where $p_{\mathrm{atm}}$ is atmospheric pressure, $\rho$ is seawater density, $g$ is gravitational acceleration, and $h$ is depth.

At a depth of $4{,}000\ \mathrm{m}$, using $\rho \approx 1{,}025\ \mathrm{kg/m^3}$,

$$
p \approx 0.101\ \mathrm{MPa} + (1{,}025)(9.81)(4{,}000)
\approx 40.3\ \mathrm{MPa}.
$$

The surrounding water therefore exerts roughly four hundred times atmospheric pressure. Near $11{,}000\ \mathrm{m}$, pressure approaches $110\ \mathrm{MPa}$, or more than one thousand atmospheres.

These values do not make protected human occupancy impossible. People inside a one-atmosphere vessel do not experience the surrounding pressure directly. The more important distinction is between surviving a short mission and supporting a permanent institution.

A submersible can return to the surface for inspection. A permanent node must survive years of cyclic loading, corrosion, seal degradation, biofouling, manufacturing defects, connector failures, accidental impacts, maintenance activity, and internal emergencies. It must also move power, data, supplies, samples, machines, waste, and people across its pressure boundaries. Every opening and transfer operation creates another interface that must remain safe.

I therefore treat pressure not as a prohibition, but as an architectural tax imposed on:

- habitable volume;
- structural mass;
- openings and penetrations;
- docking and transfer systems;
- inspection and repair;
- expansion and rescue.

This leads me toward a tiered depth strategy. The first crewed institutions should be located where they offer meaningful access to deep-ocean science without forcing every human-rated subsystem to begin at the maximum oceanic pressure. Robotic systems can extend from those nodes into deeper territory.

The development sequence may be:

$$
\boxed{
\text{shallow institutional prototype}
\rightarrow
\text{continental-slope node}
\rightarrow
\text{abyssal institution}
\rightarrow
\text{hadal support network}
}
$$

A 4,000-meter institution remains a valuable reference design because it forces the analysis to confront real abyssal conditions. It should not be confused with the first facility that ought to be constructed.

## 6. Four classes of infrastructure

I expect a mature Atlantis network to contain four broad classes of nodes.

### Crewed institutions

Crewed institutions would concentrate functions that directly benefit from human presence: atmospheric control, habitation, medicine, laboratories, workshops, command systems, emergency refuge, vehicle docks, and sample processing. Their purpose would not be merely to shelter people. Their purpose would be to improve the productivity and adaptability of the surrounding network.

### Uncrewed subsea institutions

Uncrewed institutions could contain automated laboratories, power conversion, data storage, robotic docks, communication equipment, sample-processing machinery, or manufacturing systems. They could operate for months or years with periodic service. In many regions, this may become the dominant institutional form.

### Distributed outposts

Cameras, chemical sensors, seismometers, hydrophones, samplers, landers, crawlers, navigation beacons, and autonomous vehicles would form each institution's extended sensory and operational territory. Individually, these systems may be small. Collectively, they could provide persistent awareness across enormous regions.

### Surface and terrestrial gateways

Ports, research vessels, cable landing stations, satellites, universities, fabrication facilities, mission-control centers, and launch-and-recovery systems remain part of the architecture. Building beneath the ocean does not initially mean independence from the surface. It means constructing a new operational layer connected to existing civilization.

The network crosses the air-sea boundary. It does not exist exclusively beneath it.

## 7. The six flows of an underwater civilization

The network becomes easier to reason about when I organize it around six flows.

| Flow | What must move | Initial design implication |
| --- | --- | --- |
| Information | Sensor data, commands, models, voice, and video | Combine fixed fiber links with acoustic, optical, and store-and-forward communication |
| Energy | Electrical power, stored energy, and fuel | Design redundant sources, storage, fault isolation, and safe replenishment |
| People | Researchers, operators, technicians, and medical support | Use protected transport, pressure-isolated docking, and credible rescue paths |
| Material | Food, gases, samples, tools, spares, and waste | Standardize cargo interfaces and prioritize local repair before local extraction |
| Machines | AUVs, ROVs, landers, cargo vehicles, and inspection robots | Create common docks, navigation references, maintenance facilities, and traffic rules |
| Trust | Certification, rescue obligations, environmental rules, and data standards | Build governance into interfaces before the network spans institutions and nations |

No single technology will solve all six flows. Seawater strongly limits conventional radio communication, while acoustic links trade bandwidth and latency against range. Optical communication can be fast over short, clear paths, but it requires favorable geometry and water conditions. Fixed fiber can provide extraordinary capacity, but only along routes where cable installation and repair are justified. A credible architecture must therefore be heterogeneous.

The same principle applies to energy and transport. A shore-connected continental node may use subsea cables. A remote station may depend on a different mix of generation, delivered energy, and storage. A scientific sample may travel by small autonomous vehicle, while a pressure-preserved specimen may require a specialized transfer chain. Standardization should occur at the interfaces even when the internal technologies differ.

The sixth flow, trust, is easy to underestimate. Institutions operated by different organizations will need shared rules for docking, rescue, navigation, environmental protection, data exchange, certification, and emergency assistance. A network of technically compatible machines can still fail as a civilization if its operators cannot rely on one another.

## 8. Possibility is not maturity

No major element of Project Atlantis appears to violate known physical law. Pressure vessels can preserve near-atmospheric interiors. Cables can transmit power and information. Submersibles can carry people into the deep ocean. Life-support systems can maintain breathable atmospheres. Robotic systems can navigate, observe, sample, and manipulate. Instruments can remain on the seafloor for years.

The difficult work lies in integration.

Physical possibility does not prove that a structure can be manufactured without unacceptable defects, inspected after installation, evacuated during a fire, repaired at depth, supplied through severe weather, or operated for decades without exhausting its sponsor. A component can be demonstrated while the institution that depends on it remains immature.

I will use four categories throughout the Project Atlantis research program:

| Classification | Meaning |
| --- | --- |
| Physically impossible | Conflicts with a known physical law or human biological limit |
| Physically possible but impractical | Requires prohibitive energy, mass, precision, risk, or resources |
| Engineering frontier | Compatible with known physics but blocked by reliability, manufacturing, integration, maintainability, or cost |
| Demonstrated capability | Achieved under conditions sufficiently relevant to the proposed use |

This vocabulary matters because ambition becomes useful only when it is willing to reject its own weakest ideas. Long-range, high-bandwidth wireless communication through seawater faces severe propagation constraints. Large transparent windows at extreme depth impose structural penalties. An ambient-pressure habitat at abyssal depth would expose human physiology to pressures far beyond the operating regime demonstrated by shallow saturation facilities.

My task is not to defend every futuristic image. It is to identify the ambitious ideas that survive quantitative scrutiny.

## 9. The minimum viable underwater civilization

A civilization-scale ambition needs a smaller initial configuration that preserves the essential relationships of the mature system.

The minimum viable Atlantis network is not one person inside one habitat. Its smallest credible form might contain:

- one surface support base;
- one crew-capable subsea institution;
- one uncrewed laboratory;
- several distributed robotic outposts;
- a mixed fleet of underwater vehicles;
- a reliable communication path to shore;
- repeatable transport and resupply;
- shared docking and operating standards.

This system would need to operate across multiple crew rotations and scientific programs. It would specialize functions among nodes. It would move people, machines, information, energy, and material. It would accumulate infrastructure instead of recovering every asset after each expedition. It could be repaired, expanded, and improved.

Most importantly, it should be more capable after ten years of operation than it was on its first day.

> A vehicle completes missions. An institution compounds capability.

The idea of compounding provides a test for every design decision. A standard dock should make the next vehicle easier to integrate. A shared protocol should allow the next instrument to join the network with less effort. A certified pressure module should reduce the cost of constructing the next station. Existing energy and data infrastructure should turn new observatories into incremental additions rather than isolated megaprojects.

The desired dynamic is:

$$
\boxed{
\text{first institution}
\rightarrow
\text{shared standards}
\rightarrow
\text{lower deployment cost}
\rightarrow
\text{more institutions}
\rightarrow
\text{larger support economy}
\rightarrow
\text{greater capability}
}
$$

If every facility must be designed, supplied, certified, and operated as a unique megaproject, the network will remain sparse. Civilization begins when expansion becomes repeatable.

## 10. A design doctrine for Atlantis

From this first analysis, I can state six rules for the project.

1. **Modular:** No single pressure structure should contain every critical function.
2. **Distributed:** Scientifically relevant territory is much larger than habitable territory.
3. **Heterogeneous:** Different depths, missions, and environments require different architectures.
4. **Repairable:** Permanent infrastructure cannot depend on indefinite component reliability.
5. **Gracefully degrading:** A local failure must not become an immediate loss of the institution while surface rescue is hours or days away.
6. **Scientifically accountable:** Spectacular engineering without durable scientific or operational value cannot support a civilization.

I would add a seventh rule: the system must be expansionary. Each major investment should lower the difficulty of the next one. That is the difference between a heroic demonstration and infrastructure.

## 11. What I must determine next

I am not yet ready to select the geometry, material, depth, or crew size of the first institution. Those decisions should follow from the work the network requires.

The next investigation must build a civilizational capability map. I need to identify which functions genuinely benefit from local human presence, which should be delegated to autonomous infrastructure, which should remain on the surface, and how all three layers exchange resources and authority.

That map must answer questions such as:

- Which scientific samples lose value during ascent or depressurization?
- Which maintenance tasks remain too variable for autonomous systems?
- How much robotic territory can one crew supervise without becoming an operational bottleneck?
- What failures must the station survive without immediate surface assistance?
- Which shared interfaces create the greatest reduction in future deployment cost?
- What ten-year science program could justify the first network economically and institutionally?

These are more important than choosing whether the first habitat should be spherical, cylindrical, or modular. Form should follow mission, and mission should follow a defensible account of value.

## Conclusion

Project Atlantis is not a proposal for a single underwater city. It is a research program for a globally connected, modular, heterogeneous, and progressively expanding network of scientific institutions.

Humans would occupy selected nodes where their presence creates exceptional scientific and operational value. Robotic systems would extend those nodes across a much larger territory. Surface civilization would remain part of the network, especially during its early development. The objective is to replace temporary access with persistent observation, local intervention, permanent infrastructure, and cumulative institutional capability.

The future I want to investigate resembles a planetary scientific nervous system. Crewed institutions provide judgment, maintenance, and community. Robots act as mobile limbs. Observatories function as sensory organs. Communication systems carry information among them. Surface gateways connect this new layer to the civilization that built it.

The ocean is not empty space waiting for a building. It is an immense physical environment that demands a new relationship among people, machines, infrastructure, and time. If Project Atlantis succeeds, its greatest achievement will not be keeping humans alive at depth. It will be creating an institution that can learn, repair itself, expand its reach, and make the next generation of discovery possible.

That is where this route begins.
