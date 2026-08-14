---
title: "The Positioning Architecture of Atlantis"
description: "A shared underwater positioning, navigation, and timing layer that carries vehicles from ocean-scale transit to precise docking without pretending that any coordinate is exact."
frontier: "Deep Ocean"
published: 2026-08-14T01:00:00-07:00
lastReviewed: 2026-08-14
readingTime: "20 min"
reportNo: "PX-OC-012"
author: "Mingkai"
copyrightHolder: "Mingkai"
revision: "1.0"
difficulty: "Advanced"
evidenceStatus: "Modeled"
readinessLevel: 2
reviewStatus: "Author reviewed"
references:
  - title: "Seafloor Mapping with the REMUS 600 Autonomous Underwater Vehicle"
    url: "https://oceanexplorer.noaa.gov/expedition-feature/technology-development-partnerships-ex1904-logs-july25-2/"
    publisher: "NOAA Ocean Exploration"
  - title: "Seafloor Geodesy"
    url: "https://geodesy.noaa.gov/research/climate-scale/seafloor-geodesy.shtml"
    publisher: "NOAA National Geodetic Survey"
  - title: "AUV Sentry"
    url: "https://ndsf.whoi.edu/sentry/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Systems, Sensors & Sampling Equipment"
    url: "https://ndsf.whoi.edu/sentry/systems-sentry/"
    publisher: "Woods Hole Oceanographic Institution"
  - title: "Terrain Relative Navigation"
    url: "https://www.mbari.org/project/terrain-relative-navigation/"
    publisher: "Monterey Bay Aquarium Research Institute"
  - title: "What Is Sonar?"
    url: "https://oceanservice.noaa.gov/facts/sonar.html"
    publisher: "NOAA National Ocean Service"
  - title: "How UTC(NIST) Works"
    url: "https://www.nist.gov/pml/time-and-frequency-division/time-realization/utcnist-time-scale/how-utcnist-works"
    publisher: "National Institute of Standards and Technology"
openProblems:
  - id: "close-atlantis-pnt-error-budget"
    title: "Close the Atlantis PNT error budget"
    question: "What horizontal, vertical, attitude, and timing uncertainty can the complete navigation stack actually guarantee during transit, scientific revisit, docking, construction, and rescue?"
    status: "Open"
    disciplines: ["Navigation engineering", "Estimation", "Underwater acoustics"]
    nextStep: "Run repeated closed-loop missions through surveyed terrain while independently measuring truth, then separate inertial, DVL, acoustic, sound-speed, map, beacon, and clock contributions for every operational mode."
  - id: "demonstrate-atlantis-reference-network"
    title: "Demonstrate a self-checking Atlantis reference network"
    question: "Can a regional network detect beacon movement, clock faults, sound-speed bias, inconsistent ranges, and compromised navigation messages before an unsafe position is accepted?"
    status: "Open"
    disciplines: ["Seafloor geodesy", "Timing", "Safety assurance"]
    nextStep: "Deploy a redundant beacon array with independent geodetic control, deliberately move and mis-time selected nodes, and verify that integrity monitoring isolates each fault while preserving bounded service."
prerequisites:
  - "deep-ocean/communications-architecture-of-atlantis"
featured: true
draft: false
---

<section class="paper-abstract" aria-labelledby="abstract-label">
  <p id="abstract-label" class="paper-label">Abstract</p>
  <p>Atlantis cannot depend on continuous satellite positioning because the radio frequencies used by global navigation satellite systems are strongly attenuated by seawater. A submerged vehicle must instead estimate motion, constrain drift, measure range, recognize terrain, and approach local references in sequence. I propose a shared positioning, navigation, and timing layer built from surface satellite fixes, inertial navigation, Doppler velocity, pressure depth, acoustic ranging, mapped terrain, sonar, optical markers, mechanical capture, and disciplined clocks. Each method corrects a different failure in the others. A deliberately simple inertial example shows why: an uncorrected acceleration bias of only $10^{-4}\ \mathrm{m/s^2}$ produces a theoretical position error of 648 meters after one hour. Acoustic range then introduces its own uncertainty through sound speed, beacon location, geometry, and time. The resulting architecture treats every position as an estimate with a reference frame, timestamp, covariance, age, and integrity state. It gives broad transit, precise scientific revisit, docking, construction, and rescue distinct operating envelopes instead of asking one sensor to satisfy all of them.</p>
</section>

## A coordinate is a claim

An underwater civilization cannot operate infrastructure whose location is merely assumed. It must know where institutions, vehicles, instruments, samples, cable routes, geodetic monuments, and hazards are. It must also know when each observation occurred and how strongly the available evidence supports the estimate.

On land, satellite navigation makes much of this work invisible. Underwater, the absence of a direct satellite signal exposes the reasoning underneath. Positioning asks where an asset is now. Navigation estimates how its state is changing and how it can reach a destination. Timing establishes when a measurement or event occurred. These are related services, but they are not interchangeable.

For a vehicle, I would estimate a state such as

$$
\mathbf{x}
=
\begin{bmatrix}
\mathbf{p} & \mathbf{v} & \mathbf{q} & \mathbf{b}_a & \mathbf{b}_g & \delta t
\end{bmatrix}^{T},
$$

where $\mathbf{p}$ is position, $\mathbf{v}$ is velocity, $\mathbf{q}$ is attitude, $\mathbf{b}_a$ and $\mathbf{b}_g$ are accelerometer and gyroscope biases, and $\delta t$ is clock offset. The estimate needs a covariance $\mathbf{P}$ that records uncertainty and correlation among those quantities.

<aside class="working-thesis" aria-label="Positioning principle">
  <span>Positioning principle</span>
  <p>No underwater position is complete without its reference frame, timestamp, uncertainty, age, and integrity state.</p>
</aside>

A confident coordinate can still be wrong. Atlantis must therefore report not only an answer, but also the evidence behind it, the sensors rejected by the estimator, the age of the last absolute correction, and the rate at which uncertainty is expected to grow.

## Carry the global reference through the surface

Global navigation satellite signals do not provide ordinary submerged coverage. NOAA describes the underlying constraint directly: their radio frequencies are strongly attenuated by seawater. A vehicle can obtain a satellite fix at the surface, raise an antenna, or receive a transferred position from a GPS-equipped ship, buoy, or autonomous surface vehicle. NOAA's REMUS 600 operations offer a practical example. The vehicle uses a surface GPS position to initialize its inertial system and surfaces periodically to update that position and report status.

Repeated surfacing is useful for independent vehicles and inefficient as the foundation of a permanent deep-ocean settlement. Atlantis should establish the global reference at the air-water boundary, then project it downward through surveyed acoustic and geodetic infrastructure.

That projection creates four coordinate scales:

<figure class="architecture-figure" aria-labelledby="reference-frames-caption">
  <div class="architecture-figure__grid">
    <div><small>Earth-fixed</small><strong>Relate Atlantis to the planet</strong><p>Latitude, longitude, legal boundaries, terrestrial maps, satellite positioning, and global geodesy.</p></div>
    <div><small>Regional</small><strong>Describe the seafloor territory</strong><p>Beacon fields, observatories, hazards, cable routes, vehicle corridors, and scientific sites.</p></div>
    <div><small>Institutional</small><strong>Operate the built environment</strong><p>Modules, docks, foundations, utility corridors, work zones, and construction references.</p></div>
    <div><small>Vehicle</small><strong>Control local motion</strong><p>Thrusters, manipulators, body attitude, obstacle avoidance, cameras, and sonar.</p></div>
  </div>
  <figcaption id="reference-frames-caption">Figure 1. Atlantis needs explicit transformations across global, regional, institutional, and vehicle frames. A sensor can be accurate within one frame while an incorrect transformation corrupts the final position.</figcaption>
</figure>

For frames $A$ and $B$, a point transformation can be written

$$
\mathbf{p}_A=\mathbf{R}_{AB}\mathbf{p}_B+\mathbf{t}_{AB}.
$$

Every transformation should be versioned, timed, and traceable to its survey. The position of a docking marker cannot be stored as an unlabeled triple of numbers. It must identify the datum, parent frame, orientation convention, epoch, survey method, and uncertainty.

## The seafloor is a moving reference

A structure bolted to the bottom is not automatically fixed. Sediment can settle. Foundations can creep. Cables can pull. Slopes can move. Earthquakes and volcanic processes can displace entire reference fields.

NOAA's seafloor geodesy program treats acoustic transponders as underwater active benchmarks. Surface platforms equipped with satellite positioning use acoustic observations to connect those benchmarks to a global reference system. The same physical arrangement can serve Atlantis, but a permanent institution should observe more frequently than a periodic research survey when its vehicles and docks depend on the result.

If the estimated beacon position changes from $\hat{\mathbf{p}}_i(t_1)$ to $\hat{\mathbf{p}}_i(t_2)$, then

$$
\Delta\mathbf{p}_i
=
\hat{\mathbf{p}}_i(t_2)-\hat{\mathbf{p}}_i(t_1).
$$

That difference is not self-explanatory. It could indicate real crustal motion, local settlement, a displaced transponder, a clock jump, an incorrect sound-speed model, or sensor failure. The reference network must use redundant observations to distinguish those causes.

This is where navigation becomes science. A carefully surveyed beacon field supports safe vehicle motion while also measuring deformation of the world beneath the institution. Atlantis should preserve the raw travel times, environmental profiles, calibration records, and reference solutions so future researchers can reinterpret motion rather than inherit a silent correction.

## Inertial navigation carries continuity

Accelerometers and gyroscopes let a vehicle propagate its state without an external signal. Gyroscopes measure angular motion. Accelerometers measure specific force. With attitude and gravity accounted for, the system integrates acceleration into velocity and velocity into position:

$$
\mathbf{v}(t)=\mathbf{v}_0+\int_0^t\mathbf{a}(\tau)\,d\tau,
$$

$$
\mathbf{p}(t)=\mathbf{p}_0+\int_0^t\mathbf{v}(\tau)\,d\tau.
$$

The advantage is continuity. An inertial navigation system does not wait for a beacon or map feature before producing an estimate. The cost is drift.

Consider a deliberately simplified constant accelerometer bias $b_a$. The associated errors grow approximately as

$$
\delta v(t)=b_at,
\qquad
\delta p(t)=\frac{1}{2}b_at^2.
$$

For $b_a=10^{-4}\ \mathrm{m/s^2}$ and $t=3{,}600\ \mathrm{s}$, the uncorrected position error is 648 meters. After three hours, the same expression gives about 5.83 kilometers. Real systems estimate bias and do not behave exactly like this one-dimensional example, but the scaling exposes the problem. A small persistent error becomes a large location claim because position is obtained through repeated integration.

Attitude error is equally consequential. If a vehicle travels distance $L$ with heading error $\delta\psi$, its approximate cross-track error is

$$
e_{\perp}\approx L\sin(\delta\psi)\approx L\delta\psi
$$

for a small angle in radians. A one-degree heading error across 10 kilometers produces roughly 175 meters of cross-track displacement. Atlantis must correct both motion and orientation, not simply improve its accelerometers.

## Velocity and pressure constrain the drift

A Doppler velocity log transmits acoustic beams and measures Doppler shift in the return. With bottom lock, it estimates velocity relative to the seafloor and provides a powerful constraint on inertial drift. When the bottom lies outside range, the instrument may track the water instead. That is a different measurement because the fluid itself moves.

WHOI's Sentry AUV demonstrates the sensor combination already used in deep-ocean work: inertial navigation and DVL, aided by long-baseline or ultra-short-baseline acoustic navigation. Its sensor inventory also includes a precision pressure instrument. The lesson is architectural. No single instrument owns the answer.

Hydrostatic pressure constrains vertical position:

$$
p=p_{0}+\int_0^h\rho(z)g\,dz.
$$

Under a constant-density approximation,

$$
h\approx\frac{p-p_0}{\rho g}.
$$

Accurate conversion requires temperature, salinity, pressure, sensor calibration, and a clear vertical datum. Pressure describes depth below the surface. Downward sonar describes altitude above the bottom. Their difference estimates local seafloor depth. Keeping those quantities distinct prevents the absurd but possible condition in which a vehicle knows its depth precisely and still collides with rising terrain.

## Acoustic range provides external evidence

Sound travels farther through water than radar or light, which is why sonar is central to underwater mapping and detection. A round-trip acoustic exchange estimates range as

$$
r=\frac{c_st}{2},
$$

where $c_s$ is sound speed and $t$ is round-trip travel time. A synchronized one-way measurement instead uses $r=c_s\Delta t$.

Neither equation turns travel time into perfect distance. Sound speed varies with temperature, salinity, and pressure. Rays bend through the water column. Multipath, motion, processing delay, clock offset, and transducer geometry perturb the observation.

If sound-speed error is $\delta c$, the first-order range error is approximately

$$
\delta r\approx r\frac{\delta c}{c_s}.
$$

Across 10 kilometers, an error of $1\ \mathrm{m/s}$ around a nominal $1{,}500\ \mathrm{m/s}$ produces about 6.7 meters of range error before beacon, clock, and geometry errors are added. Atlantis needs routine conductivity, temperature, depth, and sound-speed profiles along with ray-path modeling and calibration. A precise travel-time counter cannot repair a false environmental model.

## Geometry decides what ranges can reveal

A long-baseline system places several transponders at surveyed locations. For beacon $i$ at $\mathbf{p}_i$, a vehicle position $\mathbf{p}$ should satisfy

$$
\lVert\mathbf{p}-\mathbf{p}_i\rVert=r_i.
$$

Multiple independent ranges constrain the solution. The quality of that solution depends on where the beacons are. Several accurate ranges arriving from nearly the same direction can leave one axis weakly observed. Installation convenience is not a substitute for geometric observability.

I would place long-baseline references around the operational territory, not only beside the institution. Their service volume should be simulated against terrain shadow, expected vehicle depth, sound-speed structure, ecological transmission limits, and failure of individual nodes. The design output is a three-dimensional uncertainty map, not a circle labeled coverage.

Ultra-short-baseline arrays provide range and direction from a compact platform. Atlantis can mount them on the institution, surface gateways, crew vehicles, and construction assets. They reduce deployed infrastructure but become sensitive to platform attitude, array alignment, sound-speed profile, and calibration. Short-baseline arrays distributed across a dock or module can provide still stronger local geometry.

These methods occupy different scales. Long-baseline networks establish the region. Ultra-short-baseline systems track temporary operations and vehicles. Short-baseline arrays measure motion relative to a structure. The architecture is layered because the geometry is layered.

## Let the terrain correct the vehicle

Terrain-relative navigation compares live bathymetric measurements with a prior map. The estimator asks which candidate position best explains the observed shape of the seafloor. MBARI has demonstrated this approach with real-time multibeam measurements and pre-existing maps, including repeat surveys at Axial Seamount.

Terrain does not require a powered beacon and becomes more valuable as maps improve. It can correct inertial drift across large regions and allow repeated scientific tracks. Its weaknesses are equally important. Flat or repetitive bottom provides little distinctive information. Old maps can contain georeferencing error. Landslides, sediment movement, and new construction can make the environment disagree with its prior representation.

The map must therefore carry resolution, acquisition date, reference frame, uncertainty, and known change. A terrain match should be treated as evidence with likelihood, not as a magic relocation to the nearest familiar shape.

At close range, visual odometry, stereo cameras, structured light, fiducial markers, and recognizable infrastructure geometry can refine relative motion. Turbidity, darkness, scattering, moving organisms, fouling, and low-texture surfaces can weaken those methods. Imaging sonar should provide the complementary local view where optical sensing fails.

Atlantis can make this final environment intentionally legible. Docks, foundations, experiment frames, and utility corridors should contain surveyed acoustic reflectors, visual markers, distinct geometry, and controlled illumination. A civilization designs not only places to occupy, but places its machines can perceive.

## Fuse evidence without hiding disagreement

The navigation estimator predicts state from the vehicle dynamics, then corrects that prediction when a sensor contributes new evidence. In simplified form,

$$
\hat{\mathbf{x}}_{k|k-1}=f(\hat{\mathbf{x}}_{k-1|k-1},\mathbf{u}_k),
$$

$$
\hat{\mathbf{x}}_{k|k}
=
\hat{\mathbf{x}}_{k|k-1}
+\mathbf{K}_k
\left[
\mathbf{z}_k-h(\hat{\mathbf{x}}_{k|k-1})
\right].
$$

The gain $\mathbf{K}_k$ weights the innovation according to modeled uncertainty. That calculation is only as trustworthy as the model. Correlated acoustic errors, shared clocks, common maps, and beacons surveyed by the same flawed campaign can make several observations appear independent when they are not.

I want the operator to see disagreement instead of receiving a polished coordinate that conceals it. The interface should expose contributing sensors, rejected observations, residuals, estimated covariance, last independent fix, and predicted drift. Scientific data should preserve the navigation solution used at acquisition and allow later renavigation against improved maps or beacon surveys.

## Precision should increase with proximity

Different tasks require different accuracy. Basin transit can tolerate errors that would destroy a connector. Reoccupying a scientific site can accept less precision than placing a probe into the same microbial mat. Seafloor deformation research demands long-term stability that ordinary vehicle routing does not.

| Operation | Provisional horizontal accuracy | Primary purpose |
| --- | ---: | --- |
| Basin-scale transit | $100$ to $1{,}000\ \mathrm{m}$ | Reach a regional operating area |
| Regional routing | $10$ to $100\ \mathrm{m}$ | Avoid terrain and enter beacon coverage |
| Scientific revisit | $1$ to $10\ \mathrm{m}$ | Return to a mapped site |
| Instrument placement | $0.1$ to $1\ \mathrm{m}$ | Relate a sample to local structure |
| Docking approach | $0.05$ to $0.5\ \mathrm{m}$ | Enter terminal capture geometry |
| Mechanical mating | Millimeter to centimeter scale | Engage a connector or latch |
| Deformation science | Millimeter to centimeter change over time | Resolve slow motion |

These values are design targets, not demonstrated guarantees. Each must be converted into a full error budget for the actual vehicle, terrain, water column, beacon geometry, and consequence.

<figure class="process-figure" aria-labelledby="docking-sequence-caption">
  <div class="process-figure__steps">
    <span><small>Return</small><strong>INS, DVL, LBL, and terrain</strong></span>
    <span><small>Acquire</small><strong>Local acoustics and imaging sonar</strong></span>
    <span><small>Approach</small><strong>Optical and short-range geometry</strong></span>
    <span><small>Capture</small><strong>Contact, force, guides, and latches</strong></span>
  </div>
  <figcaption id="docking-sequence-caption">Figure 2. Docking is a sequence of shrinking uncertainty. The final centimeters belong partly to mechanical design, not only to software.</figcaption>
</figure>

The dock should use funnels, compliant guides, capture latches, tolerant connectors, and retry space. Navigation should deliver a vehicle into a capture envelope. It should not be forced to compensate for brittle mechanical geometry.

## Human transfer and construction require stricter bounds

A crewed vehicle must maintain absolute and institution-relative position, terrain clearance, remaining energy, alternative waiting points, an emergency ascent path, and a conservative integrity threshold. Atlantis should provide redundant homing beacons, a surveyed approach corridor, local sonar maps, terminal markers, and more than one usable interface where practical. The vehicle must be able to reject the dock and ascend.

Large cargo creates a different problem. Modules have high inertia, strong current response, limited maneuverability, and severe collision consequences. Surface dynamic positioning, acoustic tracking, descent-line monitoring, local transponders, robotic tugs, and seafloor capture structures should work as one construction system.

The controller should never convert economic urgency into positional certainty. If an estimate exceeds its allowed protection limit, it slows, increases clearance, seeks another observation, holds, retreats, or aborts. Crewed transfer and heavy placement deserve independent navigation assurance rather than a repurposed survey mode.

## Time belongs inside the range equation

Position and time cannot be designed separately. One-way acoustic ranging couples clock offset directly to distance:

$$
t_{\text{arrival}}
=
t_{\text{transmit}}
+\frac{r}{c_s}
+\delta t_{\text{clock}}
+\delta t_{\text{processing}}.
$$

Without a synchronized clock, the receiver cannot cleanly distinguish longer range from clock error. Two-way ranging removes part of that dependence, but adds propagation delay and assumes the exchange remains sufficiently stable.

Fixed nodes should receive absolute time and a frequency reference through the fiber system proposed in Unit 11. Vehicles and isolated nodes need stable local oscillators, periodic discipline, and an explicit holdover model. If fractional frequency error is $\epsilon$, a first approximation for accumulated time error after isolation interval $T$ is

$$
\delta t\approx\epsilon T.
$$

NIST characterizes holdover as operation after a clock loses its controlling reference and relies on its local oscillator, often with a model learned while synchronized. Atlantis should report each timestamp as an estimate with uncertainty, not as an endless string of digits. Scientific instruments, acoustic arrays, seismic sensors, vehicle logs, control events, and safety records need the same time-quality history.

The shore clock should discipline redundant institutional clocks rather than create one irreplaceable time server. Nodes should compare references, detect jumps, preserve monotonic event order, and increase uncertainty during isolation. When fiber returns, the system must reconcile time carefully. It cannot rewrite the apparent order of safety events simply to make the clocks agree.

## Integrity determines what the vehicle may do

Accuracy describes how close an estimate is expected to be. Integrity asks whether it is safe to rely on that estimate for the present operation. A small covariance produced by a failed model is not high integrity.

Atlantis should monitor inconsistent beacon ranges, loss of DVL bottom lock, pressure drift, clock jumps, map mismatch, marker misidentification, beacon displacement, spoofed messages, stale transformations, and estimator divergence. It should compare independent sensing families rather than count sensors that share the same failure.

The navigation state then governs behavior:

| Integrity state | Permitted behavior |
| --- | --- |
| High | Docking, manipulation, human transfer, close infrastructure work |
| Nominal | Scientific survey and regional navigation |
| Degraded | Slow transit, greater clearance, seek an independent update |
| Poor | Hold or move toward a surveyed safe region |
| Lost | Activate recovery behavior or ascend when safe |

A vehicle with 50 meters of uncertainty does not attempt a narrow docking corridor because the mission plan says it is late. Operational permission comes from demonstrated protection limits.

Navigation messages also need authenticated identity, time context, integrity protection, and replay resistance. A malicious beacon and a displaced beacon may produce similar residuals, but their remedies differ. The estimator should reject unsafe evidence first and preserve enough records to determine the cause afterward.

## Build one regional reference service

The first Atlantis PNT deployment should combine surveyed long-baseline beacons, institution-mounted acoustic arrays, sound-speed profilers, pressure references, geodetic monuments, terrain maps, docking markers, fiber timing, independent oscillators, and emergency homing signals.

Future institutions should be able to use one another's references. That requires common datums, frame transformations, beacon identities, message formats, timestamp standards, map metadata, uncertainty representation, integrity flags, and approach procedures. Interoperability is not administrative polish. It determines whether a rescue vehicle from another operator can find the correct entrance under degraded conditions.

Active acoustic navigation must also respect the ecological budget established in Unit 11. The regional service should use interrogation, scheduling, adaptive power, directional transmission, quiet periods, and shared measurements. More frequent pings do not automatically create a better system if they interfere with one another or burden the local soundscape.

The architecture should behave as shared civil infrastructure. Vehicles request the quality of service required for an operation. The network returns observations, corrections, timing quality, and integrity information without hiding the limits of the region.

## Prove the chain from drift to capture

The first prototype should include at least three acoustic beacons, a DVL-equipped robot, an inertial unit, pressure sensing, environmental sound-speed measurements, a terrain map, a local acoustic array, an optical docking target, and a shared timing service.

I would ask the robot to complete the same route under progressively richer evidence: inertial only, inertial plus DVL, acoustic correction, terrain correction, local acquisition, optical approach, and mechanical docking. Then I would remove beacons, bias the sound-speed model, disturb a clock, obscure visual markers, remove DVL bottom lock, and command an approach whose required precision exceeds the current integrity state.

<figure class="process-figure" aria-labelledby="pnt-test-caption">
  <div class="process-figure__steps">
    <span><small>Drift</small><strong>Measure each unaided error mode</strong></span>
    <span><small>Correct</small><strong>Add independent observations</strong></span>
    <span><small>Corrupt</small><strong>Move references and bias time</strong></span>
    <span><small>Protect</small><strong>Abort before uncertainty becomes hazard</strong></span>
  </div>
  <figcaption id="pnt-test-caption">Figure 3. The prototype succeeds when it bounds error and refuses unsafe action, not merely when it completes a nominal route.</figcaption>
</figure>

An initial position budget may be written

$$
\sigma_p^2
\approx
\sigma_{\mathrm{INS}}^2
+\sigma_{\mathrm{DVL}}^2
+\sigma_{\mathrm{acoustic}}^2
+\sigma_{c_s}^2
+\sigma_{\mathrm{beacon}}^2
+\sigma_{\mathrm{clock}}^2
+\sigma_{\mathrm{map}}^2.
$$

The final estimator cannot assume all terms are independent. This expression is still useful because it forces every accuracy claim to identify a physical source, validation method, and operating condition.

## Navigate according to confidence

The ocean already provides the measurable quantities Atlantis needs: acceleration, angular velocity, pressure, Doppler shift, acoustic travel time, terrain geometry, optical structure, and contact. None of them remains perfect across every range and condition. The solution is repeated correction with explicit confidence.

Surface satellite fixes establish the global reference. Surveyed acoustic beacons and geodetic monuments carry it underwater. INS, DVL, and pressure maintain continuous vehicle state. Acoustic ranges and terrain matching correct accumulated drift. Sonar and optical references resolve the institution at close range. Compliant mechanical capture closes the last gap. Fiber distributes time, while local clocks preserve bounded operation through disconnection.

I am therefore not designing an underwater GPS. I am designing a public reference system in which every method knows what it can observe, every estimate declares what it does not know, and every vehicle changes behavior before uncertainty becomes danger.

The next report will define the robotic fleet that uses this reference system. It will decide how ROVs, AUVs, landers, crawlers, inspection robots, cargo vehicles, and construction machines divide the work of observing, manipulating, maintaining, and extending the physical reach of Atlantis.
