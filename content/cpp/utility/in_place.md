---
title: "std::in_place, std::in_place_type, std::in_place_index, std::in_place_t, std::in_place_type_t, std::in_place_index_t"
source_path: "cpp/utility/in_place"
header: "<utility>"
category: "utility"
since: "C++17"
---

1,3,5) The type/type templates std::in_place_t, std::in_place_type_t and std::in_place_index_t can be used in the constructor's parameter list to match the intended tag.

## Declarations
```cpp
struct in_place_t { explicit in_place_t() = default; };
```
_(since C++17)_

```cpp
inline constexpr std::in_place_t in_place {};
```
_(since C++17)_

```cpp
template< class T >
struct in_place_type_t { explicit in_place_type_t() = default; };
```
_(since C++17)_

```cpp
template< class T >
constexpr std::in_place_type_t<T> in_place_type {};
```
_(since C++17)_

```cpp
template< std::size_t I >
struct in_place_index_t { explicit in_place_index_t() = default; };
```
_(since C++17)_

```cpp
template< std::size_t I >
constexpr std::in_place_index_t<I> in_place_index {};
```
_(since C++17)_

## See also
- [sorted_uniquesorted_unique_t](/cpp/container/sorted_unique/)
- [sorted_equivalentsorted_equivalent_t](/cpp/container/sorted_equivalent/)
