---
title: "Numerics library"
description: "Math, random generation, complex arithmetic, constants, bit utilities, floating-point environment, and data-parallel numerics."
source_path: "cpp/numeric"
layout: "overview-hub"
overview_page_class: "overview-page-numeric"
category: "numeric"
---

The C++ numerics area combines several different problem spaces: scalar arithmetic helpers, bit-level integer tools, mathematical functions, random engines and distributions, complex numbers, compile-time ratios, floating-point control, and newer data-parallel facilities. This hub is the curated entry point when you know the task is numeric, but not yet which numeric model or header family you need.

<div class="overview-note">
This page is a navigation hub, not a flattened numeric index. It links out to the canonical math, random, complex, ratio, SIMD, and C-compatibility destinations instead of duplicating their full inventories.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/math/">Mathematical functions</a></h3>
    <p class="card-desc">Use this route for scalar math, transcendental functions, classification helpers, rounding, and the broader <code>&lt;cmath&gt;</code> surface.</p>
    <p class="card-links"><a href="/cpp/numeric/math/">Math</a> · <a href="/cpp/numeric/special_functions/">Special functions</a> · <a href="/cpp/numeric/constants/">Constants</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/random/">Random numbers and distributions</a></h3>
    <p class="card-desc">Start here when you need engines, distributions, seeding, or random-device entry points rather than deterministic arithmetic helpers.</p>
    <p class="card-links"><a href="/cpp/numeric/random/">Random</a> · <a href="/cpp/numeric/random/random_device/">random_device</a> · <a href="/cpp/numeric/random/mersenne_twister_engine/">mt19937</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/complex/">Complex numbers</a></h3>
    <p class="card-desc">Use <code>std::complex</code> and its function family when the numeric model itself is complex-valued, not just formatted text or scalar math.</p>
    <p class="card-links"><a href="/cpp/numeric/complex/">complex</a> · <a href="/cpp/numeric/complex/polar/">polar</a> · <a href="/cpp/numeric/complex/operator_arith/">arithmetic</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/header/bit/">Bit and integer helpers</a></h3>
    <p class="card-desc">Use the <code>&lt;bit&gt;</code> family and neighboring numeric helpers for bit width/counting, rotations, byte swapping, and exact integer-oriented utilities.</p>
    <p class="card-links"><a href="/cpp/header/bit/"><code>&lt;bit&gt;</code></a> · <a href="/cpp/numeric/popcount/">popcount</a> · <a href="/cpp/numeric/bit_cast/">bit_cast</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need</th>
        <th>Start with</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Scalar math, rounding, classification, or transcendental functions</td>
        <td><a href="/cpp/numeric/math/">Math</a></td>
        <td>This is the main route for <code>&lt;cmath&gt;</code>-style facilities such as <code>sqrt</code>, <code>log</code>, <code>hypot</code>, classification predicates, and rounding behavior.</td>
      </tr>
      <tr>
        <td>Mathematical constants or named numeric values</td>
        <td><a href="/cpp/numeric/constants/">Constants</a>, <a href="/cpp/header/numbers/"><code>&lt;numbers&gt;</code></a></td>
        <td>Use this route when the need is a named constant like <code>pi</code>, <code>e</code>, or related compile-time numeric values rather than a runtime computation.</td>
      </tr>
      <tr>
        <td>Random engines, distributions, or non-deterministic seeding</td>
        <td><a href="/cpp/numeric/random/">Random</a></td>
        <td>The random library separates engine choice, distribution choice, and seeding strategy in a way that is distinct from general-purpose arithmetic.</td>
      </tr>
      <tr>
        <td>Complex arithmetic or complex-valued functions</td>
        <td><a href="/cpp/numeric/complex/">complex</a></td>
        <td>Use the complex route when the value model itself is complex rather than when you just need more math functions on real numbers.</td>
      </tr>
      <tr>
        <td>Integer gcd/lcm, midpoint, interpolation, or saturating arithmetic</td>
        <td><a href="/cpp/numeric/gcd/">gcd</a>, <a href="/cpp/numeric/lcm/">lcm</a>, <a href="/cpp/numeric/midpoint/">midpoint</a>, <a href="/cpp/numeric/lerp/">lerp</a>, <a href="/cpp/numeric/add_sat/">add_sat</a></td>
        <td>These helpers solve focused numeric tasks without requiring the full math or algorithm hubs.</td>
      </tr>
      <tr>
        <td>Bit-level integer operations such as rotations, popcount, or width calculations</td>
        <td><a href="/cpp/header/bit/"><code>&lt;bit&gt;</code></a>, <a href="/cpp/numeric/popcount/">popcount</a>, <a href="/cpp/numeric/bit_width/">bit_width</a>, <a href="/cpp/numeric/byteswap/">byteswap</a></td>
        <td>These are modern integer utilities aimed at representation-aware code, hashing primitives, encodings, and low-level performance work.</td>
      </tr>
      <tr>
        <td>Compile-time rational arithmetic or unit-style ratios</td>
        <td><a href="/cpp/numeric/ratio/">ratio</a></td>
        <td><code>std::ratio</code> is the dedicated compile-time numeric model, distinct from runtime math and random facilities.</td>
      </tr>
      <tr>
        <td>Floating-point exception flags or rounding-mode control</td>
        <td><a href="/cpp/numeric/fenv/">Floating-point environment</a></td>
        <td>This route is for status flags and control modes, not general exception handling or arbitrary precision numerics.</td>
      </tr>
      <tr>
        <td>Vectorized or data-parallel numerics</td>
        <td><a href="/cpp/numeric/simd/">SIMD</a>, <a href="/cpp/numeric/valarray/">valarray</a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a></td>
        <td>These facilities are the right entry points when the question is about parallel numeric structure rather than just a scalar algorithm.</td>
      </tr>
    </tbody>
  </table>
</div>

## Numeric Families

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/math/">Scalar math</a></h3>
    <p class="card-desc">Core real-valued math functions, classifications, rounding modes, and the standard C-compatible math surface.</p>
    <p class="card-links"><a href="/cpp/numeric/math/">Common math</a> · <a href="/cpp/numeric/special_functions/">Special functions</a> · <a href="/cpp/numeric/constants/">Constants</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/header/bit/">Bit and integer utilities</a></h3>
    <p class="card-desc">Representation-aware integer operations such as popcount, rotations, width detection, bit casting, and byte swapping.</p>
    <p class="card-links"><a href="/cpp/numeric/bit_cast/">bit_cast</a> · <a href="/cpp/numeric/has_single_bit/">has_single_bit</a> · <a href="/cpp/numeric/rotl/">rotl</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/random/">Random</a></h3>
    <p class="card-desc">Pseudo-random engines, distributions, adapters, and seeding components for sampling and simulation tasks.</p>
    <p class="card-links"><a href="/cpp/numeric/random/">PRNG overview</a> · <a href="/cpp/numeric/random/random_device/">random_device</a> · <a href="/cpp/numeric/random/uniform_int_distribution/">uniform_int_distribution</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/complex/">Complex arithmetic</a></h3>
    <p class="card-desc">Complex values, transcendental functions on complex numbers, user-defined imaginary literals, and polar/cartesian conversions.</p>
    <p class="card-links"><a href="/cpp/numeric/complex/">complex</a> · <a href="/cpp/numeric/complex/abs/">abs</a> · <a href="/cpp/numeric/complex/polar/">polar</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/ratio/">Compile-time numerics</a></h3>
    <p class="card-desc">Ratios and associated arithmetic/comparison templates for type-level unit scales and exact rational constants.</p>
    <p class="card-links"><a href="/cpp/numeric/ratio/">ratio</a> · <a href="/cpp/numeric/ratio/ratio_add/">ratio_add</a> · <a href="/cpp/numeric/ratio/ratio_multiply/">ratio_multiply</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/numeric/simd/">Data-parallel numerics</a></h3>
    <p class="card-desc">SIMD and array-style numerics for wide-lane or vectorized computations, with <code>valarray</code> as the older array-expression route.</p>
    <p class="card-links"><a href="/cpp/numeric/simd/">SIMD</a> · <a href="/cpp/numeric/valarray/">valarray</a> · <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a></p>
  </section>
</div>

## Focused Numeric Helpers

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Helper family</th>
        <th>Use it for</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Arithmetic helpers</td>
        <td>Exact integer relationships, interpolation, and midpoint-style calculations.</td>
        <td><a href="/cpp/numeric/gcd/">gcd</a>, <a href="/cpp/numeric/lcm/">lcm</a>, <a href="/cpp/numeric/midpoint/">midpoint</a>, <a href="/cpp/numeric/lerp/">lerp</a></td>
      </tr>
      <tr>
        <td>Saturating arithmetic</td>
        <td>Overflow-bounded integer arithmetic where saturation is the intended semantic model.</td>
        <td><a href="/cpp/numeric/add_sat/">add_sat</a>, <a href="/cpp/numeric/sub_sat/">sub_sat</a>, <a href="/cpp/numeric/mul_sat/">mul_sat</a>, <a href="/cpp/numeric/div_sat/">div_sat</a>, <a href="/cpp/numeric/saturate_cast/">saturate_cast</a></td>
      </tr>
      <tr>
        <td>Bit manipulation</td>
        <td>Population counts, shifts-as-rotations, bit widths, and representation transforms.</td>
        <td><a href="/cpp/numeric/popcount/">popcount</a>, <a href="/cpp/numeric/countl_zero/">countl_zero</a>, <a href="/cpp/numeric/countr_zero/">countr_zero</a>, <a href="/cpp/numeric/byteswap/">byteswap</a>, <a href="/cpp/numeric/bit_cast/">bit_cast</a></td>
      </tr>
      <tr>
        <td>Floating-point environment</td>
        <td>Status flags, exceptions, and rounding mode control around floating-point evaluation.</td>
        <td><a href="/cpp/numeric/fenv/">fenv</a>, <a href="/cpp/numeric/fenv/fetestexcept/">fetestexcept</a>, <a href="/cpp/numeric/fenv/feround/">feround</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Modern Additions

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>What became easier to navigate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/numeric/gcd/">gcd</a> and <a href="/cpp/numeric/lcm/">lcm</a> provide direct integer relationship helpers that used to require ad hoc implementations.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/header/bit/"><code>&lt;bit&gt;</code></a>, <a href="/cpp/numeric/constants/">constants</a>, <a href="/cpp/numeric/midpoint/">midpoint</a>, and <a href="/cpp/numeric/lerp/">lerp</a> added a major modern wave of low-level and numerical convenience utilities.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td>Constexpr expansion across math and newer fixed-width floating-point support make older numeric pages intersect more with modern compile-time and portability concerns.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/numeric/simd/">SIMD</a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a>, and the saturating arithmetic family make the numerics hub much broader than the legacy math/random view.</td>
      </tr>
    </tbody>
  </table>
</div>

## Adjacent Hubs And Boundaries

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
        <td>Math, random generation, complex numbers, bit utilities, ratios, floating-point environment, and data-parallel numeric facilities.</td>
        <td><a href="/cpp/algorithm/">Algorithms</a> for generic sequence-processing algorithms, <a href="/cpp/chrono/">Chrono</a> for date/time modeling, <a href="/cpp/utility/">Utility</a> for formatting and char conversions, and <a href="/cpp/types/">Type support</a> for traits and numeric limits.</td>
      </tr>
      <tr>
        <td>Modern C++ numeric facilities.</td>
        <td><a href="/c/numeric/">C numerics</a> when you need the C-side compatibility surface or a C-only math/fenv/random route.</td>
      </tr>
    </tbody>
  </table>
</div>
