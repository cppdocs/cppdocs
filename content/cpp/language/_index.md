---
title: "C++ language"
description: "Curated hub for core C++ language rules: declarations, types, expressions, classes, templates, object model, initialization, and execution semantics."
source_path: "cpp/language"
category: "language"
layout: "overview-hub"
---

The C++ language area is where syntax turns into semantics: declarations introduce entities, expressions produce values and side effects, classes define object structure, templates generalize code, and the object model governs lifetime, storage, and initialization. This hub is the practical entry point into those core rules.

<div class="overview-note">
Use this page for the language itself. For library facilities, start from <a href="/cpp/standard_library/">the standard library hub</a> or one of the major library areas such as <a href="/cpp/container/">containers</a>, <a href="/cpp/utility/">utility</a>, or <a href="/cpp/io/">I/O</a>.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/declarations/">Declarations and names</a></h3>
    <p class="card-desc">Start here when the question is about introducing entities, definitions, lookup, linkage, or what a declaration actually means.</p>
    <p class="card-links"><a href="/cpp/language/declarations/">Declarations</a> · <a href="/cpp/language/definition/">Definitions</a> · <a href="/cpp/language/lookup/">Lookup</a> · <a href="/cpp/language/language_linkage/">Language linkage</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/types/">Types and object model</a></h3>
    <p class="card-desc">Use this route for type categories, cv/ref rules, objects, lifetime, storage duration, and value categories.</p>
    <p class="card-links"><a href="/cpp/language/types/">Types</a> · <a href="/cpp/language/object/">Objects</a> · <a href="/cpp/language/lifetime/">Lifetime</a> · <a href="/cpp/language/value_category/">Value categories</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/expressions/">Expressions and operators</a></h3>
    <p class="card-desc">Choose this route for operator semantics, overload resolution, conversions, evaluation order, and expression forms.</p>
    <p class="card-links"><a href="/cpp/language/expressions/">Expressions</a> · <a href="/cpp/language/operators/">Operators</a> · <a href="/cpp/language/implicit_conversion/">Implicit conversion</a> · <a href="/cpp/language/eval_order/">Evaluation order</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/classes/">Classes and special members</a></h3>
    <p class="card-desc">Start here for class structure, inheritance, access control, constructors, assignment, destruction, and object-oriented language rules.</p>
    <p class="card-links"><a href="/cpp/language/classes/">Classes</a> · <a href="/cpp/language/default_constructor/">Default constructor</a> · <a href="/cpp/language/destructor/">Destructor</a> · <a href="/cpp/language/virtual/">virtual</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/templates/">Templates and generic code</a></h3>
    <p class="card-desc">Use this route for template parameters, deduction, specialization, SFINAE, constraints, and generic programming mechanics.</p>
    <p class="card-links"><a href="/cpp/language/templates/">Templates</a> · <a href="/cpp/language/template_parameters/">Template parameters</a> · <a href="/cpp/language/template_argument_deduction/">Deduction</a> · <a href="/cpp/language/constraints/">Constraints</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/initialization/">Initialization and execution model</a></h3>
    <p class="card-desc">Use this route for initialization forms, constant initialization, exceptions, threading model, and translation/runtime rules.</p>
    <p class="card-links"><a href="/cpp/language/initialization/">Initialization</a> · <a href="/cpp/language/constant_initialization/">Constant initialization</a> · <a href="/cpp/language/exceptions/">Exceptions</a> · <a href="/cpp/language/memory_model/">Memory model</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If your question is about</th>
        <th>Start with</th>
        <th>Typical follow-ups</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>What a declaration introduces or when two declarations conflict</td>
        <td><a href="/cpp/language/declarations/">Declarations</a></td>
        <td><a href="/cpp/language/definition/">Definitions</a>, <a href="/cpp/language/conflicting_declarations/">Conflicting declarations</a>, <a href="/cpp/language/name/">Names</a></td>
      </tr>
      <tr>
        <td>How an expression is formed, converted, or evaluated</td>
        <td><a href="/cpp/language/expressions/">Expressions</a></td>
        <td><a href="/cpp/language/implicit_conversion/">Implicit conversion</a>, <a href="/cpp/language/operators/">Operators</a>, <a href="/cpp/language/eval_order/">Evaluation order</a></td>
      </tr>
      <tr>
        <td>How types, references, cv-qualification, or value categories behave</td>
        <td><a href="/cpp/language/types/">Types</a></td>
        <td><a href="/cpp/language/reference/">References</a>, <a href="/cpp/language/cv/">cv qualification</a>, <a href="/cpp/language/value_category/">Value categories</a></td>
      </tr>
      <tr>
        <td>How classes, constructors, inheritance, or virtual dispatch work</td>
        <td><a href="/cpp/language/classes/">Classes</a></td>
        <td><a href="/cpp/language/class/">class</a>, <a href="/cpp/language/derived_class/">Inheritance</a>, <a href="/cpp/language/destructor/">Destructor</a>, <a href="/cpp/language/override/">override</a></td>
      </tr>
      <tr>
        <td>How templates are instantiated, constrained, or specialized</td>
        <td><a href="/cpp/language/templates/">Templates</a></td>
        <td><a href="/cpp/language/template_parameters/">Template parameters</a>, <a href="/cpp/language/template_specialization/">Specialization</a>, <a href="/cpp/language/sfinae/">SFINAE</a>, <a href="/cpp/language/requires/">requires</a></td>
      </tr>
      <tr>
        <td>How an object is initialized or when its lifetime begins</td>
        <td><a href="/cpp/language/initialization/">Initialization</a></td>
        <td><a href="/cpp/language/copy_initialization/">Copy initialization</a>, <a href="/cpp/language/list_initialization/">List initialization</a>, <a href="/cpp/language/lifetime/">Lifetime</a></td>
      </tr>
      <tr>
        <td>How the program executes, throws, or interacts across translation boundaries</td>
        <td><a href="/cpp/language/exceptions/">Exceptions</a>, <a href="/cpp/language/translation_phases/">Translation phases</a>, <a href="/cpp/language/multithread/">Multi-threaded executions</a></td>
        <td><a href="/cpp/language/noexcept/">noexcept</a>, <a href="/cpp/language/main_function/">main</a>, <a href="/cpp/language/modules/">Modules</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Core Language Areas

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Area</th>
        <th>Key pages</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Declarations, names, and lookup</td>
        <td><a href="/cpp/language/declarations/">Declarations</a>, <a href="/cpp/language/definition/">Definitions</a>, <a href="/cpp/language/lookup/">Lookup</a>, <a href="/cpp/language/namespace/">Namespace</a></td>
        <td>Understanding how entities are introduced, found, and distinguished across scopes.</td>
      </tr>
      <tr>
        <td>Type system and object model</td>
        <td><a href="/cpp/language/types/">Types</a>, <a href="/cpp/language/type-id/">type-id</a>, <a href="/cpp/language/object/">Object</a>, <a href="/cpp/language/storage_duration/">Storage duration</a>, <a href="/cpp/language/lifetime/">Lifetime</a></td>
        <td>Type categories, object identity, lifetime, storage, and representation-level rules.</td>
      </tr>
      <tr>
        <td>Expressions, operators, conversions</td>
        <td><a href="/cpp/language/expressions/">Expressions</a>, <a href="/cpp/language/operators/">Operators</a>, <a href="/cpp/language/implicit_conversion/">Implicit conversion</a>, <a href="/cpp/language/usual_arithmetic_conversions/">Usual arithmetic conversions</a></td>
        <td>How computations are formed and how operands convert and combine.</td>
      </tr>
      <tr>
        <td>Classes and member model</td>
        <td><a href="/cpp/language/classes/">Classes</a>, <a href="/cpp/language/access/">Access</a>, <a href="/cpp/language/member_functions/">Member functions</a>, <a href="/cpp/language/virtual/">virtual</a>, <a href="/cpp/language/friend/">friend</a></td>
        <td>Class structure, inheritance, dispatch, access control, and special member behavior.</td>
      </tr>
      <tr>
        <td>Templates and generic programming</td>
        <td><a href="/cpp/language/templates/">Templates</a>, <a href="/cpp/language/template_parameters/">Template parameters</a>, <a href="/cpp/language/template_argument_deduction/">Deduction</a>, <a href="/cpp/language/constraints/">Constraints</a>, <a href="/cpp/language/sfinae/">SFINAE</a></td>
        <td>Generic code formation, deduction, specialization, and modern constrained templates.</td>
      </tr>
      <tr>
        <td>Initialization and value propagation</td>
        <td><a href="/cpp/language/initialization/">Initialization</a>, <a href="/cpp/language/copy_elision/">Copy elision</a>, <a href="/cpp/language/reference_initialization/">Reference initialization</a>, <a href="/cpp/language/move_constructor/">Move construction</a></td>
        <td>How objects are initialized, copied, moved, elided, and bound to references.</td>
      </tr>
      <tr>
        <td>Execution and translation model</td>
        <td><a href="/cpp/language/exceptions/">Exceptions</a>, <a href="/cpp/language/memory_model/">Memory model</a>, <a href="/cpp/language/multithread/">Multi-threaded executions</a>, <a href="/cpp/language/translation_phases/">Translation phases</a>, <a href="/cpp/language/modules/">Modules</a></td>
        <td>Program execution rules, concurrency semantics, compile pipeline, and module boundaries.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/types/">I need a type rule</a></h3>
    <p class="card-desc">Start here when the issue is references, cv-qualification, type identity, object lifetime, or value categories.</p>
    <p class="card-links"><a href="/cpp/language/reference/">Reference</a> · <a href="/cpp/language/cv/">cv</a> · <a href="/cpp/language/value_category/">Value categories</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/expressions/">I need an expression or operator rule</a></h3>
    <p class="card-desc">Start here when the answer depends on conversions, precedence, overload resolution, or evaluation order.</p>
    <p class="card-links"><a href="/cpp/language/operators/">Operators</a> · <a href="/cpp/language/overload_resolution/">Overload resolution</a> · <a href="/cpp/language/eval_order/">Evaluation order</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/classes/">I need a class or template rule</a></h3>
    <p class="card-desc">Start here for constructors, inheritance, templates, specialization, and constraints.</p>
    <p class="card-links"><a href="/cpp/language/class/">class</a> · <a href="/cpp/language/templates/">Templates</a> · <a href="/cpp/language/derived_class/">Inheritance</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/initialization/">I need initialization or lifetime behavior</a></h3>
    <p class="card-desc">Start here when the problem is initialization form, copy elision, storage duration, lifetime extension, or object materialization.</p>
    <p class="card-links"><a href="/cpp/language/list_initialization/">List initialization</a> · <a href="/cpp/language/storage_duration/">Storage duration</a> · <a href="/cpp/language/lifetime/">Lifetime</a></p>
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
        <td>Library vocabulary types, type traits, or utility helpers rather than language rules</td>
        <td><a href="/cpp/utility/">Utility</a>, <a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a></td>
      </tr>
      <tr>
        <td>Library concurrency primitives instead of the core memory/execution model</td>
        <td><a href="/cpp/thread/">Thread support</a>, <a href="/cpp/atomic/">Atomic operations</a></td>
      </tr>
      <tr>
        <td>Preprocessor directives, macros, or translation-unit text processing</td>
        <td><a href="/cpp/preprocessor/">Preprocessor</a></td>
      </tr>
      <tr>
        <td>C language semantics instead of C++ language semantics</td>
        <td><a href="/c/language/">C language</a></td>
      </tr>
    </tbody>
  </table>
</div>
