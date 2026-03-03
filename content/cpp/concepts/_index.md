---
title: "Concepts library"
description: "Curated hub for the C++20 concepts library: core object concepts, comparison and relation concepts, callable concepts, and practical constraint-building routes."
source_path: "cpp/concepts"
category: "concepts"
since: "C++20"
layout: "overview-hub"
---

The concepts library provides named constraints for templates and generic algorithms. These concepts let you express what types and operations a template expects, turning long substitution failures into explicit requirements and clearer overload selection.

<div class="overview-note">
This page is about the standardized `<concepts>` library concepts. Keep the broader template language mechanics in <a href="/cpp/language/templates/">templates</a> and the range-specific concept ecosystem in <a href="/cpp/ranges/">ranges</a>.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/same_as/">Type identity and convertibility</a></h3>
    <p class="card-desc">Start here when your constraint is about two types matching, converting, or sharing a common type/reference.</p>
    <p class="card-links"><a href="/cpp/concepts/same_as/">same_as</a> · <a href="/cpp/concepts/convertible_to/">convertible_to</a> · <a href="/cpp/concepts/common_with/">common_with</a> · <a href="/cpp/concepts/common_reference_with/">common_reference_with</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/constructible_from/">Object lifecycle concepts</a></h3>
    <p class="card-desc">Use this route for construction, assignment, moving, copying, destructibility, and “regular type” style requirements.</p>
    <p class="card-links"><a href="/cpp/concepts/constructible_from/">constructible_from</a> · <a href="/cpp/concepts/movable/">movable</a> · <a href="/cpp/concepts/copyable/">copyable</a> · <a href="/cpp/concepts/regular/">regular</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/equality_comparable/">Comparison and ordering</a></h3>
    <p class="card-desc">Choose this route when the key question is equality, total ordering, or relation/predicate semantics.</p>
    <p class="card-links"><a href="/cpp/concepts/equality_comparable/">equality_comparable</a> · <a href="/cpp/concepts/totally_ordered/">totally_ordered</a> · <a href="/cpp/concepts/relation/">relation</a> · <a href="/cpp/concepts/strict_weak_order/">strict_weak_order</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/invocable/">Callable and predicate concepts</a></h3>
    <p class="card-desc">Use this route for callability, predicates, and function-object style constraints in algorithms and generic code.</p>
    <p class="card-links"><a href="/cpp/concepts/invocable/">invocable</a> · <a href="/cpp/concepts/predicate/">predicate</a> · <a href="/cpp/concepts/relation/">relation</a> · <a href="/cpp/concepts/equivalence_relation/">equivalence_relation</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/integral/">Fundamental category concepts</a></h3>
    <p class="card-desc">Start here when you need coarse-grained categories such as integral, floating-point, signed, or unsigned types.</p>
    <p class="card-links"><a href="/cpp/concepts/integral/">integral</a> · <a href="/cpp/concepts/signed_integral/">signed_integral</a> · <a href="/cpp/concepts/unsigned_integral/">unsigned_integral</a> · <a href="/cpp/concepts/floating_point/">floating_point</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/derived_from/">Inheritance and swapping</a></h3>
    <p class="card-desc">Use this route for hierarchy relationships, assignability, and operations like swapping that often appear in generic APIs.</p>
    <p class="card-links"><a href="/cpp/concepts/derived_from/">derived_from</a> · <a href="/cpp/concepts/assignable_from/">assignable_from</a> · <a href="/cpp/concepts/swappable/">swappable</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to say...</th>
        <th>Start with</th>
        <th>Typical follow-ups</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>“These two types must be the same or interoperate through a common type”</td>
        <td><a href="/cpp/concepts/same_as/">same_as</a></td>
        <td><a href="/cpp/concepts/convertible_to/">convertible_to</a>, <a href="/cpp/concepts/common_with/">common_with</a>, <a href="/cpp/concepts/common_reference_with/">common_reference_with</a></td>
      </tr>
      <tr>
        <td>“This type must be movable/copyable/regular”</td>
        <td><a href="/cpp/concepts/movable/">movable</a> or <a href="/cpp/concepts/regular/">regular</a></td>
        <td><a href="/cpp/concepts/copyable/">copyable</a>, <a href="/cpp/concepts/semiregular/">semiregular</a>, <a href="/cpp/concepts/destructible/">destructible</a></td>
      </tr>
      <tr>
        <td>“This callable must be invocable and maybe return a predicate/relation”</td>
        <td><a href="/cpp/concepts/invocable/">invocable</a></td>
        <td><a href="/cpp/concepts/predicate/">predicate</a>, <a href="/cpp/concepts/relation/">relation</a>, <a href="/cpp/concepts/equivalence_relation/">equivalence_relation</a></td>
      </tr>
      <tr>
        <td>“These values must support equality or ordering”</td>
        <td><a href="/cpp/concepts/equality_comparable/">equality_comparable</a> or <a href="/cpp/concepts/totally_ordered/">totally_ordered</a></td>
        <td><a href="/cpp/concepts/strict_weak_order/">strict_weak_order</a>, <a href="/cpp/concepts/relation/">relation</a></td>
      </tr>
      <tr>
        <td>“The type belongs to a broad arithmetic category”</td>
        <td><a href="/cpp/concepts/integral/">integral</a> or <a href="/cpp/concepts/floating_point/">floating_point</a></td>
        <td><a href="/cpp/concepts/signed_integral/">signed_integral</a>, <a href="/cpp/concepts/unsigned_integral/">unsigned_integral</a></td>
      </tr>
      <tr>
        <td>“The type participates in inheritance or assignment relationships”</td>
        <td><a href="/cpp/concepts/derived_from/">derived_from</a> or <a href="/cpp/concepts/assignable_from/">assignable_from</a></td>
        <td><a href="/cpp/concepts/swappable/">swappable</a>, <a href="/cpp/concepts/constructible_from/">constructible_from</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/templates/">I am writing constrained templates</a></h3>
    <p class="card-desc">Use templates and constraints pages when your main problem is `requires`, constraint normalization, or template syntax around these concepts.</p>
    <p class="card-links"><a href="/cpp/language/constraints/">constraints</a> · <a href="/cpp/language/requires/">requires</a> · <a href="/cpp/language/templates/">templates</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/regular/">I need a “regular value-like type” constraint</a></h3>
    <p class="card-desc">Start here when you want a concept that implies a type behaves predictably like an ordinary value.</p>
    <p class="card-links"><a href="/cpp/concepts/semiregular/">semiregular</a> · <a href="/cpp/concepts/copyable/">copyable</a> · <a href="/cpp/concepts/equality_comparable/">equality_comparable</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/concepts/invocable/">I need callable or predicate constraints</a></h3>
    <p class="card-desc">Start here for algorithm-style callability, predicate, and relation constraints.</p>
    <p class="card-links"><a href="/cpp/concepts/predicate/">predicate</a> · <a href="/cpp/concepts/relation/">relation</a> · <a href="/cpp/algorithm/">algorithms</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/ranges/">I probably need ranges concepts instead</a></h3>
    <p class="card-desc">If the requirement is about iteration, views, or range-based algorithm participation, the ranges hub is usually the better first stop.</p>
    <p class="card-links"><a href="/cpp/ranges/">ranges</a> · <a href="/cpp/iterator/">iterators</a></p>
  </section>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you actually need...</th>
        <th>Go here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The syntax and semantics of constrained templates, `requires` expressions, or constraint satisfaction</td>
        <td><a href="/cpp/language/constraints/">constraints</a>, <a href="/cpp/language/requires/">requires</a>, <a href="/cpp/language/templates/">templates</a></td>
      </tr>
      <tr>
        <td>Iterator or range participation concepts rather than the `<concepts>` library set</td>
        <td><a href="/cpp/ranges/">ranges</a>, <a href="/cpp/iterator/">iterator</a></td>
      </tr>
      <tr>
        <td>Older named requirements instead of standardized C++20 concepts</td>
        <td><a href="/cpp/named_req/">Named requirements</a></td>
      </tr>
      <tr>
        <td>Type traits or detection utilities rather than named concepts</td>
        <td><a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a>, <a href="/cpp/types/">type support</a></td>
      </tr>
    </tbody>
  </table>
</div>
