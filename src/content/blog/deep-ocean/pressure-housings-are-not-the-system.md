---
title: "Pressure Housings Are Not the System"
description: "A reliability model for hadal vehicles where penetrators, buoyancy, and recovery logic dominate the pressure vessel itself."
frontier: "Deep Ocean"
published: 2026-06-29
readingTime: "9 min"
reportNo: "PX–OC–009"
prerequisites: []
featured: true
---

At full ocean depth, ambient pressure approaches $110\ \mathrm{MPa}$. The dramatic image is a collapsing sphere. The practical engineering problem is quieter: hundreds of interfaces accumulating small probabilities of failure during an unserviceable dive.

## Collapse is only one branch

For a thin spherical shell, the classical elastic buckling pressure scales approximately as

$$
p_{cr} \propto E\left(\frac{t}{R}\right)^2
$$

with Young's modulus $E$, wall thickness $t$, and radius $R$. Real housings depart from this ideal through ovality, weld residual stress, ports, and material scatter. Test factors must cover a distribution, not a nominal CAD surface.

But a vehicle can retain an intact hull and still be lost through:

- a connector leak that bridges a power rail;
- syntactic foam damage that removes ascent margin;
- a release that cannot shed ballast;
- battery isolation after a transient; or
- navigation drift that consumes the recovery window.

## Reliability belongs to the interfaces

If independent subsystems have survival probabilities $R_i$, the simplified mission reliability is

$$
R_{mission} = \prod_{i=1}^{n} R_i
$$

This model is crude—failures are often correlated—but it exposes the danger of part count. A hundred items at $99.9\%$ reliability yield only about $90.5\%$ combined reliability.

## Architect for graceful ascent

The recovery path should have fewer states than the science path. Ballast release can be triggered by multiple independent conditions: command, timeout, leak detection, undervoltage, or deadman logic. Each trigger needs an energy source and a physical mechanism that does not share the same failure mode.

### Verification stack

1. screen components above rated pressure;
2. cycle representative interfaces, not just pristine housings;
3. soak long enough for diffusion and creep effects;
4. inject sensor and power faults into the recovery logic; and
5. record actual configuration at test time.

The hadal vehicle should be understood as a **recoverable pressure network**, not as a pressure vessel with instruments attached.
