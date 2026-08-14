---
title: "The Human Envelope of Atlantis"
description: "A performance-centered habitability specification for atmosphere, water, space, sleep, acoustics, medicine, and crew life inside the first institution."
frontier: "Deep Ocean"
published: 2026-08-13T17:30:00-07:00
lastReviewed: 2026-08-13
readingTime: "18 min"
reportNo: "PX-OC-007"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "NASA Spaceflight Human-System Standard Volume 2"
    url: "https://www.nasa.gov/reference/nasa-std-3001v2/"
    publisher: "NASA"
  - title: "Habitability Functions"
    url: "https://www.nasa.gov/reference/7-0-habit-ability-functions-vol-2/"
    publisher: "NASA"
  - title: "Carbon Dioxide Technical Brief"
    url: "https://www.nasa.gov/ochmo-tb-004-carbon-dioxide-2/"
    publisher: "NASA Office of the Chief Health and Medical Officer"
  - title: "NASA Achieves Water Recovery Milestone on International Space Station"
    url: "https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/"
    publisher: "NASA"
  - title: "Factors Impacting Habitable Volume Requirements"
    url: "https://ntrs.nasa.gov/citations/20110023287"
    publisher: "NASA Technical Reports Server"
  - title: "Carbon Dioxide"
    url: "https://www.cdc.gov/niosh/npg/npgd0103.html"
    publisher: "NIOSH Pocket Guide to Chemical Hazards"
openProblems:
  - id: "validate-atlantis-habitation-mockup"
    title: "Validate a full-scale Atlantis habitation mock-up"
    question: "Can six people live and work for 30 days inside the proposed net volume while preserving sleep, privacy, medical access, task performance, and emergency egress?"
    status: "Open"
    disciplines: ["Human factors", "Architecture", "Operational medicine"]
    nextStep: "Construct a reconfigurable terrestrial module and run staged 24-hour, 72-hour, 7-day, and 30-day occupations with environmental, workload, sleep, and conflict measurements."
  - id: "define-atlantis-environmental-bands"
    title: "Define the Atlantis environmental operating bands"
    question: "What nominal, degraded, emergency, and uninhabitable thresholds should govern atmosphere, temperature, humidity, water, noise, and exposure time for the crewed mission profile?"
    status: "Open"
    disciplines: ["Environmental medicine", "Life support", "Controls engineering"]
    nextStep: "Tailor current aerospace, submarine, occupational, and medical standards to the Atlantis duration, workload, fire strategy, module topology, and rescue interval."
prerequisites:
  - "deep-ocean/pressure-architecture-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>The first Atlantis institution should not be designed merely to keep its occupants alive. It must preserve the judgment, attention, dexterity, health, and cooperative capacity required to conduct science and manage failure. I define a performance-supporting habitability envelope for a rotating six-person crew and an eight-person emergency case. The envelope includes atmospheric partial pressures, carbon dioxide and contaminant control, temperature, humidity, condensation prevention, water, nutrition, sanitation, net usable volume, private berths, circadian lighting, acoustics, exercise, communication, and medical response. These variables are coupled to the pressure architecture because human volume, equipment, ducts, storage, and separation all consume scarce dry space. A preliminary habitation allocation of 110 to 170 cubic meters net suggests 160 to 300 cubic meters gross before laboratories, operations, utilities, docking, and refuge. The report concludes with a terrestrial full-scale mock-up program because habitability cannot be validated in a structural model alone.</p>
</section>

## Design for performance, not survival

The institution fails if its crew remains alive but cannot think clearly enough to operate it.

Researchers at depth must recognize subtle anomalies, supervise machines, handle samples, maintain life support, improvise repairs, provide medical care, communicate under uncertainty, and choose between continued operation and retreat. Fatigue, poor ventilation, noise, isolation, sleep disruption, crowding, and loss of privacy can erode those capabilities before they create an obvious medical emergency.

I therefore distinguish three standards:

$$
\text{survivable}
< \text{habitable}
< \text{performance-supporting}.
$$

A survivable environment prevents death over a bounded interval. A habitable environment preserves health through the rotation. A performance-supporting environment allows the crew to perform complex work, recover between shifts, cooperate, and return for later missions.

Atlantis must be designed to the third standard. Emergency refuge can accept temporary compromises, but nominal life should not resemble a prolonged emergency.

<aside class="working-thesis" aria-label="Human performance principle">
  <span>Human performance principle</span>
  <p>A crew member's cognitive margin is part of the institution's safety margin.</p>
</aside>

NASA's human-system standard treats health, performance, habitability, environmental conditions, architecture, equipment, and crew interfaces as an integrated design problem. The underwater environment differs from space, but the systems lesson transfers directly: human factors alter volume, layout, power, lighting, acoustic isolation, storage, software, training, and verification from the beginning.

## The crew is an active subsystem

Human performance can be represented as a coupled function:

$$
H_{\mathrm{performance}}
= f(
\text{atmosphere},
\text{thermal state},
\text{sleep},
\text{nutrition},
\text{water},
\text{noise},
\text{space},
\text{light},
\text{workload},
\text{privacy},
\text{health}
).
$$

No variable can be sized in isolation. More exercise raises oxygen use, carbon dioxide production, moisture, heat, acoustic load, and schedule demand. More private volume increases pressure-hull cost but may improve sleep, conflict recovery, and cognitive performance. Higher water recovery lowers delivered mass while adding machinery, filters, heat, power, maintenance, and new failure paths.

The habitability envelope should therefore be expressed as operating bands rather than a collection of single limits.

| Band | Meaning |
| --- | --- |
| Nominal | Supports health, recovery, and sustained technical performance |
| Degraded | Safe for a limited time while correction proceeds |
| Emergency | Survival condition with immediate operational response |
| Uninhabitable | Requires protective equipment, isolation, or evacuation |

The station should report the current band, direction of change, estimated time to the next band, affected module, corrective options, and confidence in the estimate. A green symbol without margin or trend is not an adequate human-environment display.

## Atmosphere is a controlled chemical system

Nominal total pressure should remain near terrestrial conditions, provisionally around

$$
p_{\mathrm{total}} \approx 101\ \mathrm{kPa}.
$$

With oxygen fraction near $0.21$,

$$
p_{O_2} = x_{O_2}p_{\mathrm{total}} \approx 21.2\ \mathrm{kPa}.
$$

Partial pressure matters. If total pressure fell to $80\ \mathrm{kPa}$ while oxygen remained at 21 percent, oxygen partial pressure would fall to

$$
p_{O_2} \approx 0.21(80) = 16.8\ \mathrm{kPa}.
$$

The displayed fraction would look familiar while the physiological condition changed substantially.

Every occupied module needs total pressure, oxygen partial pressure, carbon dioxide partial pressure or concentration, carbon monoxide, temperature, humidity, smoke, particulates, and selected contaminant monitoring. Pressure trend matters as much as instantaneous pressure. A module still within limits but losing pressure steadily may demand faster action than a stable value slightly outside the preferred band.

The crew consumes oxygen and produces carbon dioxide continuously. NASA's standard mission-day data with exercise give approximately $0.82\ \mathrm{kg}$ of oxygen consumption and $1.04\ \mathrm{kg}$ of carbon dioxide output per person-day. For six people over 30 days:

$$
m_{O_2} \approx 148\ \mathrm{kg},
\qquad
m_{CO_2} \approx 187\ \mathrm{kg}.
$$

Leakage, purging, sampling, transfer losses, medical oxygen, reserve, and workload variation remain additional. These numbers size a metabolic load, not a chosen storage architecture.

## Oxygen and fire are one trade

Oxygen may come from stored gas, water electrolysis, chemical generation, or a combination. Electrolysis follows

$$
2H_2O \rightarrow 2H_2 + O_2.
$$

The reaction does not describe the complete system. Pumps, purification, gas separation, drying, compression, controls, inefficiency, and heat all matter. Hydrogen must be stored, consumed, recombined, or discharged through a safe path. Producing oxygen creates another hazardous material to manage.

Increasing oxygen concentration can reduce one physiological concern while intensifying combustion. Materials, wiring, fabrics, contamination, and fire suppression must be qualified for the intended oxygen partial pressure and credible enrichment fault.

The atmosphere controller must therefore optimize physiology and fire safety together. It should not solve a low-oxygen transient by creating an oxygen-rich station that remains flammable after the immediate event.

## Carbon dioxide is local as well as global

Carbon dioxide must be measured and removed directly. Regenerable molecular sieves, solid amines, membranes, electrochemical systems, or liquid sorbents may handle nominal operation. Replaceable chemical cartridges remain useful for backup and refuge.

Occupational limits are not nominal habitat targets. NIOSH lists 5,000 ppm as an eight-hour recommended exposure limit, but a 30-day technical habitat should normally operate well below that value. I use the following bands only as preliminary engineering targets pending medical review:

| Carbon dioxide concentration | Provisional response |
| ---: | --- |
| Below $1{,}000\ \mathrm{ppm}$ | Preferred nominal condition where practical |
| $1{,}000$ to $2{,}000\ \mathrm{ppm}$ | Elevated, investigate mixing and scrubber performance |
| $2{,}000$ to $5{,}000\ \mathrm{ppm}$ | Degraded, correct promptly and limit exposure |
| Above $5{,}000\ \mathrm{ppm}$ | Outside nominal operation |
| Rapid continued rise | Escalating safety event regardless of current band |

If $n$ scrubber trains each remove $\dot m_s$, single-unit tolerance requires

$$
(n-1)\dot m_s
>
\dot m_{CO_2,\mathrm{maximum\ crew}}.
$$

Removal capacity does not guarantee exposure control. Air must reach the machine. Sleeping alcoves, crowded workstations, exercise areas, low-circulation corners, and temporarily isolated rooms can develop local accumulation. Distributed sensing and mixing tests are essential.

## Trace contaminants accumulate quietly

A sealed habitat retains carbon monoxide, hydrogen, methane, refrigerants, solvents, cleaning compounds, laboratory reagents, battery products, plastic emissions, cooking aerosols, microbial volatiles, and fire products.

For contaminant $i$ in atmospheric volume $V$,

$$
\frac{dC_i}{dt}
=
\frac{G_i - R_i - L_i}{V},
$$

where $G_i$ is generation, $R_i$ active removal, and $L_i$ leakage or controlled discharge. In a tight station, $L_i$ is small enough that a low generation rate can still become a long-duration exposure.

The architecture needs screened materials, continuous high-risk gas monitoring, periodic broad-spectrum analysis, catalytic and activated-carbon removal, laboratory exhaust capture, battery isolation, chemical inventory, and contamination-response procedures. The atmosphere is not passive air. It is a managed chemical inventory shared by every person and subsystem in the module.

## Thermal comfort begins at a cold wall

The surrounding water may remain only a few degrees above freezing. A provisional interior target is $20$ to $24^\circ\mathrm{C}$ with local adjustment for sleep, exercise, laboratories, and medicine. Relative humidity may begin with a 30 to 60 percent planning range, subject to medical and materials review.

The thermal balance is

$$
\dot Q_{\mathrm{people}}
+ \dot Q_{\mathrm{equipment}}
+ \dot Q_{\mathrm{heating}}
=
\dot Q_{\mathrm{rejected}}.
$$

Cold seawater does not guarantee simple cooling. Some occupied modules need heat while computers, laboratories, converters, and exercise spaces need heat rejection. Thermal paths must remain available during normal and emergency utility configurations.

Condensation occurs when a cold interior surface falls below the local dew point. It can create corrosion, electrical faults, microbial growth, wet insulation, slips, hidden structural damage, and degraded storage. Insulation and airflow should satisfy

$$
T_{\mathrm{surface}}
>
T_{\mathrm{dew\ point}}
+ \Delta T_{\mathrm{margin}}
$$

under nominal conditions. Concealed cold regions need moisture detection because the crew cannot report what they cannot see.

## Water closure is not automatically progress

The crew needs water for drinking, food, hygiene, sanitation, medicine, cleaning, and science. A highly constrained planning floor of $3.8\ \mathrm{L}$ per person-day would total

$$
6(3.8)(30) = 684\ \mathrm{L}
$$

for the rotation before reserve. A more comfortable allocation of $20\ \mathrm{L}$ per person-day would total

$$
6(20)(30) = 3{,}600\ \mathrm{L},
$$

or about 3.6 tonnes.

Atlantis can combine delivered potable water, desalination, humidity condensate recovery, wash-water treatment, and urine processing. Deep seawater is abundant but not automatically potable. Intake, filtration, desalination, disinfection, trace-contaminant removal, mineral control, microbial monitoring, pumping, and storage remain required.

If demand is $D_w$ and recovery fraction is $\eta_r$, daily make-up water is

$$
D_{\mathrm{makeup}} = D_w(1-\eta_r).
$$

NASA has demonstrated 98 percent total water recovery on the International Space Station. That proves a high closure fraction is achievable in a mature system. It does not prove maximum closure is the best first-station choice. Higher recovery can add filters, heat, maintenance, power, monitoring, and common-mode dependence.

The first institution may be safer with delivered reserve and partial recovery while its treatment system earns reliability. Potable water storage should be divided so one contamination event does not remove the entire supply.

## Food and waste preserve ordinary life

At an illustrative $2{,}500\ \mathrm{kcal}$ per person-day, six people over 30 days require

$$
E_{\mathrm{food}} = 6(2500)(30) = 450{,}000\ \mathrm{kcal}.
$$

Actual nutrition varies by body size, workload, health, and exercise. The initial institution should use shelf-stable, refrigerated, frozen, and limited fresh food rather than attempt complete underwater agriculture. Crop production would add lighting, nutrients, humidity, contamination control, labor, and a new mission-critical biological process before the station needs it.

Meals are not only calorie delivery. Shared eating creates schedule, cultural continuity, informal coordination, and a place to repair social friction. Optimizing food solely by energy per kilogram could save hardware while weakening morale and return willingness.

Waste must remain separated into human, wash-water, food, packaging, laboratory, chemical, medical, and failed-hardware streams. The ocean cannot be treated as a convenient sink. Nutrients, pathogens, pharmaceuticals, chemicals, microplastics, and organisms could alter the research territory or contaminate observatories.

The mass balance remains visible:

$$
m_{\mathrm{input}}
=
m_{\mathrm{recovered}}
+ m_{\mathrm{stored\ waste}}
+ m_{\mathrm{discharged}}
+ \Delta m_{\mathrm{station}}.
$$

Life support transforms material. It does not make it disappear.

## Net volume is the human volume

The crew experiences space left after structure, machinery, ducts, insulation, storage, equipment, and inaccessible curved regions occupy the hull.

$$
V_{\mathrm{net\ habitable}}
=
V_{\mathrm{gross}}
- V_{\mathrm{structure}}
- V_{\mathrm{equipment}}
- V_{\mathrm{storage}}
- V_{\mathrm{inaccessible}}.
$$

NASA habitat research cautions that no universal volume number proves habitability. Mission duration, layout, privacy, task diversity, storage, equipment, social conditions, and circulation all shape the result.

For six people on a 30-day rotation, I use the following allocation as a mock-up hypothesis:

| Function | Provisional net volume |
| --- | ---: |
| Six private crew quarters | $30$ to $42\ \mathrm{m^3}$ |
| Galley and shared dining | $15$ to $20\ \mathrm{m^3}$ |
| Hygiene and sanitation | $10$ to $15\ \mathrm{m^3}$ |
| Exercise | $12$ to $20\ \mathrm{m^3}$ |
| Recreation and private communication | $10$ to $15\ \mathrm{m^3}$ |
| Medical and emergency care | $8$ to $12\ \mathrm{m^3}$ |
| Internal circulation | $15$ to $25\ \mathrm{m^3}$ |
| Habitation storage | $10$ to $20\ \mathrm{m^3}$ |
| **Habitation subtotal** | **$110$ to $169\ \mathrm{m^3}$** |

If equipment, structure, ducts, storage, and inaccessible geometry consume 30 to 50 percent of gross volume, the habitation pressure hulls may need roughly $160$ to $300\ \mathrm{m^3}$ gross before laboratories, operations, workshop, utilities, docking, and refuge.

This is not a final sizing calculation. It is evidence against compressing a scientific crew into a submersible-scale sphere and further support for the modular decision in PX-OC-006.

## Privacy and sleep are control systems

Every nominal crew member should have a personal berth that closes from the common environment and supports sleep, storage, adjustable light, acoustic separation, family communication, confidential consultation, emergency notification, and rapid egress.

$$
N_{\mathrm{private\ berths}}
\geq
N_{\mathrm{nominal\ crew}}.
$$

Hot-bunking can reduce volume, but it removes control over personal space, complicates hygiene and sleep timing, and prevents retreat from continuous social exposure. It should not be the nominal 30-day architecture.

NASA's current habitability guidance requires sleep accommodations to consider volume, vibration, lighting, noise, temperature, and privacy. The deep ocean provides no natural daylight, so the station must manufacture temporal cues through bright scheduled daytime illumination, warmer and dimmer evening light, low nighttime intrusion, and individual berth control.

Protected sleep is an operational requirement. Chronic restriction reduces attention, memory, judgment, reaction, emotional control, and emergency performance. A schedule that routinely borrows from sleep to meet nominal workload has consumed its human safety reserve.

## Noise should be budgeted before assembly

Fans, pumps, scrubbers, water processors, converters, refrigeration, laboratories, exercise equipment, docks, and charging systems can create a permanent acoustic background. Machinery also transmits vibration through frames and pressure hulls.

Independent sound levels cannot be added directly. For levels $L_i$,

$$
L_{\mathrm{total}}
=
10\log_{10}\left(\sum_i10^{L_i/10}\right).
$$

Two 60 dBA sources produce approximately 63 dBA. Every continuous component therefore needs an acoustic allocation, and the total must be evaluated at berths, workstations, medical spaces, alarms, and communication positions.

Machinery should be structurally isolated, enclosed where possible, separated from sleeping modules, and capable of quieter night operation. Acoustic monitoring can serve maintenance as well as comfort because a changing signature may identify bearing, pump, fan, or cavitation problems before failure.

<figure class="architecture-figure" aria-labelledby="human-zones-caption">
  <div class="architecture-figure__grid">
    <div><small>Recovery</small><strong>Private and quiet</strong><p>Berths, confidential communication, circadian light, and protected sleep occupy the lowest-noise zone.</p></div>
    <div><small>Community</small><strong>Shared and ordinary</strong><p>Meals, recreation, hygiene, and informal collaboration give the rotation social rhythm.</p></div>
    <div><small>Performance</small><strong>Work and exercise</strong><p>Technical tasks, movement, heat, vibration, and controlled concentration receive dedicated space.</p></div>
    <div><small>Care</small><strong>Medical and emergency access</strong><p>Stabilization, isolation, monitoring, and patient transfer remain possible when the station is degraded.</p></div>
  </div>
  <figcaption id="human-zones-caption">Figure 1. Habitability depends on separating incompatible human activities, not simply increasing total volume.</figcaption>
</figure>

## Exercise and psychological recovery

Thirty days at Earth gravity does not create the same deconditioning problem as microgravity, but confinement, sedentary monitoring, and repetitive technical work still affect fitness, mood, and sleep. The station should support cardiovascular training, upper and lower body strength, mobility, and rehabilitation for roughly one hour per person-day.

Exercise produces heat, humidity, vibration, and noise and requires safe clearances. It should not share a wall or structural path with berths or sensitive instruments.

Psychological conditions are equally architectural. Isolation, danger, limited privacy, repeated contact with the same group, separation from ordinary life, and dependence on team competence cannot be solved by selecting unusually resilient people.

The institution should provide private quarters, reliable family communication, shared meals, recreation, visual variety, individual environmental control, confidential support, protected off-duty time, workload fairness, and clear conflict-resolution procedures.

Large panoramic viewports are not required to create connection with the ocean. Limited inspected viewports, exterior cameras, live wall displays, and robotic telepresence can share that role. A screen may not equal a window psychologically, but the question should be tested. Every viewport must justify its opening, seal, inspection burden, failure consequence, and ecological light emission.

## Medicine must fit through the hatch

The station may be hours or days from definitive care. It must stabilize burns, lacerations, fractures, allergic reactions, infection, dental emergencies, smoke or toxic exposure, acute psychiatric distress, and serious cardiac or neurological events while continuing safe operation with fewer available workers.

Medical capability should include telemedicine, diagnostic tools, medication, oxygen, airway and resuscitation equipment, wound care, splinting, dental supplies, infection isolation, monitoring, and a berth accessible from several sides.

At least two crew members should have advanced medical training because the most qualified person can become the casualty. The crew must move an unconscious or immobilized patient through every required hatch, trunk, ladder, dock, and transfer vehicle.

Those interfaces should be tested with a full-size rescue manikin and the equipment needed to support it. Designing egress around healthy people moving under their own power will create a medical path that disappears during the emergency it was meant to serve.

## Cross-training protects the institution

The nominal crew may include station systems, life support, electrical, robotics, mechanical, biological, chemical, geological, and instrumentation expertise. These are functions, not isolated job titles.

For every critical operation,

$$
N_{\mathrm{qualified}} \geq 2.
$$

Fire response, contamination, flooding, power loss, communication loss, life-support failure, medical evacuation, stranded vehicles, incapacitated rescue, fatigue, conflict, and abandonment require repeated team training. Cross-qualification also affects the crew workload model from Unit 5. Six people are sufficient only if critical tasks can be reassigned when one person is sleeping, occupied, injured, or emotionally compromised.

## A human-centered state estimate

The station should maintain a time-dependent habitability state:

$$
\mathbf{H}(t)
=
[p,\,p_{O_2},\,C_{CO_2},\,C_{CO},\,T,\,RH,\,C_{\mathrm{VOC}},\,L_{\mathrm{noise}},\,Q_{\mathrm{water}},\,P_{\mathrm{life\ support}}].
$$

The displayed state should calculate exposure time, oxygen and scrubber margin, water endurance, thermal trajectory, filter life, sensor agreement, refuge readiness, and uncertainty. It should distinguish one bad reading from a poorly mixed module and from an actual atmosphere-wide trend.

<figure class="process-figure" aria-labelledby="habitability-response-caption">
  <div class="process-figure__steps">
    <span><small>Measure</small><strong>Distributed environmental state</strong></span>
    <span><small>Interpret</small><strong>Band, trend, and confidence</strong></span>
    <span><small>Predict</small><strong>Time to degraded condition</strong></span>
    <span><small>Act</small><strong>Correct, isolate, or evacuate</strong></span>
  </div>
  <figcaption id="habitability-response-caption">Figure 2. A human-environment display should communicate trajectory and remaining margin, not only current thresholds.</figcaption>
</figure>

## Test the room before the ocean

The habitability hypothesis can be tested without a deep-ocean pressure hull. A reconfigurable full-scale terrestrial mock-up should include six private berths, circulation, galley and dining, hygiene, exercise, medical access, storage, acoustic separation, lighting cycles, emergency egress, and incapacitated-person transport.

A six-person crew should occupy it for 24 hours, 72 hours, 7 days, and eventually 30 days. The program should record carbon dioxide distribution, temperature, humidity, noise, sleep, task completion, maintenance burden, privacy, conflicts, communication, and emergency-drill performance.

The layout should change between trials. Berth position, machinery noise, storage access, lighting schedules, route width, galley organization, and medical geometry can then be evaluated as variables rather than defended as aesthetic choices.

This test is less dramatic than submerging a pressure hull. It examines the institution's most consequential payload before the structural architecture makes every mistake expensive.

## The envelope before the machine

None of the internal human requirements exceeds demonstrated closed-habitat capability. Oxygen can be supplied. Carbon dioxide and contaminants can be removed. Temperature and humidity can be controlled. Water can be delivered, produced, and recovered. Food can be stored. Waste can be separated. Light and sound can be engineered. Remote medicine and long-duration isolation have extensive analog evidence.

The frontier is their integration inside limited dry volume with delayed rescue, high fire consequence, difficult maintenance, autonomous intervals, scientific contamination constraints, and multiple pressure-isolated modules.

The next report will turn this human envelope into a complete environmental-control system. It must compare oxygen storage and generation, regenerable carbon dioxide removal, contaminant control, humidity recovery, potable-water production, waste processing, fault detection, redundancy, and refuge survival.

Atlantis will not ask people to endure its architecture. Its architecture must protect the qualities that make their presence valuable.
