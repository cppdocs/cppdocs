---
title: "std::experimental::ranges::projected"
source_path: "cpp/experimental/ranges/iterator/projected"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The class template projected bundles a [Readable](/cpp/experimental/ranges/iterator/readable/) type I and a function Proj into a new Readable type whose reference type is the result of applying Proj to the reference type of I. It exists solely to ease constraint specification, and so its operator*() may not be actually defined.

## Declarations
```cpp
template< Readable I, IndirectRegularUnaryInvocable<I> Proj >
struct projected {
using value_type =
std::remove_cv_t<std::remove_reference_t<ranges::indirect_result_of_t<Proj&(I)>>>;
ranges::indirect_result_of_t<Proj&(I)> operator*() const;
};
template< WeaklyIncrementable I, class Proj >
struct difference_type<projected<I, Proj>> {
using type = ranges::difference_type_t<I>;
};
```
_(ranges TS)_
