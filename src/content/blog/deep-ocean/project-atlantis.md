---
title: "Project Atlantis"
description: "A first-principles proposal for transforming deep-ocean exploration from temporary expeditions into a persistent network of human institutions and robotic territory."
frontier: "Deep Ocean"
published: 2026-08-13
updated: 2026-08-13
lastReviewed: 2026-08-13
readingTime: "14 min"
reportNo: "PX-OC-001"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.1"
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

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>Project Atlantis is my attempt to define a durable human presence in the deep ocean before choosing the shape of a habitat. I treat the ocean as a territory to be observed, serviced, and understood by a network of crewed institutions, uncrewed laboratories, resident vehicles, fixed observatories, and surface gateways. The central question is where human presence creates enough scientific and operational value to justify the pressure boundaries, transport systems, life support, and risk that come with it. This paper establishes the network as the primary object of design, estimates the pressure regime of an abyssal reference site, identifies the flows that would keep the system functioning, and proposes a minimum configuration for further analysis. The result is a research program rather than a finished station concept.</p>
</section>

## From expeditions to presence

When I imagine a permanent human presence beneath the ocean, I first see a pressure-resistant structure resting on the seafloor. It contains laboratories, workshops, living quarters, vehicle docks, and windows looking into the dark. The image is compelling because it gives the ambition a physical form. It also places the building before the purpose.

A habitat is a structure. An institution has memory. It can maintain equipment, train new researchers, coordinate long programs, preserve methods, survive changes in personnel, and improve its own capabilities. Project Atlantis begins with that distinction. My subject is the organization of permanent deep-ocean work, not the architecture of a single room in which people can survive.

Most deep-ocean science still follows the rhythm of an expedition. A vessel reaches a site, deploys an instrument or vehicle, gathers observations, and returns to port. The model has produced exceptional science, but access remains episodic. Ship schedules are scarce, weather interrupts operations, and instruments can remain unattended for months. A transient geological or biological event may be over before a capable team can return.

Persistence changes the kinds of questions that can be asked. A local institution could watch a hydrothermal field across its natural cycles, keep vehicles near the seafloor, process pressure-sensitive samples promptly, repair instruments in place, and respond while an unexpected event is still unfolding.

<figure class="process-figure" aria-labelledby="presence-sequence-caption">
  <div class="process-figure__steps">
    <span><small>01</small><strong>Temporary access</strong></span>
    <span><small>02</small><strong>Persistent observation</strong></span>
    <span><small>03</small><strong>Local intervention</strong></span>
    <span><small>04</small><strong>Permanent infrastructure</strong></span>
  </div>
  <figcaption id="presence-sequence-caption">Figure 1. The operational transition examined by Project Atlantis.</figcaption>
</figure>

Permanent Antarctic research stations provide a useful institutional comparison. They operate as parts of a larger system of vessels, aircraft, satellites, field camps, laboratories, and logistics. The stations add local judgment, maintenance capacity, continuity, and memory. The U.S. National Science Foundation supports three year-round Antarctic stations together with the surface infrastructure required to keep them scientifically useful. I am interested in what an equivalent transition would require in the deep ocean.

## The institution as a network

An isolated underwater station could remain a surface facility placed at depth. A more consequential system would connect specialized institutions through common interfaces and shared services.

An abyssal biology node might operate long-duration observatories over a broad seafloor region. A hydrothermal node could concentrate pressure-preserving sample analysis, geochemistry, and extremophile biology. A trench-edge node could command hadal vehicles. A continental-slope node could provide medicine, repair, training, and logistics for deeper facilities. Their differences would be useful. Specialization allows each site to respond to its environment while common standards allow the sites to cooperate.

<figure class="architecture-figure" aria-labelledby="network-model-caption">
  <div class="architecture-figure__grid">
    <div><small>Nodes</small><strong>Specialized institutions</strong><p>Judgment, laboratories, maintenance, storage, and local command.</p></div>
    <div><small>Reach</small><strong>Distributed machines</strong><p>Vehicles, observatories, landers, samplers, and navigation infrastructure.</p></div>
    <div><small>Continuity</small><strong>Shared flows</strong><p>Information, energy, people, material, machines, and trust.</p></div>
  </div>
  <figcaption id="network-model-caption">Figure 2. The three elements of the proposed institutional network.</figcaption>
</figure>

The movement of data, power, crews, components, samples, and emergency assistance determines whether these facilities form a network. This is why I want to begin with flows rather than hull geometry. Starting with a pressure vessel would encourage me to optimize a building. Starting with the exchanges between institutions reveals what each building must accomplish.

## Human reach beyond human occupancy

Human bodies impose a demanding local environment. We need dry, warm, breathable spaces held near atmospheric pressure, along with thermal control, fire protection, medicine, escape provisions, and redundant life support. Every additional cubic meter of occupied volume increases the structural and operational burden.

Robotic systems have serious constraints of their own, but their failure modes permit different choices. Electronics can be divided among small pressure vessels, immersed in dielectric fluid, pressure compensated, or packaged as replaceable modules. A failed vehicle can be recovered or abandoned without making the failure immediately life threatening.

I therefore divide an Atlantis institution into three nested territories. The innermost territory is a human-safe core containing laboratories, living quarters, workshops, command spaces, and refuge. Around it lies a service zone where resident vehicles can dock, recharge, exchange payloads, and receive maintenance. Beyond that zone is the scientific territory covered by autonomous vehicles, cabled observatories, crawlers, landers, and remote instruments.

<aside class="working-thesis" aria-label="Working thesis">
  <span>Working thesis</span>
  <p>A small number of protected human nodes can maintain a persistent scientific and robotic presence across a territory far larger than the volume occupied by people.</p>
</aside>

The distinction between occupancy and reach keeps the project ambitious without requiring a human habitat at every scientifically interesting site. People belong where judgment, dexterity, experimentation, and community justify the effort needed to protect them. Machines should carry that presence into places where a human-support system would add cost without adding equivalent capability.

## The case for a resident crew

A crewed node has to earn its place in the network. If a surface-supported robotic fleet can perform the same program more safely and at lower cost, the case for permanent habitation is weak.

Locality may still matter. A resident crew can make scientific decisions while an event is occurring, repair equipment that would otherwise wait for the next expedition, interact continuously with experiments, process unstable samples, and supervise several classes of machine from the same site. Those advantages need to be measured against habitation, transport, support infrastructure, and risk.

$$
V_{\mathrm{local}}
>
C_{\mathrm{habitation}}
+ C_{\mathrm{transport}}
+ C_{\mathrm{risk}}
+ C_{\mathrm{support}}
$$

I use this inequality as a research criterion, not as a completed economic model. It requires every proposed crew role to identify the value created by physical proximity and to compare that value with remote and autonomous alternatives.

Several existing systems define parts of the design space. NOAA's Aquarius Reef Base demonstrated the scientific utility of a resident underwater crew in a shallow saturation habitat. The human-occupied vehicle *Alvin* supports direct observation and sampling at depths reaching 6,500 meters during limited missions. The Ocean Observatories Initiative's Regional Cabled Array supplies continuous power and two-way, high-bandwidth communication to instruments spread across the Juan de Fuca plate. Project Atlantis asks whether these separate forms of access, presence, and infrastructure can be combined into a durable operating system.

## Pressure and the depth strategy

Hydrostatic pressure provides the first quantitative boundary. It can be approximated by

$$
p = p_{\mathrm{atm}} + \rho g h,
$$

where $p_{\mathrm{atm}}$ is atmospheric pressure, $\rho$ is seawater density, $g$ is gravitational acceleration, and $h$ is depth. At $4{,}000\ \mathrm{m}$, using $\rho \approx 1{,}025\ \mathrm{kg/m^3}$,

$$
p \approx 0.101\ \mathrm{MPa} + (1{,}025)(9.81)(4{,}000)
\approx 40.3\ \mathrm{MPa}.
$$

The surrounding water at that depth exerts about four hundred times atmospheric pressure. Near $11{,}000\ \mathrm{m}$, the pressure approaches $110\ \mathrm{MPa}$.

A one-atmosphere pressure boundary can keep occupants near surface pressure. The harder problem is maintaining the boundary as an institution ages. A permanent node must contend with corrosion, cyclic loading, seal degradation, connector failures, manufacturing defects, impacts, biofouling, maintenance activity, and internal emergencies. Power, data, supplies, samples, machines, people, and waste must cross the boundary without allowing each penetration to become a catastrophic vulnerability.

Pressure therefore acts as a tax on habitable volume, structural mass, openings, docking systems, inspection, repair, expansion, and rescue. It suggests a staged development program rather than an immediate attempt at full-ocean depth.

<figure class="process-figure process-figure--depth" aria-labelledby="depth-sequence-caption">
  <div class="process-figure__steps">
    <span><small>Phase A</small><strong>Shallow prototype</strong></span>
    <span><small>Phase B</small><strong>Continental slope</strong></span>
    <span><small>Phase C</small><strong>Abyssal node</strong></span>
    <span><small>Phase D</small><strong>Hadal support</strong></span>
  </div>
  <figcaption id="depth-sequence-caption">Figure 3. A depth progression that validates the institution before maximizing pressure.</figcaption>
</figure>

I will retain 4,000 meters as an abyssal reference condition because it forces the design to confront the deep ocean honestly. The first operational facility may belong much higher on the continental slope.

## Infrastructure and flow

The mature network would combine four kinds of infrastructure. Crewed institutions would concentrate the functions that gain from human presence. Uncrewed institutions would provide automated laboratories, data storage, energy conversion, vehicle docks, or sample handling without carrying the full burden of habitation. Distributed outposts would extend sensing and action through observatories, landers, crawlers, and vehicles. Surface and terrestrial gateways would provide ports, fabrication, cable landings, universities, mission control, vessels, and logistics.

The network crosses the air-sea boundary. Surface infrastructure remains part of Atlantis, particularly in its early decades.

Six flows connect the four classes of infrastructure:

| Flow | Contents | Design consequence |
| --- | --- | --- |
| Information | Sensor data, commands, models, voice, and video | Combine fiber with acoustic, optical, and store-and-forward links |
| Energy | Electrical power, stored energy, and fuel | Provide redundant sources, fault isolation, storage, and safe replenishment |
| People | Researchers, operators, technicians, and medical support | Protect transport, docking, refuge, and rescue as one continuous system |
| Material | Food, gases, samples, tools, spares, and waste | Standardize cargo interfaces and prioritize repairability |
| Machines | AUVs, ROVs, landers, cargo vehicles, and inspection robots | Share docks, navigation references, maintenance methods, and traffic rules |
| Trust | Certification, rescue obligations, environmental rules, and data standards | Establish governance before the network spans institutions and nations |

Each flow will require more than one technology. Seawater limits conventional radio transmission. Acoustic links can reach farther but offer less bandwidth and greater latency. Optical links can be fast over short, clear paths, while fixed fiber offers high capacity where installation and repair are justified. The architecture should standardize what passes through an interface without requiring every site to use the same internal machinery.

Trust belongs in the engineering model because technical compatibility alone cannot sustain a shared network. Operators will need common expectations for docking, navigation, certification, emergency assistance, environmental protection, and data exchange. A vehicle must be able to approach another institution with confidence in both the mechanical interface and the rules governing its use.

## Evidence, maturity, and refusal

The component technologies suggest that the broad vision is physically possible. Pressure vessels preserve atmospheric interiors. Submersibles carry people into the deep ocean. Cables transmit power and information. Life-support systems maintain breathable environments. Robots navigate, observe, sample, and manipulate. Seafloor instruments operate for long periods.

Integration remains the unresolved subject. A component demonstration says little about whether a station can be inspected after installation, supplied through severe weather, evacuated during a fire, repaired at depth, or financed across several decades. Project Atlantis needs a vocabulary that separates physical possibility from operational maturity.

| Classification | Use in this research program |
| --- | --- |
| Physically impossible | Conflicts with a known physical law or human biological limit |
| Physically possible, impractical | Demands prohibitive energy, mass, precision, risk, or resources |
| Engineering frontier | Fits known physics but remains blocked by reliability, manufacturing, integration, maintenance, or cost |
| Demonstrated capability | Has operated under conditions relevant enough to inform the proposed system |

This classification gives me permission to refuse ideas that look impressive but weaken the institution. Large transparent windows at extreme depth carry structural penalties. Long-range, high-bandwidth wireless communication through seawater faces severe propagation limits. An ambient-pressure habitat at abyssal depth would expose people to a physiological regime far beyond shallow saturation facilities. Ambition becomes more credible when it survives the removal of its least defensible features.

## The first credible network

The smallest useful Atlantis configuration must contain the relationships that allow a mature system to grow. I would begin the analysis with one surface support base, one crew-capable subsea institution, one uncrewed laboratory, several distributed outposts, a mixed vehicle fleet, a dependable communication path to shore, repeatable transport and resupply, and common docking standards.

This network would have to operate across multiple crew rotations and research programs. It would accumulate assets instead of recovering every instrument after an expedition. It would distribute functions across nodes and preserve enough maintenance capacity to remain useful as components age.

<aside class="working-thesis working-thesis--quiet" aria-label="Institutional test">
  <span>Institutional test</span>
  <p>The system should be more capable after ten years of operation than it was on its first day.</p>
</aside>

Compounding capability becomes a practical design test. A standard dock should make the next vehicle easier to integrate. A shared protocol should reduce the effort required to add an instrument. A certified pressure module should lower the cost of the next station. Existing energy and data infrastructure should let new observatories arrive as extensions of a system rather than as isolated megaprojects.

If every facility remains unique, the network will remain sparse. Permanent presence becomes plausible when expansion becomes repeatable.

## Research doctrine

The first pass through the architecture leaves me with a compact set of design commitments.

| Property | Commitment |
| --- | --- |
| Modular | No single pressure structure contains every critical function |
| Distributed | The scientific territory extends far beyond the habitable volume |
| Heterogeneous | Depth, environment, and mission determine the internal architecture |
| Repairable | Permanent infrastructure assumes that components will fail |
| Gracefully degrading | Local faults leave time for isolation, refuge, repair, or rescue |
| Scientifically accountable | Every costly human capability is tied to durable research value |
| Expansionary | Each major investment lowers the difficulty of adding the next capability |

I am not yet choosing the geometry, material, depth, or crew size of the first institution. Those choices depend on the work the network must perform. The next report should construct a capability map that separates tasks requiring local human judgment from tasks suited to autonomous infrastructure or surface support.

That map must identify which samples lose scientific value during ascent, which maintenance tasks remain too variable for robots, how much territory one crew can supervise, which failures must be survived without immediate assistance, and which interfaces create the largest reduction in future deployment cost. It must also define a ten-year research program capable of justifying the first network as an institution rather than a demonstration.

## Conclusion

Project Atlantis begins with a change in scale. The object I intend to design is a connected scientific institution whose habitable spaces occupy only a small part of its operational territory. Crews provide judgment, experimentation, maintenance, and continuity at selected nodes. Machines extend those capabilities through the surrounding ocean. Surface gateways supply the industrial and logistical base from which the network grows.

The first station should emerge from a defensible account of work: what must happen locally, what can happen remotely, what must continue during failure, and what becomes easier after the station exists. Once those requirements are known, pressure hulls, docks, vehicles, and crew size can be treated as engineering consequences rather than visual starting points.

I want Atlantis to become an institution that learns faster than it decays. That is the standard against which I will design its first node.
