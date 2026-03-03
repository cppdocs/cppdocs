---
title: "std::subtract_with_carry_engine"
source_path: "cpp/numeric/random/subtract_with_carry_engine"
header: "<random>"
category: "numeric"
since: "C++11"
---

Is a random number engine that uses [subtract with carry](https://en.wikipedia.org/wiki/subtract_with_carry) algorithm.

## Declarations
```cpp
template<
class UIntType,
std::size_t w, std::size_t s, std::size_t r
> class subtract_with_carry_engine;
```
_(since C++11)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3809 | C++11 | default_seed might not berepresentable with result_type | changed its type tostd::uint_least32_t |
