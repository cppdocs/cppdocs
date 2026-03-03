---
title: "std::ranges::view, std::ranges::enable_view, std::ranges::view_base"
source_path: "cpp/ranges/view"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) The view concept specifies the requirements of a [range](/cpp/ranges/range/) type that has suitable semantic properties for use in constructing range adaptor pipelines.

## Declarations
```cpp
template<class T>
concept view = ranges::range<T> && std::movable<T> && ranges::enable_view<T>;
```
_(since C++20)_

```cpp
template<class T>
constexpr bool enable_view =
std::derived_from<T, view_base> || /*is-derived-from-view-interface*/<T>;
```
_(since C++20)_

```cpp
struct view_base { };
```
_(since C++20)_

## Notes
Examples of view types are:

A copyable container such as [std::vector](/cpp/container/vector/)<[std::string](/cpp/string/basic_string/)> generally does not meet the semantic requirements of view since copying the container copies all of the elements, which cannot be done in constant time.

While views were originally described as cheaply copyable and non-owning ranges, a type is not required to be copyable or non-owning for it to model view. However, it must still be cheap to copy (if it is copyable), move, assign, and destroy, so that [range adaptors](/cpp/ranges/#Range_adaptors) will not have unexpected complexity.

By default, a type modeling [movable](/cpp/concepts/movable/) and [range](/cpp/ranges/range/) is considered a view if it is publicly and unambiguously derived from view_base, or exactly one specialization of std::ranges::view_interface.

## Example
```cpp
#include <ranges>
 
struct ArchetypalView : std::ranges::view_interface<ArchetypalView>
{
    int* begin();
    int* end();
};
 
static_assert(std::ranges::view<ArchetypalView>);
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2325R3 | C++20 | view required default_initializable | does not require |
| LWG 3549 | C++20 | enable_view did not detect inheritance from view_interface | detects |
| P2415R2 | C++20 | the restriction on the time complexity of destruction was too strict | relaxed |
