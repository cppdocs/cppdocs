---
title: "std::move_iterator<Iter>::move_iterator"
source_path: "cpp/iterator/move_iterator/move_iterator"
category: "iterator"
---

Constructs a new move_iterator.

## Declarations
```cpp
move_iterator();
```
_(constexpr since C++17)_

```cpp
explicit move_iterator( iterator_type x );
```
_(constexpr since C++17)_

```cpp
template< class U >
move_iterator( const move_iterator<U>& other );
```
_(constexpr since C++17)_

## Parameters
- `x`: iterator to adapt
- `other`: iterator adaptor to copy

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3435 | C++20 | overload (3) was not constrained | constrained |

## See also
- [operator=](/cpp/iterator/move_iterator/operator/)
- [make_move_iterator](/cpp/iterator/make_move_iterator/)
- [std::move_iterator](/cpp/iterator/move_iterator/)
