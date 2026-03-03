---
title: "std::move_sentinel<S>::move_sentinel"
source_path: "cpp/iterator/move_sentinel/move_sentinel"
category: "iterator"
since: "C++20"
---

Constructs a new sentinel adaptor.

## Declarations
```cpp
constexpr move_sentinel();
```
_(since C++20)_

```cpp
constexpr explicit move_sentinel( S x );
```
_(since C++20)_

```cpp
template< class S2 >
requires std::convertible_to<const S2&, S>
constexpr move_sentinel( const std::move_sentinel<S2>& other );
```
_(since C++20)_

## Parameters
- `x`: sentinel to adapt
- `other`: sentinel adaptor to copy

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/iterator/move_iterator/move_iterator/)
