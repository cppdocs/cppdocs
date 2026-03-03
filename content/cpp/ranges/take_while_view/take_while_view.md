---
title: "std::ranges::take_while_view<V,Pred>::take_while_view"
source_path: "cpp/ranges/take_while_view/take_while_view"
category: "ranges"
since: "C++20"
---

Constructs a take_while_view.

## Declarations
```cpp
take_while_view() requires std::default_initializable<V> &&
std::default_initializable<Pred> = default;
```
_(since C++20)_

```cpp
constexpr explicit take_while_view( V base, Pred pred );
```
_(since C++20)_

## Parameters
- `base`: underlying view
- `fun`: predicate

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
| P2325R3 | C++20 | if Pred is not default_initializable, the default constructorconstructs a take_while_view which does not contain an Pred | the take_while_view is alsonot default_initializable |
