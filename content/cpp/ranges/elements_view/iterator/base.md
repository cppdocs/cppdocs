---
title: "std::ranges::elements_view<V,F>::iterator<Const>::base"
source_path: "cpp/ranges/elements_view/iterator/base"
category: "ranges"
since: "C++20"
---

Returns the underlying iterator.

## Declarations
```cpp
constexpr const ranges::iterator_t<Base>& base() const & noexcept;
```
_(since C++20)_

```cpp
constexpr ranges::iterator_t<Base> base() &&;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3533 | C++20 | the const& overload of base returns a copy of the underlying iterator | returns a reference |
| LWG 3593 | C++20 | the const& overload of base might not be noexcept | made noexcept |
