---
title: "The Ports of Underwater Civilization"
description: "A family of standardized underwater interfaces that allows robots, cargo, scientific samples, people, utilities, and future modules to connect without sharing one unsafe universal port."
frontier: "Deep Ocean"
published: 2026-08-14T04:00:00-07:00
lastReviewed: 2026-08-14
readingTime: "24 min"
reportNo: "PX-OC-014"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Optical and Hybrid Connectors"
    url: "https://www.teledynemarine.com/en-us/products/product-line/Pages/Optical-Hybrid-Connectors.aspx"
    publisher: "Teledyne Marine"
  - title: "Gross Alignment Funnel and Enhanced Latch Indicator"
    url: "https://www.teledynemarine.com/en-us/products/Pages/gross-alignment-funnel-enhanced-latch-indicator-gaf-eli.aspx"
    publisher: "Teledyne Marine"
  - title: "Seafloor Docking Project"
    url: "https://www2.whoi.edu/site/osl/remus-100-projects/seafloor-docking-project/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Docked and Ready"
    url: "https://www.whoi.edu/ocean-learning-hub/multimedia/docked-and-ready/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Cables and Connectors"
    url: "https://interactiveoceans.washington.edu/technology/cables-connectors/"
    publisher: "OOI Regional Cabled Array, University of Washington"
  - title: "Junction Boxes"
    url: "https://interactiveoceans.washington.edu/technology/junction-boxes/"
    publisher: "OOI Regional Cabled Array, University of Washington"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities, January 2026 Notice"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-resources/RuleManager2/notices/january-2026/7-uwvs_nandgi-jan26.pdf"
    publisher: "American Bureau of Shipping"
openProblems:
  - id: "qualify-atlantis-port-state-machine"
    title: "Qualify the Atlantis port state machine"
    question: "Can every robotic port class prevent unsafe capture, energization, transfer, and release through misalignment, debris, partial latch, seawater intrusion, dirty optics, communication loss, power interruption, and a stuck vehicle?"
    status: "Open"
    disciplines: ["Subsea interfaces", "Functional safety", "Reliability engineering"]
    nextStep: "Build an instrumented R2 dock and execute thousands of pressure-cycled mating sequences while injecting off-axis approaches, damaged seals, rising contact resistance, false sensor states, contaminated optics, interrupted commands, and emergency release requests."
  - id: "close-atlantis-human-docking-safety-case"
    title: "Close the Atlantis human-docking safety case"
    question: "What independent barriers, interlocks, leak limits, structural margins, evacuation paths, inspection intervals, and classification evidence are required before a dry H1 transfer collar can carry people at the candidate depth?"
    status: "Open"
    disciplines: ["Pressure systems", "Human-rated systems", "Marine classification"]
    nextStep: "Develop the collar hazard analysis and pressure-boundary model with a classification society, then test a full-scale uncrewed article through repeated normal, aborted, flooded, misaligned, seal-damaged, and total-power-loss transfer cycles."
prerequisites:
  - "deep-ocean/robotic-fleet-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>A capable robotic fleet remains expeditionary if every vehicle must return to the surface for charging, data transfer, payload exchange, and repair. A habitat remains a single project if every addition requires a bespoke structural and utility campaign. I therefore treat the underwater port as foundational infrastructure. At 2,000 meters, the institution operates near 20.1 megapascals of ambient pressure, yet present subsea systems already demonstrate wet-mate electrical and optical connections, autonomous vehicle docking, robotic connector installation, and expandable seafloor power and data networks. The unsolved institutional task is to combine these functions without allowing impact loads, contaminated seals, false latch indications, energized mating, or incompatible control logic to cross a critical boundary. I propose seven port families governed by one six-layer architecture: identity and guidance, gross capture, precision alignment, hard capture, environmental control, and verified service engagement. Human transfer receives independent hatches, a drained and tested vestibule, redundant seals, and formal classification. Permanent modules place structural, utility, and personnel connections on separate load paths. A port becomes interoperable only when geometry, behavior, failure response, evidence, and maintenance are standardized together.</p>
</section>

## The interface is the institution

Unit 13 defined a heterogeneous robotic fleet. That fleet does not become persistent merely because its vehicles can navigate home. A machine must dock, recharge, offload evidence, synchronize time, exchange payloads, report damage, receive service, and depart again without routine recovery to a ship.

The same requirement applies at larger scale. A future laboratory cannot become part of Atlantis simply because a crane places it nearby. It must transfer structural loads, electrical power, data, heat, fluids, material, and people across boundaries that remain inspectable and isolatable after years of corrosion, settlement, marine growth, and repair.

The useful analogy is larger than an electrical outlet. An underwater port combines the roles of harbor, railway coupling, airlock, loading dock, network socket, utility corridor, and expansion joint.

<aside class="working-thesis" aria-label="Underwater port principle">
  <span>Underwater port principle</span>
  <p>Independent machines become infrastructure only when their interfaces standardize capture, behavior, evidence, failure, and recovery together.</p>
</aside>

I do not propose one universal connector. A micro-inspection robot, heavy cargo tug, crew submersible, and permanent habitat module do not share loads, tolerances, risks, or maintenance intervals. They need a family of ports built from the same doctrine.

## Pressure makes sequence nonnegotiable

At depth $h$, ambient hydrostatic pressure can be approximated by

$$
P\approx\rho gh.
$$

For seawater density $\rho=1{,}025\ \mathrm{kg/m^3}$, gravitational acceleration $g=9.81\ \mathrm{m/s^2}$, and depth $h=2{,}000\ \mathrm{m}$,

$$
P\approx20.1\ \mathrm{MPa}.
$$

Atmospheric pressure changes that result only slightly. Atlantis would work near 200 times surface atmospheric pressure.

This does not make docking impossible. Teledyne lists optical and hybrid wet-mate connector families qualified to 10,000 psi ambient pressure, far above the provisional site pressure. The OOI Regional Cabled Array uses ROV-operable wet-mate electrical and hybrid connectors to add and service instruments at depth. Its junction boxes distribute power and data through expansion ports, including 375 VDC and 1 Gbps fiber links between boxes.

These precedents establish feasibility, not effortless reliability. Product specifications expose finite mating cycles, side-load limits, contamination concerns, alignment hardware, differential-pressure restrictions, and the need to confirm a completed connection.

I therefore separate six interface problems:

| Boundary function | Question the port must answer |
| --- | --- |
| Mechanical capture | Can two moving bodies meet without damaging the precision interface? |
| Structural connection | Where do impact, current, foundation, and long-term loads travel? |
| Utility transfer | How do power, data, gas, liquid, and heat cross safely? |
| Material transfer | How do tools, samples, waste, and cargo preserve condition and custody? |
| Human transfer | How can two one-atmosphere volumes create a verified dry passage? |
| Institutional compatibility | Can separately built systems interpret the same geometry and state? |

Connection must be a controlled sequence. Touching is not docking.

## Seven rules for every port family

First, soft capture precedes hard capture. The initial structure absorbs positional and angular error. Precision latches engage only after gross motion is bounded.

Second, structural loads bypass delicate connectors. Electrical contacts, optical faces, fluid seals, and pressure seals do not carry vehicle impact, foundation motion, or long-term bending.

Third, every connection moves through explicit states. The state machine must distinguish approach, authorization, capture, seating, seal verification, electrical test, energization, transfer, isolation, and release.

Fourth, no pressure boundary opens without independent confirmation. A control-screen message cannot substitute for mechanical engagement, pressure agreement, leakage measurement, and atmosphere verification.

Fifth, each interface fails into a safe state. A power fault does not flood a module. A dirty optical face does not strand a vehicle. A lost network does not unlatch a crew submersible. A stuck robot does not obstruct the only port of its class.

Sixth, exposed interfaces are wear systems. Seals, liners, shutters, contact cartridges, latches, brushes, and sacrificial surfaces must be inspectable and replaceable by another robot where practical.

Seventh, Atlantis standardizes port families rather than one geometry. The families share command vocabulary, identity, state reporting, safety principles, maintenance evidence, and certification rules while scaling their physical design to the job.

## Six layers turn contact into service

I model every port as six nested layers.

<figure class="architecture-figure" aria-labelledby="port-layers-caption">
  <div class="architecture-figure__grid">
    <div><small>Guide</small><strong>Identity and navigation</strong><p>Authenticate both systems, advertise capability, reserve the berth, and resolve the final approach frame.</p></div>
    <div><small>Capture</small><strong>Gross and precision alignment</strong><p>Absorb approach error, stop relative motion, protect connector faces, and establish deterministic geometry.</p></div>
    <div><small>Carry</small><strong>Hard capture and seals</strong><p>Route structural loads through latches while independent barriers manage seawater, contamination, and pressure.</p></div>
    <div><small>Serve</small><strong>Verified engagement</strong><p>Test insulation, identity, pressure, temperature, link quality, and authority before power or material moves.</p></div>
  </div>
  <figcaption id="port-layers-caption">Figure 1. A port earns service progressively. Precision components remain protected until the larger mechanical system has removed motion and uncertainty.</figcaption>
</figure>

The navigation layer identifies the physical and digital port. It advertises class, orientation, supported utilities, operational limits, maintenance state, reservation, and cryptographic credentials. Long-range acoustics hand off to imaging sonar, optical markers, structured light, and known geometry as the vehicle closes. A compatible shape does not authorize energization.

Gross capture uses a funnel, cradle, guide rails, capture arms, or compliant cage. Teledyne's gross-alignment system illustrates the principle: it can accept incidence angles up to 30 degrees, then guide the connector faces into a much smaller final alignment. Its specifications also list side-load and mating-cycle limits. The funnel is engineered equipment, not timeless geometry.

Precision alignment then uses tapered pins, rollers, kinematic mounts, flexures, or controlled compliance to remove remaining translation and rotation. I prefer deterministic constraint to an overconstrained pattern that requires every surface to remain perfect after sediment, corrosion, manufacturing variation, and wear.

Hard capture establishes a measured structural state through clamps, locking rings, dogs, drawbars, or redundant actuators. Atlantis must distinguish actuator motion from full seating and preload. At least two independent indications should support the latched claim, such as position, force, proximity, or a directly visible witness.

Sealing provides separate barriers for electrical insulation, optical cleanliness, fluid containment, biological control, and human pressure. Where consequence warrants it, I use an exterior debris barrier, primary functional seal, secondary containment seal, and monitored interspace.

Only then does the service layer engage power, data, fluid, samples, or people.

## The port state machine prevents confident mistakes

The nominal sequence is:

<figure class="process-figure" aria-labelledby="port-state-caption">
  <div class="process-figure__steps">
    <span><small>Approach</small><strong>Identify, authorize, and enter capture</strong></span>
    <span><small>Secure</small><strong>Align, seat, preload, and test seals</strong></span>
    <span><small>Engage</small><strong>Establish control, verify insulation, then energize</strong></span>
    <span><small>Transfer</small><strong>Move service, isolate, confirm, and release</strong></span>
  </div>
  <figcaption id="port-state-caption">Figure 2. Docking is a reversible state machine. An interrupted sequence must always reveal what is physically connected, energized, pressurized, or free to move.</figcaption>
</figure>

Protective shutters open after hard capture. Low-energy identity contacts or a short-range control link engage first. The systems authenticate, compare configuration, measure insulation and continuity, and agree on voltage, current, direction, thermal limits, and charge state. Main contactors close from both sides only after independent permission.

Disconnection reverses the sequence. Transfer stops. Energy falls below a defined threshold. Contactors open. Stored charge is discharged or contained. Fluid valves close and trapped pressure is relieved. Data custody is reconciled. Precision couplers withdraw. Hard latches release only when the vehicle can safely control its own motion.

Every state needs entry criteria, exit criteria, timeout, sensor agreement, allowed operator actions, and a safe recovery route. The port must survive power loss between any two steps without guessing where the mechanism stopped.

## Three robotic berth classes cover the first fleet

WHOI has fielded docking concepts in which a REMUS vehicle returns, recharges, downloads data, waits underwater, and later departs for another mission. The Pioneer Array demonstrated a dock connected to a surface-supported power and communication system. The lesson is strategic. Underwater replenishment changes an AUV from a recovered instrument into a persistent network asset.

I define three robotic classes.

R1 serves micro-robots, sensor carriers, and detachable inspection packages. It supports up to roughly 5 kW, control and data, simple capture, high cycle life, and cartridge exchange. Inductive charging is attractive when its conversion loss and heat are acceptable because it removes exposed electrical contacts.

R2 serves survey and hover-capable AUVs. It provisionally supports 20 to 100 kW charging, high-rate data, precision time, navigation correction, calibration, and optional sample exchange. A large capture funnel brings the vehicle into a cradle. A separate compliant stage engages the smaller power and data coupler. The structure remains open enough for an intervention ROV to remove a failed vehicle.

R3 serves work-class ROVs, cargo tugs, and construction machines. It supports structural restraint, 100 to 500 kW of institutional power where justified, fiber, tools, payloads, and selected hydraulic or fluid services. Heavy vehicles rest in cradles. They do not hang from precision connectors.

The port reports capability and condition, not only class. A damaged R3 berth may remain safe for data and restraint while high-power transfer is unavailable. Fleet control should schedule around the actual certified state.

## Power transfer starts de-energized

Voltage trades conductor current against insulation and interruption complexity. For a 60 kW connection,

$$
I=\frac{P}{V}.
$$

At 400 V, current is 150 A. At 1,000 V, current is 60 A. Higher voltage reduces conductor size and resistive heating, but increases requirements for insulation, contact separation, stored-energy control, fault interruption, and clearance within the connector.

If total contact resistance at 400 V is $R=10\ \mathrm{m\Omega}$, then

$$
P_{\mathrm{loss}}=I^2R=150^2(0.01)=225\ \mathrm{W}.
$$

That loss is manageable and concentrated. A contaminated, corroded, or partially seated contact can increase resistance and local temperature. The coupler needs temperature measurement, current limiting, voltage verification, insulation monitoring, and contactors capable of isolating both sides.

For modest R1 and R2 demand, inductive power can trade efficiency for a contactless seawater boundary. High-power R2 and R3 connections likely require protected conductive wet-mate systems with de-energized mating, ground-fault detection, galvanic strategy, and standardized institutional voltage classes.

The OOI Regional Cabled Array demonstrates several of these operating ideas. Its junction boxes monitor instrument voltage, current, internal temperature, humidity, and pressure while ground-fault detection looks for inadvertent connection to seawater. Atlantis should extend that visibility through the vehicle connector and its entire transfer state.

## Data needs three paths, not one clean optic

Every robotic port should retain an approach channel, a capture-control channel, and a high-bandwidth docked channel.

Acoustic or short-range optical communication handles discovery, reservation, and approach. A robust low-energy link exchanges port state while the main connector remains unsafe. A wired or wet-mate optical link moves raw science, software, diagnostics, calibration, and time after full docking.

Commercial optical and hybrid systems establish that fiber can cross a subsea wet-mate boundary. OOI uses wet-mate hybrid connectors to support power and high-rate data at deep observatory sites. Optical faces still depend on shutters, wiping or displacement, contamination inspection, and measured link quality.

A dirty fiber must reduce bandwidth, not eliminate the ability to undock. Essential control and emergency release remain available on the independent channel. Data reconciliation also records what has transferred, what remains only onboard, and whether the institutional archive has accepted custody before deletion is authorized.

## Scientific samples need dedicated ports

A sample may lose its value if transfer changes pressure, temperature, dissolved gases, chemistry, microbial isolation, orientation, or elapsed time. I separate three modes.

Flooded transfer moves pressure-tolerant tools, rock, structures, and sealed payloads through seawater on trays or common grasp points. This is the default when environmental exposure does not damage the evidence.

Controlled wet transfer keeps sensitive material inside a sealed or pressure-retaining cartridge. A robot moves the container through a flooded interface. The receiving laboratory opens it only after recreating the required environment.

Dry or pressure-controlled transfer uses a small chamber with independent inner and outer barriers, drainage, pressure control, leak monitoring, and decontamination where necessary. Routine samples, waste, dirty tools, and human access should not share an uncontrolled passage.

Each cartridge carries physical and digital identity, collection time and location, tool, pressure and temperature history, contamination controls, custody, hazards, and required receiving conditions. A port that transfers the object while losing its scientific context has failed.

## Human docking is a pressure-system operation

Human transfer is the most consequential port because it joins mechanical capture to a dry life-critical boundary. I assume a crew submersible and habitat both operate near one atmosphere internally while approximately 20 MPa of seawater surrounds them.

The H1 port contains an independent pressure hatch on each vessel, a small vestibule between them, redundant annular seals, monitored interspaces, and structural latches that bypass the hatch hinges and seal faces.

The nominal cycle is controlled:

1. Guidance brings the submersible into soft capture.
2. Hard capture aligns and preloads the collar.
3. Redundant seals engage and their interspaces are tested.
4. Water leaves the vestibule through a monitored system.
5. The vestibule reaches the target internal pressure.
6. Atmosphere, dryness, leakage, and structure are independently verified.
7. Both vessels authorize hatch operation.
8. The hatches open according to a controlled procedure.

The pressure force explains why equalization cannot be optional. A circular hatch one meter in diameter has area

$$
A=\pi(0.5)^2\approx0.785\ \mathrm{m^2}.
$$

Across a 20 MPa differential,

$$
F=PA\approx15.7\ \mathrm{MN}.
$$

That is comparable to the terrestrial weight of roughly 1,600 tonnes. No hatch actuator should be expected to defeat it. A properly designed hatch should remain mechanically unable to open until pressure is equalized.

## Minimize the water that must be displaced

If a sealed vestibule contains $V=0.25\ \mathrm{m^3}$ of seawater, a lower-order estimate of work needed to discharge it against 20 MPa is

$$
W\approx\Delta PV=20\times10^6(0.25)=5\ \mathrm{MJ}.
$$

At 10 kW of effective hydraulic power, the ideal time is

$$
t=\frac{W}{P}=500\ \mathrm{s},
$$

or about eight minutes before inefficiency and procedure. The energy is meaningful and tractable. The design response is to minimize trapped volume with a compact collar and displacement geometry.

The H1 system needs diverse pressure sensors, mechanical hatch interlocks, leak testing, manual isolation, remote inspection, emergency communications, controlled drying, and survival of both vessels after an aborted cycle. Neither vessel may depend on the successful docking for immediate habitability.

American Bureau of Shipping maintains current rules for underwater vehicles, systems, and hyperbaric facilities. Atlantis should establish the applicable classification and regulatory basis at concept stage, then develop the human collar, submersible, habitat interface, procedures, and verification evidence within that framework. Human rating is not a reliability number added after the mechanical design is complete.

The institution also needs at least two viable human access paths where feasible. A disabled submersible must not immobilize the only collar, and the docking berth must not be the only refuge or escape concept.

## Permanent modules connect through three independent systems

A new habitat or laboratory must carry dead weight, buoyancy reactions, current, seismic motion, settlement, pressure loads, power, communication, ventilation, water, waste, emergency services, and people. I refuse to route all of these through one collar.

<figure class="architecture-figure" aria-labelledby="module-interface-caption">
  <div class="architecture-figure__grid">
    <div><small>Structure</small><strong>Carry the module independently</strong><p>Prepared foundation, adjustable support, and structural restraint absorb terrain, current, seismic, and settlement loads.</p></div>
    <div><small>Utilities</small><strong>Connect services externally</strong><p>Isolatable power, fiber, cooling, water, gas, and waste links include flexible sections and robotic access.</p></div>
    <div><small>Passage</small><strong>Join pressure volumes safely</strong><p>A short rated trunk retains a hatch at each end so either module can isolate fire, flood, or contamination.</p></div>
    <div><small>Commission</small><strong>Prove each boundary separately</strong><p>Robots inspect structure and utilities before a dry personnel route receives human authorization.</p></div>
  </div>
  <figcaption id="module-interface-caption">Figure 3. The personnel trunk is not the structural beam. Independent load paths keep foundation motion from becoming a pressure-seal failure.</figcaption>
</figure>

The module lands on its own foundation or prepared frame. Adjustable supports absorb installation error and seabed irregularity. External utility jumpers include isolation on both ends and flexible sections for movement. The short pressure-rated trunk provides passage only after structure and utilities are commissioned.

Two independent hatches let either module isolate after flood, fire, contamination, or damage. The trunk does not carry the primary bending moment between foundations. This separation also lets an ROV repair a utility without opening the human passage.

## Seven families create a coherent port system

| Class | Primary user | Mechanical role | Provisional services | Human-rated |
| --- | --- | --- | --- | --- |
| R1 | Micro-robots and sensor packages | Small cradle or local capture | Up to 5 kW, control, data | No |
| R2 | Survey and hover AUVs | Funnel or guided berth | 20 to 100 kW, fiber, calibration, samples | No |
| R3 | Work ROVs and cargo tugs | Load-bearing cradle | 100 to 500 kW, fiber, tools, selected fluids | No |
| C1 | Flooded cargo pallets | Guided pallet lock | Identity and condition monitoring | No |
| S1 | Scientific sample cartridges | Robotic receiver | Environmental monitoring and pressure retention | No |
| H1 | Crew-transfer submersibles | Redundant soft and hard collar | Control, communication, emergency power, dry passage | Yes |
| M1 | Permanent modules | Separate structural, utility, and passage systems | Full institutional services | Yes |

The capacities and dimensions are provisional. The lasting standard covers capture hierarchy, protected load paths, physical datum, identity, messages, state transitions, interlocks, allowable faults, maintenance access, and certification evidence.

Two systems are not interoperable merely because their metal fits. If they disagree about voltage, grounding, latch truth, energization order, clock, authority, pressure verification, data custody, or emergency release, they remain incompatible.

## The ocean makes every port dirty

Biofouling, sediment, corrosion, galvanic interaction, seal abrasion, microbial growth, debris, and salt left by partial drying all degrade interfaces. Ports must make condition visible.

Connector faces should point downward or remain shuttered where geometry allows. Water jets, brushes, wiping actions, drainage paths, sacrificial liners, replaceable caps, inspectable sealing lands, and mission-compatible antifouling treatments belong in the first design.

The scientific context matters. A treatment appropriate for a cargo berth may contaminate a clean biological interface. Atlantis should separate industrial and scientific cleaning regimes instead of spreading toxic antifouling chemistry indiscriminately.

Condition records should include mating cycles, approach impacts, latch preload, insulation resistance, contact temperature, optical insertion loss, seal-interspace leakage, corrosion potential, cleaning history, and rejected attempts. Maintenance then follows measured degradation rather than only a calendar.

The interface control document must also specify replaceable wear cartridges and the independent tools needed to remove them. A seal labeled replaceable is not maintainable if the only robot that can grasp it requires that failed port to charge.

## Failure must leave a physical route home

Misalignment causes retreat to a defined holding point and a new approach. Partial latch prohibits seal claims and energization. Debris or seal damage triggers interspace testing, cleaning, or cartridge replacement. Electrical leakage keeps both power contactors open. Dirty optics reduce the service to the independent control channel.

A stuck vehicle needs local overrides, external release points, tow fixtures, and sacrificial pieces that another robot can cut without damaging the station. Human vestibule leakage keeps both hatches closed, then returns the chamber to a safe flooded or pressurized state before release. Contamination redirects the object into a dedicated isolation route.

One central hub cannot be allowed to disable the fleet. R2 docks should occupy at least two physically and electrically independent nodes. Heavy berths need a contingency capture area. Human access needs a second credible route or a clearly bounded rescue strategy. The port map must preserve escape and intervention corridors even when one vehicle is immobilized.

The system should never infer safety from missing data. Communication loss freezes the current safe physical state or proceeds through a narrowly defined local recovery. It does not automatically open contactors, latches, valves, or hatches in a convenient direction.

## Qualify the faults, not only the nominal connection

I would verify the port family in six phases.

Laboratory testing cycles seals, latches, alignment, connector cartridges, optical faces, control logic, and fault interruption. Hyperbaric testing adds representative pressure, temperature, structural load, damaged parts, debris, and contamination.

Shallow-water trials demonstrate autonomous off-axis capture, current, turbidity, failed-mate recovery, cleaning, cartridge exchange, and emergency release. A deep uncrewed article then operates through at least one annual environmental cycle at or beyond target depth while accumulating mating cycles and injected faults.

The H1 collar receives a separate uncrewed campaign. It must drain, test, pressurize, isolate, abort, reflood, and recover with damaged seals, lost power, failed sensors, stuck valves, incomplete capture, and conflicting commands. Only independent review allows incremental crewed tests, beginning shallow.

Acceptance measures include capture envelope, first-attempt success, success within repeated attempts, false-latch probability, leak rate, pressure agreement, insulation margin, power efficiency, connector temperature, optical loss, release time, contamination control, and safe recovery from every credible interrupted state.

Provisional goals for robotic docks include at least 95 percent first-attempt success, 99.5 percent success within three attempts, false hard-capture indication below $10^{-5}$ per attempt, and hardware prevention of main energization before verified seating. These are design targets, not certified performance. Testing must decide whether the architecture earns them.

## Distribute the ports before they become a bottleneck

The first institution should place multiple R1 interfaces across habitats, observatories, and utility structures; at least two R2 docks on separated nodes; one principal and one contingency heavy berth; dedicated cargo and sample receivers; two human-capable collars where feasible; and prepared M1 structural and utility connections for expansion.

I reject a single universal connector, energized mating without physical verification, routine dirty cargo through a personnel hatch, pressure trunks used as structural beams, and any berth that an independent robot cannot inspect or release.

I also reject ports sized only by average demand. Charging peaks, emergency recovery, inspection queues, damaged vehicles, future body shapes, and construction access determine the value of spare volume. An unused berth is not automatically waste. It may be the physical redundancy that keeps a routine vehicle failure from stopping an institution.

## Build the boundary that allows change

Hydrostatic pressure, conductive seawater, kinetic energy, fluid displacement, and contamination are fundamental constraints. They dictate barriers, equalization, protected contacts, capture compliance, and finite transfer work.

Autonomous terminal guidance, durable wet-mate interfaces, seal inspection, robotic service, pressure-rated vestibules, and reliable state verification are engineering constraints. Existing products and observatories demonstrate important pieces. Atlantis must integrate and qualify them across far more connection types and cycles.

Duplication, low-volume hardware, deep maintenance, qualification, and classification are economic constraints. They may dominate the early design more than physics.

The underwater port matters because it preserves optionality. Pressure hulls make habitation possible. Power makes it persistent. Communication and navigation coordinate it. Robots give it reach. Ports let a future vehicle, laboratory, sample system, or module become part of the institution without requiring the first generation to predict its entire design.

The port is where independent machines become infrastructure.

The next report will follow people and material through those interfaces. It will design the surface-to-seafloor transportation system for crew, food, scientific payloads, replacement parts, hazardous material, medical response, and heavy cargo under weather, equipment failure, and interrupted logistics.
