---
title: "std::experimental::source_location::source_location"
source_path: "cpp/experimental/source_location/source_location"
category: "experimental"
---

1) Constructs a source_location object whose values are implementation defined.

## Declarations
```cpp
constexpr source_location() noexcept;
```
_(library fundamentals TS v2)_

```cpp
source_location( const source_location& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

```cpp
source_location( source_location&& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

## Parameters
- `other`: another source_location to copy from

## See also
- [current](/cpp/experimental/source_location/current/)
