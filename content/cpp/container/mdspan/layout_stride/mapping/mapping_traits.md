---
title: "std::layout_stride::mapping<Extents>::mapping-traits"
source_path: "cpp/container/mdspan/layout_stride/mapping/mapping_traits"
category: "container"
since: "C++23"
---

Every instance of every specialization of mapping is unique and strided.

## Declarations
```cpp
static constexpr bool is_unique() noexcept;
```
_(since C++23)_

```cpp
constexpr bool is_exhaustive() const noexcept;
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
