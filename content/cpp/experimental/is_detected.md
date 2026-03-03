---
title: "std::experimental::is_detected, std::experimental::detected_t, std::experimental::detected_or"
source_path: "cpp/experimental/is_detected"
header: "<experimental/type_traits>"
category: "experimental"
---

The alias template detected_or is an alias for an unspecified class type with two public member typedefs value_t and type, which are defined as follows:

## Declarations
```cpp
template< template<class...> class Op, class... Args >
using is_detected = /* see below */;
```
_(library fundamentals TS v2)_

```cpp
template< template<class...> class Op, class... Args >
using detected_t = /* see below */;
```
_(library fundamentals TS v2)_

```cpp
template< class Default, template<class...> class Op, class... Args >
using detected_or = /* see below */;
```
_(library fundamentals TS v2)_

## Example
```cpp
#include <cstddef>
#include <experimental/type_traits>
 
template<class T>
using copy_assign_t = decltype(std::declval<T&>() = std::declval<const T&>());
 
struct Meow {};
struct Purr { void operator=(const Purr&) = delete; };
 
static_assert(std::experimental::is_detected<copy_assign_t, Meow>::value,
              "Meow should be copy assignable!");
static_assert(!std::experimental::is_detected_v<copy_assign_t, Purr>,
              "Purr should not be copy assignable!");
static_assert(std::experimental::is_detected_exact_v<Meow&, copy_assign_t, Meow>,
              "Copy assignment of Meow should return Meow&!");
 
template<class T>
using diff_t = typename T::difference_type;
 
template<class Ptr>
using difference_type = std::experimental::detected_or_t<std::ptrdiff_t, diff_t, Ptr>;
 
struct Woof { using difference_type = int; };
struct Bark {};
 
static_assert(std::is_same<difference_type<Woof>, int>::value,
              "Woof's difference_type should be int!");
static_assert(std::is_same<difference_type<Bark>, std::ptrdiff_t>::value,
              "Bark's difference_type should be ptrdiff_t!");
 
int main() {}
```
