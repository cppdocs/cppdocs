---
title: "Utility library"
description: "Curated map of C++ utility facilities: vocabulary types, tuple/pair plumbing, formatting and conversion helpers, callable support, and diagnostics."
source_path: "cpp/utility"
category: "utility"
layout: "overview-hub"
overview_page_class: "overview-page-utility"
---

The C++ utility library is where many of the language's reusable support tools live: vocabulary types such as `optional` and `variant`, tuple and pair machinery, move/forward helpers, formatting and character conversion, callable wrappers, hashing, and newer diagnostics-oriented facilities.

<div class="overview-note">
This page is a curated hub for choosing the right utility family first. It does not try to absorb neighboring hubs such as <a href="/cpp/types/">Type support</a>, <a href="/cpp/error/">Error handling</a>, <a href="/cpp/concepts/">Concepts</a>, or <a href="/cpp/ranges/">Ranges</a>.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/optional/">Represent maybe-a-value or one-of-many values</a></h3>
    <p class="card-desc">Use the vocabulary types when you need optional presence, tagged alternatives, type-erased single values, or value-or-error transport.</p>
    <p class="card-links"><a href="/cpp/utility/optional/">optional</a> · <a href="/cpp/utility/variant/">variant</a> · <a href="/cpp/utility/any/">any</a> · <a href="/cpp/utility/expected/">expected</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/tuple/">Bundle values and unpack them generically</a></h3>
    <p class="card-desc">Pairs, tuples, tuple-like adaptation, and helper facilities for forwarding groups of values through generic code.</p>
    <p class="card-links"><a href="/cpp/utility/pair/">pair</a> · <a href="/cpp/utility/tuple/">tuple</a> · <a href="/cpp/utility/apply/">apply</a> · <a href="/cpp/utility/make_from_tuple/">make_from_tuple</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/move/">Move, forward, swap, and preserve value category</a></h3>
    <p class="card-desc">These helpers support efficient transfer, perfect forwarding, and explicit object replacement in low-level and generic utility code.</p>
    <p class="card-links"><a href="/cpp/utility/move/">move</a> · <a href="/cpp/utility/forward/">forward</a> · <a href="/cpp/utility/forward_like/">forward_like</a> · <a href="/cpp/utility/swap/">swap</a> · <a href="/cpp/utility/exchange/">exchange</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/format/">Format text or convert numbers to and from characters</a></h3>
    <p class="card-desc">Use utility formatting when you need presentation-oriented strings or fast locale-independent numeric parsing and printing.</p>
    <p class="card-links"><a href="/cpp/utility/format/">format</a> · <a href="/cpp/utility/to_chars/">to_chars</a> · <a href="/cpp/utility/from_chars/">from_chars</a> · <a href="/cpp/utility/chars_format/">chars_format</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/functional/">Work with callable objects, hashes, and comparison support</a></h3>
    <p class="card-desc">Choose this route for function objects, invocation helpers, hashing, comparison categories, and utility support for ordered or generic APIs.</p>
    <p class="card-links"><a href="/cpp/utility/functional/">functional</a> · <a href="/cpp/utility/hash/">hash</a> · <a href="/cpp/utility/compare/">compare</a> · <a href="/cpp/utility/bit/">bit utilities</a> · <a href="/cpp/utility/bitset/">bitset</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/source_location/">Capture source context or runtime diagnostics</a></h3>
    <p class="card-desc">Newer support types help with tracing, debugger-aware behavior, stack inspection, and explicit failure paths in modern library code.</p>
    <p class="card-links"><a href="/cpp/utility/source_location/">source_location</a> · <a href="/cpp/utility/basic_stacktrace/">basic_stacktrace</a> · <a href="/cpp/utility/stacktrace_entry/">stacktrace_entry</a> · <a href="/cpp/utility/breakpoint/">breakpoint</a> · <a href="/cpp/utility/unreachable/">unreachable</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Main destinations</th>
        <th>Related hub</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Represent an optional result, alternatives, erased value, or value-or-error</td>
        <td>Vocabulary types</td>
        <td><a href="/cpp/utility/optional/">optional</a>, <a href="/cpp/utility/variant/">variant</a>, <a href="/cpp/utility/any/">any</a>, <a href="/cpp/utility/expected/">expected</a></td>
        <td><a href="/cpp/error/">Error handling</a></td>
      </tr>
      <tr>
        <td>Bundle values together and dispatch generic code over them</td>
        <td>Tuple and pair facilities</td>
        <td><a href="/cpp/utility/pair/">pair</a>, <a href="/cpp/utility/tuple/">tuple</a>, <a href="/cpp/utility/apply/">apply</a>, <a href="/cpp/utility/integer_sequence/">integer_sequence</a></td>
        <td><a href="/cpp/types/">Type support</a></td>
      </tr>
      <tr>
        <td>Move or forward values while preserving category and efficiency</td>
        <td>Value movement helpers</td>
        <td><a href="/cpp/utility/move/">move</a>, <a href="/cpp/utility/forward/">forward</a>, <a href="/cpp/utility/forward_like/">forward_like</a>, <a href="/cpp/utility/exchange/">exchange</a>, <a href="/cpp/utility/as_const/">as_const</a></td>
        <td><a href="/cpp/language/reference/">References</a></td>
      </tr>
      <tr>
        <td>Format output or parse/print numbers without stream formatting overhead</td>
        <td>Formatting and char conversion</td>
        <td><a href="/cpp/utility/format/">format</a>, <a href="/cpp/utility/to_chars/">to_chars</a>, <a href="/cpp/utility/from_chars/">from_chars</a></td>
        <td><a href="/cpp/io/">I/O</a></td>
      </tr>
      <tr>
        <td>Store or pass callable behavior, hashes, or comparisons</td>
        <td>Callable and comparison support</td>
        <td><a href="/cpp/utility/functional/">functional</a>, <a href="/cpp/utility/hash/">hash</a>, <a href="/cpp/utility/compare/">compare</a></td>
        <td><a href="/cpp/concepts/">Concepts</a></td>
      </tr>
      <tr>
        <td>Use specialized bit-oriented support types and utilities</td>
        <td>Bit support</td>
        <td><a href="/cpp/utility/bit/">bit</a>, <a href="/cpp/utility/bitset/">bitset</a>, <a href="/cpp/utility/to_underlying/">to_underlying</a>, <a href="/cpp/utility/in_range/">in_range</a>, <a href="/cpp/utility/intcmp/">integer comparison functions</a></td>
        <td><a href="/cpp/numeric/">Numerics</a></td>
      </tr>
      <tr>
        <td>Attach runtime debugging or source-location context</td>
        <td>Diagnostics helpers</td>
        <td><a href="/cpp/utility/source_location/">source_location</a>, <a href="/cpp/utility/basic_stacktrace/">basic_stacktrace</a>, <a href="/cpp/utility/breakpoint/">breakpoint</a>, <a href="/cpp/utility/is_debugger_present/">is_debugger_present</a></td>
        <td><a href="/cpp/error/">Error handling</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Vocabulary And Support Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>What it is for</th>
        <th>Core destinations</th>
        <th>Typical headers</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vocabulary types</td>
        <td>Reusable result and state carriers that express absence, alternatives, erasure, or success/error values in APIs.</td>
        <td><a href="/cpp/utility/optional/">optional</a>, <a href="/cpp/utility/variant/">variant</a>, <a href="/cpp/utility/any/">any</a>, <a href="/cpp/utility/expected/">expected</a></td>
        <td><code>&lt;optional&gt;</code>, <code>&lt;variant&gt;</code>, <code>&lt;any&gt;</code>, <code>&lt;expected&gt;</code></td>
      </tr>
      <tr>
        <td>Tuple-like composition</td>
        <td>Group values, inspect tuple-like structure, and drive generic unpacking and construction.</td>
        <td><a href="/cpp/utility/pair/">pair</a>, <a href="/cpp/utility/tuple/">tuple</a>, <a href="/cpp/utility/apply/">apply</a>, <a href="/cpp/utility/make_from_tuple/">make_from_tuple</a>, <a href="/cpp/utility/integer_sequence/">integer_sequence</a></td>
        <td><code>&lt;utility&gt;</code>, <code>&lt;tuple&gt;</code></td>
      </tr>
      <tr>
        <td>Value movement and forwarding</td>
        <td>Move objects, preserve value category, exchange state, and build efficient generic transfer paths.</td>
        <td><a href="/cpp/utility/move/">move</a>, <a href="/cpp/utility/move_if_noexcept/">move_if_noexcept</a>, <a href="/cpp/utility/forward/">forward</a>, <a href="/cpp/utility/forward_like/">forward_like</a>, <a href="/cpp/utility/swap/">swap</a></td>
        <td><code>&lt;utility&gt;</code></td>
      </tr>
      <tr>
        <td>Formatting and conversion</td>
        <td>Produce formatted strings or perform fast, locale-independent character conversions for numeric values.</td>
        <td><a href="/cpp/utility/format/">format</a>, <a href="/cpp/utility/to_chars/">to_chars</a>, <a href="/cpp/utility/from_chars/">from_chars</a>, <a href="/cpp/utility/chars_format/">chars_format</a></td>
        <td><code>&lt;format&gt;</code>, <code>&lt;charconv&gt;</code></td>
      </tr>
      <tr>
        <td>Callable, hashing, and comparison support</td>
        <td>Function objects, invocation-oriented helpers, standard hashing, comparison categories, and ordering support.</td>
        <td><a href="/cpp/utility/functional/">functional</a>, <a href="/cpp/utility/hash/">hash</a>, <a href="/cpp/utility/compare/">compare</a></td>
        <td><code>&lt;functional&gt;</code>, <code>&lt;compare&gt;</code></td>
      </tr>
      <tr>
        <td>Bit-oriented support</td>
        <td>Specialized fixed-size bit containers and low-level helpers adjacent to numerics and systems-style code.</td>
        <td><a href="/cpp/utility/bitset/">bitset</a>, <a href="/cpp/utility/bit/">bit</a>, <a href="/cpp/utility/to_underlying/">to_underlying</a>, <a href="/cpp/utility/in_range/">in_range</a></td>
        <td><code>&lt;bitset&gt;</code>, <code>&lt;bit&gt;</code>, <code>&lt;utility&gt;</code></td>
      </tr>
      <tr>
        <td>Diagnostics and runtime support</td>
        <td>Attach source context, inspect stack traces, and express debugger-aware or impossible-code paths.</td>
        <td><a href="/cpp/utility/source_location/">source_location</a>, <a href="/cpp/utility/basic_stacktrace/">basic_stacktrace</a>, <a href="/cpp/utility/stacktrace_entry/">stacktrace_entry</a>, <a href="/cpp/utility/breakpoint/">breakpoint</a>, <a href="/cpp/utility/unreachable/">unreachable</a></td>
        <td><code>&lt;source_location&gt;</code>, <code>&lt;stacktrace&gt;</code>, <code>&lt;debugging&gt;</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Version Highlights

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Notable additions in this area</th>
        <th>Why it matters for navigation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/utility/move/">move</a>, <a href="/cpp/utility/forward/">forward</a>, <a href="/cpp/utility/tuple/">tuple</a>, <a href="/cpp/utility/functional/">functional</a>, <a href="/cpp/utility/hash/">hash</a></td>
        <td>The modern baseline for move support, tuple/pair plumbing, callable wrappers, and general-purpose utility code.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/utility/optional/">optional</a>, <a href="/cpp/utility/variant/">variant</a>, <a href="/cpp/utility/any/">any</a>, <a href="/cpp/utility/to_chars/">to_chars</a>, <a href="/cpp/utility/from_chars/">from_chars</a></td>
        <td>Introduced the first major vocabulary-type wave and the low-overhead character conversion path.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/utility/format/">format</a>, <a href="/cpp/utility/source_location/">source_location</a>, <a href="/cpp/utility/compare/">compare</a>, <a href="/cpp/utility/bit/">bit</a>, <a href="/cpp/utility/in_range/">in_range</a></td>
        <td>Added modern formatting, ordering support, source-context capture, and low-level utility helpers that now deserve first-class routes.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/utility/expected/">expected</a>, <a href="/cpp/utility/basic_stacktrace/">basic_stacktrace</a>, <a href="/cpp/utility/stacktrace_entry/">stacktrace_entry</a>, <a href="/cpp/utility/forward_like/">forward_like</a></td>
        <td>Expanded the library's vocabulary and diagnostics story and refined forwarding support for generic code.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/utility/breakpoint/">breakpoint</a>, <a href="/cpp/utility/breakpoint_if_debugging/">breakpoint_if_debugging</a>, <a href="/cpp/utility/is_debugger_present/">is_debugger_present</a></td>
        <td>Introduces explicit debugger-facing hooks, making runtime diagnostics a more visible utility sub-area.</td>
      </tr>
    </tbody>
  </table>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>This question is really about...</th>
        <th>Go here instead</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Type traits, limits, RTTI, and compile-time type inspection</td>
        <td><a href="/cpp/types/">Type support</a></td>
        <td>`/cpp/utility/` uses these facilities, but the canonical home for type-property navigation is the type-support hub.</td>
      </tr>
      <tr>
        <td>Exceptions, `error_code`, assertions, and termination behavior</td>
        <td><a href="/cpp/error/">Error handling</a></td>
        <td>Diagnostics helpers live here, but language/runtime error transport and failure models belong to the error hub.</td>
      </tr>
      <tr>
        <td>Constraints, requires-clauses, and concept vocabulary</td>
        <td><a href="/cpp/concepts/">Concepts</a></td>
        <td>Callable and comparison support often intersect with concepts, but the concept taxonomy is separate.</td>
      </tr>
      <tr>
        <td>Range adaptors, views, and iterator/range composition</td>
        <td><a href="/cpp/ranges/">Ranges</a></td>
        <td>Some utility helpers are used with ranges, but range navigation should stay in the specialized ranges hub.</td>
      </tr>
      <tr>
        <td>Formatting through streams, files, or print-oriented I/O flows</td>
        <td><a href="/cpp/io/">I/O</a></td>
        <td>`format` and `charconv` start here; stream state, file I/O, and print APIs belong to the I/O hub.</td>
      </tr>
      <tr>
        <td>C compatibility utilities and the older C-style library model</td>
        <td><a href="/c/">C reference root</a></td>
        <td>Use the C side when the portability question is fundamentally about the C library model rather than C++ vocabulary types and support helpers.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/optional/">Design an API result type</a></h3>
    <p class="card-desc">Start with the vocabulary types when your first design question is how to represent success, absence, alternatives, or recoverable failure.</p>
    <p class="card-links"><a href="/cpp/utility/optional/">optional</a> · <a href="/cpp/utility/variant/">variant</a> · <a href="/cpp/utility/expected/">expected</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/format/">Choose a text-conversion path</a></h3>
    <p class="card-desc">Use utility formatting when you need direct text production or low-level numeric conversion rather than stream formatting state.</p>
    <p class="card-links"><a href="/cpp/utility/format/">format</a> · <a href="/cpp/utility/to_chars/">to_chars</a> · <a href="/cpp/utility/from_chars/">from_chars</a> · <a href="/cpp/io/">I/O hub</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/source_location/">Add diagnostics context</a></h3>
    <p class="card-desc">Reach for source locations and stack traces when debugging and observability are part of the API design rather than an afterthought.</p>
    <p class="card-links"><a href="/cpp/utility/source_location/">source_location</a> · <a href="/cpp/utility/basic_stacktrace/">basic_stacktrace</a> · <a href="/cpp/error/">error hub</a></p>
  </section>
</div>
