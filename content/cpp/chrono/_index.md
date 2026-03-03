---
title: "Chrono"
description: "Curated hub for durations, clocks, time points, calendars, time zones, formatting/parsing, literals, and C compatibility."
source_path: "cpp/chrono"
category: "chrono"
layout: "overview-hub"
---

The chrono library spans several distinct models: measuring elapsed time, representing absolute points in time, formatting and parsing, calendar arithmetic, time-zone-aware civil time, and compatibility with the older C date/time surface. This page is the task-first entry point for choosing the right chrono area before diving into individual types or functions.

<div class="overview-note">
Chrono changed shape significantly in C++20. If you only remember `duration`, `time_point`, and the three classic clocks, use this hub to find the newer calendar and time-zone surfaces as well.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/chrono/duration/">Durations and units</a></h3>
    <p class="card-desc">Use durations when you are measuring or transforming spans of time rather than anchoring events to an absolute clock.</p>
    <p class="card-links"><a href="/cpp/chrono/duration/">duration</a> · <a href="/cpp/chrono/duration_values/">duration_values</a> · <a href="/cpp/chrono/treat_as_floating_point/">treat_as_floating_point</a> · <a href="/cpp/header/chrono/"><code>&lt;chrono&gt;</code></a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/chrono/time_point/">Time points and clocks</a></h3>
    <p class="card-desc">Use time points and clocks for timestamps, elapsed-time measurement, and conversions between time representations.</p>
    <p class="card-links"><a href="/cpp/chrono/time_point/">time_point</a> · <a href="/cpp/chrono/steady_clock/">steady_clock</a> · <a href="/cpp/chrono/system_clock/">system_clock</a> · <a href="/cpp/chrono/high_resolution_clock/">high_resolution_clock</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/chrono/year_month_day/">Calendars and civil dates</a></h3>
    <p class="card-desc">Use the calendar layer when the problem is calendar arithmetic, weekdays, months, and human-facing dates rather than raw epoch counts.</p>
    <p class="card-links"><a href="/cpp/chrono/year/">year</a> · <a href="/cpp/chrono/month/">month</a> · <a href="/cpp/chrono/day/">day</a> · <a href="/cpp/chrono/year_month_day/">year_month_day</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/chrono/zoned_time/">Time zones and local time</a></h3>
    <p class="card-desc">Start here for local-time conversion, time-zone databases, daylight-saving ambiguity, and zoned timestamps.</p>
    <p class="card-links"><a href="/cpp/chrono/zoned_time/">zoned_time</a> · <a href="/cpp/chrono/time_zone/">time_zone</a> · <a href="/cpp/chrono/current_zone/">current_zone</a> · <a href="/cpp/chrono/tzdb/">tzdb</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/chrono/parse/">Formatting and parsing</a></h3>
    <p class="card-desc">Use these routes when text representation matters: parsing timestamps, streaming chrono values, or formatting calendar/time-zone-aware data.</p>
    <p class="card-links"><a href="/cpp/chrono/parse/">parse</a> · <a href="/cpp/chrono/system_clock/from_stream/">from_stream</a> · <a href="/cpp/chrono/system_clock/operator_ltlt/">stream output</a> · <a href="/cpp/chrono/hh_mm_ss/">hh_mm_ss</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/chrono/c/">C compatibility</a></h3>
    <p class="card-desc">Use the C bridge when you need the older C date/time surface or must interoperate with `time_t` and C-style calendar APIs.</p>
    <p class="card-links"><a href="/cpp/chrono/c/">C date/time utilities</a> · <a href="/cpp/chrono/system_clock/to_time_t/">to_time_t</a> · <a href="/cpp/chrono/system_clock/from_time_t/">from_time_t</a></p>
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
        <td>Measure elapsed time or attach units to a count</td>
        <td><a href="/cpp/chrono/duration/">duration</a></td>
        <td>Durations model spans of time independently of any particular clock or epoch.</td>
      </tr>
      <tr>
        <td>Timestamp an event on a specific clock</td>
        <td><a href="/cpp/chrono/time_point/">time_point</a>, <a href="/cpp/chrono/system_clock/">system_clock</a>, <a href="/cpp/chrono/steady_clock/">steady_clock</a></td>
        <td>Time points combine a duration-like offset with a clock model.</td>
      </tr>
      <tr>
        <td>Pick the right clock for performance or wall time</td>
        <td><a href="/cpp/chrono/steady_clock/">steady_clock</a>, <a href="/cpp/chrono/system_clock/">system_clock</a>, <a href="/cpp/chrono/high_resolution_clock/">high_resolution_clock</a></td>
        <td>`steady_clock` is monotonic for interval measurement; `system_clock` is the wall-clock route; `high_resolution_clock` is implementation-defined.</td>
      </tr>
      <tr>
        <td>Represent calendar dates like 2026-02-28 or weekdays/months</td>
        <td><a href="/cpp/chrono/year_month_day/">year_month_day</a>, <a href="/cpp/chrono/weekday/">weekday</a>, <a href="/cpp/chrono/month_day/">month_day</a></td>
        <td>The calendar layer is distinct from raw elapsed durations and epoch counts.</td>
      </tr>
      <tr>
        <td>Convert between UTC, local, and named time zones</td>
        <td><a href="/cpp/chrono/zoned_time/">zoned_time</a>, <a href="/cpp/chrono/time_zone/">time_zone</a>, <a href="/cpp/chrono/current_zone/">current_zone</a></td>
        <td>This route handles civil-time ambiguity, daylight-saving transitions, and the time-zone database.</td>
      </tr>
      <tr>
        <td>Parse or format chrono values as text</td>
        <td><a href="/cpp/chrono/parse/">parse</a>, <a href="/cpp/chrono/hh_mm_ss/">hh_mm_ss</a>, chrono streaming/formatter pages</td>
        <td>Use the text route when representation matters more than arithmetic.</td>
      </tr>
      <tr>
        <td>Bridge to C date/time APIs</td>
        <td><a href="/cpp/chrono/c/">C date and time utilities</a>, <a href="/cpp/chrono/system_clock/to_time_t/">to_time_t</a>, <a href="/cpp/chrono/system_clock/from_time_t/">from_time_t</a></td>
        <td>This is the interoperability route when modern chrono meets older `time_t`-based code.</td>
      </tr>
    </tbody>
  </table>
</div>

## Chrono Families

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
        <td>Durations and literals</td>
        <td><a href="/cpp/chrono/duration/">duration</a>, <a href="/cpp/header/chrono/"><code>&lt;chrono&gt;</code></a>, <a href="/cpp/chrono/duration_values/">duration_values</a>, <a href="/cpp/chrono/treat_as_floating_point/">treat_as_floating_point</a></td>
        <td>Spans of time, unit-safe arithmetic, and source-level literal notation.</td>
      </tr>
      <tr>
        <td>Clock and timestamp core</td>
        <td><a href="/cpp/chrono/time_point/">time_point</a>, <a href="/cpp/chrono/system_clock/">system_clock</a>, <a href="/cpp/chrono/steady_clock/">steady_clock</a>, <a href="/cpp/chrono/high_resolution_clock/">high_resolution_clock</a></td>
        <td>Timestamping, elapsed-time measurement, and conversions relative to clock epochs.</td>
      </tr>
      <tr>
        <td>Calendar dates and civil time</td>
        <td><a href="/cpp/chrono/year/">year</a>, <a href="/cpp/chrono/month/">month</a>, <a href="/cpp/chrono/day/">day</a>, <a href="/cpp/chrono/year_month_day/">year_month_day</a>, <a href="/cpp/chrono/weekday/">weekday</a></td>
        <td>Human-facing dates, weekdays, month/day composition, and calendar arithmetic.</td>
      </tr>
      <tr>
        <td>Time zones and database</td>
        <td><a href="/cpp/chrono/zoned_time/">zoned_time</a>, <a href="/cpp/chrono/time_zone/">time_zone</a>, <a href="/cpp/chrono/tzdb/">tzdb</a>, <a href="/cpp/chrono/tzdb_list/">tzdb_list</a>, <a href="/cpp/chrono/current_zone/">current_zone</a></td>
        <td>Local time conversion, named zones, database lookup/reload, and DST ambiguity handling.</td>
      </tr>
      <tr>
        <td>Alternative clocks and conversions</td>
        <td><a href="/cpp/chrono/utc_clock/">utc_clock</a>, <a href="/cpp/chrono/tai_clock/">tai_clock</a>, <a href="/cpp/chrono/gps_clock/">gps_clock</a>, <a href="/cpp/chrono/file_clock/">file_clock</a>, <a href="/cpp/chrono/clock_cast/">clock_cast</a></td>
        <td>Cross-domain time models beyond the three classic clocks.</td>
      </tr>
      <tr>
        <td>Formatting, parsing, and decomposition</td>
        <td><a href="/cpp/chrono/parse/">parse</a>, <a href="/cpp/chrono/hh_mm_ss/">hh_mm_ss</a>, <a href="/cpp/chrono/system_clock/from_stream/">from_stream</a></td>
        <td>Text I/O and breaking down time values into display-friendly structures.</td>
      </tr>
    </tbody>
  </table>
</div>

## Clocks And Time Models

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Use it when</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monotonic elapsed time</td>
        <td>You are measuring intervals and must not be affected by wall-clock adjustments.</td>
        <td><a href="/cpp/chrono/steady_clock/">steady_clock</a>, <a href="/cpp/chrono/time_point/">time_point</a></td>
      </tr>
      <tr>
        <td>System wall clock</td>
        <td>You need real-world timestamps and conversion to/from `time_t` or calendar representations.</td>
        <td><a href="/cpp/chrono/system_clock/">system_clock</a>, <a href="/cpp/chrono/system_clock/to_time_t/">to_time_t</a>, <a href="/cpp/chrono/system_clock/from_time_t/">from_time_t</a></td>
      </tr>
      <tr>
        <td>Implementation-defined highest resolution</td>
        <td>You want the implementation's finest exposed resolution and understand that it may alias another clock.</td>
        <td><a href="/cpp/chrono/high_resolution_clock/">high_resolution_clock</a></td>
      </tr>
      <tr>
        <td>Civil date/time</td>
        <td>You are working with dates, weekdays, month/year composition, or user-facing calendar logic.</td>
        <td><a href="/cpp/chrono/year_month_day/">year_month_day</a>, <a href="/cpp/chrono/year_month_weekday/">year_month_weekday</a>, <a href="/cpp/chrono/month_day/">month_day</a></td>
      </tr>
      <tr>
        <td>Zoned/local time</td>
        <td>You need named time zones, local-time conversions, or DST-aware behavior.</td>
        <td><a href="/cpp/chrono/zoned_time/">zoned_time</a>, <a href="/cpp/chrono/time_zone/">time_zone</a>, <a href="/cpp/chrono/local_info/">local_info</a>, <a href="/cpp/chrono/nonexistent_local_time/">nonexistent_local_time</a>, <a href="/cpp/chrono/ambiguous_local_time/">ambiguous_local_time</a></td>
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
        <th>What changed navigation-wise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td>The original chrono model introduced <a href="/cpp/chrono/duration/">durations</a>, <a href="/cpp/chrono/time_point/">time_point</a>, and the classic clocks as the core timing abstraction.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td>Rounding and constexpr improvements made the duration/time_point core more practical for generic and compile-time-oriented code.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td>The library expanded dramatically with calendars, time zones, parsing/formatting, and richer civil-time types, which changed chrono from a timing utility into a full date/time system.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td>Hashing support for chrono value classes further broadens the library's use in associative/data-structure contexts.</td>
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
        <td>Durations, clocks, time points, calendars, time zones, chrono parsing/formatting, and C date/time compatibility.</td>
        <td><a href="/cpp/thread/">Thread support</a> when the main question is sleeping/waiting/concurrency primitives, <a href="/cpp/io/">I/O</a> for broader stream architecture, and <a href="/cpp/numeric/">Numerics</a> for non-time numeric computation.</td>
      </tr>
      <tr>
        <td>The C++ chrono surface.</td>
        <td><a href="/c/chrono/">C chrono</a> when you need the C library's date/time entry points instead of the C++ chrono model.</td>
      </tr>
    </tbody>
  </table>
</div>
