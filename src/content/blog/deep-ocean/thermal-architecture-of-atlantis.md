---
title: "The Thermal Architecture of Atlantis"
description: "A redundant heat-transport and rejection system that protects the crew from cold seawater while exporting hundreds of kilowatts into it."
frontier: "Deep Ocean"
published: 2026-08-13T22:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "20 min"
reportNo: "PX-OC-010"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "How Does the Temperature of Ocean Water Vary?"
    url: "https://oceanexplorer.noaa.gov/ocean-fact/temp-vary/"
    publisher: "NOAA Ocean Exploration"
  - title: "A Novel Laser-Processed Condensing Heat Exchanger for Space Systems"
    url: "https://ntrs.nasa.gov/citations/20250003695"
    publisher: "NASA Technical Reports Server"
  - title: "Biofouling and Corrosion Research for Marine Heat Exchangers"
    url: "https://www.osti.gov/servlets/purl/5792887"
    publisher: "Argonne National Laboratory, U.S. Department of Energy"
  - title: "Materials for Harsh Service Conditions"
    url: "https://www.energy.gov/documents/qtr2015-6h-materials-harsh-service-conditionspdf-0"
    publisher: "U.S. Department of Energy"
  - title: "Clean Water Act Section 403: Ocean Discharge Criteria"
    url: "https://www.epa.gov/cwa-404/clean-water-act-section-403-ocean-discharge-criteria"
    publisher: "U.S. Environmental Protection Agency"
  - title: "Rules for Building and Classing Underwater Vehicles, Systems and Hyperbaric Facilities"
    url: "https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/special_service/7-rules-for-building-and-classing-underwater-vehicles%2C-systems-and-hyperbaric-facilities-2025/7-uwvs-rules-jan25.pdf"
    publisher: "American Bureau of Shipping"
openProblems:
  - id: "measure-atlantis-exchanger-degradation"
    title: "Measure Atlantis exchanger degradation"
    question: "How do heat-transfer coefficient, pressure drop, corrosion, biological growth, mineral deposition, and cleaning effectiveness evolve at the selected site?"
    status: "Open"
    disciplines: ["Heat transfer", "Marine materials", "Biofouling"]
    nextStep: "Deploy instrumented material coupons and interchangeable exchanger panels through a full seasonal cycle, then compare clean, naturally fouled, robotically cleaned, and post-cleaning performance using the same flow conditions."
  - id: "bound-atlantis-thermal-plume"
    title: "Bound the Atlantis thermal plume"
    question: "What rejection-field location, flow rate, diffuser geometry, and operating schedule keep artificial temperature signals outside sensitive ecological and geophysical experiments?"
    status: "Open"
    disciplines: ["Physical oceanography", "Environmental engineering", "Experimental design"]
    nextStep: "Combine site current and stratification measurements with conservative plume simulations, then validate the model using a controlled heated-water release and distributed temperature sensing."
prerequisites:
  - "deep-ocean/power-architecture-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>Nearly every joule delivered to Atlantis eventually becomes heat. I propose a layered thermal architecture that captures heat at its source, transports it through isolated module and station loops, and rejects it through robotically serviceable seawater exchangers located away from sensitive experiments. The provisional requirement is 300 kilowatts continuously with short operation near 550 kilowatts. An illustrative clean exchanger with an overall coefficient of 500 watts per square meter-kelvin and an 8-kelvin log-mean temperature difference needs 75 square meters at 300 kilowatts. A conservative surge case at 300 watts per square meter-kelvin and 6 kelvin needs approximately 306 square meters. Those calculations demonstrate physical scale, not final geometry. The architecture must also prevent cold-side condensation, isolate high-pressure seawater from occupied modules, tolerate fouling and corrosion, shed electrical loads when rejection capacity falls, and preserve a seven-day refuge against both overheating and overcooling. The deep ocean is a vast cold reservoir. It becomes a reliable cooling system only after every thermal resistance, failure boundary, and ecological consequence is engineered.</p>
</section>

## Follow the energy after use

Electricity does not disappear when it has powered a pump, computer, lamp, laboratory, or battery charger. Most of it reappears as heat. The 300 kW continuous service hypothesis from Unit 9 therefore creates a thermal requirement of similar order. A 550 kW scientific surge can create a comparable rejection demand, although the timing depends on where energy is stored and how quickly each component releases heat.

The location matters. Cable loss warms the cable. A vehicle charger divides heat among the converter, connector, and vehicle battery. A motor working directly in seawater may reject heat outside the habitat. A computer rack releases nearly all of its input inside its module. The thermal model must place each loss before adding it.

For the institution as a control volume,

$$
\dot Q_{\mathrm{generated}}
+\dot Q_{\mathrm{imported}}
=
\dot Q_{\mathrm{rejected}}
+\dot Q_{\mathrm{stored}}.
$$

Thermal mass can make $\dot Q_{\mathrm{stored}}$ positive for a while. It cannot absorb heat indefinitely. During long steady operation,

$$
\dot Q_{\mathrm{rejected}}
\approx
\dot Q_{\mathrm{generated}}.
$$

If generation exceeds rejection, the effective thermal mass sets the rate of warming:

$$
mC_p\frac{dT}{dt}
=
\dot Q_{\mathrm{generated}}
-\dot Q_{\mathrm{rejected}}.
$$

This equation describes both grace and danger. A large station may warm slowly enough to isolate a fault. It will still cross a limit if the imbalance continues.

<aside class="working-thesis" aria-label="Thermal-system principle">
  <span>Thermal-system principle</span>
  <p>Cold seawater is a heat sink, not a cooling system.</p>
</aside>

## The ocean is cold enough

NOAA describes the ocean below roughly 200 meters as averaging about $4^\circ\mathrm{C}$. At the provisional Atlantis depth, seawater offers a stable temperature difference from occupied rooms, electronics, batteries, and warm process equipment.

The sink is not the limiting physical resource. Heat must still cross component interfaces, coolant films, pipe walls, intermediate exchangers, the pressure boundary, external surfaces, and the moving seawater. Each transition adds resistance, pumping demand, control, leakage, and maintenance.

The complete path is:

<figure class="process-figure" aria-labelledby="thermal-path-caption">
  <div class="process-figure__steps">
    <span><small>Capture</small><strong>Component and air interfaces</strong></span>
    <span><small>Transport</small><strong>Module and station coolant</strong></span>
    <span><small>Cross</small><strong>Pressure-separated boundary</strong></span>
    <span><small>Reject</small><strong>Serviceable seawater field</strong></span>
  </div>
  <figcaption id="thermal-path-caption">Figure 1. The ocean becomes useful only after heat has crossed every engineered resistance between the source and seawater.</figcaption>
</figure>

## Map heat by location and temperature

The power budget suggests the following first thermal inventory:

| Heat source | Provisional nominal load |
| --- | ---: |
| Human metabolism and habitation | $10\ \mathrm{kW}$ |
| Life support and water processing | $30\ \mathrm{kW}$ |
| Computing and communication | $17\ \mathrm{kW}$ |
| Laboratories and workshop | $33\ \mathrm{kW}$ |
| Conversion and distribution losses | $17\ \mathrm{kW}$ |
| Lighting, appliances, and miscellaneous loads | $20\ \mathrm{kW}$ |
| External batteries, docks, and charging losses | $20$ to $50\ \mathrm{kW}$ |
| Unallocated equipment and margin | $40$ to $80\ \mathrm{kW}$ |

The table does not yet close the complete 300 kW power model because some electrical energy is exported into charged vehicles, stored chemically, or dissipated along external infrastructure. That distinction is a feature, not an accounting problem. Thermal design needs the location, coolant temperature, duty cycle, and failure limit of every load.

I would assign each source to one of three temperature grades. A low-temperature loop serves dehumidification, cold storage, selected laboratories, and sensitive electronics. A medium-temperature loop serves habitation air conditioning, computers, converters, and most life-support machinery. A high-temperature loop accepts fuel-cell heat, sterilization, waste treatment, and later process equipment.

Forcing every source into the coldest loop increases refrigeration work and destroys useful temperature difference. A warmer source rejects heat more easily because it can sustain a larger approach to seawater. The architecture should preserve temperature quality until a real use or sink is found.

## Sensible and latent loads are different

Sensible heat changes temperature:

$$
\dot Q_s = \dot m C_p\Delta T.
$$

Latent heat accompanies phase change, especially the condensation of humidity:

$$
\dot Q_l = \dot m_v h_{fg}.
$$

People, washing, cooking, experiments, and wet equipment release water vapor. Removing that vapor requires thermal work even when the cabin air remains at the same temperature. The air-conditioning load is therefore

$$
\dot Q_{\mathrm{air}}
=
\dot Q_s + \dot Q_l.
$$

Condensing heat exchangers occupy the boundary between thermal control and potable-water recovery. NASA's current development work highlights wettability, condensate collection, pressure drop, microbial tolerance, surface contamination, and dry-out as lifecycle issues. A surface can remain thermally effective while becoming poor at collecting water or unsafe microbiologically.

Atlantis condensers should drain fully, expose no stagnant concealed volume, support controlled drying, permit inspection and replacement, and route condensate to quality verification. Humidity control is not complete when water leaves the air. The water must arrive somewhere known and cleanable.

## Insulate the hull and export heat deliberately

The shortest heat path is directly through the metal pressure hull. It is also the least controllable.

An occupied interior near $22^\circ\mathrm{C}$ and moderate humidity has a dew point far above $4^\circ\mathrm{C}$. An uninsulated hull can therefore remain cold enough to condense water continuously. Wet surfaces invite corrosion, electrical faults, microbial growth, damaged insulation, poor habitability, and hidden structural change.

Ordinary occupied surfaces should satisfy

$$
T_{\mathrm{surface}}
>
T_{\mathrm{dew\ point}}
+\Delta T_{\mathrm{margin}}.
$$

Atlantis must insulate the crew from the same ocean into which it exports heat. There is no paradox once the paths are separated. Insulation suppresses uncontrolled heat flow through inhabited boundaries. Dedicated coolant lines and heat exchangers create high-capacity, instrumented paths where heat is wanted.

Hatches, viewports, structural supports, cable penetrations, piping, and fasteners form cold bridges. They need local thermal breaks, vapor barriers, airflow, drainage, surface-temperature sensing, and inspectable geometry. A beautiful uninterrupted wall can conceal the most persistent water problem in the institution.

## Keep seawater outside the human boundary

At 2,000 meters, the ambient pressure is about $20\ \mathrm{MPa}$ absolute. A seawater pipe entering a one-atmosphere room becomes a high-energy flooding route. It also brings chloride, sediment, biological material, mineral deposition, high-pressure valves, and difficult cleaning into the occupied module.

The internal system should use closed, low-pressure coolant. Heat crosses an intermediate exchanger or pressure-separated wall to equipment that remains outside the human boundary. The seawater side can then fail without driving ambient-pressure water directly into the habitat.

This separation adds equipment and temperature drop. It also turns a pipe rupture into a local thermal fault instead of a pressure-hull emergency.

## Four layers of thermal isolation

The first architecture should contain four nested layers:

<figure class="architecture-figure" aria-labelledby="thermal-layers-caption">
  <div class="architecture-figure__grid">
    <div><small>Source</small><strong>Capture before air</strong><p>Cold plates, liquid-cooled racks, battery plates, condenser coils, and motor jackets collect heat near generation.</p></div>
    <div><small>Module</small><strong>Control locally</strong><p>Each pressure volume circulates its own coolant, detects leakage, and maintains its required temperature grade.</p></div>
    <div><small>Institution</small><strong>Transfer selectively</strong><p>Cross-connected station loops collect module heat through intermediate exchangers without sharing one fluid everywhere.</p></div>
    <div><small>Ocean</small><strong>Reject serviceably</strong><p>External modular exchangers use passive flow and pumped augmentation in a separated thermal field.</p></div>
  </div>
  <figcaption id="thermal-layers-caption">Figure 2. Added interfaces reduce temperature margin but prevent one leak or contaminant from circulating through the entire institution.</figcaption>
</figure>

Local module loops allow habitation, laboratories, batteries, and computing to use different fluids and setpoints. Two cross-connectable station loops provide normal transport while preserving an alternate path. External pods divide rejection capacity into fault domains that robots can isolate, inspect, clean, and replace.

The architecture should avoid one large pump room, one coolant chemistry, and one exchanger surface. Central efficiency is useful only while local survival remains possible.

## Exchanger area is a range, not a number

The basic relation is

$$
\dot Q = UA\Delta T_{\mathrm{lm}},
$$

where $U$ is the overall heat-transfer coefficient, $A$ the exchange area, and $\Delta T_{\mathrm{lm}}$ the log-mean temperature difference.

For a clean illustrative case,

$$
\dot Q = 300\ \mathrm{kW},
\quad
U = 500\ \mathrm{W/(m^2K)},
\quad
\Delta T_{\mathrm{lm}} = 8\ \mathrm{K},
$$

which gives

$$
A
=
\frac{300{,}000}{500(8)}
=
75\ \mathrm{m^2}.
$$

At a 550 kW surge with the same assumptions,

$$
A = 137.5\ \mathrm{m^2}.
$$

A conservative degraded case with $U=300\ \mathrm{W/(m^2K)}$ and $\Delta T_{\mathrm{lm}}=6\ \mathrm{K}$ requires

$$
A
=
\frac{550{,}000}{300(6)}
\approx
306\ \mathrm{m^2}.
$$

The range from 75 to 306 square meters is not uncertainty to be hidden. It shows which unknowns matter. Temperature grade, seawater flow, internal convection, wall geometry, and fouling state can change the structure by several times.

The overall coefficient contains those resistances:

$$
\frac{1}{U}
=
\frac{1}{h_i}
+R_{\mathrm{wall}}
+R_{\mathrm{fouling},i}
+R_{\mathrm{fouling},o}
+\frac{1}{h_o}.
$$

A highly conductive wall may add little value if the external boundary layer or fouling dominates. Atlantis should specify a minimum degraded $U(t)$ across a maintenance interval, not celebrate the clean commissioning coefficient.

## Combine passive and pumped rejection

Natural convection needs no external pump. Warmed water rises and colder water replaces it. Ambient current can further improve convection. Both are quiet and mechanically simple. Both vary with geometry, orientation, local stratification, terrain, and flow.

Pumped seawater offers controlled rejection, a smaller exchanger, and better surge response. It adds intake blockage, sediment, machinery, sound, filters, energy use, and maintenance.

I would use passive baseline rejection with pumped augmentation during high load, low ambient current, or partial exchanger loss. The passive path should at least slow thermal deterioration after electrical failure. The pumped path should establish predictable nominal performance.

At a 550 kW rejection rate, seawater warming by $2^\circ\mathrm{C}$ requires approximately

$$
\dot m_w
=
\frac{550\ \mathrm{kJ/s}}
{4.0\ \mathrm{kJ/(kgK)}(2\ \mathrm{K})}
\approx
68.8\ \mathrm{kg/s}.
$$

That is about $0.069\ \mathrm{m^3/s}$. Permitting a $5^\circ\mathrm{C}$ rise lowers the flow to about $27.5\ \mathrm{kg/s}$ but produces a warmer local discharge.

If the $0.069\ \mathrm{m^3/s}$ flow must overcome $100\ \mathrm{kPa}$ of circuit loss at 70 percent pump efficiency,

$$
P_{\mathrm{pump}}
=
\frac{100{,}000(0.069)}{0.70}
\approx
9.9\ \mathrm{kW}.
$$

The pump does not lift against the full 20 MPa ambient pressure when both intake and discharge remain at nearly the same depth and pressure. Its structure and seals must tolerate the ambient pressure, while its developed pressure primarily overcomes friction, filters, fittings, and density effects.

## Material performance is a system property

Titanium alloys, copper-nickel alloys, high-alloy stainless steels, nickel alloys, polymers, composites, and specialized ceramics all offer different combinations of corrosion resistance, conductivity, strength, fabrication, cost, fouling behavior, and inspectability.

Historic Argonne testing for ocean thermal energy systems found excellent seawater corrosion resistance in titanium and certain stainless steels. It also found negligible biofouling in one cold-water stream drawn from about 600 meters near Hawaii. That result is encouraging and carefully bounded. It does not prove negligible fouling at a colder, sedimented, vent-adjacent, or biologically distinct Atlantis site.

Material choice must include fasteners, frames, pumps, sensors, welds, grounds, and cleaning tools. Dissimilar conductive materials in seawater can create galvanic attack. Electrical isolation, compatible couples, coatings, sacrificial anodes, and impressed-current protection each alter inspection and the surrounding environment.

Corrosion control can interfere with science. Sacrificial anodes release products. Impressed current creates fields. Copper-bearing surfaces can discourage growth by releasing ions. The institution cannot preserve its exchanger by silently changing nearby chemistry or electrical measurements.

## Design fouling as a measured state

Biofilms, sediment, mineral deposits, and larger organisms add thermal resistance and flow loss. Their rate depends on water chemistry, current, roughness, temperature, biological community, suspended material, and distance from hydrothermal activity.

The station should continuously infer exchanger condition from heat rate, flow, inlet and outlet temperatures, pressure drop, and pump power:

$$
U(t)
=
\frac{\dot Q(t)}
{A\Delta T_{\mathrm{lm}}(t)}.
$$

A decline in $U(t)$ identifies lost conductance. Rising pressure drop suggests flow obstruction. The combination helps distinguish a fouled surface from a failing pump or inaccurate sensor.

Preferred cleaning methods are localized, observable, reversible, and compatible with robotic work: smooth surfaces, brushes, wipers, flushing, backwashing, removable panels, controlled thermal cycles, or qualified coatings. Broad toxic treatment would conflict with the station's scientific purpose.

Modular replacement may be the strongest method. A robot isolates and swaps one pod while the remaining field carries the reduced load. The recovered pod can be cleaned, inspected, measured, and repaired in a controlled environment instead of treating degradation as an underwater improvisation.

## Separate the habitat from the thermal plume

Rejecting 550 kW is negligible to the global ocean and potentially important to a local experiment. A persistent warm plume can alter microbial activity, animal behavior, chemical reaction rates, density, and current. It can also bias the temperature record used to study the site.

The initial discharge rise follows

$$
\dot Q = \dot m_w C_p\Delta T_w,
$$

but downstream behavior depends on buoyancy, ambient current, stratification, terrain, diffuser geometry, and turbulence. A simple flow calculation cannot establish ecological safety or scientific separation.

Atlantis should define a science boundary $r_s$ where artificial temperature change remains below a study-specific limit:

$$
\Delta T(r_s)
<
\Delta T_{\mathrm{science,max}}.
$$

Some measurements may require a limit of hundredths of a degree. Others may be insensitive. There should not be one universal circle drawn around the station.

The heat rejection field can be placed along a utility corridor, separated from the habitat and prevailing-current upstream science. Insulated coolant lines add pumping and failure paths, but spatial separation prevents the infrastructure from becoming its own dominant experimental signal.

EPA ocean-discharge criteria explicitly consider ecosystem effects, persistence, rate, alternate locations, and interference with scientific use. Even where a specific Atlantis jurisdiction differs, that framework captures the correct questions.

## Reuse temperature before rejecting it

Waste heat can warm water, dry waste, regenerate carbon dioxide sorbents, preheat reactors, maintain incubators, protect docking seals, prevent condensation, and support selected biological experiments.

If another process accepts $\dot Q_u$,

$$
\dot Q_{\mathrm{direct\ reject}}
=
\dot Q_{\mathrm{generated}}
-\dot Q_u.
$$

The heat usually reaches the ocean eventually. Reuse still reduces electrical heating and preserves a useful temperature grade. It can also move heat from a difficult local source into a controlled process path.

Heat reuse must remain interruptible. A carbon dioxide sorbent regenerator cannot become the only sink for a critical converter. A biological experiment cannot control the habitat's thermal safety.

## Thermal storage buys less time than intuition suggests

For sensible storage,

$$
E_{\mathrm{thermal}} = mC_p\Delta T.
$$

Twenty tonnes of water allowed to warm by $10^\circ\mathrm{C}$ stores

$$
E
=
20{,}000(4.18)(10)\ \mathrm{kJ}
\approx
232\ \mathrm{kWh}.
$$

At 250 kW, that provides about 56 minutes. Chilled water, phase-change materials, structural mass, and temperature staging can smooth starts and bridge a pump changeover. They do not provide multi-day cooling.

This result parallels the electrical architecture. Storage is valuable when it supports a transition to a smaller safe state. It becomes enormous when asked to preserve full capability through a prolonged failure.

## Refuge can become too hot or too cold

After primary power loss, the crew consolidates into the refuge. Laboratories, vehicles, empty modules, and most equipment stop generating heat. The dominant risk may change direction.

With active equipment and inadequate rejection, the refuge overheats. With low internal load, failed heaters, and a conductive path to $4^\circ\mathrm{C}$ seawater, it overcools. Emergency architecture must bound both trajectories.

A first dynamic model is

$$
C_{\mathrm{th}}\frac{dT_i}{dt}
=
\dot Q_{\mathrm{crew}}
+\dot Q_{\mathrm{equipment}}
+\dot Q_{\mathrm{heater}}
-UA(T_i-T_o).
$$

Eight people releasing an average of 100 W each contribute about $0.8\ \mathrm{kW}$. That is useful and unlikely to cover all refuge losses without strong insulation.

The refuge needs passive heat paths that limit overheating, insulation that limits overcooling, low-power circulation, independent heaters, zoned sleeping equipment, and a controller that predicts time to both limits. Unit 9 reserved 6 kW for refuge thermal control. Only the full-scale dynamic model can show whether that allocation is sufficient across water temperature, crew occupancy, equipment state, and insulation damage.

## Cooling capacity controls electrical permission

Power may remain available after a pump, loop, or exchanger fails. The station must still shed heat-producing loads so that

$$
\dot Q_{\mathrm{active\ loads}}
<
\dot Q_{\mathrm{available\ rejection}}.
$$

Vehicle charging should stop first, followed by nonessential experiments, workshop machinery, high-performance computing, discretionary services, selected water processing, and unused occupied volume. Life support, communication, fault detection, and refuge control remain protected.

I would install at least three exchanger pods, each capable of about 40 percent of nominal design load. With one unavailable, the remaining two retain 80 percent. The station can continue at reduced operation while keeping maintenance margin. Two nominal 50 percent units leave no margin after one loss.

Two station coolant loops should have independent pumps and power feeds, controlled cross-connections, buffer volume, chemistry monitoring, filters, and manual isolation. Redundancy must include different physical routes where one leak or crush event could affect both.

The electrical and thermal controllers must share constraints. No scheduler may authorize a charger because electrical capacity exists when the corresponding rejection path is already saturated.

## Prototype the field, not a polished station

The first decisive experiment is a closed coolant loop connected to several interchangeable external panels. It should measure heat transfer, flow, pressure drop, pumping power, corrosion, electrical fields, sediment, biological growth, cleaning effectiveness, sensor drift, and plume geometry.

The program should progress through laboratory water, coastal seawater, long-duration exposure, pressure qualification, deep-site deployment, and robotic service. Material coupons and full-flow surfaces should remain exposed through seasonal change.

The central performance record is $U(t)$ together with pressure drop and surface condition. Clean performance shows the potential geometry. Degraded and restored performance establishes the maintainable architecture.

<figure class="process-figure" aria-labelledby="thermal-verification-caption">
  <div class="process-figure__steps">
    <span><small>Characterize</small><strong>Clean thermal resistance</strong></span>
    <span><small>Expose</small><strong>Pressure, seawater, and time</strong></span>
    <span><small>Degrade</small><strong>Fouling, corrosion, and blockage</strong></span>
    <span><small>Recover</small><strong>Robotically clean or replace</strong></span>
  </div>
  <figcaption id="thermal-verification-caption">Figure 3. Maintainable performance is the difference between the degraded state and the state recovered through realistic service.</figcaption>
</figure>

## The controlled path to a vast sink

Rejecting several hundred kilowatts into deep seawater does not approach a fundamental heat-capacity limit. The governing constraints are finite exchange area, boundary-layer convection, pumping, temperature approach, corrosion, fouling, condensation, local failure, and scientific contamination.

The first Atlantis institution should insulate inhabited pressure boundaries, capture heat near each source, use independent module loops, transfer heat through two cross-connectable station circuits, and reject it through at least three modular external pods. Passive convection should preserve a baseline. Pumped seawater should provide controlled nominal and surge capacity. The rejection field should be separated from sensitive observations and designed for robotic maintenance.

The proposed 300 kW continuous and 550 kW surge requirements remain hypotheses until Unit 9's time-series electrical budget and this report's site tests converge. Exchanger area remains a range until the actual degraded coefficient and temperature grades are measured.

The next report will ask how Atlantis remains connected when different underwater links obey different physical limits. Fiber, acoustic communication, optical links, radio near the surface, navigation signals, and physically carried data will need one heterogeneous network whose failure modes do not erase the station's ability to understand itself.
