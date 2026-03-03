---
title: "Diagnostics library"
description: "Exceptions, error_code-based reporting, system_error support, termination handlers, and diagnostic-adjacent utilities."
source_path: "cpp/error"
layout: "overview-hub"
overview_page_class: "overview-page-error"
category: "error"
---

The diagnostics area covers two different error-reporting models in the standard library: exception-based failure and `error_code`-based status reporting. It also includes termination behavior, assertion diagnostics, and bridging points to C and OS-originated errors. This hub is the curated starting point when the question is about how C++ signals, categorizes, or propagates failures.

<div class="overview-note">
This page is a navigation hub, not an exhaustive exception-class catalog. It points to the main reporting models first, then to the canonical exception, category, and termination routes that define the rest of the diagnostics surface.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/exception/">Exception model</a></h3>
    <p class="card-desc">Start here when the failure is represented by throwing and catching objects derived from <code>std::exception</code>.</p>
    <p class="card-links"><a href="/cpp/error/exception/">exception</a> · <a href="/cpp/error/logic_error/">logic_error</a> · <a href="/cpp/error/runtime_error/">runtime_error</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/error_code/">Error codes and categories</a></h3>
    <p class="card-desc">Use this route when code reports failures without throwing, especially for OS/library integration and recoverable API results.</p>
    <p class="card-links"><a href="/cpp/error/error_code/">error_code</a> · <a href="/cpp/error/error_condition/">error_condition</a> · <a href="/cpp/error/error_category/">error_category</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/system_error/">System and OS-facing failures</a></h3>
    <p class="card-desc">Use the <code>system_error</code> family when exceptions carry associated `error_code` values or when failures map onto system categories and portable `errc` conditions.</p>
    <p class="card-links"><a href="/cpp/error/system_error/">system_error</a> · <a href="/cpp/error/system_category/">system_category</a> · <a href="/cpp/error/errc/">errc</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/set_terminate/">Termination and assertions</a></h3>
    <p class="card-desc">Start here when the program cannot continue, when assertion behavior matters, or when uncaught/forbidden failures trigger termination.</p>
    <p class="card-links"><a href="/cpp/error/terminate/">terminate</a> · <a href="/cpp/error/set_terminate/">set_terminate</a> · <a href="/cpp/error/assert/">assert</a></p>
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
        <td>Throw and catch standard exceptions</td>
        <td><a href="/cpp/error/exception/">exception</a>, <a href="/cpp/error/logic_error/">logic_error</a>, <a href="/cpp/error/runtime_error/">runtime_error</a></td>
        <td>This is the core exception hierarchy for typed failure reporting through stack unwinding.</td>
      </tr>
      <tr>
        <td>Represent an error without throwing</td>
        <td><a href="/cpp/error/error_code/">error_code</a>, <a href="/cpp/error/error_condition/">error_condition</a></td>
        <td>The `error_code` model is the non-throwing diagnostics route, especially useful at API boundaries and OS-facing layers.</td>
      </tr>
      <tr>
        <td>Map platform-specific errors onto portable conditions</td>
        <td><a href="/cpp/error/error_category/">error_category</a>, <a href="/cpp/error/errc/">errc</a>, <a href="/cpp/error/generic_category/">generic_category</a>, <a href="/cpp/error/system_category/">system_category</a></td>
        <td>Categories and conditions define the translation between raw platform values and portable semantic classes of failure.</td>
      </tr>
      <tr>
        <td>Work with an exception object outside immediate catch scope</td>
        <td><a href="/cpp/error/exception_ptr/">exception_ptr</a>, <a href="/cpp/error/current_exception/">current_exception</a>, <a href="/cpp/error/rethrow_exception/">rethrow_exception</a></td>
        <td>This is the route for capture, delayed transport, and rethrow of exception state.</td>
      </tr>
      <tr>
        <td>Nest one exception inside another for higher-level context</td>
        <td><a href="/cpp/error/nested_exception/">nested_exception</a>, <a href="/cpp/error/throw_with_nested/">throw_with_nested</a>, <a href="/cpp/error/rethrow_if_nested/">rethrow_if_nested</a></td>
        <td>Nested exceptions let higher layers add context without losing the original failure chain.</td>
      </tr>
      <tr>
        <td>Handle logic vs runtime standard exception families</td>
        <td><a href="/cpp/error/logic_error/">logic_error</a>, <a href="/cpp/error/runtime_error/">runtime_error</a></td>
        <td>The library splits precondition/usage failures from runtime/environment failures into different base families.</td>
      </tr>
      <tr>
        <td>Control what happens when recovery is impossible</td>
        <td><a href="/cpp/error/terminate/">terminate</a>, <a href="/cpp/error/set_terminate/">set_terminate</a>, <a href="/cpp/error/assert/">assert</a></td>
        <td>This route covers program-ending diagnostics rather than recoverable failure handling.</td>
      </tr>
      <tr>
        <td>Bridge to C/errno-style diagnostics</td>
        <td><a href="/cpp/error/errno/">errno</a>, <a href="/c/error/">C diagnostics</a></td>
        <td>Use this route when the failure source originates in C APIs or errno-based operating-system conventions.</td>
      </tr>
    </tbody>
  </table>
</div>

## Exception Families

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/logic_error/">Logic errors</a></h3>
    <p class="card-desc">Use the logic-error family for invalid program state or API misuse that should often be prevented by caller correctness.</p>
    <p class="card-links"><a href="/cpp/error/invalid_argument/">invalid_argument</a> · <a href="/cpp/error/domain_error/">domain_error</a> · <a href="/cpp/error/out_of_range/">out_of_range</a> · <a href="/cpp/error/length_error/">length_error</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/runtime_error/">Runtime errors</a></h3>
    <p class="card-desc">Use the runtime-error family for failures that depend on environment, external resources, or execution-time conditions.</p>
    <p class="card-links"><a href="/cpp/error/runtime_error/">runtime_error</a> · <a href="/cpp/error/system_error/">system_error</a> · <a href="/cpp/error/range_error/">range_error</a> · <a href="/cpp/error/overflow_error/">overflow_error</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/exception_ptr/">Exception transport</a></h3>
    <p class="card-desc">Capture and rethrow exceptions across threads, callbacks, or delayed-handling boundaries.</p>
    <p class="card-links"><a href="/cpp/error/current_exception/">current_exception</a> · <a href="/cpp/error/exception_ptr/">exception_ptr</a> · <a href="/cpp/error/rethrow_exception/">rethrow_exception</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/nested_exception/">Nested context</a></h3>
    <p class="card-desc">Add contextual failure information while preserving the original exception underneath.</p>
    <p class="card-links"><a href="/cpp/error/nested_exception/">nested_exception</a> · <a href="/cpp/error/throw_with_nested/">throw_with_nested</a> · <a href="/cpp/error/rethrow_if_nested/">rethrow_if_nested</a></p>
  </section>
</div>

## Error Code Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Use it for</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Concrete code values</td>
        <td>Carrying an implementation- or API-specific error result.</td>
        <td><a href="/cpp/error/error_code/">error_code</a></td>
      </tr>
      <tr>
        <td>Portable semantic conditions</td>
        <td>Comparing failures by meaning instead of raw platform value.</td>
        <td><a href="/cpp/error/error_condition/">error_condition</a>, <a href="/cpp/error/errc/">errc</a></td>
      </tr>
      <tr>
        <td>Category mapping</td>
        <td>Defining the namespace and translation behavior for error values.</td>
        <td><a href="/cpp/error/error_category/">error_category</a>, <a href="/cpp/error/system_category/">system_category</a>, <a href="/cpp/error/generic_category/">generic_category</a></td>
      </tr>
      <tr>
        <td>Exception bridge</td>
        <td>Throwing an exception that preserves an associated error code.</td>
        <td><a href="/cpp/error/system_error/">system_error</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/logic_error/">I need a standard exception type</a></h3>
    <p class="card-desc">Start from the standard exception families when the design already uses throwing exceptions and you need the best matching library type.</p>
    <p class="card-links"><a href="/cpp/error/logic_error/">logic_error</a> · <a href="/cpp/error/runtime_error/">runtime_error</a> · <a href="/cpp/error/system_error/">system_error</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/error_code/">I need a non-throwing failure result</a></h3>
    <p class="card-desc">Use the error-code route first when APIs should report failures explicitly instead of unwinding through exceptions.</p>
    <p class="card-links"><a href="/cpp/error/error_code/">error_code</a> · <a href="/cpp/error/error_condition/">error_condition</a> · <a href="/cpp/error/errc/">errc</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/set_terminate/">I need failure diagnostics at the process boundary</a></h3>
    <p class="card-desc">Use termination and assertion routes when the program is not expected to recover and you need diagnostics or policy hooks around that boundary.</p>
    <p class="card-links"><a href="/cpp/error/terminate/">terminate</a> · <a href="/cpp/error/set_terminate/">set_terminate</a> · <a href="/cpp/error/assert/">assert</a></p>
  </section>
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
        <td>Exception families, error-code reporting, system categories, terminate/assert diagnostics, and exception transport/nesting utilities.</td>
        <td><a href="/cpp/language/static_assert/">static_assert</a> and core language diagnostics when the issue is compile-time, not runtime; <a href="/c/error/">C diagnostics</a> when the model is C-first and errno/assert-centric.</td>
      </tr>
      <tr>
        <td>Runtime diagnostics in the standard library.</td>
        <td><a href="/cpp/thread/">Thread support</a> or other domain hubs when you already know the failing subsystem and only need its API surface, not the diagnostics model itself.</td>
      </tr>
    </tbody>
  </table>
</div>
