---
title: "Execution library"
description: "Curated hub for C++ execution: parallel algorithm policies today, sender/scheduler execution in C++26, and boundaries to algorithms, threads, and futures."
source_path: "cpp/execution"
category: "execution"
layout: "overview-hub"
overview_page_class: "overview-page-execution"
---

The C++ execution area currently spans two distinct layers. The established C++17 layer is the execution-policy model used by parallel algorithms. The newer C++26 layer is the sender/scheduler execution library, which introduces composable execution objects such as `just`, `then`, `on`, and `when_all`. This hub makes that split explicit so you can choose the right surface first.

<div class="overview-note">
Use this page when your question is about how work is scheduled or composed, not about the algorithm operation itself. Keep <a href="/cpp/algorithm/">algorithms</a> as the destination for the actual algorithm families, <a href="/cpp/thread/">thread support</a> for thread/latch/future primitives, and <a href="/cpp/atomic/">atomics</a> for low-level synchronization.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/algorithm/execution_policy_tag/">Use parallel algorithm execution policies</a></h3>
    <p class="card-desc">Start here when you already have a standard algorithm and need to choose between `seq`, `par`, `par_unseq`, or `unseq` execution behavior.</p>
    <p class="card-links"><a href="/cpp/algorithm/execution_policy_tag/">execution policy tags</a> · <a href="/cpp/algorithm/is_execution_policy/">is_execution_policy</a> · <a href="/cpp/algorithm/">algorithms hub</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/execution/just/">Create sender-based execution pipelines</a></h3>
    <p class="card-desc">Use the sender route when the problem is composing asynchronous work through values, completion channels, and schedulers rather than choosing an algorithm policy.</p>
    <p class="card-links"><a href="/cpp/execution/just/">just</a> · <a href="/cpp/execution/then/">then</a> · <a href="/cpp/execution/on/">on</a> · <a href="/cpp/execution/when_all/">when_all</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/execution/scheduler/">Work with schedulers and run loops</a></h3>
    <p class="card-desc">Choose this route when execution resources and scheduler hand-off are the main abstraction boundary.</p>
    <p class="card-links"><a href="/cpp/execution/scheduler/">scheduler</a> · <a href="/cpp/execution/schedule/">schedule</a> · <a href="/cpp/execution/on/">on</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/execution/then/">Transform or branch completion flows</a></h3>
    <p class="card-desc">Use the sender-adaptor route when you need value transformation, error handling, stop handling, or environment-aware composition.</p>
    <p class="card-links"><a href="/cpp/execution/then/">then</a> · <a href="/cpp/execution/let_value/">let_value</a> · <a href="/cpp/execution/upon_error/">upon_error</a> · <a href="/cpp/execution/read_env/">read_env</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/execution/when_all/">Combine multiple asynchronous operations</a></h3>
    <p class="card-desc">Start here when your execution problem involves fan-out, joining results, eager start, or mapping stop into optional/error channels.</p>
    <p class="card-links"><a href="/cpp/execution/when_all/">when_all</a> · <a href="/cpp/execution/ensure_started/">ensure_started</a> · <a href="/cpp/execution/stopped_as_optional/">stopped_as_optional</a> · <a href="/cpp/execution/stopped_as_error/">stopped_as_error</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/async/">Use older async/future-based execution</a></h3>
    <p class="card-desc">If your codebase still models async work around futures and `std::async`, start from the thread support side and treat execution senders as a newer adjacent model.</p>
    <p class="card-links"><a href="/cpp/thread/async/">async</a> · <a href="/cpp/thread/future/">future</a> · <a href="/cpp/thread/promise/">promise</a></p>
  </section>
</div>

## Execution Model Map

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
        <td>Run an existing standard algorithm under a policy</td>
        <td><a href="/cpp/algorithm/execution_policy_tag/">execution policies</a></td>
        <td>The policy model modifies how algorithms execute; it does not define a general execution graph abstraction.</td>
        <td><a href="/cpp/algorithm/">algorithms</a></td>
      </tr>
      <tr>
        <td>Construct an execution pipeline from values and continuations</td>
        <td><a href="/cpp/execution/just/">just</a>, <a href="/cpp/execution/then/">then</a>, <a href="/cpp/execution/let_value/">let_value</a></td>
        <td>The sender model is about composable execution objects and completion channels.</td>
        <td><a href="/cpp/thread/future/">future</a></td>
      </tr>
      <tr>
        <td>Bind work to a scheduler or execution resource</td>
        <td><a href="/cpp/execution/scheduler/">scheduler</a> and <a href="/cpp/execution/on/">on</a></td>
        <td>This is the route for scheduler-aware composition rather than raw thread ownership.</td>
        <td><a href="/cpp/thread/">thread support</a></td>
      </tr>
      <tr>
        <td>Combine multiple asynchronous operations into one result</td>
        <td><a href="/cpp/execution/when_all/">when_all</a></td>
        <td>`when_all` is the main joining/composition surface in the sender-based model.</td>
        <td><a href="/cpp/thread/async/">async</a></td>
      </tr>
      <tr>
        <td>Map stop or error completion into a different output model</td>
        <td><a href="/cpp/execution/stopped_as_error/">stopped_as_error</a>, <a href="/cpp/execution/stopped_as_optional/">stopped_as_optional</a>, <a href="/cpp/execution/upon_error/">upon_error</a></td>
        <td>These adaptors shape completion behavior rather than doing the underlying work themselves.</td>
        <td><a href="/cpp/error/">diagnostics</a></td>
      </tr>
      <tr>
        <td>Use the older result-carrying async model</td>
        <td><a href="/cpp/thread/async/">async</a> and <a href="/cpp/thread/future/">future</a></td>
        <td>That model remains important, but it belongs primarily to thread support rather than the newer execution library.</td>
        <td><a href="/cpp/thread/">thread support</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Execution Families

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
        <td>Execution policies</td>
        <td><a href="/cpp/algorithm/execution_policy_tag/">policy tags</a>, <a href="/cpp/algorithm/is_execution_policy/">is_execution_policy</a>, <a href="/cpp/header/execution/"><code>&lt;execution&gt;</code></a></td>
        <td>Choosing sequential, parallel, vectorized, or combined execution modes for standard algorithms.</td>
      </tr>
      <tr>
        <td>Sender factories and completion seeds</td>
        <td><a href="/cpp/execution/just/">just</a>, <a href="/cpp/execution/just_error/">just_error</a>, <a href="/cpp/execution/just_stopped/">just_stopped</a></td>
        <td>Creating sender-based execution values that represent normal, error, or stopped completion.</td>
      </tr>
      <tr>
        <td>Sender adaptors and transformation</td>
        <td><a href="/cpp/execution/then/">then</a>, <a href="/cpp/execution/let_value/">let_value</a>, <a href="/cpp/execution/let_error/">let_error</a>, <a href="/cpp/execution/let_stopped/">let_stopped</a>, <a href="/cpp/execution/upon_error/">upon_error</a>, <a href="/cpp/execution/upon_stopped/">upon_stopped</a></td>
        <td>Transforming values, errors, and stopped completion into the next stage of a pipeline.</td>
      </tr>
      <tr>
        <td>Scheduling and resource hand-off</td>
        <td><a href="/cpp/execution/scheduler/">scheduler</a>, <a href="/cpp/execution/schedule/">schedule</a>, <a href="/cpp/execution/on/">on</a>, <a href="/cpp/execution/read_env/">read_env</a></td>
        <td>Binding work to a scheduler and reading the execution environment.</td>
      </tr>
      <tr>
        <td>Joining and lifecycle control</td>
        <td><a href="/cpp/execution/when_all/">when_all</a>, <a href="/cpp/execution/ensure_started/">ensure_started</a>, <a href="/cpp/execution/into_variant/">into_variant</a></td>
        <td>Combining multiple operations, eager start, and adapting result shapes for composition.</td>
      </tr>
      <tr>
        <td>Stop/error adaptation</td>
        <td><a href="/cpp/execution/stopped_as_error/">stopped_as_error</a>, <a href="/cpp/execution/stopped_as_optional/">stopped_as_optional</a></td>
        <td>Converting stopped completion into an error or optional-style result model.</td>
      </tr>
    </tbody>
  </table>
</div>

## Today Vs. Emerging Surface

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Use case</th>
        <th>Established route today</th>
        <th>Emerging / broader route</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Parallelizing a standard algorithm call</td>
        <td><a href="/cpp/algorithm/execution_policy_tag/">execution policies</a> on algorithm overloads</td>
        <td>Sender/scheduler composition does not replace the algorithm-policy entry point directly.</td>
      </tr>
      <tr>
        <td>Representing asynchronous work as a composable object</td>
        <td><a href="/cpp/thread/future/">future</a>, <a href="/cpp/thread/async/">async</a></td>
        <td><a href="/cpp/execution/just/">senders</a>, <a href="/cpp/execution/then/">adaptors</a>, <a href="/cpp/execution/scheduler/">schedulers</a></td>
      </tr>
      <tr>
        <td>Expressing scheduler-aware sequencing and joining</td>
        <td>Ad hoc thread/future orchestration</td>
        <td><a href="/cpp/execution/on/">on</a>, <a href="/cpp/execution/when_all/">when_all</a>, <a href="/cpp/execution/ensure_started/">ensure_started</a></td>
      </tr>
      <tr>
        <td>Controlling low-level memory ordering or lock-free behavior</td>
        <td><a href="/cpp/atomic/">atomic operations</a></td>
        <td>Execution does not replace atomics; it composes work above that layer.</td>
      </tr>
    </tbody>
  </table>
</div>

## Scope Notes

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Boundary</th>
        <th>Go here</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>You are choosing an algorithm, not an execution abstraction</td>
        <td><a href="/cpp/algorithm/">Algorithms</a></td>
        <td>The algorithms hub owns search/sort/transform intent; execution only changes how that work is run or composed.</td>
      </tr>
      <tr>
        <td>You need threads, locks, latches, futures, or stop tokens directly</td>
        <td><a href="/cpp/thread/">Thread support</a></td>
        <td>The thread library remains the canonical home for concrete thread and synchronization primitives.</td>
      </tr>
      <tr>
        <td>You need memory ordering, atomic wait/notify, or lock-free coordination</td>
        <td><a href="/cpp/atomic/">Atomic operations</a></td>
        <td>The atomic hub is the low-level synchronization route below execution composition.</td>
      </tr>
      <tr>
        <td>You are reasoning about errors and exception categories rather than execution topology</td>
        <td><a href="/cpp/error/">Diagnostics</a></td>
        <td>Execution adaptors can reshape error flow, but the error taxonomy lives elsewhere.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/algorithm/execution_policy_tag/">I need a parallel algorithm policy</a></h3>
    <p class="card-desc">Start here when you already know the algorithm and only need to choose whether it runs sequentially, in parallel, or vectorized.</p>
    <p class="card-links"><a href="/cpp/algorithm/execution_policy_tag/">policy tags</a> · <a href="/cpp/algorithm/">algorithms hub</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/execution/then/">I need a sender pipeline</a></h3>
    <p class="card-desc">Use the sender route when work is represented as a composable execution object with value, error, and stopped completion channels.</p>
    <p class="card-links"><a href="/cpp/execution/just/">just</a> · <a href="/cpp/execution/then/">then</a> · <a href="/cpp/execution/on/">on</a> · <a href="/cpp/execution/when_all/">when_all</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/async/">I need the older future-based async model</a></h3>
    <p class="card-desc">Start from the thread/future route when your codebase is organized around `async`, `promise`, and `future` rather than sender composition.</p>
    <p class="card-links"><a href="/cpp/thread/async/">async</a> · <a href="/cpp/thread/future/">future</a> · <a href="/cpp/thread/promise/">promise</a></p>
  </section>
</div>
