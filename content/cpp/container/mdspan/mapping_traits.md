---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::mapping-traits"
source_path: "cpp/container/mdspan/mapping_traits"
category: "container"
since: "C++23"
---

Checks if (1-3) the underlying layout mapping [map_](/cpp/container/mdspan/#Data_member) or (4-6) its type mapping_type models the semantics of [LayoutMapping](/cpp/named_req/layoutmapping/)'s predicate mapping traits.

## Declarations
```cpp
constexpr bool is_unique() const;
```
_(since C++23)_

```cpp
constexpr bool is_exhaustive() const;
```
_(since C++23)_

```cpp
constexpr bool is_strided() const;
```
_(since C++23)_

```cpp
static constexpr bool is_always_unique();
```
_(since C++23)_

```cpp
static constexpr bool is_always_exhaustive();
```
_(since C++23)_

```cpp
static constexpr bool is_always_strided();
```
_(since C++23)_

## Return value
See above.

## Example
This section is incompleteReason: no example
