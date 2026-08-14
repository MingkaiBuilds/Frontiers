---
title: "The Pressure Architecture of Atlantis"
description: "A structural and systems comparison of monolithic, modular, and hybrid architectures for creating human space under deep-ocean pressure."
frontier: "Deep Ocean"
published: 2026-08-13T16:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "18 min"
reportNo: "PX-OC-006"
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
  - title: "Alvin Systems, Sensors and Sampling"
    url: "https://ndsf.whoi.edu/alvin/systems/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "TRITON 36000/2"
    url: "https://tritonsubs.com/subs/t36000-2/"
    publisher: "Triton Submarines"
  - title: "Imperfection-Sensitivity of Externally Pressurized Spherical Shells"
    url: "https://ntrs.nasa.gov/citations/19660029072"
    publisher: "NASA Technical Reports Server"
  - title: "A Survey of Some Buckling Problems"
    url: "https://ntrs.nasa.gov/api/citations/19660014250/downloads/19660014250.pdf"
    publisher: "NASA Technical Reports Server"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-resources/RuleManager2/notices/january-2026/7-uwvs_nandgi-jan26.pdf"
    publisher: "American Bureau of Shipping"
openProblems:
  - id: "test-atlantis-pressure-shell-knockdown"
    title: "Measure pressure-shell knockdown factors"
    question: "How far do manufacturing imperfections, penetrations, stiffeners, residual stress, and material behavior reduce the collapse pressure of candidate Atlantis shell geometries?"
    status: "Open"
    disciplines: ["Structural mechanics", "Manufacturing", "Experimental engineering"]
    nextStep: "Design matched spherical, unstiffened cylindrical, and ring-stiffened cylindrical specimens, measure their as-built geometry, and compare nonlinear predictions with controlled collapse tests."
  - id: "model-atlantis-implosion-propagation"
    title: "Model institutional implosion propagation"
    question: "What module spacing, shielding, connector design, foundation isolation, and utility routing prevent one hull collapse from disabling adjacent survival paths?"
    status: "Open"
    disciplines: ["Fluid-structure interaction", "Safety engineering", "Subsea architecture"]
    nextStep: "Define representative module volumes and layouts, establish conservative collapse histories, and run bounded fluid-structure simulations before selecting the physical topology."
prerequisites:
  - "deep-ocean/atlantis-in-operation"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>The first Atlantis institution must create useful one-atmosphere spaces beneath tens of megapascals of external pressure. The physics is demonstrated, but the architectural scale is not. I compare three strategies: one large pressure hull, multiple independently isolatable atmospheric modules, and a hybrid modular field that moves suitable machinery into pressure-balanced or ambient-pressure service. External-pressure buckling, geometric imperfection, penetrations, connections, implosion propagation, maintenance, and expansion make structural efficiency alone an inadequate decision rule. I reject the monolithic hull as the default because it concentrates consequence and spends pressure-protected volume on functions that do not require it. The provisional Atlantis architecture uses moderate-diameter atmospheric modules for people and pressure-sensitive work, surrounded by pressure-balanced machinery and ambient infrastructure. Its governing rule is simple: one-atmosphere volume is a scarce structural resource.</p>
</section>

## Atmosphere has a structural price

At moderate deep-ocean depth, the institution must preserve familiar human pressure inside an environment applying tens of megapascals from outside. This is not a new physical regime. Human-occupied submersibles already cross it. The challenge is to turn a small, short-duration pressure boundary into a maintainable and expandable institution.

At depth $h$, external pressure is approximately

$$
p_{\mathrm{external}} \approx p_{\mathrm{atm}} + \rho gh.
$$

If the interior remains near one atmosphere, the hull carries

$$
\Delta p = p_{\mathrm{external}} - p_{\mathrm{internal}}.
$$

At $2{,}000\ \mathrm{m}$ with seawater density of $1025\ \mathrm{kg/m^3}$,

$$
p_{\mathrm{external}} \approx 20.2\ \mathrm{MPa},
\qquad
\Delta p \approx 20.1\ \mathrm{MPa}.
$$

The corresponding force scale over one square meter of projected area is

$$
F = \Delta p A \approx 20.1\ \mathrm{MN}.
$$

That comparison communicates magnitude, but pressure does not simply crush each patch independently. A well-formed shell carries the distributed load through membrane compression. Geometry, stability, fabrication, openings, residual stress, corrosion, and inspection determine whether the load path remains credible.

<aside class="working-thesis" aria-label="Pressure-volume rule">
  <span>Pressure-volume rule</span>
  <p>Every cubic meter held near one atmosphere must justify the structure, precision, penetrations, inspection, and failure consequence required to protect it.</p>
</aside>

## Collapse is a stability problem

An external-pressure hull can fail by material yielding, elastic or inelastic buckling, local instability near an opening, joint failure, fatigue, corrosion, seal loss, fracture, or amplification of a geometric imperfection.

For a thin shell, instability may govern before simple compressive yielding. The structure can appear nearly undeformed as pressure rises, then lose its load-carrying shape rapidly. Two conditions must therefore be satisfied:

$$
\sigma_{\mathrm{compressive}} < \sigma_{\mathrm{allowable}},
$$

and

$$
p_{\mathrm{operating}} < p_{\mathrm{collapse,allowable}}.
$$

A stress calculation that remains below material yield is not proof against buckling. A finite-element plot with smooth contours is not proof either. The result depends on geometry, boundary conditions, nonlinear behavior, imperfections, and whether the model represents the as-built hull.

Pressure acts normal to the surface. A curved shell can carry that load largely through membrane action. A large flat plate relies more heavily on bending unless it is deeply stiffened. The broad hierarchy is consequently a sphere, then a properly ended and stiffened cylinder, then a severe penalty for large flat-sided dry space.

This hierarchy should govern the pressure boundary without dictating every interior surface. Floors, racks, partitions, and working planes can be built inside curved hulls. The expensive outer geometry must first survive the ocean.

## What the ideal sphere teaches

For a thin spherical shell of radius $R$, thickness $t$, and pressure differential $\Delta p$, membrane stress magnitude is approximately

$$
\sigma_{\mathrm{sphere}} = \frac{\Delta p R}{2t}.
$$

An ideal elastic buckling estimate is

$$
p_{\mathrm{cr,ideal}}
=
\frac{2E}{\sqrt{3(1-\nu^2)}}
\left(\frac{t}{R}\right)^2,
$$

where $E$ is Young's modulus and $\nu$ is Poisson's ratio. The relationship exposes two useful tendencies:

$$
p_{\mathrm{cr}} \propto E,
\qquad
p_{\mathrm{cr}} \propto \left(\frac{t}{R}\right)^2.
$$

Suppose an ideal sphere uses $E=110\ \mathrm{GPa}$ and $\nu=0.34$ and is assigned an ideal critical pressure of $40\ \mathrm{MPa}$. The classical expression gives

$$
\frac{t}{R} \approx 0.017.
$$

For $R=2\ \mathrm{m}$, this suggests $t\approx34\ \mathrm{mm}$.

That number is not a hull design. It ignores plasticity, penetrations, viewports, residual stress, welds, corrosion allowance, pressure cycling, local loads, code margins, inspection limits, and geometric variation. Its purpose is to reveal the scale and the strong role of $t/R$.

Real spheres contain out-of-roundness, thickness variation, machining error, joint distortion, material variation, attachments, hatches, viewports, and penetrator plates. Classical and experimental shell research has long established that externally pressurized shells can be imperfection-sensitive. The collapse pressure of the manufactured object may be substantially below the prediction for a perfect mathematical surface.

The full-ocean-depth TRITON 36000/2 makes the manufacturing consequence visible. Its two-person titanium pressure hull is $90\ \mathrm{mm}$ thick and is reported as machined to extremely high spherical precision. Batteries, junction boxes, controllers, lights, and thrusters occupy the external frame rather than the crew sphere. Alvin follows the same broad allocation: a titanium personnel sphere protects people while many vehicle systems remain outside. Alvin is rated to $6{,}500\ \mathrm{m}$.

These vehicles demonstrate protected human occupancy beyond Atlantis's provisional depth. They also demonstrate that atmospheric volume should be reserved for what needs it.

## The large sphere is not a free answer

A sphere encloses maximum volume for a given surface area, but its practical usefulness does not scale without penalty.

$$
V = \frac{4}{3}\pi R^3,
\qquad
A = 4\pi R^2.
$$

Approximate shell mass is

$$
m_{\mathrm{shell}} \approx 4\pi R^2 t\rho_m.
$$

If pressure resistance demands a roughly constant $t/R$ for geometrically similar shells, then $t\propto R$ and shell mass scales with $R^3$, as does enclosed volume. Ideal mass per unit volume may remain comparable.

Practical similarity breaks down. A larger sphere requires larger forging, machining, heat treatment, transport, lifting, foundation, and pressure-test capability. Absolute tolerances become harder. Hatches and penetrations grow. A defect affects more volume, and a single failure removes more of the institution. Curved interiors also create awkward space around laboratories, beds, racks, and maintenance access.

The structurally efficient shape remains necessary. The largest possible version of it does not.

## Cylinders trade pressure efficiency for use

A cylindrical module provides regular deck planes, long working surfaces, equipment racks, rooms, repeated connections, and a geometry that can be manufactured as a family. Its pressure performance is less forgiving.

Under an internally pressurized thin cylinder, membrane stress magnitudes would be

$$
\sigma_{\theta} = \frac{\Delta pR}{t},
\qquad
\sigma_z = \frac{\Delta pR}{2t}.
$$

External pressure reverses the sign and introduces a buckling problem that these membrane equations do not resolve. A cylindrical section has curvature around its circumference and none along its axis. It may require thicker walls, ring stiffeners, short unsupported spans, controlled ovality, and hemispherical or ellipsoidal ends.

Diameter is therefore consequential. Increasing it enlarges the unsupported structural problem, absolute wall thickness, decks, openings, installation mass, and test demand. Several moderate-diameter cylinders may be more credible than one enormous cylinder even when the larger interior looks operationally attractive.

The optimum diameter must be found where collapse resistance, human factors, transport, fabrication, pressure testing, foundation load, and docking geometry meet. It cannot be chosen from floor-plan efficiency alone.

## Three architectures, three distributions of risk

The monolithic architecture places habitation, science, operations, utilities, and perhaps docking access inside one large pressure boundary. It minimizes intermodule hatches and transfers, centralizes life support, and makes internal movement easy. It also creates one dominant structural asset, poor expansion, concentrated fire and contamination consequences, and a very large loss if the hull fails.

Internal fire bulkheads do not automatically provide full pressure isolation. If an adjacent space floods, a bulkhead that was designed only for atmospheric pressure differences may not protect the surviving room from the ocean. True subdivision requires boundaries and closures qualified for the credible differential pressure.

The multi-module architecture divides the institution among independently pressure-resistant habitation, laboratory, operations, workshop, utility, refuge, and docking functions. It enables phased deployment, repeatable manufacturing, local isolation, module replacement, and incremental growth. Its price is more hatches, seals, penetrations, transfer bottlenecks, alignment operations, duplicated support equipment, and external surface area.

Modularity moves risk:

$$
\text{smaller failure domains}
\longleftrightarrow
\text{more interfaces}.
$$

The hybrid architecture goes further by asking which functions require dry one-atmosphere protection at all. People, medical care, food, conventional tools, selected laboratories, control stations, and refuge clearly do. Batteries, motors, actuators, pumps, heat exchangers, sonars, docks, ballast, structure, cables, and selected power or computing systems may not.

| Criterion | One large hull | Atmospheric modules | Hybrid modular field |
| --- | --- | --- | --- |
| Pressure-boundary count | Lowest | Higher | Focused on essential dry functions |
| Failure isolation | Poor | Strong | Strong if utilities are distributed |
| Expansion | Poor | Strong | Strong |
| Dry-volume efficiency | Poor | Moderate | Best |
| Internal maintenance access | High | High by module | Mixed |
| External exposure | Low | Moderate | Highest |
| Standardization potential | Low | High | High |
| Common-mode risk | Concentrated in one hull | Concentrated in connections | Dependent on utility and interface topology |
| Initial integration difficulty | Lowest | Higher | Highest |
| Long-term institutional fit | Weak | Strong | Strongest if qualified |

I reject the monolithic hull as the default. It may remain appropriate for a transfer vehicle or small prototype, but it is poorly aligned with an institution intended to isolate failure, expand, and remain useful through decades of component replacement.

## Three pressure regimes

The hybrid decision produces a field of systems rather than one enclosed object.

<figure class="architecture-figure" aria-labelledby="pressure-regimes-caption">
  <div class="architecture-figure__grid">
    <div><small>Atmospheric zone</small><strong>Humans and sensitive work</strong><p>Habitation, medicine, conventional laboratories, operations, workshops, refuge, and crew transfer.</p></div>
    <div><small>Balanced zone</small><strong>Qualified machinery</strong><p>Selected batteries, pumps, actuators, motors, power electronics, computing, and external control systems.</p></div>
    <div><small>Ambient zone</small><strong>Ocean-facing infrastructure</strong><p>Foundations, structural frames, cables, heat exchangers, ballast, docks, vehicles, sensors, and sample interfaces.</p></div>
  </div>
  <figcaption id="pressure-regimes-caption">Figure 1. The hybrid institution allocates each function to the least costly pressure environment that can support it safely.</figcaption>
</figure>

A pressure-balanced enclosure fills available volume with incompressible dielectric fluid and allows a flexible compensator to keep internal pressure near the surrounding seawater:

$$
\Delta p_{\mathrm{component}} \approx 0.
$$

The housing then contains fluid and excludes seawater rather than carrying the full hydrostatic differential. It must tolerate material compression, pressure cycling, thermal expansion, electrical insulation requirements, and chemical compatibility.

Pressure balancing is not universal. Trapped gas, voids, some capacitors, displays, optical elements, connectors, and incompatible materials may fail or change performance. Every candidate component needs qualification under the actual pressure, temperature, fluid, cycling, and maintenance regime.

The allocation rule is consequently not to place equipment outside whenever possible. It is to do so when avoided pressure-volume cost exceeds the resulting exposure, maintenance, corrosion, fouling, and robotic-service cost.

## Interfaces become the architecture

Modularity succeeds only if people, power, data, fluids, and samples can cross module boundaries without creating intolerable failure rates.

Interface classes include human hatches, electrical and optical penetrators, gas and liquid lines, sample ports, structural attachments, isolation valves, and emergency closures. The objective is maximum useful exchange through the fewest independently monitored pressure-boundary penetrations.

Electrical and data functions should be multiplexed where it reduces penetrator count without creating one common-mode channel. Utility trunks should permit isolation near each boundary. Moving seals should be avoided unless the mission value is clear. External connectors should be accessible to robots and replaceable without recovering the hull.

The American Bureau of Shipping rules for underwater vehicles, systems, and hyperbaric facilities illustrate the breadth of required engineering evidence, including structures, materials, machinery, electrical systems, life support, plans, calculations, tests, and surveys. A first-principles report can select a research direction. It cannot replace classification and qualification.

Human transfer trunks introduce a special problem. Foundation settlement, thermal change, alignment error, current, and seismic motion can impose bending and shear between modules. A rigid joint can transmit damaging load. A compliant joint must preserve pressure integrity while moving.

The first institution should use short, opaque, protected, and isolatable connections. A transfer trunk should have a pressure-rated hatch at each end and a boundary capable of flooding without taking either adjacent module with it.

## Survival cannot depend on one hub

A central hub makes circulation legible but can become the largest common-mode failure. If it floods or burns, isolated modules may remain intact while the crew loses access to refuge or docking.

The topology should guarantee that every occupied module has at least two credible paths to continued survival. One may be an interior connection. The other may use a second transfer node, direct habitation-to-refuge access, an independent dock, or an external pressurized rescue path.

<figure class="process-figure" aria-labelledby="survival-path-caption">
  <div class="process-figure__steps">
    <span><small>Detect</small><strong>Identify the failed domain</strong></span>
    <span><small>Isolate</small><strong>Close both sides</strong></span>
    <span><small>Reroute</small><strong>Preserve utilities and movement</strong></span>
    <span><small>Survive</small><strong>Reach refuge or rescue</strong></span>
  </div>
  <figcaption id="survival-path-caption">Figure 2. Modularity creates safety only when isolation preserves another path to atmosphere, power, and refuge.</figcaption>
</figure>

Full duplication may be unaffordable. A topology that merely draws two corridors can also be deceptive if both depend on the same utility module or connector family. Independence must be traced through structure, atmosphere, power, communication, control, and docking.

## Implosion is a regional load case

An atmospheric module at depth stores a large pressure differential. A rough energy scale for flooding volume $V$ is

$$
E_{\mathrm{scale}} \sim \Delta p V.
$$

For $100\ \mathrm{m^3}$ at $20\ \mathrm{MPa}$,

$$
E_{\mathrm{scale}} \sim 2\times10^9\ \mathrm{J}.
$$

This two-gigajoule figure is not a prediction of blast energy delivered to a neighboring hull. Actual collapse involves water acceleration, changing geometry, compressibility, fracture, duration, and surrounding structures. The scale is still large enough to prohibit casual module spacing.

A hull collapse may produce pressure waves, fragments, water jets, failed connectors, foundation loads, and damage to vehicles, cables, or heat exchangers. Module separation, barriers, sacrificial connections, shielding, independent foundations, utility routing, and external redundancy must be evaluated as one fluid-structure problem.

Modularity limits the volume directly lost, but nearby modules become targets unless the physical layout prevents propagation.

## Material follows the module

The architecture does not select one universal material. High-strength steel, titanium alloys, specialized nickel alloys, composites, ceramics, and acrylic viewports each present different combinations of elastic modulus, yield strength, fracture toughness, density, fatigue, corrosion, fabrication, inspection, cost, and certification precedent.

Buckling depends strongly on stiffness and geometry, not only strength. Comparing only specific yield strength,

$$
\frac{\sigma_y}{\rho_m},
$$

can hide the role of specific stiffness,

$$
\frac{E}{\rho_m},
$$

and fracture toughness $K_{IC}$.

Titanium is compelling for mobile submersibles because corrosion resistance and lower mass reduce flotation and launch demand. A stationary habitat may tolerate heavier steel if fabrication, inspection, supply, corrosion protection, and lifecycle economics favor it. Different modules may reach different answers.

Materials should be selected after diameter, geometry, openings, inspection access, fabrication location, transport, replacement strategy, and qualification path are defined.

## The provisional Atlantis layout

I will proceed with several independently isolatable atmospheric modules surrounded by replaceable clusters of pressure-balanced machinery and ambient infrastructure.

Habitation and refuge will not share one pressure boundary. The utility function will be positioned and partitioned so that electrical fire, battery failure, or machinery damage cannot immediately eliminate habitation. The laboratory will connect directly to a pressure-preserving sample interface. The dock will support ordinary crew arrival, cargo, emergency attachment, samples, and robotic service.

External batteries, heat exchangers, power conversion, docks, and vehicle systems should be arranged for replacement rather than embedded permanently into human pressure hulls. Utilities must reroute around one isolated domain. Modules should be spaced and protected so one collapse does not erase both survival paths.

This is a systems decision, not a structural design. It now requires pressure-hull collapse analysis, imperfection measurement, nonlinear modeling, material and joint qualification, penetration analysis, transfer-trunk loads, foundation settlement, implosion propagation, fatigue, corrosion, pressure testing, inspection planning, and classification review.

The verification hierarchy is

$$
\text{analytical model}
\rightarrow \text{nonlinear numerical model}
\rightarrow \text{scaled pressure test}
\rightarrow \text{full-scale qualification}
\rightarrow \text{periodic inspection}.
$$

No stage eliminates the next one.

## An experiment that can begin before the habitat

The pressure problem can become physical long before a crewed module is built. I would manufacture matched spherical, unstiffened cylindrical, and ring-stiffened cylindrical specimens with controlled differences in thickness, diameter, out-of-roundness, openings, stiffener spacing, and process.

For each specimen, I would predict ideal collapse, run nonlinear buckling analysis, measure the manufactured geometry, pressure-test to collapse inside a protected facility, and compare observation with prediction.

The central empirical quantity is the knockdown factor:

$$
k = \frac{p_{\mathrm{collapse,actual}}}{p_{\mathrm{collapse,ideal}}}.
$$

A value below one measures the penalty imposed by real geometry, material behavior, fabrication, and boundary conditions. The experiment would also expose whether inspection can detect the imperfections that matter before the structure is committed to human service.

## The decision before habitability

Pressure does not approach a fundamental limit at the proposed Atlantis depth. Alvin carries people to $6{,}500\ \mathrm{m}$. Full-ocean-depth vehicles demonstrate protected human occupancy near $11{,}000\ \mathrm{m}$. The unresolved problem is institutional scale, repeated access, penetrations, inspection, expansion, fire isolation, and rescue.

I reject one enormous pressure hull as the default. Atlantis will use atmospheric modules only for people and processes that require them. Qualified machinery will move into pressure-balanced service where the lifecycle trade supports it. Foundations, cables, thermal interfaces, vehicles, and much of the scientific field will remain at ambient pressure.

This architecture carries more connections and more integration work. In return, it creates smaller failure domains, phased construction, module replacement, repeatable standards, incremental expansion, and a credible route to degraded operation after local loss.

The next report must quantify the most important payload inside the atmospheric modules: the crew. It will derive atmosphere, temperature, humidity, water, food, sanitation, volume, noise, light, medicine, and psychological conditions for a six-person rotation and an eight-person refuge case.

The ocean makes dry volume expensive. Atlantis must spend it with intention.
