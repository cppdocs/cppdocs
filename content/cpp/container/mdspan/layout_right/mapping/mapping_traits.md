---
title: "std::layout_right::mapping<Extents>::mapping-traits"
source_path: "cpp/container/mdspan/layout_right/mapping/mapping_traits"
category: "container"
since: "C++23"
---

Every instance of every specialization of mapping is unique, exhaustive, and strided. See [LayoutMapping](/cpp/named_req/layoutmapping/) for the semantics of these predicate mapping traits.

## Declarations
```cpp
static constexpr bool is_unique() noexcept;
```
_(since C++23)_

```cpp
static constexpr bool is_exhaustive() noexcept;
```
_(since C++23)_

```cpp
static constexpr bool is_strided() noexcept;
```
_(since C++23)_

```cpp
static constexpr bool is_always_unique() noexcept;
```
_(since C++23)_

```cpp
static constexpr bool is_always_exhaustive() noexcept;
```
_(since C++23)_

```cpp
static constexpr bool is_always_strided() noexcept;
```
_(since C++23)_

## Example
This section is incompleteReason: no example
