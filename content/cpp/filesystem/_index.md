---
title: "Filesystem"
description: "Curated hub for paths, traversal, file status, operations, permissions, space, timestamps, and filesystem error handling."
source_path: "cpp/filesystem"
category: "filesystem"
layout: "overview-hub"
---

The filesystem library combines several different jobs: representing paths, traversing directory trees, querying file status, mutating the filesystem, handling permissions and timestamps, and reporting failures. This page is the task-first entry point for choosing the right filesystem area before you drop into individual functions or member APIs.

<div class="overview-note">
Filesystem is a C++17 library, but early toolchains sometimes required extra linker flags. If you are working with older compilers or historical build setups, check the implementation support note on the canonical pages before assuming the library is available by default.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/path/">Build and normalize paths</a></h3>
    <p class="card-desc">Use <code>std::filesystem::path</code> when the problem is pathname composition, decomposition, normalization, or conversion to and from native/generic string forms.</p>
    <p class="card-links"><a href="/cpp/filesystem/path/">path</a> · <a href="/cpp/filesystem/absolute/">absolute</a> · <a href="/cpp/filesystem/canonical/">canonical</a> · <a href="/cpp/filesystem/relative/">relative</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/directory_iterator/">Traverse directories</a></h3>
    <p class="card-desc">Start here when you need to enumerate entries in a directory or recursively walk a tree.</p>
    <p class="card-links"><a href="/cpp/filesystem/directory_iterator/">directory_iterator</a> · <a href="/cpp/filesystem/recursive_directory_iterator/">recursive_directory_iterator</a> · <a href="/cpp/filesystem/directory_entry/">directory_entry</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/status/">Inspect file status</a></h3>
    <p class="card-desc">Use the status/query route when you need to know whether something exists, what kind of file it is, or which permissions/status bits it has.</p>
    <p class="card-links"><a href="/cpp/filesystem/status/">status</a> · <a href="/cpp/filesystem/exists/">exists</a> · <a href="/cpp/filesystem/is_regular_file/">is_regular_file</a> · <a href="/cpp/filesystem/file_status/">file_status</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/copy/">Create, copy, move, and remove</a></h3>
    <p class="card-desc">Choose the mutating operations route when you are changing the filesystem rather than just describing or traversing it.</p>
    <p class="card-links"><a href="/cpp/filesystem/create_directory/">create_directory</a> · <a href="/cpp/filesystem/copy/">copy</a> · <a href="/cpp/filesystem/rename/">rename</a> · <a href="/cpp/filesystem/remove/">remove</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/permissions/">Permissions, timestamps, and space</a></h3>
    <p class="card-desc">Use this route for metadata and resource questions such as permissions, free space, current path, temp directories, and last-write timestamps.</p>
    <p class="card-links"><a href="/cpp/filesystem/permissions/">permissions</a> · <a href="/cpp/filesystem/space/">space</a> · <a href="/cpp/filesystem/last_write_time/">last_write_time</a> · <a href="/cpp/filesystem/current_path/">current_path</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/filesystem_error/">Handle errors and legacy/TS paths</a></h3>
    <p class="card-desc">Start here when you need throwing-vs-`error_code` behavior, exception details, or the older experimental filesystem TS surface.</p>
    <p class="card-links"><a href="/cpp/filesystem/filesystem_error/">filesystem_error</a> · <a href="/cpp/error/error_code/">error_code</a> · <a href="/cpp/experimental/fs/">filesystem TS</a></p>
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
        <td>Represent or manipulate a path string structurally</td>
        <td><a href="/cpp/filesystem/path/">path</a></td>
        <td><code>std::filesystem::path</code> is the core value type for joining, splitting, and converting paths.</td>
      </tr>
      <tr>
        <td>Resolve paths against the environment or normalize them</td>
        <td><a href="/cpp/filesystem/absolute/">absolute</a>, <a href="/cpp/filesystem/canonical/">canonical</a>, <a href="/cpp/filesystem/relative/">relative</a></td>
        <td>These are the main route when path meaning depends on current location, symlinks, or normalization rules.</td>
      </tr>
      <tr>
        <td>Iterate through a directory tree</td>
        <td><a href="/cpp/filesystem/directory_iterator/">directory_iterator</a>, <a href="/cpp/filesystem/recursive_directory_iterator/">recursive_directory_iterator</a></td>
        <td>The iterator family is the traversal route rather than ad hoc OS-specific enumeration code.</td>
      </tr>
      <tr>
        <td>Ask what a path points to or whether it exists</td>
        <td><a href="/cpp/filesystem/status/">status</a>, <a href="/cpp/filesystem/exists/">exists</a>, <a href="/cpp/filesystem/is_regular_file/">is_regular_file</a></td>
        <td>Status/query functions separate file-type inspection from mutating operations.</td>
      </tr>
      <tr>
        <td>Create directories, copy files, move things, or delete them</td>
        <td><a href="/cpp/filesystem/create_directory/">create_directory</a>, <a href="/cpp/filesystem/copy/">copy</a>, <a href="/cpp/filesystem/rename/">rename</a>, <a href="/cpp/filesystem/remove/">remove</a></td>
        <td>These are the primary side-effecting operations in the library.</td>
      </tr>
      <tr>
        <td>Inspect permissions, free space, or file modification times</td>
        <td><a href="/cpp/filesystem/permissions/">permissions</a>, <a href="/cpp/filesystem/space/">space</a>, <a href="/cpp/filesystem/last_write_time/">last_write_time</a></td>
        <td>This route is for metadata/resource questions rather than path structure or traversal.</td>
      </tr>
      <tr>
        <td>Handle failures or bridge to older implementations</td>
        <td><a href="/cpp/filesystem/filesystem_error/">filesystem_error</a>, <a href="/cpp/experimental/fs/">experimental/filesystem</a></td>
        <td>Use this route when exception/error-code behavior or TS compatibility is the main issue.</td>
      </tr>
    </tbody>
  </table>
</div>

## Filesystem Families

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
        <td>Path modeling</td>
        <td><a href="/cpp/filesystem/path/">path</a>, <a href="/cpp/filesystem/absolute/">absolute</a>, <a href="/cpp/filesystem/canonical/">canonical</a>, <a href="/cpp/filesystem/relative/">relative</a></td>
        <td>Structural pathname manipulation, normalization, and conversion.</td>
      </tr>
      <tr>
        <td>Traversal</td>
        <td><a href="/cpp/filesystem/directory_iterator/">directory_iterator</a>, <a href="/cpp/filesystem/recursive_directory_iterator/">recursive_directory_iterator</a>, <a href="/cpp/filesystem/directory_entry/">directory_entry</a></td>
        <td>Walking directory trees and reusing cached entry metadata while iterating.</td>
      </tr>
      <tr>
        <td>Status and classification</td>
        <td><a href="/cpp/filesystem/status/">status</a>, <a href="/cpp/filesystem/exists/">exists</a>, <a href="/cpp/filesystem/is_regular_file/">is_regular_file</a>, <a href="/cpp/filesystem/file_status/">file_status</a></td>
        <td>Checking what a path refers to and what state/permissions it carries.</td>
      </tr>
      <tr>
        <td>Mutating operations</td>
        <td><a href="/cpp/filesystem/create_directory/">create_directory</a>, <a href="/cpp/filesystem/copy/">copy</a>, <a href="/cpp/filesystem/rename/">rename</a>, <a href="/cpp/filesystem/remove/">remove</a></td>
        <td>Creating, moving, copying, and deleting filesystem objects.</td>
      </tr>
      <tr>
        <td>Metadata and environment</td>
        <td><a href="/cpp/filesystem/permissions/">permissions</a>, <a href="/cpp/filesystem/space/">space</a>, <a href="/cpp/filesystem/last_write_time/">last_write_time</a>, <a href="/cpp/filesystem/current_path/">current_path</a>, <a href="/cpp/filesystem/temp_directory_path/">temp_directory_path</a></td>
        <td>Permissions, timestamps, free space, and environment-relative directory context.</td>
      </tr>
      <tr>
        <td>Error handling and compatibility</td>
        <td><a href="/cpp/filesystem/filesystem_error/">filesystem_error</a>, <a href="/cpp/error/error_code/">error_code</a>, <a href="/cpp/experimental/fs/">filesystem TS</a></td>
        <td>Choosing between throwing/error-code overloads and interoperating with pre-standard surfaces.</td>
      </tr>
    </tbody>
  </table>
</div>

## Path And Operation Model

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Choose it when</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pure path value</td>
        <td>You need to build, compare, or normalize a path without necessarily touching the filesystem.</td>
        <td><a href="/cpp/filesystem/path/">path</a>, <a href="/cpp/filesystem/absolute/">absolute</a>, <a href="/cpp/filesystem/relative/">relative</a></td>
      </tr>
      <tr>
        <td>Path with cached entry metadata</td>
        <td>You are iterating and want path-plus-status information packaged together.</td>
        <td><a href="/cpp/filesystem/directory_entry/">directory_entry</a>, <a href="/cpp/filesystem/directory_iterator/">directory_iterator</a></td>
      </tr>
      <tr>
        <td>Status query</td>
        <td>You need to ask what exists, what type it is, or which permissions/status bits apply.</td>
        <td><a href="/cpp/filesystem/status/">status</a>, <a href="/cpp/filesystem/exists/">exists</a>, <a href="/cpp/filesystem/file_status/">file_status</a></td>
      </tr>
      <tr>
        <td>Mutation with side effects</td>
        <td>You are creating, deleting, copying, moving, or changing filesystem state.</td>
        <td><a href="/cpp/filesystem/create_directory/">create_directory</a>, <a href="/cpp/filesystem/copy/">copy</a>, <a href="/cpp/filesystem/rename/">rename</a>, <a href="/cpp/filesystem/remove/">remove</a></td>
      </tr>
      <tr>
        <td>Metadata/resource inspection</td>
        <td>You need permissions, timestamps, space accounting, or process-relative filesystem context.</td>
        <td><a href="/cpp/filesystem/permissions/">permissions</a>, <a href="/cpp/filesystem/space/">space</a>, <a href="/cpp/filesystem/last_write_time/">last_write_time</a>, <a href="/cpp/filesystem/current_path/">current_path</a></td>
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
        <td><span class="overview-chip">Filesystem TS</span></td>
        <td>The experimental TS was the precursor route; older code and toolchains may still point to <a href="/cpp/experimental/fs/">experimental/filesystem</a>.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><code>std::filesystem</code> became the standard route for paths, traversal, status queries, and file operations.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">Post-C++17 toolchains</span></td>
        <td>The main practical change was implementation maturity: older compilers often needed extra linker flags, while modern ones generally ship the library as part of the default standard library experience.</td>
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
        <td>Path values, traversal, status queries, file operations, permissions, space, timestamps, and filesystem-specific errors.</td>
        <td><a href="/cpp/io/">I/O</a> for stream/file-handle APIs, <a href="/cpp/string/">Strings</a> for text/encoding abstractions, and <a href="/cpp/error/">Diagnostics</a> for the broader exception/error-code model beyond filesystem-specific operations.</td>
      </tr>
      <tr>
        <td>The standard C++ filesystem surface.</td>
        <td><a href="/cpp/experimental/fs/">filesystem TS</a> when you are working with older pre-standard code or documentation.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/path/">I need to reason about a path</a></h3>
    <p class="card-desc">Start from path when the problem is joining, splitting, normalizing, or converting a pathname rather than touching the disk.</p>
    <p class="card-links"><a href="/cpp/filesystem/path/">path</a> · <a href="/cpp/filesystem/canonical/">canonical</a> · <a href="/cpp/filesystem/relative/">relative</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/directory_iterator/">I need to walk directories</a></h3>
    <p class="card-desc">Use the iterator route for directory enumeration, tree walking, and entry-by-entry inspection.</p>
    <p class="card-links"><a href="/cpp/filesystem/directory_iterator/">directory_iterator</a> · <a href="/cpp/filesystem/recursive_directory_iterator/">recursive_directory_iterator</a> · <a href="/cpp/filesystem/directory_entry/">directory_entry</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/copy/">I need to change the filesystem</a></h3>
    <p class="card-desc">Use the operations route when you are creating, copying, renaming, removing, or otherwise mutating filesystem state.</p>
    <p class="card-links"><a href="/cpp/filesystem/create_directory/">create_directory</a> · <a href="/cpp/filesystem/copy/">copy</a> · <a href="/cpp/filesystem/remove/">remove</a></p>
  </section>
</div>
