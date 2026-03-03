---
title: "C Numeric"
description: "Curated hub for C numerics: math, complex arithmetic, floating-point environment, random number generation, bit utilities, and newer checked integer helpers."
source_path: "c/numeric"
layout: "overview-hub"
---

The C numerics area covers much more than "math functions". It includes floating-point classification and exceptions, complex arithmetic, pseudo-random number generation, bit utilities, type-generic dispatch, and newer checked integer arithmetic helpers.

<div class="overview-note">
Use this hub when your question is about numeric computation or numeric representation. For raw memory, strings, or time/date functions, start from <a href="/c/memory/">Memory</a>, <a href="/c/string/">String</a>, or <a href="/c/chrono/">Chrono</a> instead.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/math/">Real-valued math</a></h3>
    <p class="card-desc">Elementary functions, powers, rounding, classification, special values, and the core floating-point function families.</p>
    <p class="card-links"><a href="/c/numeric/math/sqrt/">sqrt</a> · <a href="/c/numeric/math/pow/">pow</a> · <a href="/c/numeric/math/fpclassify/">fpclassify</a> · <a href="/c/numeric/math/NAN/">NAN</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/complex/">Complex arithmetic</a></h3>
    <p class="card-desc">Complex numbers, projections, magnitudes, trigonometric/exponential functions, and the C99 complex model.</p>
    <p class="card-links"><a href="/c/numeric/complex/cabs/">cabs</a> · <a href="/c/numeric/complex/creal/">creal</a> · <a href="/c/numeric/complex/cproj/">cproj</a> · <a href="/c/numeric/complex/I/">I</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/fenv/">Floating-point environment</a></h3>
    <p class="card-desc">Exception flags, rounding direction, saved environments, and the parts of C numerics that depend on the current FP execution state.</p>
    <p class="card-links"><a href="/c/numeric/fenv/feclearexcept/">feclearexcept</a> · <a href="/c/numeric/fenv/fetestexcept/">fetestexcept</a> · <a href="/c/numeric/fenv/FE_round/">rounding macros</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/random/">Pseudo-random number generation</a></h3>
    <p class="card-desc">The classic `rand`/`srand` surface and its limits, suitable mostly for simple or legacy code paths.</p>
    <p class="card-links"><a href="/c/numeric/random/rand/">rand</a> · <a href="/c/numeric/random/srand/">srand</a> · <a href="/c/numeric/random/RAND_MAX/">RAND_MAX</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/bit/">Bit utilities</a></h3>
    <p class="card-desc">C23 bit operations and endian-related helpers for low-level integer representation work.</p>
    <p class="card-links"><a href="/c/numeric/bit/stdc_leading_zeros/">stdc_leading_zeros</a> · <a href="/c/numeric/bit/endian/">endian</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/tgmath/">Type-generic and checked arithmetic</a></h3>
    <p class="card-desc">Macros that dispatch across floating/complex families and the newer checked integer operations added for overflow-aware arithmetic.</p>
    <p class="card-links"><a href="/c/numeric/tgmath/">tgmath</a> · <a href="/c/numeric/ckd_add/">ckd_add</a> · <a href="/c/numeric/ckd_sub/">ckd_sub</a> · <a href="/c/numeric/ckd_mul/">ckd_mul</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Compute elementary functions, powers, roots, or rounding behavior</td>
        <td><a href="/c/numeric/math/">Math</a></td>
        <td>The main real-valued function families, classification macros, and floating constants live here.</td>
      </tr>
      <tr>
        <td>Work with `double complex` and related types</td>
        <td><a href="/c/numeric/complex/">Complex</a></td>
        <td>Complex-specific functions and constants are separate from the real-valued math surface.</td>
      </tr>
      <tr>
        <td>Inspect or control FP exceptions and rounding mode</td>
        <td><a href="/c/numeric/fenv/">Floating-point environment</a></td>
        <td>These APIs deal with execution-state side effects, not just numeric values.</td>
      </tr>
      <tr>
        <td>Generate simple pseudo-random integers</td>
        <td><a href="/c/numeric/random/">Random</a></td>
        <td>The C library exposes the traditional `rand`/`srand` interface here.</td>
      </tr>
      <tr>
        <td>Use type-generic numeric macros across float/double/complex variants</td>
        <td><a href="/c/numeric/tgmath/">Type-generic math</a></td>
        <td><code>&lt;tgmath.h&gt;</code> chooses the right overload-like macro expansion for you.</td>
      </tr>
      <tr>
        <td>Write overflow-aware integer arithmetic in modern C</td>
        <td><a href="/c/numeric/ckd_add/">ckd_add</a>, <a href="/c/numeric/ckd_sub/">ckd_sub</a>, <a href="/c/numeric/ckd_mul/">ckd_mul</a></td>
        <td>The checked integer helpers are the direct route when arithmetic overflow must be detected rather than ignored.</td>
      </tr>
      <tr>
        <td>Reason about bit widths, leading/trailing zeros, or endianness</td>
        <td><a href="/c/numeric/bit/">Bit manipulation</a></td>
        <td>The newer bit utilities cover low-level representation-oriented integer tasks.</td>
      </tr>
    </tbody>
  </table>
</div>

## Numeric Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Representative entry points</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Core math</td>
        <td><a href="/c/numeric/math/sin/">sin</a>, <a href="/c/numeric/math/cos/">cos</a>, <a href="/c/numeric/math/pow/">pow</a>, <a href="/c/numeric/math/sqrt/">sqrt</a>, <a href="/c/numeric/math/fma/">fma</a></td>
        <td>Real-valued mathematical computation, rounding, powers, logs, and transcendental functions.</td>
      </tr>
      <tr>
        <td>Classification and special values</td>
        <td><a href="/c/numeric/math/fpclassify/">fpclassify</a>, <a href="/c/numeric/math/isfinite/">isfinite</a>, <a href="/c/numeric/math/isnan/">isnan</a>, <a href="/c/numeric/math/NAN/">NAN</a>, <a href="/c/numeric/math/INFINITY/">INFINITY</a></td>
        <td>Detect value categories and handle NaN/infinity-aware code paths.</td>
      </tr>
      <tr>
        <td>Complex arithmetic</td>
        <td><a href="/c/numeric/complex/cabs/">cabs</a>, <a href="/c/numeric/complex/creal/">creal</a>, <a href="/c/numeric/complex/cimag/">cimag</a>, <a href="/c/numeric/complex/cpow/">cpow</a></td>
        <td>Complex-number computation and decomposition under the C complex model.</td>
      </tr>
      <tr>
        <td>Floating-point environment</td>
        <td><a href="/c/numeric/fenv/feclearexcept/">feclearexcept</a>, <a href="/c/numeric/fenv/fetestexcept/">fetestexcept</a>, <a href="/c/numeric/fenv/feraiseexcept/">feraiseexcept</a>, <a href="/c/numeric/fenv/feholdexcept/">feholdexcept</a></td>
        <td>Exception flags, saved environments, and rounding/FP-state-sensitive execution.</td>
      </tr>
      <tr>
        <td>Pseudo-random numbers</td>
        <td><a href="/c/numeric/random/rand/">rand</a>, <a href="/c/numeric/random/srand/">srand</a>, <a href="/c/numeric/random/RAND_MAX/">RAND_MAX</a></td>
        <td>Traditional C library PRNG entry points for simple or legacy use.</td>
      </tr>
      <tr>
        <td>Type-generic dispatch</td>
        <td><a href="/c/numeric/tgmath/">tgmath</a></td>
        <td>Calling the right math/complex family through macros instead of choosing the suffixed name manually.</td>
      </tr>
      <tr>
        <td>Checked and bit-oriented integer helpers</td>
        <td><a href="/c/numeric/ckd_add/">ckd_add</a>, <a href="/c/numeric/ckd_sub/">ckd_sub</a>, <a href="/c/numeric/ckd_mul/">ckd_mul</a>, <a href="/c/numeric/bit/stdc_leading_zeros/">stdc_leading_zeros</a></td>
        <td>Overflow-aware arithmetic and low-level integer representation utilities in newer C revisions.</td>
      </tr>
    </tbody>
  </table>
</div>

## Common Entry Points

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Go here</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Absolute value / magnitude</td>
        <td><a href="/c/numeric/math/abs/">abs</a>, <a href="/c/numeric/math/fabs/">fabs</a>, <a href="/c/numeric/complex/cabs/">cabs</a></td>
        <td>Pick integer, real floating, or complex magnitude based on the numeric domain.</td>
      </tr>
      <tr>
        <td>Exponentials, logs, and powers</td>
        <td><a href="/c/numeric/math/exp/">exp</a>, <a href="/c/numeric/math/log/">log</a>, <a href="/c/numeric/math/pow/">pow</a></td>
        <td>These are central math-family entry points and often pair with classification/error handling.</td>
      </tr>
      <tr>
        <td>Roots and distance-like helpers</td>
        <td><a href="/c/numeric/math/sqrt/">sqrt</a>, <a href="/c/numeric/math/cbrt/">cbrt</a>, <a href="/c/numeric/math/hypot/">hypot</a></td>
        <td>Use these instead of ad hoc formulas when precision and special cases matter.</td>
      </tr>
      <tr>
        <td>Classify a floating-point result</td>
        <td><a href="/c/numeric/math/fpclassify/">fpclassify</a>, <a href="/c/numeric/math/isfinite/">isfinite</a>, <a href="/c/numeric/math/isnan/">isnan</a>, <a href="/c/numeric/math/signbit/">signbit</a></td>
        <td>These are often needed around exceptional or boundary numeric cases.</td>
      </tr>
      <tr>
        <td>Check or clear FP exceptions</td>
        <td><a href="/c/numeric/fenv/feclearexcept/">feclearexcept</a>, <a href="/c/numeric/fenv/fetestexcept/">fetestexcept</a></td>
        <td>Start here when correctness depends on FP status flags rather than only returned values.</td>
      </tr>
      <tr>
        <td>Seed and draw from the classic PRNG</td>
        <td><a href="/c/numeric/random/srand/">srand</a>, <a href="/c/numeric/random/rand/">rand</a></td>
        <td>Useful mainly for compatibility and simple code; not a modern high-quality generator design.</td>
      </tr>
    </tbody>
  </table>
</div>

## Standard Evolution

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Navigation impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C99</span></td>
        <td>Major expansion: complex arithmetic, floating-point environment, type-generic math, classification macros, and many modern math facilities became part of the standard library.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C11</span></td>
        <td>The numeric area gained alignment with newer language features and continued to rely on the C99 math/complex/fenv core as the main navigation backbone.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C23</span></td>
        <td>Added newer bit helpers and checked integer arithmetic entry points, making `/c/numeric/` broader than just floating-point and complex APIs.</td>
      </tr>
    </tbody>
  </table>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>This hub covers</th>
        <th>Use a different hub for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Math, complex numbers, FP environment, random numbers, checked arithmetic, and bit-oriented numeric helpers.</td>
        <td><a href="/c/string/">String</a> for text-to-number conversion and byte-string utilities, <a href="/c/chrono/">Chrono</a> for time/date arithmetic, <a href="/c/language/">Language</a> for constant-expression and conversion rules.</td>
      </tr>
      <tr>
        <td>The C library view of numerics.</td>
        <td><a href="/cpp/numeric/">C++ numerics</a> when you need the C++ library surface instead of the C one.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/math/">I need a math function</a></h3>
    <p class="card-desc">Start from the math section when the main question is about a computation on real-valued arguments or a floating-point classification rule.</p>
    <p class="card-links"><a href="/c/numeric/math/sin/">sin</a> · <a href="/c/numeric/math/pow/">pow</a> · <a href="/c/numeric/math/fpclassify/">fpclassify</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/complex/">I need complex-number support</a></h3>
    <p class="card-desc">Start from the complex section when values are truly complex, not just paired real values passed through ordinary math functions.</p>
    <p class="card-links"><a href="/c/numeric/complex/cabs/">cabs</a> · <a href="/c/numeric/complex/creal/">creal</a> · <a href="/c/numeric/complex/cpow/">cpow</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/fenv/">I need FP state or exception control</a></h3>
    <p class="card-desc">Start from the floating-point environment when return values alone are not enough and FP flags or rounding mode affect correctness.</p>
    <p class="card-links"><a href="/c/numeric/fenv/feclearexcept/">feclearexcept</a> · <a href="/c/numeric/fenv/fetestexcept/">fetestexcept</a> · <a href="/c/numeric/fenv/FE_round/">rounding macros</a></p>
  </section>
</div>
