---
title: "Coroutine support library"
description: "Coroutine handles, promise deduction, suspension objects, generator support, and the boundary between language coroutines and library helpers."
source_path: "cpp/coroutine"
layout: "overview-hub"
overview_page_class: "overview-page-coroutine"
category: "coroutine"
since: "C++20"
---

The coroutine support library is the standard-library side of C++ coroutines. The language defines `co_await`, `co_yield`, `co_return`, suspension points, and promise lookup; this hub covers the library types that make those language features usable in concrete designs, especially handles, traits, suspension helpers, and generator-style entry points.

<div class="overview-note">
This page is a navigation hub, not a coroutine tutorial. Start here when you need to orient yourself inside the standard library support surface, then jump out to the language page when the question is really about coroutine semantics or rewriting rules.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/coroutine_handle/">Handles and frame access</a></h3>
    <p class="card-desc">Start here when you need to hold, resume, destroy, or inspect a coroutine frame through a standard handle type.</p>
    <p class="card-links"><a href="/cpp/coroutine/coroutine_handle/">coroutine_handle</a> · <a href="/cpp/coroutine/coroutine_handle/resume/">resume</a> · <a href="/cpp/coroutine/coroutine_handle/destroy/">destroy</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/coroutine_traits/">Promise deduction</a></h3>
    <p class="card-desc">Use this route when the core question is how a coroutine return type maps to its `promise_type` and customization points.</p>
    <p class="card-links"><a href="/cpp/coroutine/coroutine_traits/">coroutine_traits</a> · <a href="/cpp/language/coroutines/">language coroutines</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/suspend_always/">Suspension primitives</a></h3>
    <p class="card-desc">Start here when you need the basic always-suspend / never-suspend helpers used by promise methods and awaiter implementations.</p>
    <p class="card-links"><a href="/cpp/coroutine/suspend_always/">suspend_always</a> · <a href="/cpp/coroutine/suspend_never/">suspend_never</a> · <a href="/cpp/coroutine/noop_coroutine/">noop_coroutine</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/generator/">Generator entry points</a></h3>
    <p class="card-desc">Use the generator route when the coroutine is being exposed as a pull-style range rather than as a custom task type.</p>
    <p class="card-links"><a href="/cpp/coroutine/generator/">generator</a> · <a href="/cpp/coroutine/generator/iterator/">generator::iterator</a> · <a href="/cpp/ranges/view/">ranges::view</a></p>
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
        <td>Refer to a coroutine frame after suspension</td>
        <td><a href="/cpp/coroutine/coroutine_handle/">coroutine_handle</a></td>
        <td>This is the standard non-owning handle used to resume, destroy, or inspect a coroutine state object.</td>
      </tr>
      <tr>
        <td>Recover a promise object from a coroutine frame</td>
        <td><a href="/cpp/coroutine/coroutine_handle/promise/">coroutine_handle::promise</a>, <a href="/cpp/coroutine/coroutine_handle/from_promise/">from_promise</a></td>
        <td>These are the canonical bridge points between the frame handle and the promise implementation.</td>
      </tr>
      <tr>
        <td>Control whether a coroutine suspends initially or finally</td>
        <td><a href="/cpp/coroutine/suspend_always/">suspend_always</a>, <a href="/cpp/coroutine/suspend_never/">suspend_never</a></td>
        <td>Promise hooks such as `initial_suspend` and `final_suspend` commonly return these simple awaitables.</td>
      </tr>
      <tr>
        <td>Understand how a return type becomes a coroutine promise</td>
        <td><a href="/cpp/coroutine/coroutine_traits/">coroutine_traits</a></td>
        <td>This is the library mechanism that locates `promise_type` for a coroutine's declared return type and arguments.</td>
      </tr>
      <tr>
        <td>Use a standard generator-style coroutine</td>
        <td><a href="/cpp/coroutine/generator/">generator</a>, <a href="/cpp/coroutine/generator/iterator/">generator::iterator</a></td>
        <td>`std::generator` is the standard library's synchronous yielded-sequence entry point.</td>
      </tr>
      <tr>
        <td>Get a coroutine handle that never suspends meaningful work</td>
        <td><a href="/cpp/coroutine/noop_coroutine/">noop_coroutine</a>, <a href="/cpp/coroutine/noop_coroutine_promise/">noop_coroutine_promise</a></td>
        <td>The noop coroutine facilities provide a trivial always-safe coroutine state useful in generic code paths.</td>
      </tr>
      <tr>
        <td>Understand `co_await` / `co_yield` / `co_return` semantics</td>
        <td><a href="/cpp/language/coroutines/">language coroutines</a></td>
        <td>Those operators and the coroutine transformation rules are language features, not defined by this hub.</td>
      </tr>
    </tbody>
  </table>
</div>

## Coroutine Model

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Primary destinations</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Language coroutine semantics</td>
        <td><a href="/cpp/language/coroutines/">coroutines</a></td>
        <td>`co_await`, `co_yield`, `co_return`, suspension semantics, and the compiler transformation model.</td>
      </tr>
      <tr>
        <td>Frame handle access</td>
        <td><a href="/cpp/coroutine/coroutine_handle/">coroutine_handle</a></td>
        <td>Representing and operating on a suspended or executing coroutine frame.</td>
      </tr>
      <tr>
        <td>Promise selection</td>
        <td><a href="/cpp/coroutine/coroutine_traits/">coroutine_traits</a></td>
        <td>Mapping a coroutine signature to the promise type that defines its behavior.</td>
      </tr>
      <tr>
        <td>Basic suspension helpers</td>
        <td><a href="/cpp/coroutine/suspend_always/">suspend_always</a>, <a href="/cpp/coroutine/suspend_never/">suspend_never</a></td>
        <td>Returning simple awaitables from promise hooks and hand-written awaiters.</td>
      </tr>
      <tr>
        <td>Standard yielded sequence wrapper</td>
        <td><a href="/cpp/coroutine/generator/">generator</a></td>
        <td>Exposing a coroutine as a synchronous range-compatible sequence.</td>
      </tr>
    </tbody>
  </table>
</div>

## Handle And Promise Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/coroutine_handle/">Handle lifecycle</a></h3>
    <p class="card-desc">Use this route for the core non-owning handle API: validity, resume, destroy, address conversion, and comparisons.</p>
    <p class="card-links"><a href="/cpp/coroutine/coroutine_handle/operator_bool/">operator bool</a> · <a href="/cpp/coroutine/coroutine_handle/done/">done</a> · <a href="/cpp/coroutine/coroutine_handle/address/">address</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/coroutine_handle/promise/">Promise access</a></h3>
    <p class="card-desc">Start here when custom coroutine types expose behavior through the promise object stored in the frame.</p>
    <p class="card-links"><a href="/cpp/coroutine/coroutine_handle/promise/">promise</a> · <a href="/cpp/coroutine/coroutine_handle/from_promise/">from_promise</a> · <a href="/cpp/coroutine/coroutine_traits/">coroutine_traits</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/noop_coroutine/">No-op handles</a></h3>
    <p class="card-desc">Use the noop route when generic code needs a valid coroutine handle with trivial behavior and no user frame payload.</p>
    <p class="card-links"><a href="/cpp/coroutine/noop_coroutine/">noop_coroutine</a> · <a href="/cpp/coroutine/noop_coroutine_promise/">noop_coroutine_promise</a></p>
  </section>
</div>

## Suspension And Generator Facilities

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Facility</th>
        <th>Use it for</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Simple suspend choices</td>
        <td>Returning an awaitable that always suspends or never suspends from promise hooks.</td>
        <td><a href="/cpp/coroutine/suspend_always/">suspend_always</a>, <a href="/cpp/coroutine/suspend_never/">suspend_never</a></td>
      </tr>
      <tr>
        <td>Generator facade</td>
        <td>Presenting coroutine output as a synchronous range over yielded values.</td>
        <td><a href="/cpp/coroutine/generator/">generator</a>, <a href="/cpp/coroutine/generator/iterator/">generator::iterator</a></td>
      </tr>
      <tr>
        <td>Generator promise hooks</td>
        <td>Understanding the standard promise-side operations behind `std::generator`.</td>
        <td><a href="/cpp/coroutine/generator/promise_type/">generator::promise_type</a>, <a href="/cpp/coroutine/generator/begin/">begin</a>, <a href="/cpp/coroutine/generator/end/">end</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/coroutine_handle/">I am implementing a coroutine return type</a></h3>
    <p class="card-desc">Start with handle and traits APIs when you need to understand how a custom task, lazy value, or resumable operation is wired.</p>
    <p class="card-links"><a href="/cpp/coroutine/coroutine_traits/">coroutine_traits</a> · <a href="/cpp/coroutine/coroutine_handle/">coroutine_handle</a> · <a href="/cpp/language/coroutines/">language coroutines</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/generator/">I need a yielded sequence</a></h3>
    <p class="card-desc">Use `std::generator` first when the goal is pull-style iteration over yielded values rather than a bespoke async abstraction.</p>
    <p class="card-links"><a href="/cpp/coroutine/generator/">generator</a> · <a href="/cpp/ranges/view/">ranges::view</a> · <a href="/cpp/iterator/">iterator hub</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/coroutine/suspend_always/">I am debugging suspension behavior</a></h3>
    <p class="card-desc">Start from the basic suspension helpers and then step outward into promise hooks or awaiter design as needed.</p>
    <p class="card-links"><a href="/cpp/coroutine/suspend_always/">suspend_always</a> · <a href="/cpp/coroutine/suspend_never/">suspend_never</a> · <a href="/cpp/coroutine/coroutine_handle/done/">done</a></p>
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
        <td>Library support types for coroutine frames, promise discovery, trivial suspension objects, and standard generator facilities.</td>
        <td><a href="/cpp/language/coroutines/">Language coroutines</a> when the question is about `co_await`, `co_yield`, `co_return`, promise requirements, or the compiler rewrite rules.</td>
      </tr>
      <tr>
        <td>Generator-style coroutine exposure through the standard library.</td>
        <td><a href="/cpp/ranges/">ranges</a> and <a href="/cpp/iterator/">iterator hub</a> when the question is primarily about range/view composition or iterator behavior after the coroutine surface is already chosen.</td>
      </tr>
      <tr>
        <td>Core coroutine support mechanisms.</td>
        <td><a href="/cpp/thread/">thread support</a> or <a href="/cpp/error/">diagnostics</a> when you are dealing with scheduling, blocking, or error-reporting policy around a coroutine rather than the coroutine support library itself.</td>
      </tr>
    </tbody>
  </table>
</div>
