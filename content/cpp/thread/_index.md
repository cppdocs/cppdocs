---
title: "Thread support library"
description: "Curated hub for C++ concurrency: threads, locks, condition variables, futures, stop tokens, semaphores, latches, barriers, and adjacent atomic/runtime routes."
source_path: "cpp/thread"
category: "thread"
layout: "overview-hub"
overview_page_class: "overview-page-thread"
---

The C++ thread support library covers several concurrency models at once: raw threads and joining, mutex and lock orchestration, waiting and notification, task/future result transport, cooperative cancellation, and newer coordination primitives such as latches, barriers, and semaphores. This hub helps you choose the right concurrency surface before you drop into specific classes or member functions.

<div class="overview-note">
Use this page for thread-oriented library coordination. Keep <a href="/cpp/atomic/">atomic operations</a> as the low-level memory-model and lock-free synchronization hub, <a href="/cpp/execution/">execution</a> for sender/scheduler-style asynchronous execution, and <a href="/cpp/error/">diagnostics</a> when the real question is error transport rather than concurrency structure.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/thread/">Create and manage threads directly</a></h3>
    <p class="card-desc">Start here when you need explicit thread objects, joining or detaching, IDs, and the classic `std::thread` lifecycle.</p>
    <p class="card-links"><a href="/cpp/thread/thread/">thread</a> · <a href="/cpp/thread/jthread/">jthread</a> · <a href="/cpp/thread/get_id/">this thread id</a> · <a href="/cpp/thread/yield/">yield</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/mutex/">Protect shared state with mutexes and locks</a></h3>
    <p class="card-desc">Use the lock-based route for critical sections, ownership transfer of locks, multiple-mutex coordination, and reader/writer locking.</p>
    <p class="card-links"><a href="/cpp/thread/mutex/">mutex</a> · <a href="/cpp/thread/unique_lock/">unique_lock</a> · <a href="/cpp/thread/scoped_lock/">scoped_lock</a> · <a href="/cpp/thread/shared_mutex/">shared_mutex</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/condition_variable/">Wait and notify</a></h3>
    <p class="card-desc">Use condition variables and one-time initialization helpers when threads coordinate around shared state changes and wakeup conditions.</p>
    <p class="card-links"><a href="/cpp/thread/condition_variable/">condition_variable</a> · <a href="/cpp/thread/condition_variable_any/">condition_variable_any</a> · <a href="/cpp/thread/call_once/">call_once</a> · <a href="/cpp/thread/once_flag/">once_flag</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/future/">Return asynchronous results</a></h3>
    <p class="card-desc">Choose the futures route when work completion, result transport, exceptions, and producer/consumer task hand-off matter more than raw thread control.</p>
    <p class="card-links"><a href="/cpp/thread/future/">future</a> · <a href="/cpp/thread/promise/">promise</a> · <a href="/cpp/thread/packaged_task/">packaged_task</a> · <a href="/cpp/thread/async/">async</a> · <a href="/cpp/thread/shared_future/">shared_future</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/stop_token/">Use cooperative cancellation</a></h3>
    <p class="card-desc">Start here for stop tokens, stop sources, callbacks, and the modern cancellation model integrated with `jthread`.</p>
    <p class="card-links"><a href="/cpp/thread/stop_token/">stop_token</a> · <a href="/cpp/thread/stop_source/">stop_source</a> · <a href="/cpp/thread/stop_callback/">stop_callback</a> · <a href="/cpp/thread/jthread/">jthread</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/latch/">Coordinate phases across threads</a></h3>
    <p class="card-desc">Use latches, barriers, and semaphores when many threads need a structured hand-off or bounded admission instead of ad hoc waiting loops.</p>
    <p class="card-links"><a href="/cpp/thread/latch/">latch</a> · <a href="/cpp/thread/barrier/">barrier</a> · <a href="/cpp/thread/counting_semaphore/">counting_semaphore</a></p>
  </section>
</div>

## Concurrency Model Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Why</th>
        <th>Common adjacent route</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Launch a thread and explicitly own its lifetime</td>
        <td><a href="/cpp/thread/thread/">thread</a> or <a href="/cpp/thread/jthread/">jthread</a></td>
        <td>`thread` is the explicit baseline; `jthread` adds automatic joining and stop-token integration.</td>
        <td><a href="/cpp/thread/stop_token/">stop_token</a></td>
      </tr>
      <tr>
        <td>Protect mutable shared data with a mutex</td>
        <td><a href="/cpp/thread/mutex/">mutex</a>, <a href="/cpp/thread/lock_guard/">lock_guard</a>, <a href="/cpp/thread/unique_lock/">unique_lock</a></td>
        <td>This is the primary lock-based route for critical sections and condition-variable waiting.</td>
        <td><a href="/cpp/atomic/">atomic operations</a></td>
      </tr>
      <tr>
        <td>Block until a condition becomes true</td>
        <td><a href="/cpp/thread/condition_variable/">condition_variable</a> or <a href="/cpp/thread/condition_variable_any/">condition_variable_any</a></td>
        <td>Condition variables coordinate waiting with lock ownership and notification semantics.</td>
        <td><a href="/cpp/thread/mutex/">mutexes</a></td>
      </tr>
      <tr>
        <td>Return a value or exception from background work</td>
        <td><a href="/cpp/thread/future/">future</a>, <a href="/cpp/thread/promise/">promise</a>, <a href="/cpp/thread/async/">async</a></td>
        <td>The future/promise model is about result transport and completion, not just thread identity.</td>
        <td><a href="/cpp/execution/">execution</a></td>
      </tr>
      <tr>
        <td>Request cancellation cooperatively</td>
        <td><a href="/cpp/thread/stop_token/">stop_token</a> and <a href="/cpp/thread/stop_source/">stop_source</a></td>
        <td>This is the standard cancellation surface for code that checks and propagates stop requests.</td>
        <td><a href="/cpp/thread/jthread/">jthread</a></td>
      </tr>
      <tr>
        <td>Synchronize phases or limit concurrent entry</td>
        <td><a href="/cpp/thread/latch/">latch</a>, <a href="/cpp/thread/barrier/">barrier</a>, <a href="/cpp/thread/counting_semaphore/">counting_semaphore</a></td>
        <td>These primitives express structured coordination patterns more directly than hand-rolled counters and waits.</td>
        <td><a href="/cpp/thread/condition_variable/">condition variables</a></td>
      </tr>
      <tr>
        <td>Sleep, yield, or identify the current thread</td>
        <td><a href="/cpp/thread/sleep_for/">sleep_for</a>, <a href="/cpp/thread/sleep_until/">sleep_until</a>, <a href="/cpp/thread/yield/">yield</a>, <a href="/cpp/thread/get_id/">get_id</a></td>
        <td>Use the thread-utility route when the concern is timing or current-thread behavior rather than shared-state coordination.</td>
        <td><a href="/cpp/chrono/">chrono</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Thread Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Core destinations</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thread objects and current-thread utilities</td>
        <td><a href="/cpp/thread/thread/">thread</a>, <a href="/cpp/thread/jthread/">jthread</a>, <a href="/cpp/thread/get_id/">get_id</a>, <a href="/cpp/thread/sleep_for/">sleep_for</a>, <a href="/cpp/thread/yield/">yield</a></td>
        <td>Owning threads directly, observing the current thread, and controlling basic scheduling/timing behavior.</td>
      </tr>
      <tr>
        <td>Mutexes and lock wrappers</td>
        <td><a href="/cpp/thread/mutex/">mutex</a>, <a href="/cpp/thread/timed_mutex/">timed_mutex</a>, <a href="/cpp/thread/recursive_mutex/">recursive_mutex</a>, <a href="/cpp/thread/shared_mutex/">shared_mutex</a>, <a href="/cpp/thread/unique_lock/">unique_lock</a>, <a href="/cpp/thread/scoped_lock/">scoped_lock</a></td>
        <td>Exclusive, timed, recursive, and shared locking together with RAII wrappers and multi-lock coordination.</td>
      </tr>
      <tr>
        <td>Waiting and one-time coordination</td>
        <td><a href="/cpp/thread/condition_variable/">condition_variable</a>, <a href="/cpp/thread/condition_variable_any/">condition_variable_any</a>, <a href="/cpp/thread/call_once/">call_once</a>, <a href="/cpp/thread/once_flag/">once_flag</a>, <a href="/cpp/thread/notify_all_at_thread_exit/">notify_all_at_thread_exit</a></td>
        <td>Wake/sleep coordination around predicates and one-time initialization patterns.</td>
      </tr>
      <tr>
        <td>Tasks, futures, and async results</td>
        <td><a href="/cpp/thread/future/">future</a>, <a href="/cpp/thread/shared_future/">shared_future</a>, <a href="/cpp/thread/promise/">promise</a>, <a href="/cpp/thread/packaged_task/">packaged_task</a>, <a href="/cpp/thread/async/">async</a>, <a href="/cpp/thread/launch/">launch</a></td>
        <td>Communicating results, exceptions, and readiness across asynchronous work boundaries.</td>
      </tr>
      <tr>
        <td>Cancellation and stop-state model</td>
        <td><a href="/cpp/thread/stop_token/">stop_token</a>, <a href="/cpp/thread/stop_source/">stop_source</a>, <a href="/cpp/thread/stop_callback/">stop_callback</a></td>
        <td>Cooperative stop requests and callback registration for cancellable operations.</td>
      </tr>
      <tr>
        <td>Structured coordination primitives</td>
        <td><a href="/cpp/thread/latch/">latch</a>, <a href="/cpp/thread/barrier/">barrier</a>, <a href="/cpp/thread/counting_semaphore/">counting_semaphore</a></td>
        <td>Expressing one-shot countdowns, reusable phase barriers, and admission control.</td>
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
        <th>Notable concurrency additions here</th>
        <th>Why it changes navigation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/thread/thread/">thread</a>, <a href="/cpp/thread/mutex/">mutex</a>, <a href="/cpp/thread/condition_variable/">condition_variable</a>, <a href="/cpp/thread/future/">future</a>, <a href="/cpp/thread/async/">async</a></td>
        <td>Established the baseline thread, lock, condition-variable, and future/promise model that most code still builds on.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++14</span></td>
        <td><a href="/cpp/thread/shared_timed_mutex/">shared_timed_mutex</a></td>
        <td>Expanded the reader/writer locking story before the later shared-mutex refinements.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/thread/scoped_lock/">scoped_lock</a>, <a href="/cpp/thread/shared_mutex/">shared_mutex</a>, <a href="/cpp/thread/hardware_destructive_interference_size/">interference size constants</a></td>
        <td>Improved multi-lock ergonomics and shared-locking support for modern lock-based designs.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/thread/jthread/">jthread</a>, <a href="/cpp/thread/stop_token/">stop_token</a>, <a href="/cpp/thread/latch/">latch</a>, <a href="/cpp/thread/barrier/">barrier</a>, <a href="/cpp/thread/counting_semaphore/">counting_semaphore</a></td>
        <td>Added cooperative cancellation and a much broader set of structured coordination primitives.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/thread/stoppable_token/">stoppable_token</a>, <a href="/cpp/thread/unstoppable_token/">unstoppable_token</a>, <a href="/cpp/thread/never_stop_token/">never_stop_token</a></td>
        <td>Extends the stop-token model and makes cancellation-related navigation broader than the original C++20 surface.</td>
      </tr>
    </tbody>
  </table>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If the real question is about...</th>
        <th>Go here instead</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Atomic object types, memory ordering, wait/notify on atomics, or lock-free coordination</td>
        <td><a href="/cpp/atomic/">Atomic operations</a></td>
        <td>The atomic hub is the canonical route for the memory model and low-level synchronization primitives.</td>
      </tr>
      <tr>
        <td>Sender/scheduler execution composition rather than thread objects and futures</td>
        <td><a href="/cpp/execution/">Execution</a></td>
        <td>`/cpp/thread/` covers the thread support library; execution is the newer generic async composition model.</td>
      </tr>
      <tr>
        <td>Error reporting, exceptions, error categories, or assertions</td>
        <td><a href="/cpp/error/">Diagnostics</a></td>
        <td>Futures can transport exceptions, but the exception and diagnostic taxonomy lives in the diagnostics hub.</td>
      </tr>
      <tr>
        <td>Durations, clocks, deadlines, and time-point arithmetic</td>
        <td><a href="/cpp/chrono/">Chrono</a></td>
        <td>Thread utilities consume chrono types, but chrono remains the canonical home for time measurement and clocks.</td>
      </tr>
      <tr>
        <td>The C thread and atomic surface instead of the C++ library</td>
        <td><a href="/c/thread/">C thread support</a>, <a href="/c/atomic/">C atomics</a></td>
        <td>The C model is a separate library surface with different types and naming.</td>
      </tr>
    </tbody>
  </table>
</div>
