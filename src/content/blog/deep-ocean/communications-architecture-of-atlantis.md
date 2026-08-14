---
title: "The Communications Architecture of Atlantis"
description: "A heterogeneous underwater network that assigns fiber, sound, light, docking, surface relays, and physical data transport to the jobs they can perform."
frontier: "Deep Ocean"
published: 2026-08-13T23:45:00-07:00
lastReviewed: 2026-08-13
readingTime: "20 min"
reportNo: "PX-OC-011"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Primary Nodes"
    url: "https://interactiveoceans.washington.edu/technology/primary-nodes/"
    publisher: "OOI Regional Cabled Array, University of Washington"
  - title: "Micromodem"
    url: "https://acomms.whoi.edu/micro-modem/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "BlueComm Underwater Optical Communication"
    url: "https://www.whoi.edu/press-room/news-release/cytobot-bluecomm/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "How Far Does Sound Travel in the Ocean?"
    url: "https://oceanservice.noaa.gov/facts/sound.html"
    publisher: "NOAA National Ocean Service"
  - title: "Ocean Noise"
    url: "https://www.fisheries.noaa.gov/national/science-data/ocean-noise"
    publisher: "NOAA Fisheries"
  - title: "Delay and Disruption Tolerant Networking"
    url: "https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/"
    publisher: "NASA"
  - title: "Guide to Operational Technology Security"
    url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
    publisher: "National Institute of Standards and Technology"
openProblems:
  - id: "map-atlantis-wireless-channels"
    title: "Map the Atlantis wireless channels"
    question: "What acoustic throughput, latency, multipath, noise exposure, and optical range are actually available across the candidate site's seasons, vehicle routes, and operating states?"
    status: "Open"
    disciplines: ["Underwater acoustics", "Optical communication", "Marine ecology"]
    nextStep: "Run synchronized acoustic and optical channel surveys from fixed nodes and moving vehicles while recording water-column structure, ambient noise, biological activity, turbidity, alignment, packet delivery, and source level."
  - id: "demonstrate-atlantis-degraded-network"
    title: "Demonstrate the Atlantis degraded network"
    question: "Can the institution preserve authenticated distress, life-support state, vehicle recovery, and message custody after losing its shore fiber, primary power, one surface relay, and ordinary network control?"
    status: "Open"
    disciplines: ["Network resilience", "Operational technology security", "Emergency operations"]
    nextStep: "Build a representative fiber, acoustic, optical, docked, and surface-relay network, then inject partitions, stale commands, clock drift, compromised nodes, and repeated link loss during a full emergency exercise."
prerequisites:
  - "deep-ocean/thermal-architecture-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>Atlantis cannot reproduce terrestrial wireless networking underwater because conductive seawater, suspended matter, sound propagation, and vehicle motion impose different constraints on every medium. I propose a heterogeneous network in which fixed institutions and observatories use fiber, mobile assets use acoustics for reach, optical links provide high-rate exchange at close range, physical docking handles bulk transfer, and surface gateways bridge underwater systems to radio and satellites. Delay-tolerant services store and forward information whenever no continuous route exists. The design separates safety, control, operations, science, human, and maintenance traffic so that a video transfer cannot delay an atmosphere alarm. Quantitative examples show why this division is necessary. A WHOI acoustic modem supports packet burst rates from 80 to about 5,400 bits per second, while demonstrated underwater optical systems reach 10 to 20 megabits per second over suitable short ranges. One terabyte sent ideally at 5,000 bits per second would take more than 50 years. The institution must therefore move actionable summaries through constrained links and preserve raw evidence for later optical, docked, fiber, or physical delivery.</p>
</section>

## One ocean, several incompatible channels

An underwater institution must communicate with its own modules, nearby vehicles, fixed observatories, distant outposts, surface ships, shore operators, public networks, and future institutions. Those relationships carry very different information.

An atmosphere alarm may contain only a few bytes and require immediate trusted delivery. Vehicle teleoperation needs low latency and sustained return data. A seafloor camera can create terabytes without requiring instant transfer. A software update can wait while demanding exceptionally strong integrity. A family video call is humanly valuable and must yield to a pressure alarm.

No underwater wireless medium provides fiber bandwidth, basin-scale range, negligible latency, low energy, omnidirectional mobility, and no ecological effect at once. The engineering problem is not to invent one perfect underwater radio. It is to compose imperfect media into one intelligible service.

<aside class="working-thesis" aria-label="Communications principle">
  <span>Communications principle</span>
  <p>Fixed assets use cables whenever practical. Mobile assets earn bandwidth by approaching the right interface.</p>
</aside>

I divide information into operational classes before selecting a link:

| Information class | Bandwidth | Latency | Reliability and integrity |
| --- | ---: | ---: | --- |
| Distress and emergency alarm | Very low | Immediate | Extreme |
| Life-support telemetry | Low | Low | Extreme |
| Vehicle command and collision warning | Low to moderate | Low | Very high |
| Voice | Moderate | Low | High |
| Video teleoperation | High | Very low | Very high |
| Scientific sensor stream | Low to high | Moderate | High |
| Imagery and bulk archives | Very high | Delay tolerant | Very high |
| Software and configuration | Moderate to high | Delay tolerant | Extreme integrity |

The network must know message purpose, not only packet size. When capacity collapses, the purpose determines what survives.

## Radio belongs mostly inside the dry volume

Seawater is electrically conductive. Electromagnetic fields attenuate as they propagate through it. A useful skin-depth approximation is

$$
\delta
=
\sqrt{\frac{2}{\omega\mu\sigma}},
$$

with field amplitude decreasing approximately as

$$
E(z)=E_0e^{-z/\delta}.
$$

For conductivity $\sigma\approx4\ \mathrm{S/m}$ and permeability $\mu\approx\mu_0$, skin depth at $1\ \mathrm{MHz}$ is about $0.25\ \mathrm{m}$. At $10\ \mathrm{kHz}$ it grows to about $2.5\ \mathrm{m}$. Lower frequency penetrates farther at the cost of bandwidth, antenna practicality, and power.

Ordinary radio remains useful inside dry pressure modules, near the surface, across very short gaps, and in specialized magnetic or inductive couplings. It is not the default for mobile high-bandwidth communication through kilometers of seawater.

This physical limit is productive. It removes the temptation to design Atlantis around a terrestrial wireless metaphor that the ocean cannot support.

## Fiber is the institutional nervous system

Fiber provides high bandwidth, low latency, long range, low error rates, precise timing, and compatibility with terrestrial networks. Fixed modules, laboratories, utility nodes, docks, observatories, and expansion corridors should use it wherever cable installation and maintenance are practical.

The Ocean Observatories Initiative Regional Cabled Array provides a direct precedent. Its primary nodes connect through a 900-kilometer backbone and provide 10 GbE communication and pulse-per-second timing at depths approaching 2,900 meters and distances beyond 500 kilometers offshore. Wet-mateable interfaces allow secondary infrastructure to be serviced and expanded.

Atlantis should use the shore cable from Unit 9 for power and multiple fiber pairs, with at least 10 Gb/s initial shore-facing service and a higher-capacity upgrade path. Internal and local fixed links should be sized around scientific acquisition, replicated storage, telepresence, software distribution, vehicle docking, and timing rather than simply matching the initial shore service.

Fiber should carry nominal voice, video, operations, medical consultation, raw scientific streams, bulk replication, and public communication. Its speed should make the institution feel socially and scientifically near to shore during normal operation.

The cable also creates a common-mode fault:

$$
\text{route loss}
\rightarrow
\text{primary power loss}
+\text{primary communication loss}.
$$

An institution whose emergency plan is stored only across that link has no emergency plan. Independent communication must remain operable from refuge power after the main fiber and grid disappear together.

## Separate safety from abundance

Inside dry modules, Atlantis can use redundant fiber, industrial Ethernet, deterministic control buses, and carefully bounded local wireless access. Familiar technology does not justify one flat network.

I would divide the institution into six functional domains:

<figure class="architecture-figure" aria-labelledby="network-domains-caption">
  <div class="architecture-figure__grid">
    <div><small>Safety</small><strong>Preserve life locally</strong><p>Atmosphere, pressure, fire, isolation, and alarm traffic remains deterministic and independently operable.</p></div>
    <div><small>Control</small><strong>Operate physical systems</strong><p>Pumps, valves, converters, thermal loops, and life-support machinery use bounded, authenticated commands.</p></div>
    <div><small>Operations</small><strong>Coordinate missions</strong><p>Vehicles, navigation, docks, work permits, and emergency teams share current institutional state.</p></div>
    <div><small>Science and human</small><strong>Use abundant capacity</strong><p>Instruments, storage, voice, video, collaboration, maintenance, and public traffic occupy governed services.</p></div>
  </div>
  <figcaption id="network-domains-caption">Figure 1. Shared cable can carry several networks, but life-safety behavior must not depend on ordinary scientific or human traffic.</figcaption>
</figure>

Segmentation is both a performance and security decision. A saturated imaging transfer must not delay a carbon dioxide alarm. A compromised visitor device must not address an oxygen valve. A software deployment to a laboratory should not restart the time service used by structural monitoring.

Safety systems need local interlocks and manual control even when their network functions normally. Communication can inform a safe action. It should not remove the physical limits that make the action safe.

## Sound provides mobile reach

Sound travels about $1{,}500\ \mathrm{m/s}$ in seawater, with speed and propagation shaped by temperature, salinity, and pressure. It reaches far beyond useful optical or radio paths and is therefore the principal long-range mobile medium.

Acoustic links can carry vehicle status, short commands, mission permission, emergency messages, navigation measurements, low-rate science summaries, and wake signals. They should not be treated as broadband.

WHOI lists Micromodem packet burst rates from 80 to about 5,400 bps. The same documentation warns that system throughput is lower and depends on host transfer, processing, channel count, polling, travel time, and acknowledgements. In one stated single-channel example, a 5,400 bps packet mode produces best-case continuous throughput around 3,343 bps before a long-range acknowledgement cycle is added.

That distinction belongs in the architecture. A modem's fastest waveform is not the dependable application rate available to a moving vehicle in a noisy, multipath channel.

## Propagation delay changes the protocol

One-way acoustic propagation time is

$$
T_p=\frac{d}{c_s}.
$$

At 10 kilometers, $T_p\approx6.7\ \mathrm{s}$. At 100 kilometers, it is about 67 seconds. At 1,000 kilometers, it is about 11 minutes. A request and acknowledgement double only the propagation component.

Protocols that wait after every packet waste the channel over long range. Vehicles need larger autonomous decision windows, scheduled contacts, forward error correction, selective acknowledgement, message expiry, and commands that remain safe when they arrive late.

A command can be authentic and bit-perfect while operationally obsolete. Every control message should carry a creation time, sequence, intended state, expiration, and authority. The vehicle must reject stale instructions rather than execute them faithfully in a new situation.

## The acoustic channel moves while being used

A simplified transmission-loss expression is

$$
TL
\approx
k\log_{10}(r)+\alpha(f)r,
$$

where the first term represents spreading and the second frequency-dependent absorption. Higher frequencies can support more bandwidth and attenuate faster. Lower frequencies can travel farther while reducing available rate and increasing transducer scale.

Signals also arrive through direct, surface-reflected, bottom-reflected, and refracted paths. Those copies overlap at different delays. Vehicle motion, surface waves, and moving water create Doppler and time variation.

Practical modems therefore need channel estimation, equalization, interleaving, error correction, adaptive modulation, Doppler compensation, and carefully chosen retransmission. The local network needs channel maps derived from the actual terrain and water column. Acoustic networking is not slow Wi-Fi. It has a different notion of distance, collision, silence, and time.

## Sound must be ecologically budgeted

Marine animals use sound to communicate, navigate, find food, avoid predators, and interpret habitat. NOAA treats anthropogenic changes to the soundscape as a biological and management problem, including acute and cumulative effects.

Atlantis should treat acoustic emissions as a finite environmental budget. Every active transmission should record frequency band, source level, duration, duty cycle, beam direction, receiver, background level, and relevant biological context. Passive listening should precede nonemergency transmission where useful.

The network can reduce disturbance through directional beams, minimum necessary source level, short packets, adaptive power, frequency planning, spatial exclusion, and quiet windows. Emergency traffic retains priority, but routine engineering should not operate continuously at the loudest reliable setting.

The success metric is larger than bits per joule. It includes reliably delivered information per unit of ecological acoustic exposure.

## Light provides local abundance

Blue-green optical links can carry far more data than acoustics over clear short ranges. WHOI reports demonstrated BlueComm transfer of 10 to 20 Mb/s at ranges up to 200 meters under suitable conditions, with a 10 Mb/s system demonstrated near 100 meters.

A simplified optical link follows

$$
P_r=P_0e^{-c(\lambda)r},
$$

where $c(\lambda)$ represents absorption and scattering. Because range enters an exponential, modest changes in turbidity, biological material, bubbles, or surface cleanliness can transform link availability.

Optical communication also requires line of sight, alignment, an adequate receiver field of view, and controlled vehicle motion. It fits docking approach, local teleoperation, software delivery, imagery offload, and exchange among nearby fixed nodes. It cannot replace the acoustic channel that helps a vehicle find the dock in the first place.

The handoff should be staged:

<figure class="process-figure" aria-labelledby="handoff-caption">
  <div class="process-figure__steps">
    <span><small>Discover</small><strong>Acoustic identity and status</strong></span>
    <span><small>Approach</small><strong>Acoustic range and navigation</strong></span>
    <span><small>Acquire</small><strong>Directional optical session</strong></span>
    <span><small>Dock</small><strong>Wired bulk transfer and power</strong></span>
  </div>
  <figcaption id="handoff-caption">Figure 2. A vehicle gains bandwidth as physical uncertainty and distance decrease.</figcaption>
</figure>

When a connector is wet, dirty, or misaligned, the vehicle should still report state through optical or acoustic fallback. The dock is not merely a charger. It is the most trustworthy opportunity for data reconciliation, clock correction, diagnostics, and software recovery.

## Bulk data should move with the vehicle

At an idealized acoustic rate of 5,000 bps, transmitting one terabyte takes

$$
T
=
\frac{8\times10^{12}\ \mathrm{bits}}
{5\times10^3\ \mathrm{bits/s}}
=
1.6\times10^9\ \mathrm{s},
$$

or about 50.7 years before packet overhead, errors, scheduling, and outages.

The vehicle should transmit health, position, compressed previews, detections, novelty scores, and anomaly summaries acoustically. It should retain the full image, sonar, and scientific archive for optical offload, docking, fiber connection, or physical recovery.

Local computation changes the question from moving every observation to moving the information needed for a decision. It must not silently destroy evidence. Raw or minimally processed data should remain stored when capacity permits. A model that fails to recognize a novel organism is not qualified to delete it.

Storage policy needs explicit categories: transmit now, store for later, replicate when possible, and delete only after verified custody. Compression is not permission to erase the unexplained.

## Assume the path will disappear

The underwater network should expect intermittent contacts, partitions, asymmetric links, moving relays, and long delay. Delay and disruption tolerant networking provides the right model: store data at a node until the next trusted contact becomes available, then forward it with custody and integrity information.

NASA now operates delay-tolerant networking in its Near Space and Deep Space Networks. The environment differs, but the network condition transfers directly. End-to-end connectivity is a temporary opportunity, not a permanent assumption.

Each Atlantis message should carry source, destination, creation time, expiration, priority, integrity check, custody state, retransmission policy, and required acknowledgement. Nodes retain important messages across restart and link loss. A vehicle can physically carry a bundle between partitions.

The resulting rule is simple:

$$
\text{send when connected; otherwise store, carry, and forward}.
$$

This behavior should be visible to operators. They need to know what has been delivered, what is waiting, which node holds the only copy, and when the next route is expected.

## Time is part of every measurement

Distributed seismic, acoustic, navigation, biological, and vehicle data need a common time base. Fiber-connected nodes can receive precise timing from shore. Remote nodes require disciplined oscillators and periodic correction.

For fractional frequency error $\epsilon$, accumulated time error is approximately

$$
\Delta t=\epsilon T.
$$

At $\epsilon=10^{-6}$, one day creates about $0.0864\ \mathrm{s}$ of error. That may be unacceptable for event localization, acoustic ranging, sensor fusion, and causal ordering.

Every scientific record should include its timestamp, clock source, last synchronization, and estimated uncertainty. A precise-looking timestamp without an uncertainty history can be worse than an honest coarse time.

Communication nodes will also become navigation beacons. Acoustic ranges, clock quality, seafloor transponder position, inertial estimates, Doppler velocity, terrain matching, pressure depth, and occasional surface fixes will combine in Unit 12. Communications and positioning are separate services built from much of the same hardware.

## Bridge the air-water boundary

Radio and satellite service work above the surface. Acoustics work below it. A surface gateway joins the two.

Anchored buoys, autonomous surface vehicles, ships, and releasable emergency buoys can carry acoustic modems, satellite terminals, radio, GPS, weather sensors, storage, time references, and navigation beacons. The nominal fiber should remain faster and less weather-dependent. The gateway is the independent route that survives a cable cut.

A releasable emergency buoy can ascend from the institution with a stored state package or a thin tether. A tether may preserve higher data rate while creating entanglement, abrasion, spool, current, and vessel hazards. An untethered buoy can at least report position, crew count, fault, survival endurance, and requested assistance.

The institution does not need broadband to declare an emergency. It needs a message whose delivery can be trusted.

After shore-fiber failure, communication should progress through alternate fixed paths, surface gateways, releasable buoy, messenger vehicle, and periodic acoustic beacon. These modes should be rehearsed from refuge power. Emergency credentials, contact destinations, encryption keys, and message templates must exist locally.

## Priority must survive every hop

When bandwidth falls, Atlantis should transmit in this order:

1. Distress, crew-safety, and collision messages.
2. Life-support, structural, fire, pressure, and power alarms.
3. Mission-critical vehicle commands and recovery state.
4. Navigation and timing.
5. Transient scientific-event summaries.
6. Routine telemetry and compressed imagery.
7. Bulk science, software, and discretionary traffic.

A priority label at the source is useless if an intermediate acoustic relay ignores it. Queues, storage, surface gateways, and shore services must preserve the class throughout the route.

Priority also requires admission control. A large low-priority transfer should not begin if its interruption would strand the only valid copy or block an approaching vehicle's safety window.

## Trust commands that change matter

Atlantis networking is operational technology. It controls valves, power converters, chargers, robots, pressure isolation, and life support. NIST's operational-technology guidance emphasizes security alongside performance, reliability, and safety because network actions alter physical processes.

Every safety-critical command needs authenticated origin, integrity protection, sequence, time context, expiration, authorization, and an auditable result. Networks should enforce least privilege, segmentation, rate limits, and offline recovery. Physical systems still need independent interlocks.

Cybersecurity must continue while shore is unavailable. The institution cannot outsource identity, logs, key use, recovery images, or operator authority to a service reachable only through the failed cable.

Compromise and fault should be treated separately. A bad sensor, duplicate packet, delayed command, corrupted modem, and malicious node can produce similar symptoms. The control system should fail into bounded physical behavior while retaining enough evidence to distinguish them later.

## A network of networks

The first Atlantis network should have six layers:

| Layer | Primary purpose | Media |
| --- | --- | --- |
| Safety | Local survival and isolation | Redundant deterministic buses and fiber |
| Institutional | Modules, laboratories, docks, storage, shore | Redundant fiber and governed Ethernet |
| Fixed seafloor | Observatories, utilities, remote docks | Powered fiber and serviceable connectors |
| Local mobile | Vehicles within operational territory | Acoustic command, optical exchange, docking |
| Regional | Distant vehicles and outposts | Lower-frequency acoustics, relays, carried data |
| Global | Shore institutions and public networks | Submarine fiber, terrestrial networks, surface satellite links |

The network controller should select media using message priority, deadline, size, destination, channel state, energy, acoustic budget, and custody. A report destined for shore can move immediately over fiber, wait for a surface relay, or ride inside a returning vehicle without changing its identity.

The architecture succeeds when applications describe what they need and the network selects how to deliver it. Scientists should not rewrite their instruments every time a vehicle changes from acoustic to optical to docked fiber.

## Test transitions, not isolated modems

The first prototype should include two acoustic modems, two optical modems, a mobile robot, a fixed dock, a surface gateway, redundant internal fiber, and a delay-tolerant message service.

It should demonstrate acoustic discovery, coarse navigation, optical acquisition, high-rate transfer, physical docking, wired reconciliation, automatic fallback, stored-message custody, surface relay, stale-command rejection, and emergency communication after primary fiber and power loss.

Metrics should include application throughput rather than waveform burst rate, end-to-end latency, delivery probability, energy per delivered bit, range, time uncertainty, acoustic exposure, custody certainty, recovery time, and the consequence of a lost mode.

<figure class="process-figure" aria-labelledby="network-test-caption">
  <div class="process-figure__steps">
    <span><small>Connect</small><strong>Operate every medium normally</strong></span>
    <span><small>Partition</small><strong>Remove routes and corrupt timing</strong></span>
    <span><small>Preserve</small><strong>Hold priority, custody, and safety</strong></span>
    <span><small>Rejoin</small><strong>Reconcile data and authority</strong></span>
  </div>
  <figcaption id="network-test-caption">Figure 3. Network resilience appears in the transition through disconnection and recovery, not in an isolated link demonstration.</figcaption>
</figure>

## Communicate according to the ocean

The ocean does not prevent a global underwater network. It prevents one mobile wireless medium from providing terrestrial bandwidth, oceanic range, negligible latency, and low ecological cost simultaneously.

Fiber already provides gigabit fixed infrastructure at relevant depth and distance. Optical systems demonstrate megabit exchange at useful local range. Acoustic modems provide mobile reach at rates appropriate to commands and summaries. Physical vehicles can carry data volumes that would occupy an acoustic link for decades. Surface relays restore access to radio, satellite navigation, and terrestrial networks.

Atlantis should compose those strengths instead of demanding the same behavior from each. Its intelligence will lie in channel selection, local interpretation, explicit priority, message custody, time-quality tracking, evidence preservation, and safe autonomous operation while disconnected.

The next report will turn part of this network into a shared positioning, navigation, and timing system. It must show how institutions, vehicles, cargo, and rescue craft know where they are when GPS does not reach depth, inertial estimates drift, acoustic ranges are noisy, clocks age, and seafloor references can move or fail.
